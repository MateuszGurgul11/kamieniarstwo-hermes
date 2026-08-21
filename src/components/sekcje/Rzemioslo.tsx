import { firma, zdjeciaSekcji, detaleReczne } from "@/content/site";
import { SlotZdjecia } from "@/components/SlotZdjecia";
import { Odslon } from "@/components/Odslon";

export function Rzemioslo() {
  return (
    <section id="rzemioslo" className="plyta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/*
            Kolaż: księga wykuta w granicie, a pod nią — nachodząc na jej
            róg — profilowane płyty. Dwa dowody pracy ręcznej w jednym kadrze.
          */}
          <Odslon className="relative pr-10 pb-16 sm:pr-14">
            <SlotZdjecia
              src={zdjeciaSekcji.rzemioslo.src}
              alt={zdjeciaSekcji.rzemioslo.alt}
              podpis={zdjeciaSekcji.rzemioslo.podpis}
              detal={zdjeciaSekcji.rzemioslo.detal}
              blurDataURL={zdjeciaSekcji.rzemioslo.blurDataURL}
              naPlycie
              sizes="(min-width: 1024px) 38vw, 90vw"
              className="min-h-[20rem] lg:min-h-[26rem]"
            />
            <div className="absolute right-0 bottom-0 w-[52%] border-4 border-grafit shadow-2xl sm:w-[46%]">
              <SlotZdjecia
                src={zdjeciaSekcji.rzemiosloDetal.src}
                alt={zdjeciaSekcji.rzemiosloDetal.alt}
                blurDataURL={zdjeciaSekcji.rzemiosloDetal.blurDataURL}
                naPlycie
                sizes="(min-width: 1024px) 18vw, 45vw"
                className="aspect-[4/3]"
              />
            </div>
          </Odslon>

          <Odslon opoznienie={140} className="lg:pt-4">
            <p className="etykieta text-mosiadz-jasny">Co nas różni</p>
            <h2 className="naglowek-dzialu mt-4 text-4xl text-szron sm:text-5xl">
              Większość zakładów handluje.
              <br />
              My robimy.
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-szron/75">
              <p>
                W tej branży najczęściej kupuje się gotowy wyrób z hurtowni
                i odsprzedaje go rodzinie. My rzadko sięgamy po gotowce.
                Kamień tniemy, szlifujemy i składamy u siebie.
              </p>
              <p>
                To zmienia jedną rzecz, która ma znaczenie przy zamówieniu:
                nie musimy dobierać projektu do tego, co akurat stoi na
                magazynie. Nagrobek może powstać niemal według każdego
                pomysłu — również takiego, który ktoś naszkicował na kartce.
                Serca, zwoje i księgi niżej wyszły spod naszych rąk, nie
                z katalogu.
              </p>
              <p className="text-szron/90">
                Pracujemy tak od {firma.miesiacZalozenia}a {firma.rokZalozenia} roku.
              </p>
            </div>
          </Odslon>
        </div>

        <Odslon className="mt-16">
          <p className="etykieta text-mosiadz-jasny">Detal ręczny</p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-szron/70">
            Każdy z tych elementów jest cięty, rzeźbiony i polerowany u nas.
          </p>
        </Odslon>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {detaleReczne.map((detal, indeks) => (
            <li key={detal.id}>
              <Odslon opoznienie={(indeks % 3) * 90}>
                <SlotZdjecia
                  src={detal.src}
                  alt={detal.alt}
                  podpis={detal.podpis}
                  detal={detal.detal}
                  blurDataURL={detal.blurDataURL}
                  naPlycie
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="aspect-[3/4]"
                />
              </Odslon>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
