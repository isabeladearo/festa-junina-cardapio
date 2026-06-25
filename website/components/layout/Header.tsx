import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import type { EventInfo } from "@/types/menu";

interface HeaderProps {
  evento: EventInfo;
}

export function Header({ evento }: HeaderProps) {
  const tituloCompleto = evento.local
    ? `${evento.nome} ${evento.local}`
    : evento.nome;

  return (
    <header className="relative w-full overflow-hidden pb-2 pt-1 text-center">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <Image
          src="/stickers/bandeirinhas.png"
          alt=""
          width={480}
          height={80}
          className="h-6 w-auto max-w-full object-contain sm:h-8"
          priority
        />
      </div>

      <SiteContainer className="relative mt-5 sm:mt-6">
        <div className="header-card paper-card mx-auto max-w-xl px-3 py-2.5 sm:px-4 sm:py-3">
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
