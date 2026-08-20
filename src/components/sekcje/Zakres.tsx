import { zakresy } from "@/content/site";
import { Odslon } from "@/components/Odslon";

/**
 * Trzy dziedziny jako trzy płyty oparte obok siebie.
 *
 * Każdy panel jest fizyczną płytą, nie kartą: przy dolnej krawędzi widać
 * jej grubość — wąski pas cienia zamknięty jasną linią, czyli polerowany
 * kant, po którym poznaje się cięty blok. Trzy tony, od grafitu po jasny,
 * rozdzielają trzy rodzaje pracy.
 */
export function Zakres() {
  return (
    <section id="zakres" className="pas-zakresu">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Odslon className="max-w-2xl">
          <p className="etykieta text-grafit/45">Czym się zajmujemy</p>
          <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
            Trzy rodzaje pracy,
            <br />
            jeden warsztat
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-grafit/70">
            Ten sam blok, ta sama piła i te same ręce. Rozdzielamy to na trzy
            części tylko dlatego, że z czym innym przychodzi rodzina po
            pogrzebie, a z czym innym ktoś, kto buduje dom.
          </p>
        </Odslon>

        <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-7">
          {zakresy.map((zakres, indeks) => (
            <Odslon key={zakres.id} opoznienie={indeks * 130} className="h-full">
              <article className={`plyta-zakresu ${zakres.lico}`}>
                <div className="flex items-baseline gap-4">
                  <span className="numer-plyty">{zakres.numer}</span>
                  <span className="kreska-mosiadzu" aria-hidden="true" />
                </div>

                <h3 className="naglowek-dzialu mt-6 text-[1.9rem] leading-tight">
                  {zakres.nazwa}
                </h3>

                <p className="tresc-plyty mt-4 text-base leading-relaxed">
                  {zakres.opis}
                </p>

                <ul className="lista-plyty">
                  {zakres.punkty.map((punkt) => (
                    <li key={punkt}>{punkt}</li>
                  ))}
                </ul>
              </article>
            </Odslon>
          ))}
        </div>
      </div>
    </section>
  );
}
