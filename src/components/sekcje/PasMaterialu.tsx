import Image from "next/image";
import { zdjeciaSekcji } from "@/content/site";

/**
 * Pełnoekranowa wstęga materiału — surowa płyta z użyleniem.
 *
 * Oddziela ciemną sekcję rzemiosła od galerii i przypomina, od czego
 * zaczyna się każda praca. Zdjęcie płynie powoli w pionie podczas
 * przewijania (scroll-driven animation; bez wsparcia — kadr statyczny).
 */
export function PasMaterialu() {
  const material = zdjeciaSekcji.material;

  return (
    <section aria-label="Materiał — surowa płyta granitu" className="pas-materialu relative overflow-hidden">
      <div className="pas-materialu-kadr absolute -inset-y-[12%] inset-x-0">
        <Image
          src={material.src}
          alt={material.alt}
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={material.blurDataURL}
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex h-[38vh] min-h-[16rem] max-w-6xl items-end px-5 pb-6 sm:px-8">
        <p className="border-l-2 border-mosiadz-jasny bg-grafit-glab/70 px-4 py-2.5 backdrop-blur-sm">
          <span className="font-display text-lg text-szron">{material.podpis}</span>
          <span className="ml-3 font-utyl text-xs tracking-wider text-szron/65 uppercase">
            {material.detal}
          </span>
        </p>
      </div>
    </section>
  );
}
