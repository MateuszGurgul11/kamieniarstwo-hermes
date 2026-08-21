import { firma, zdjeciaSekcji } from "@/content/site";
import { SlotZdjecia } from "@/components/SlotZdjecia";

export function Hero() {
  return (
    <section id="gora" className="plyta">
      {/* Sygnatura: pas światła sunący po licu polerowanej płyty. */}
      <div className="polysk" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28 sm:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-14">
          <div className="kaskada">
            <p className="etykieta text-mosiadz-jasny">
              Pracownia kamieniarska · działamy nieprzerwanie od {firma.rokZalozenia}
            </p>

            <h1 className="naglowek-dzialu mt-7 text-[2.6rem] leading-[1.03] text-szron sm:text-6xl lg:text-[4.2rem]">
              Nagrobek powstaje tutaj,
              <br />
              <span className="text-mosiadz-jasny">nie w hurtowni.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-szron/75">
              Pracownia Bogusława Krzyśki. Tniemy kamień, budujemy i stawiamy
              nagrobki, a przy pogrzebie rozbieramy je i składamy z powrotem.
              Większość prac wykonujemy własnoręcznie — dlatego pomnik może
              powstać niemal według każdego projektu.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href="#realizacje"
                className="bg-mosiadz px-6 py-3 font-body text-lg font-medium text-grafit-glab transition-colors hover:bg-mosiadz-jasny"
              >
                Zobacz realizacje
              </a>
              <a
                href="#kontakt"
                className="border border-szron/25 px-6 py-3 font-body text-lg text-szron transition-colors hover:border-mosiadz hover:text-mosiadz-jasny"
              >
                Napisz do nas
              </a>
            </div>

            <dl className="rzaz-jasny mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 pt-6 sm:grid-cols-3">
              {[
                ["Doświadczenie", `${firma.lata} lat przy kamieniu`],
                ["Obróbka", "we własnym warsztacie"],
                ["Materiał", "granit · piaskowiec · marmur · lastryko"],
              ].map(([klucz, wartosc]) => (
                <div key={klucz}>
                  <dt className="etykieta text-szron/40">{klucz}</dt>
                  <dd className="mt-1.5 text-lg leading-snug text-szron/80">
                    {wartosc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-zdjecie">
            <SlotZdjecia
              src={zdjeciaSekcji.hero.src}
              alt={zdjeciaSekcji.hero.alt}
              podpis={zdjeciaSekcji.hero.podpis}
              detal={zdjeciaSekcji.hero.detal}
              blurDataURL={zdjeciaSekcji.hero.blurDataURL}
              naPlycie
              preload
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="min-h-[22rem] lg:min-h-[30rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
