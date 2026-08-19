import { firma, zdjeciaSekcji } from "@/content/site";
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
                Księga na zdjęciu obok wyszła spod naszych rąk, nie z katalogu.
              </p>
              <p className="text-szron/90">
                Pracujemy tak od {firma.miesiacZalozenia}a {firma.rokZalozenia} roku.
              </p>
            </div>
          </Odslon>
        </div>
      </div>
    </section>
  );
}
