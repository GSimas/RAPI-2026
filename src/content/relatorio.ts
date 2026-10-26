/**
 * ==========================================================
 * Conteudo editorial da aba "Relatorio e Analises"
 * ==========================================================
 *
 * Transposicao das Secoes 7 (Consideracoes e Recomendacoes), 8
 * (Consideracoes Finais) e 9 (Agradecimentos e Creditos) do RAPI 2025-2026.
 *
 * O conteudo e modelado como dado estruturado — e nao como blocos de HTML,
 * como no `st.markdown(..., unsafe_allow_html=True)` original — para que a
 * renderizacao seja modular, acessivel e livre de injecao de HTML.
 *
 * Trechos entre `**asteriscos**` viram negrito via `<TextoRico />`.
 */

/** Um tema analisado dentro de uma dimensao (ex.: "7.1.1 Tema: Água"). */
export interface TemaAnalise {
  readonly id: string;
  /** Numeracao hierarquica do relatorio (ex.: `7.1.1`). */
  readonly numero: string;
  readonly titulo: string;
  /** Alineas da analise: `a)`, `b)`, `c)`... ou paragrafos corridos. */
  readonly paragrafos: readonly string[];
}

/** Um bloco expansivel correspondente a uma dimensao (7.1, 7.2, 7.3). */
export interface BlocoDimensaoRelatorio {
  readonly id: string;
  readonly icone: string;
  readonly numero: string;
  readonly titulo: string;
  readonly corAcento: string;
  readonly temas: readonly TemaAnalise[];
}

/** Texto de abertura da Secao 7. */
export const INTRODUCAO_CONSIDERACOES: string =
  'Tomando por base os valores levantados em 2026, sobre os indicadores do ano-base 2025, e a série histórica de cada indicador, seguem abaixo as considerações e recomendações referentes aos itens que mais necessitam de atenção e providências. Deixamos de registrar comentários sobre a maioria dos aspectos em “verde” por já terem alcançado níveis satisfatórios.';

