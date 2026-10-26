"""
Gera `dados_rapi_completo.json` a partir da Seção 6 do PDF do RAPI 2026.

    pip install pdfplumber
    python3 scripts/dados/extrair_pdf.py docs/1791562090247rapi-25-26-compactado.pdf

As colunas de tema e subtema do PDF são texto girado em células mescladas,
que o pdfplumber não lê de forma confiável; por isso vêm das faixas de
`id_floripa` abaixo, conferidas contra a Seção 4 do relatório.
"""

import json
import re
import sys

import pdfplumber

ANOS = [str(a) for a in range(2018, 2026)]

# (primeiro id_floripa, último id_floripa, tema, subtema)
SUBTEMAS = [
    (1, 1, 'ÁGUA', 'COBERTURA DE ÁGUA'),
    (2, 2, 'ÁGUA', 'EFICIÊNCIA NO USO DA ÁGUA'),
    (3, 6, 'ÁGUA', 'EFICIÊNCIA NO SERVIÇO DE ABASTECIMENTO DE ÁGUA'),
    (7, 7, 'SANEAMENTO E DRENAGEM', 'COBERTURA DE SANEAMENTO'),
    (8, 8, 'SANEAMENTO E DRENAGEM', 'TRATAMENTO DE ÁGUAS RESIDUÁRIAS'),
    (9, 9, 'SANEAMENTO E DRENAGEM', 'EFETIVIDADE DA DRENAGEM'),
    (10, 10, 'GESTÃO DE RESÍDUOS SÓLIDOS', 'COBERTURA DE COLETA DE RESÍDUOS SÓLIDOS'),
    (11, 12, 'GESTÃO DE RESÍDUOS SÓLIDOS', 'VOLUME DE RESÍDUOS SÓLIDOS'),
    (13, 14, 'GESTÃO DE RESÍDUOS SÓLIDOS', 'DISPOSIÇÃO FINAL DOS RESÍDUOS SÓLIDOS'),
    (15, 17, 'GESTÃO DE RESÍDUOS SÓLIDOS', 'TRATAMENTO DOS RESÍDUOS SÓLIDOS'),
    (18, 20, 'ENERGIA', 'COBERTURA ENERGÉTICA'),
    (21, 22, 'ENERGIA', 'EFICIÊNCIA ENERGÉTICA'),
    (23, 23, 'ENERGIA', 'ENERGIA ALTERNATIVA E RENOVÁVEL'),
    (24, 25, 'QUALIDADE DO AR', 'QUALIDADE DO AR E CONCENTRAÇÃO DE CONTAMINANTES'),
    (26, 26, 'MITIGAÇÃO DA MUDANÇA CLIMÁTICA', 'EMISSÕES TOTAIS DE GEE'),
    (27, 27, 'RUÍDO', 'CONTROLE DE RUÍDOS'),
    (28, 31, 'VULNERABILIDADE FRENTE A DESASTRES NATURAIS',
     'CAPACIDADE DE ADAPTAÇÃO À MUDANÇA CLIMÁTICA E A EVENTOS NATURAIS EXTREMOS'),
    (32, 32, 'VULNERABILIDADE FRENTE A DESASTRES NATURAIS', 'SENSIBILIDADE A DESASTRES NATURAIS'),
    (33, 36, 'USO DO SOLO / ORDENAMENTO TERRITORIAL', 'DENSIDADE'),
    (37, 41, 'USO DO SOLO / ORDENAMENTO TERRITORIAL', 'ÁREAS VERDES E DE RECREAÇÃO'),
    (42, 42, 'USO DO SOLO / ORDENAMENTO TERRITORIAL', 'PLANEJAMENTO DO USO DO SOLO'),
    (43, 43, 'DESIGUALDADE URBANA', 'POBREZA'),
    (44, 46, 'DESIGUALDADE URBANA', 'SEGREGAÇÃO SOCIOESPACIAL'),
    (47, 48, 'DESIGUALDADE URBANA', 'DESIGUALDADE DE RENDA'),
    (49, 63, 'MOBILIDADE / TRANSPORTE', 'INFRAESTRUTURA DE TRANSPORTE EQUILIBRADA'),
    (64, 66, 'MOBILIDADE / TRANSPORTE', 'TRANSPORTE LIMPO'),
    (67, 68, 'MOBILIDADE / TRANSPORTE', 'TRANSPORTE SEGURO'),
    (69, 70, 'MOBILIDADE / TRANSPORTE', 'MENOS CONGESTIONAMENTO'),
    (71, 71, 'MOBILIDADE / TRANSPORTE', 'TRANSPORTE ECONÔMICO'),
    (72, 72, 'AMBIENTE DE NEGÓCIOS', 'REGULAÇÃO DE NEGÓCIOS E INVESTIMENTOS'),
    (73, 77, 'TECIDO PRODUTIVO', 'GESTÃO ESTRATÉGICA DA INFRAESTRUTURA'),
    (78, 80, 'TECIDO PRODUTIVO', 'CRESCIMENTO PRODUTIVO'),
    (81, 81, 'MERCADO LABORAL', 'DESEMPREGO'),
    (82, 82, 'MERCADO LABORAL', 'EMPREGO FORMAL'),
    (83, 83, 'MERCADO LABORAL', 'EMPREGO INFORMAL'),
    (84, 100, 'EDUCAÇÃO', 'QUALIDADE DO ENSINO'),
    (101, 101, 'EDUCAÇÃO', 'ENSINO SUPERIOR'),
    (102, 110, 'SEGURANÇA', 'VIOLÊNCIA'),
    (111, 111, 'SEGURANÇA', 'ESTRUTURAS DE SEGURANÇA'),
    (112, 132, 'SAÚDE', 'NÍVEL DE SAÚDE'),
    (133, 162, 'SAÚDE', 'OFERTA DE SERVIÇOS DE SAÚDE'),
    (163, 164, 'CAPITAL HUMANO', 'CULTURA'),
    (165, 166, 'TECIDO EMPRESARIAL', 'INTERNACIONALIZAÇÃO'),
    (167, 180, 'TECIDO EMPRESARIAL', 'DESENVOLVIMENTO EMPRESARIAL'),
    (181, 189, 'GESTÃO PÚBLICA MODERNA', 'PROCESSOS MODERNOS DE GESTÃO PÚBLICA DO ORÇAMENTO MUNICIPAL'),
    (190, 190, 'TRANSPARÊNCIA', 'TRANSPARÊNCIA E AUDITORIA DA GESTÃO PÚBLICA'),
    (191, 198, 'IMPOSTOS E AUTONOMIA FINANCEIRA', 'RECEITAS E IMPOSTOS MUNICIPAIS'),
    (199, 199, 'IMPOSTOS E AUTONOMIA FINANCEIRA', 'GESTÃO DE COBRANÇAS'),
    (200, 204, 'GESTÃO DO GASTO PÚBLICO', 'QUALIDADE DO GASTO PÚBLICO'),
    (205, 206, 'GESTÃO ADEQUADA DA DÍVIDA', 'SUSTENTABILIDADE DA DÍVIDA'),
    (207, 208, 'GESTÃO ADEQUADA DA DÍVIDA', 'LEI DE RESPONSABILIDADE FISCAL'),
]


