import { zakresy } from "@/content/site";

export function Zakres() {
  return (
    <section id="zakres" className="lico-piasek">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="etykieta text-grafit/45">Czym się zajmujemy</p>

        <div className="mt-10 grid gap-px bg-grafit/15 sm:grid-cols-3">
          {zakresy.map((zakres) => (
            <div
              key={zakres.id}
              className="lico-piasek px-6 py-8 sm:px-7 sm:py-9"
            >
              <h2 className="naglowek-dzialu text-2xl text-grafit">
                {zakres.nazwa}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-grafit/75">
                {zakres.opis}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