/** Secao 7: consideracoes e recomendacoes por dimensao. */
export const BLOCOS_CONSIDERACOES: readonly BlocoDimensaoRelatorio[] = [
  {
    id: 'ambiental',
    icone: '🌍',
    numero: '7.1',
    titulo: 'Dimensão Ambiental',
    corAcento: '#2ca02c',
    temas: [
      {
        id: 'agua',
        numero: '7.1.1',
        titulo: 'Tema: Água — 06 indicadores',
        paragrafos: [
          'a) O abastecimento de água potável subiu de 93% em 2024 para **99% em 2025**, reconduzindo o município à faixa verde, e o fornecimento manteve-se contínuo em 24 horas/dia.',
          'b) O consumo per capita foi de 176,84 litros/pessoa/dia, ainda na faixa verde, mas a média dos últimos cinco anos subiu para 174,3 litros — bem acima dos 110 litros recomendados pela ONU.',
          'c) A qualidade da água (97,20% de testes conformes) voltou à faixa verde, muito perto do limite de 97%. Persiste a ausência de monitoramento sistemático de metais pesados e agrotóxicos.',
          'd) A água não contabilizada (perdas na distribuição) ficou em **37,29%**, estagnada na faixa amarela e próxima da média de dez anos (37,45%).',
          'e) Florianópolis produziu 24,4 milhões de m³ e importou 36,2 milhões de m³ de outros sistemas: cerca de **60% da água consumida depende de fontes externas**, o que reforça a urgência de reduzir perdas e proteger os mananciais locais. O indicador de saldo hídrico segue sem atualização.',
        ],
      },
      {
        id: 'saneamento',
        numero: '7.1.2',
        titulo: 'Tema: Saneamento e Drenagem — 03 indicadores',
        paragrafos: [
          'a) A ligação de moradias ao sistema de esgoto caiu para **58,71%** em 2025 e entrou oficialmente na faixa vermelha (< 60%), após 68,89% em 2021 e 64,81% em 2024. Enquanto 99% da cidade recebe água tratada, apenas cerca de 59% tem coleta oficial de esgoto.',
          'b) O tratamento de águas residuais subiu para 66,82% (faixa verde): o sistema trata melhor o que coleta, mas a base de coleta encolhe em relação à população.',
          'c) As moradias afetadas por inundações intensas permaneceram em 15%, profundamente na faixa vermelha (limite de 3%), contra 0,50% em 2018. O percentual da LOA para mitigação de riscos de desastres caiu ao menor nível da série (0,058%). Recomenda-se transparência e engajamento permanente entre concessionária, governo e sociedade civil.',
        ],
      },
      {
        id: 'residuos',
        numero: '7.1.3',
        titulo: 'Tema: Gestão de Resíduos Sólidos — 08 indicadores',
        paragrafos: [
          'a) A geração subiu para **1,33 kg/hab/dia** (faixa amarela), quase o dobro da média global de 0,74 kg do Banco Mundial. O total recolhido saltou de 259.313 para 285.199 toneladas, quase 10% em um ano.',
          'b) Os resíduos depositados em aterros caíram para 84,5%, menor índice recente, mas ainda na faixa vermelha. A vida útil remanescente do aterro é de 23 anos (verde).',
          'c) A compostagem atingiu **14,04%** (12,93% em 2024 e 4,56% em 2023), a estratégia de valorização mais bem-sucedida do município. A reciclagem subiu para 12%, ainda na faixa vermelha, e o tratamento em usinas de energia segue em 0%.',
        ],
      },
      {
        id: 'energia',
        numero: '7.1.4',
        titulo: 'Tema: Energia — 06 indicadores',
        paragrafos: [
          'a) Os domicílios com ligação autorizada à energia elétrica caíram para **89,64%**, saindo da faixa de excelência (99,93% em 2023) — sinal de ocupações ainda não integradas formalmente à rede.',
          'b) As interrupções de energia ficaram em 5,55 h/domicílio/ano (verde) e a iluminação pública LED chegou a 78% (45.488 luminárias).',
          'c) A energia de fontes renováveis passou a **93,44%**, contra 3,88% no relatório anterior. A mudança drástica sugere revisão de metodologia ou da origem da informação pela CELESC.',
          'd) As conexões residenciais de gás canalizado subiram para 920,87 por 100 mil habitantes, ainda na faixa vermelha, e o consumo residencial de eletricidade caiu para 3.082,44 kWh (verde).',
        ],
      },
      {
        id: 'qualidade-ar',
        numero: '7.1.5',
        titulo: 'Tema: Qualidade do Ar — 02 indicadores',
        paragrafos: [
          'O índice de qualidade do ar repete o valor 20 desde 2022, e a última medição efetivamente nova é de 2014. O material particulado (MP10) segue sem dados. Recomenda-se que a FLORAM estabeleça parcerias com universidades para uma rede de sensores distribuída pelo território.',
        ],
      },
      {
        id: 'clima',
        numero: '7.1.6',
        titulo: 'Tema: Mitigação das Mudanças Climáticas — 01 indicador',
        paragrafos: [
          'As emissões de GEE per capita seguem sem dados para 2024 e 2025. A planilha registra 1,8 t (2022) e 2,1 t (2023), na faixa verde, mas sem série contínua não é possível confirmar a trajetória. Sugere-se institucionalizar o Inventário anual de Emissões de GEE.',
        ],
      },
      {
        id: 'ruido',
        numero: '7.1.7',
        titulo: 'Tema: Ruído — 01 indicador',
        paragrafos: [
          'O ruído nos 5 principais pontos críticos continua sem dados: desde 2019 a estrutura de medição nunca foi implementada. Recomenda-se a instalação de sensores permanentes ou campanhas de medição em parceria com instituições de pesquisa.',
        ],
      },
      {
        id: 'vulnerabilidade',
        numero: '7.1.8',
        titulo: 'Tema: Vulnerabilidade Frente aos Desastres Naturais — 05 indicadores',
        paragrafos: [
          'Os mapas de risco voltaram a 95% (verde) e os planos de contingência e de alerta precoce mantiveram 100%. Em contraste, o orçamento da LOA para mitigação de riscos caiu para apenas **0,058%** — menos da metade de 2022 (0,125%).',
          'O dado preliminar de 7.922 edificações em áreas de risco agrega também os riscos médio e baixo (R2 e R1); a série histórica monitora apenas R3 e R4 (2.100 unidades em 2024). O balanço é de “vulnerabilidade por inação financeira”: bons mapas e planos, mas sem recursos para obras preventivas.',
        ],
      },
    ],
  },
  {
    id: 'urbana',
    icone: '🏙️',
    numero: '7.2',
    titulo: 'Dimensão Urbana',
    corAcento: '#1f77b4',
    temas: [
      {
        id: 'uso-solo',
        numero: '7.2.1',
        titulo: 'Tema: Uso do Solo e Ordenamento Territorial — 10 indicadores',
        paragrafos: [
          'A malha urbana cresceu 0,89% em 2025 (verde) e a densidade ficou em 4.959,95 hab/km² (2024). Já o crescimento demográfico estimado de **1,9%** segue na faixa vermelha, com cerca de 587,5 mil habitantes em 2025, pressionando infraestrutura e serviços.',
          'O déficit habitacional foi recalculado para 1,91% (5.446 famílias) com o Cadastro Habitacional On-line, mas um estudo municipal de 2023 aponta 15% das famílias do CadÚnico sem moradia adequada.',
          'Apenas 8% das Unidades de Conservação municipais têm plano de manejo (uma em 11 UCs), e um novo indicador mostra 0,42% da área das UCs com conflitos de uso. A oficialização dos 56 bairros (Decreto 29.142/2026) e o Plano Diretor são ferramentas essenciais, mas a conclusão dos planos de manejo é urgente.',
        ],
      },
      {
        id: 'desigualdade',
        numero: '7.2.2',
        titulo: 'Tema: Desigualdade Urbana — 06 indicadores',
        paragrafos: [
          'A população abaixo da linha de pobreza ficou em 6,40% (verde, sob o novo parâmetro alinhado à Meta 1.2 do ODS 1), contra 23,1% na média nacional. O Coeficiente de Gini alcançou condição satisfatória pela primeira vez.',
          'A remuneração média dos trabalhadores formais chegou a **R$ 8.054,74** em 2025 (R$ 5.459,98 em 2021), confortavelmente na faixa verde.',
        ],
      },
      {
        id: 'mobilidade',
        numero: '7.2.3',
        titulo: 'Tema: Mobilidade e Transporte — 23 indicadores',
        paragrafos: [
          'A capacidade ofertada caiu de 16,1 para 15,2 milhões de lugares/mês, enquanto os passageiros subiram de 4,93 para 5,10 milhões/mês. O custo operacional saltou de R$ 5,84 para **R$ 6,54**, e a velocidade média segue estagnada em 23 km/h, com motorização recorde (0,723 veículo/habitante) e 0% de vias exclusivas.',
          'As hospitalizações por acidentes de trânsito subiram para 20,77 por 100 mil habitantes, entrando na faixa amarela. A frota elétrica permanece em 0% desde 2019. Vias dedicadas e renovação tecnológica da frota são as prioridades.',
        ],
      },
      {
        id: 'negocios',
        numero: '7.2.4',
        titulo: 'Tema: Ambiente de Negócios — 01 indicador',
        paragrafos: [
          'O tempo para abrir uma empresa chegou à marca histórica de **4 horas** em 2025 (5 horas em 2024 e 21 dias em 2020), muito abaixo do limite de 12 dias da faixa verde.',
        ],
      },
      {
        id: 'tecido-produtivo',
        numero: '7.2.5',
        titulo: 'Tema: Tecido Produtivo — 08 indicadores',
        paragrafos: [
          'a) O aeroporto superou **5 milhões de passageiros** (5.167.090) e movimentou 12.634 toneladas de carga, com alta na carga internacional e recuo na doméstica.',
          'b) A rodoviária registrou 121.399 viagens e 2,14 milhões de passageiros em 2025, abaixo do recorde de 2024 (2,5 milhões).',
          'c) O PIB per capita chegou a R$ 58.059,37 em 2023 (US$ 11.565,61, faixa verde). A defasagem de dois a três anos dos dados do IBGE ainda impede avaliar o impacto imediato das políticas. O crescimento do PIB da cidade foi de 10% em 2023, de volta à faixa verde.',
        ],
      },
      {
        id: 'mercado-laboral',
        numero: '7.2.6',
        titulo: 'Tema: Mercado Laboral — 03 indicadores',
        paragrafos: [
          'O desemprego caiu para **3,60%**, patamar histórico de excelência. Mas a ocupação formal recuou para 63,30% (faixa vermelha), e o emprego informal segue sem dados — a redução do desemprego pode estar apoiada em ocupações com menor proteção social.',
        ],
      },
      {
        id: 'educacao',
        numero: '7.2.7',
        titulo: 'Tema: Educação — 18 indicadores',
        paragrafos: [
          'Com o novo concurso público, os professores efetivos saltaram de 39,30% para **60%** e os temporários (ACTs) caíram de 60,7% para 40% (verde). A qualificação docente se manteve: 65% com especialização, 12% com mestrado e 4,8% com doutorado.',
          'O IDEB segue em 5,8 nos anos iniciais (amarelo) e 4,6 nos finais (vermelho), e o desempenho satisfatório em provas padronizadas está estagnado em 14% (Matemática) e 31% (Leitura).',
          'A educação especial atingiu 2.268 matriculados. As escolas que cumprem a Lei de Acessibilidade caíram de 96,21% para **54%** (vermelho), reflexo de um critério mais rigoroso do TAC com o MPSC. O analfabetismo ficou em 1,4% (amarelo) e o tempo integral em 32,5% (verde).',
        ],
      },
      {
        id: 'seguranca',
        numero: '7.2.8',
        titulo: 'Tema: Segurança — 10 indicadores',
        paragrafos: [
          'A taxa de homicídios caiu de 5,40 para **4,10** por 100 mil habitantes e os latrocínios seguem zerados. Roubos caíram mais de 26% (de 153 para 112,2) e roubos de veículos chegaram ao menor nível da série (9,9). Furtos, furtos de veículos e crimes contra a propriedade também recuaram.',
          'A violência doméstica contra mulheres somou 5.383 ocorrências, estável em torno de 5,3 mil. Os CONSEGs ativos saltaram de 8 para 15, destaque para a governança participativa.',
        ],
      },
      {
        id: 'saude',
        numero: '7.2.9',
        titulo: 'Tema: Saúde — 51 indicadores',
        paragrafos: [
          'O alerta do ciclo é a taxa de internação por condições sensíveis à atenção primária (ICSAP), que saltou para **709,75** por 100 mil habitantes e entrou na faixa vermelha. As internações por causas externas (818,06) também estão no vermelho.',
          'A infraestrutura segue em excelência: 1.012,80 médicos, 406,82 leitos hospitalares e 55,66 leitos de UTI por 100 mil habitantes, e 103,26% de cobertura da Saúde da Família.',
          'A cobertura de saúde suplementar caiu para 35,60%: cerca de 64,4% da população depende exclusivamente do SUS. Hipertensão (24,75%), obesidade (20,81%) e diabetes (7,87%) estão na faixa vermelha (dados de 2024).',
          'Destaque positivo: as coberturas vacinais ao nascer se recuperaram — **BCG 96,84%**, Hepatite B 95,25% e Meningo C 95,25% — todas de volta à faixa verde.',
        ],
      },
      {
        id: 'capital-humano',
        numero: '7.2.10',
        titulo: 'Tema: Capital Humano — 02 indicadores',
        paragrafos: [
          'O investimento em cultura per capita recuou para R$ 32,05 em 2025, ainda na faixa verde, após o pico de R$ 58,22 em 2023. Em relação à receita corrente líquida, caiu de 0,89% para 0,50%, de volta ao patamar do início da década — é preciso perenizar os recursos do setor.',
        ],
      },
      {
        id: 'tecido-empresarial',
        numero: '7.2.11',
        titulo: 'Tema: Tecido Empresarial — 16 indicadores',
        paragrafos: [
          'As empresas ativas chegaram a 25.626 e as exportações atingiram o recorde de **US$ 93,63 milhões** (crescimento de 43,53%).',
          'Em 2025, os indicadores setoriais passaram a excluir Simples Nacional e MEI, com recálculo da série. A tecnologia cresceu 12,78% em faturamento e responde por 26,61% dos impostos; a saúde privada cresceu 17,01% (14,23% dos impostos); bares e restaurantes cresceram 15,31%. A ocupação hoteleira caiu para 41,40%, e os dados de emprego setorial seguem ausentes.',
        ],
      },
    ],
  },
  {
    id: 'fiscal',
    icone: '⚖️',
    numero: '7.3',
    titulo: 'Dimensão Fiscal e Governança',
    corAcento: '#ff7f0e',
    temas: [
      {
        id: 'visao-fiscal',
        numero: '7.3',
        titulo: 'Visão geral — 28 indicadores',
        paragrafos: [
          'A Dívida Consolidada Líquida ficou em **17,36% da RCL**, e Florianópolis obteve nota A+ na Capacidade de Pagamento (CAPAG) do Tesouro Nacional — a 7ª capital menos endividada do Brasil e a menos endividada do Sul. ISS (+16,39%) e IPTU (+11,58%) cresceram acima do IPCA (4,26%).',
          'Sinais de alerta: absenteísmo com atestado em 10,99% das horas contratadas, terceirizados em 3,94% da receita total líquida, lacunas de informação sobre licitações e dificuldade de cobrança da dívida ativa.',
        ],
      },
      {
        id: 'gestao-moderna',
        numero: '7.3.1',
        titulo: 'Tema: Gestão Pública Moderna — 09 indicadores',
        paragrafos: [
          'O gasto com pessoal sobre o gasto total caiu para **42,06%**, o melhor resultado da série (verde). As horas-falta sem atestado são baixas (0,69%), mas as com atestado atingiram 10,99% (vermelho).',
          'A Secretaria de Licitações não enviou dados de 2025. As compras por inexigibilidade (contratação direta) subiram de 2,27% em 2020 para 20,55% em 2024, o que exige maior rigor na motivação das contratações diretas.',
        ],
      },
      {
        id: 'transparencia',
        numero: '7.3.2',
        titulo: 'Tema: Transparência e Auditoria da Gestão Pública — 01 indicador',
        paragrafos: [
          'Sob os critérios do Radar da Transparência Pública (Atricon), o índice avançou para **87,51%** em 2025, mantendo o Selo Ouro de Transparência.',
        ],
      },
      {
        id: 'impostos',
        numero: '7.3.3',
        titulo: 'Tema: Impostos e Autonomia Financeira — 09 indicadores',
        paragrafos: [
          'A receita própria ficou em 47,03% da receita total (amarelo), e as transferências representaram 33,25%. O ISS cresceu 16,39%, o IPTU 11,58% (parte por ajuste contábil) e o ITBI 14,81%.',
          'A dívida ativa recuou 4,07% em 2025, após alta de 105,18% em 2024. A inadimplência do IPTU (18,21%) segue na faixa vermelha, e recomenda-se modernizar as estratégias de cobrança.',
        ],
      },
      {
        id: 'gasto',
        numero: '7.3.4',
        titulo: 'Tema: Gestão do Gasto Público — 05 indicadores',
        paragrafos: [
          'Os gastos correntes absorveram 88,23% do total, e os investimentos ficaram em 11,77% (amarelo). O gasto corrente cresceu 18,21%, muito acima do IPCA. A despesa com pessoal sobre a RCL foi de 44,63%, o melhor resultado histórico, mas os terceirizados alcançaram 3,94% da receita total líquida.',
        ],
      },
      {
        id: 'divida',
        numero: '7.3.5',
        titulo: 'Tema: Gestão da Dívida — 04 indicadores',
        paragrafos: [
          'O serviço da dívida ficou em 4,18% da receita própria (verde) e a dívida recuou **12,12%**, estabilizando a DCL em R$ 657 milhões. As operações de crédito somaram 2,45% da RCL. No 1º trimestre de 2026, a prefeitura quitou R$ 564 milhões em passivos previdenciários patronais acumulados entre 2004 e 2017.',
        ],
      },
    ],
  },
];

