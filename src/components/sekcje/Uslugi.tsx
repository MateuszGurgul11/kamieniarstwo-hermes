import { uslugi } from "@/content/site";
import { Odslon } from "@/components/Odslon";

export function Uslugi() {
  return (
    <section id="uslugi">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Odslon className="max-w-2xl">
          <p className="etykieta text-grafit/45">Usługi</p>
          <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
            Od bloku do postawionego pomnika
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-grafit/70">
            Każdy z tych etapów robimy sami. Nie zlecamy cięcia na zewnątrz
            i nie sprowadzamy gotowych płyt, żeby tylko je złożyć.
          </p>
        </Odslon>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {uslugi.map((usluga, indeks) => (
            <Odslon
              key={usluga.nazwa}
              opoznienie={(indeks % 3) * 90}
              className="kafel flex flex-col p-6"
            >
              <h3 className="font-display text-xl leading-snug text-grafit">
                {usluga.nazwa}
              </h3>
              <p className="mt-3 flex-1 text-lg leading-relaxed text-grafit/70">
                {usluga.opis}
              </p>
              <p className="rzaz mt-5 pt-3 font-utyl text-lg text-grafit/45">
                {usluga.material}
              </p>
            </Odslon>
          ))}
        </ul>
      </div>
    </section>
  );
}
