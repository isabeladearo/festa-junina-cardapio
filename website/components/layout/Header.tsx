import Image from "next/image";
import { SiteContainer } from "@/components/layout/SiteContainer";
import type { EventInfo } from "@/types/menu";

interface HeaderProps {
  evento: EventInfo;
}

export function Header({ evento }: HeaderProps) {
  return (
    <header className="relative w-full overflow-hidden pb-4 pt-2 text-center sm:pb-8 sm:pt-4">
      <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-center">
        <Image
          src="/stickers/bandeirinhas.png"
          alt=""
          width={480}
          height={80}
          className="h-10 w-auto max-w-full object-contain sm:h-16"
          priority
        />
      </div>

      <SiteContainer className="relative mt-8 sm:mt-12">
        <div className="mb-3 flex items-end justify-center gap-1.5 sm:mb-6 sm:gap-4">
          <Image
            src="/stickers/balao.png"
            alt=""
            width={72}
            height={96}
            className="h-12 w-auto drop-shadow-md sm:h-20"
          />
          <Image
            src="/stickers/casal-caipira.png"
            alt=""
            width={140}
            height={140}
            className="h-[4.5rem] w-auto drop-shadow-md sm:h-28"
            priority
          />
          <Image
            src="/stickers/fogueira.png"
            alt=""
            width={80}
            height={96}
            className="h-12 w-auto drop-shadow-md sm:h-20"
          />
        </div>

        <div className="header-card paper-card mx-auto max-w-xl px-5 py-6 sm:px-8 sm:py-9">
          <h1 className="header-title">
            <span className="header-title-main">{evento.nome}</span>
            {evento.local ? (
              <span className="header-title-local">{evento.local}</span>
            ) : null}
          </h1>

          <p className="header-subtitle">{evento.subtitulo}</p>

          <div className="header-messages">
            {evento.mensagens.map((linha) => (
              <p key={linha}>{linha}</p>
            ))}
          </div>

          <div className="header-event-meta">
            <p>
              <span aria-hidden>📅 </span>
              {evento.data}
            </p>
            <p>
              <span aria-hidden>🕖 </span>
              {evento.horario}
            </p>
          </div>
        </div>
      </SiteContainer>
    </header>
  );
}
