import type { EventInfo as EventInfoData } from "@/types/menu";

interface EventInfoProps {
  evento: EventInfoData;
}

export function EventInfo({ evento }: EventInfoProps) {
  return (
    <section
      className="paper-card mx-auto max-w-2xl px-6 py-8 text-center"
      aria-labelledby="event-info-title"
    >
      <h2
        id="event-info-title"
        className="font-heading text-2xl text-junina-laranja sm:text-3xl"
      >
        Como pedir
      </h2>

      <ol className="mx-auto mt-5 max-w-md space-y-4 text-left text-base leading-relaxed text-junina-kraft sm:text-lg">
        {evento.passos.map((passo, index) => (
          <li key={passo} className="flex gap-3">
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-junina-laranja text-sm font-bold text-white"
              aria-hidden
            >
              {index + 1}
            </span>
            <span className="pt-0.5">{passo}</span>
          </li>
        ))}
      </ol>

      <p className="junina-divider mt-6 pt-4 text-base text-junina-kraft/90 sm:text-lg">
        {evento.observacao}
      </p>
    </section>
  );
}