/** Secao 8: consideracoes finais. */
export const CONSIDERACOES_FINAIS: readonly string[] = [
  'Nesta 10ª edição do RAPI, os 208 indicadores revelam uma cidade dinâmica e economicamente resiliente, com avanços importantes, mas que ainda convive com desafios estruturais. Em 2025, 76 indicadores ficaram verdes, 29 amarelos e 30 vermelhos — e 45 ficaram cinza, por falta ou inadequação dos dados. Florianópolis precisa avançar também na produção e na transparência das informações.',
  'Na dimensão ambiental, 99% da população tem água, mas as perdas chegam a 37,29% e cerca de 60% da água vem de fontes externas. Apenas cerca de 59% das moradias têm ligação ao esgoto. A geração de resíduos segue elevada, 84,5% vão para aterros, e faltam dados sobre qualidade do ar, emissões e ruído.',
  'Na dimensão urbana, a economia é forte — PIB per capita elevado, mais empresas e exportações recordes —, com desemprego de apenas 3,60%, mas a formalização recuou para 63,30%. A mobilidade é um dos grandes pontos de atenção: mais passageiros, menos oferta, custo maior, 23 km/h de velocidade média e frota elétrica em 0%. A segurança melhorou; na educação, avançaram os efetivos e a educação especial; na saúde, a estrutura é excelente e as vacinas se recuperaram, mas as internações evitáveis cresceram.',
  'Na dimensão fiscal, o cenário é mais equilibrado: DCL em 17,36% da RCL, nota A+ na CAPAG e redução de 12,12% na dívida. Ainda assim, cerca de 88% das despesas são correntes, o investimento ficou em 11,77% e persistem a inadimplência do IPTU, o absenteísmo e as lacunas sobre licitações.',
  'Para esta edição, as fontes revisaram os indicadores desde 2020; por isso, valores e semaforizações de 2020 a 2024 podem diferir das edições anteriores. O RAPI reafirma seu papel como instrumento técnico de acompanhamento da cidade e das diretrizes da AGENDA FLORIPA 2030/40/50, e como ferramenta de diálogo para construir uma Florianópolis mais sustentável, inclusiva e resiliente.',
];

