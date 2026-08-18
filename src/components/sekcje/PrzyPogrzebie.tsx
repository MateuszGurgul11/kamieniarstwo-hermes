import { przyPogrzebie } from "@/content/site";

/**
 * Jedyna sekcja z numeracją na całej stronie.
 * Tu kolejność jest realną informacją — te trzy rzeczy dzieją się po sobie
 * i rodzina musi wiedzieć, w którym momencie nas przy grobie nie ma.
 */
export function PrzyPogrzebie() {
  return (
    <section id="pogrzeb" className="lico-piasek">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="etykieta text-grafit/45">Przy pogrzebie</p>
          <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
            Gdy pochówek jest w istniejącym grobie
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-grafit/75">
            Nagrobek trzeba rozebrać przed pogrzebem i złożyć po nim. Robimy
            obie te rzeczy, więc rodzina nie musi szukać dwóch firm ani
            pilnować terminów.
          </p>
        </div>

        <ol className="mt-12 grid gap-px bg-grafit/15 sm:grid-cols-3">
          {przyPogrzebie.map((etap) => (
            <li
              key={etap.krok}
              className="lico-piasek flex flex-col px-6 py-8 sm:px-7"
            >
              <span className="font-utyl text-sm text-mosiadz">
                {etap.krok}
              </span>
              <h3 className="naglowek-dzialu mt-4 text-2xl text-grafit">
                {etap.nazwa}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-grafit/75">
                {etap.opis}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 max-w-2xl text-[0.95rem] leading-relaxed text-grafit/65">
          Prowadzimy też ekshumacje — razem z rozbiórką i odtworzeniem
          nagrobka. W tej sprawie najlepiej zadzwonić; formalności i termin
          omawiamy indywidualnie.
        </p>
      </div>
    </section>
  );
}
