/**
 * ==========================================================
 * <AssistenteFlutuante /> - botão e painel do assistente
 * ==========================================================
 *
 * Botão fixo no canto inferior direito, em todas as páginas. Abre um
 * painel com o `<AssistenteIA />` (tela cheia no celular).
 *
 * O painel só é montado na primeira abertura (o chunk do chat é lazy) e
 * depois fica montado, apenas oculto: a conversa — inclusive uma resposta
 * ainda em streaming — sobrevive a fechar o painel e a trocar de página.
 */

import { Sparkles, X } from 'lucide-react';
import { lazy, Suspense, useEffect, useRef, useState, type JSX } from 'react';
import { usePreferencias } from '@/hooks/usePreferencias';

const AssistenteIA = lazy(() => import('./AssistenteIA').then((m) => ({ default: m.AssistenteIA })));

interface AssistenteFlutuanteProps {
  readonly aberto: boolean;
  readonly onAlternar: (aberto: boolean) => void;
}

export function AssistenteFlutuante({ aberto, onAlternar }: AssistenteFlutuanteProps): JSX.Element {
  const tf = usePreferencias().t.chat.flutuante;
  const [montado, setMontado] = useState(aberto);
  const refPainel = useRef<HTMLDivElement>(null);
  const refBotao = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (aberto) setMontado(true);
  }, [aberto]);

  // Ao abrir, o foco vai para o painel; ao fechar, volta ao botão (se estava lá dentro).
  useEffect(() => {
    if (aberto) {
      refPainel.current?.focus();
    } else if (refPainel.current?.contains(document.activeElement) || document.activeElement === document.body) {
      refBotao.current?.focus();
    }
  }, [aberto]);

  // Escape fecha o painel.
  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (evento: KeyboardEvent): void => {
      if (evento.key === 'Escape' && !evento.defaultPrevented) onAlternar(false);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [aberto, onAlternar]);

  return (
    <>
      <div
        ref={refPainel}
        id="painel-assistente"
        role="dialog"
        aria-labelledby="titulo-assistente"
        tabIndex={-1}
        className={[
          '@container fixed inset-0 z-50 flex flex-col border-line bg-elevated outline-none',
          'sm:inset-auto sm:right-5 sm:bottom-24 sm:h-[min(46rem,calc(100dvh-11rem))] sm:w-[min(30rem,calc(100vw-2.5rem))] sm:border',
          'shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)] transition-[opacity,transform,visibility] duration-300 ease-scientata',
          aberto ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-3 opacity-0',
        ].join(' ')}
      >
        {montado && (
          <Suspense fallback={<div className="flex-1" aria-busy="true" />}>
            <AssistenteIA onFechar={() => onAlternar(false)} />
          </Suspense>
        )}
      </div>

      <button
        ref={refBotao}
        type="button"
        onClick={() => onAlternar(!aberto)}
        aria-expanded={aberto}
        aria-controls="painel-assistente"
        aria-label={aberto ? tf.fechar : tf.abrir}
        title={aberto ? tf.fechar : tf.abrir}
        className={[
          'botao-primario group fixed right-5 bottom-5 z-50 size-14 rounded-full p-0',
          'shadow-[0_14px_40px_-10px_color-mix(in_srgb,var(--signal-fill)_75%,transparent)]',
          // No celular o painel ocupa a tela e tem o próprio botão de fechar.
          aberto ? 'max-sm:hidden' : '',
        ].join(' ')}
      >
        {aberto ? (
          <X aria-hidden="true" className="size-6" />
        ) : (
          <Sparkles
            aria-hidden="true"
            className="size-6 transition-transform duration-500 ease-scientata group-hover:rotate-12 group-hover:scale-110"
          />
        )}
      </button>
    </>
  );
}
