import { SiteContainer } from "@/components/layout/SiteContainer";
import type { EventInfo } from "@/types/menu";

const BUNTING_FLAG_COUNT = 14;

interface HeaderProps {
  evento: EventInfo;
}

export function Header({ evento }: HeaderProps) {
  const tituloCompleto = evento.local
    ? `${evento.nome} ${evento.local}`
    : evento.nome;

  return (
    <header className="w-full pb-2 pt-2 text-center sm:pt-3">
      <SiteContainer>
        <div className="header-card paper-card mx-auto max-w-xl px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="header-bunting" aria-hidden>
            {Array.from({ length: BUNTING_FLAG_COUNT }, (_, index) => (
              <span key={index} className="header-bunting-flag" />
            ))}
          </div>

          <h1 className="header-title">
            <span className="header-title-main">{tituloCompleto}</span>
          </h1>

          <p className="header-subtitle">{evento.subtitulo}</p>

          <p className="header-event-meta">
            <span aria-hidden>📅 </span>
            {evento.data}
            <span className="header-event-meta-sep" aria-hidden>
              {" "}
              ·{" "}
            </span>
            <span aria-hidden>🕖 </span>
            {evento.horario}
          </p>

          <div className="header-messages">
            {evento.mensagens.map((linha) => (
              <p key={linha}>{linha}</p>
            ))}
          </div>
        </div>
      </SiteContainer>
    </header>
  );
}