/** Paragrafo de abertura da Secao 9. */
export const AGRADECIMENTOS_INTRO: string =
  'Agradecemos ao Prefeito de Florianópolis, Topázio Neto, seus secretários municipais, gestores e servidores da administração pública, bem como secretarias estaduais, empresas públicas e autarquias por seus esforços e contribuições no fornecimento dos dados solicitados. Registramos um agradecimento especial à Ana Paula Reusing Pacheco, Subsecretária de Ciência, Tecnologia e Inovação, ponto focal desta iniciativa, pelo empenho na articulação junto às fontes municipais.';

/** Uma instituicao do Grupo de Trabalho e seus integrantes. */
export interface InstituicaoGT {
  readonly instituicao: string;
  readonly integrantes: string;
}

/** Grupo de Trabalho de Indicadores (RAPI 2025-2026). */
export const GRUPO_TRABALHO: readonly InstituicaoGT[] = [
  {
    instituicao: 'Associação FloripAmanhã',
    integrantes:
      'Andrea Pessi M Costa, Daniel Araújo, Ivo Sostizzo, Márcia Regina Teschner, Pedro Carlos Rasia, Salomão Mattos Sobrinho',
  },
  {
    instituicao: 'Observatório Social do Brasil (Florianópolis)',
    integrantes: 'João Manuel Dias da Silva, Rafael Novaes',
  },
  {
    instituicao: 'Universidade Federal de Santa Catarina (UFSC)',
    integrantes: 'Clarissa Stefani Teixeira, Hans Michael Van Bellen',
  },
];

/** Nota de licenca de uso do material. */
export const NOTA_LICENCA: string =
  'É permitida a reprodução parcial ou total deste material desde que citada a fonte Rede Ver a Cidade Floripa, 2025-2026. Setembro de 2026.';
