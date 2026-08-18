import { firma, zdjeciaSekcji } from "@/content/site";
import { SlotZdjecia } from "@/components/SlotZdjecia";

export function Rzemioslo() {
  return (
    <section id="rzemioslo" className="plyta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SlotZdjecia
            src={zdjeciaSekcji.rzemioslo.src}
            alt={zdjeciaSekcji.rzemioslo.alt}
            podpis={zdjeciaSekcji.rzemioslo.podpis}
            detal={zdjeciaSekcji.rzemioslo.detal}
            naPlycie
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="min-h-[20rem] lg:min-h-[26rem]"
          />

          <div className="lg:pt-4">
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
              </p>
              <p className="text-szron/90">
                Pracujemy tak od {firma.miesiacZalozenia}a {firma.rokZalozenia} roku.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
