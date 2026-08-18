import { realizacje } from "@/content/site";
import { SlotZdjecia } from "@/components/SlotZdjecia";

const sawizualizacje = realizacje.some(
  (pozycja) => pozycja.src !== null && pozycja.wizualizacja,
);
const saPrawdziweZdjecia = realizacje.some(
  (pozycja) => pozycja.src !== null && !pozycja.wizualizacja,
);
const brakZdjec = realizacje.every((pozycja) => pozycja.src === null);

/**
 * Nagłówek przełącza się sam: dopóki w galerii wiszą obrazy generowane,
 * sekcja nie może nazywać się „Realizacje" — to byłoby twierdzenie
 * o wykonanych pracach, którego te obrazy nie potwierdzają.
 */
const tytul =
  sawizualizacje && !saPrawdziweZdjecia ? "Wizualizacje" : "Realizacje";

export function Realizacje() {
  return (
    <section id="realizacje">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="etykieta text-grafit/45">Galeria</p>
          <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
            {tytul}
          </h2>
        </div>

        {sawizualizacje && (
          <p className="mt-7 max-w-2xl border-l-2 border-mosiadz bg-szron/50 px-5 py-4 text-[0.95rem] leading-relaxed text-grafit/75">
            <strong className="font-medium text-grafit">
              Zdjęcia poglądowe.
            </strong>{" "}
            Obrazy oznaczone jako wizualizacje pokazują typowe formy i rodzaje
            wykończenia kamienia — nie są fotografiami konkretnych pomników
            wykonanych w tej pracowni. Kształt, materiał i liternictwo ustalamy
            indywidualnie przed wyceną.
          </p>
        )}

        {brakZdjec && (
          <p className="mt-7 max-w-2xl border-l-2 border-mosiadz bg-szron/50 px-5 py-4 text-[0.95rem] leading-relaxed text-grafit/75">
            Galeria czeka na zdjęcia. Wgraj pliki do{" "}
            <code className="font-utyl text-[0.85em] text-mosiadz">
              /public/realizacje/
            </code>{" "}
            i wpisz ścieżki w{" "}
            <code className="font-utyl text-[0.85em] text-mosiadz">
              src/content/site.ts
            </code>
            .
          </p>
        )}

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {realizacje.map((pozycja) => (
            <SlotZdjecia
              key={pozycja.id}
              src={pozycja.src}
              alt={pozycja.alt}
              podpis={pozycja.podpis}
              detal={
                pozycja.wizualizacja
                  ? `${pozycja.detal} · wizualizacja`
                  : pozycja.detal
              }
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={
                pozycja.format === "pion" ? "min-h-[26rem]" : "min-h-[18rem]"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