# Palavras que o PDF partiu no meio por falta de largura da célula.
PALAVRAS_PARTIDAS = {
    'semaforizaçã o': 'semaforização',
    'unidade s': 'unidades',
    'reassentamento s': 'reassentamentos',
    'munici pio': 'municipio',
}


def texto(celula):
    """Une as linhas de uma célula num texto só."""
    if celula is None:
        return None
    s = re.sub(r'\s+', ' ', celula).strip()
    for partida, inteira in PALAVRAS_PARTIDAS.items():
        s = s.replace(partida, inteira)
    # URLs quebradas em várias linhas: remove os espaços internos.
    s = re.sub(r'https?://[^()]*?(?=\)|$)', lambda m: m.group(0).replace(' ', ''), s)
    return s or None


def tema_de(id_floripa):
    for a, b, tema, subtema in SUBTEMAS:
        if a <= id_floripa <= b:
            return tema, subtema
    raise ValueError(f'id_floripa {id_floripa} fora das faixas de tema')


def main(caminho_pdf, saida):
    linhas = []
    with pdfplumber.open(caminho_pdf) as pdf:
        for pagina in pdf.pages:
            for tabela in pagina.extract_tables():
                linhas += [r for r in tabela if len(r) == 21]

    registros = []
    for r in linhas[1:]:  # a primeira é o cabeçalho
        if not (r[6] or '').strip().isdigit():
            # Continuação de célula (URL longa que transbordou de página).
            for i, ano in enumerate(ANOS):
                extra = texto(r[13 + i])
                if extra and registros and registros[-1]['dados_anuais'][ano]:
                    registros[-1]['dados_anuais'][ano] += extra
            continue

        verde, amarelo, vermelho = texto(r[10]), texto(r[11]), texto(r[12])
        if r[11] is None and r[12] is None:
            # Faixa única mesclada nas três colunas.
            faixas = {'geral': verde} if verde else {}
        else:
            faixas = {k: v for k, v in (('verde', verde), ('amarelo', amarelo), ('vermelho', vermelho)) if v}

        id_floripa = int(r[6])
        tema, subtema = tema_de(id_floripa)
        sem_espaco = lambda v: v.replace(' ', '') if v else None
        registros.append({
            'tema': tema,
            'subtema': subtema,
            'id_ces': sem_espaco(texto(r[4])),
            'id_nova_ordem': sem_espaco(texto(r[5])),
            'id_floripa': str(id_floripa),
            'ods': sem_espaco(texto(r[7])),
            'orgao_responsavel': texto(r[8]),
            'indicador': texto(r[9]),
            'faixas_semaforizacao': faixas,
            'dados_anuais': {ano: texto(r[13 + i]) for i, ano in enumerate(ANOS)},
        })

    ids = [int(r['id_floripa']) for r in registros]
    assert ids == list(range(1, 209)), 'esperados os ids 1..208 em ordem'
    with open(saida, 'w', encoding='utf-8') as f:
        json.dump(registros, f, ensure_ascii=False, indent=1)
        f.write('\n')
    print(f'{len(registros)} indicadores -> {saida}')


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else 'dados_rapi_completo.json')
