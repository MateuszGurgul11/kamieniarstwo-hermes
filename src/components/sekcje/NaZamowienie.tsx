import { naZamowienie, naZamowienieZdjecia } from "@/content/site";
import { SlotZdjecia } from "@/components/SlotZdjecia";
import { Odslon } from "@/components/Odslon";

export function NaZamowienie() {
  return (
    <section id="zamowienie">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Odslon>
            <p className="etykieta text-grafit/45">Poza cmentarzem</p>
            <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
              Kamień do domu
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-grafit/70">
              Ta sama piła i ten sam warsztat. Na zamówienie robimy elementy
              wykończeniowe z kamienia — mierzymy na miejscu, tniemy u siebie,
              montujemy u klienta.
            </p>

            <ul className="mt-10 divide-y divide-grafit/15 border-y border-grafit/15">
              {naZamowienie.map((pozycja) => (
                <li key={pozycja.nazwa} className="py-5">
                  <h3 className="font-display text-xl text-grafit">
                    {pozycja.nazwa}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-grafit/70">
                    {pozycja.opis}
                  </p>
                </li>
              ))}
            </ul>
          </Odslon>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-8">
            {naZamowienieZdjecia.map((pozycja, indeks) => (
              <Odslon key={pozycja.id} opoznienie={120 + indeks * 130}>
                <SlotZdjecia
                  src={pozycja.src}
                  alt={pozycja.alt}
                  podpis={pozycja.podpis}
                  detal={pozycja.detal}
                  blurDataURL={pozycja.blurDataURL}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="aspect-[4/3]"
                />
              </Odslon>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
