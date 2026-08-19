import { realizacje } from "@/content/site";
import { Galeria } from "@/components/Galeria";
import { Odslon } from "@/components/Odslon";

export function Realizacje() {
  return (
    <section id="realizacje">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <Odslon className="max-w-2xl">
          <p className="etykieta text-grafit/45">Galeria</p>
          <h2 className="naglowek-dzialu mt-4 text-4xl text-grafit sm:text-5xl">
            Realizacje
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-grafit/70">
            Fotografie prac wykonanych w tej pracowni — od klasycznych form
            po projekty indywidualne. Każdą można powiększyć.
          </p>
        </Odslon>

        <Galeria prace={realizacje} />
      </div>
    </section>
  );
}
