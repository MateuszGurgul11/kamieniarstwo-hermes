import { Naglowek } from "@/components/Naglowek";
import { Stopka } from "@/components/Stopka";
import { Hero } from "@/components/sekcje/Hero";
import { Zakres } from "@/components/sekcje/Zakres";
import { Uslugi } from "@/components/sekcje/Uslugi";
import { Rzemioslo } from "@/components/sekcje/Rzemioslo";
import { PasMaterialu } from "@/components/sekcje/PasMaterialu";
import { Realizacje } from "@/components/sekcje/Realizacje";
import { PrzyPogrzebie } from "@/components/sekcje/PrzyPogrzebie";
import { NaZamowienie } from "@/components/sekcje/NaZamowienie";
import { Kontakt } from "@/components/sekcje/Kontakt";

export default function Strona() {
  return (
    <>
      <a
        href="#uslugi"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:bg-mosiadz focus:px-4 focus:py-2 focus:text-grafit-glab"
      >
        Przejdź do treści
      </a>

      <Naglowek />

      <main>
        <Hero />
        <Zakres />
        <Uslugi />
        <Rzemioslo />
        <PasMaterialu />
        <Realizacje />
        <PrzyPogrzebie />
        <NaZamowienie />
        <Kontakt />
      </main>

      <Stopka />
    </>
  );
}
