import type { EventInfo as EventInfoData } from "@/types/menu";

interface EventInfoProps {
  evento: EventInfoData;
}

export function EventInfo({ evento }: EventInfoProps) {
  return (
    <section
      className="paper-card mx-auto max-w-2xl px-4 py-5 text-center sm:px-5 sm:py-6"
      aria-labelledby="event-info-title"
    >
      <h2
        id="event-info-title"
        className="font-heading text-xl text-junina-laranja sm:text-2xl"
      >
        Como pedir
      </h2>

      <ol className="mx-auto mt-3 max-w-md space-y-2.5 text-left text-sm leading-relaxed text-junina-kraft sm:mt-4 sm:space-y-3 sm:text-base">
        {evento.passos.map((passo, index) => (
          <li key={passo} className="flex gap-2.5">
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-junina-laranja text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm"
              aria-hidden
            >
              {index + 1}
            </span>
            <span className="pt-0.5">{passo}</span>
          </li>
        ))}
      </ol>

      <p className="junina-divider mt-4 pt-3 text-center text-xs leading-snug text-junina-kraft/85 sm:text-sm">
        {evento.observacao}
      </p>
    </section>
  );
}
