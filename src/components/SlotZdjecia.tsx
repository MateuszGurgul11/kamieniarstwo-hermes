import Image from "next/image";

type Props = {
  /** Ścieżka do pliku w /public. `null` renderuje pusty slot z opisem. */
  src: string | null;
  alt: string;
  podpis?: string;
  detal?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Wariant na ciemnej płycie — placeholder dostaje jaśniejsze lico. */
  naPlycie?: boolean;
};

/**
 * Jedno miejsce na zdjęcie.
 *
 * Dopóki nie ma pliku, pokazuje świadomie pustą płytę z informacją, co ma
 * się tu znaleźć — żeby brak zdjęcia czytał się jako miejsce zarezerwowane,
 * a nie jako zepsuty obrazek.
 */
export function SlotZdjecia({
  src,
  alt,
  podpis,
  detal,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 33vw, 100vw",
  naPlycie = false,
}: Props) {
  return (
    <figure className={`flex flex-col ${className}`}>
      <div className="relative w-full flex-1 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div
            className={`slot-pusty absolute inset-0 flex flex-col justify-end gap-1.5 p-4 ${
              naPlycie ? "opacity-90" : ""
            }`}
          >
            <span className="etykieta text-grafit/40">Miejsce na zdjęcie</span>
            <span className="font-utyl text-[0.7rem] leading-snug text-grafit/55">
              {alt}
            </span>
          </div>
        )}
      </div>

      {(podpis || detal) && (
        <figcaption
          className={`rzaz mt-3 flex items-baseline justify-between gap-3 pt-2 ${
            naPlycie ? "rzaz-jasny" : ""
          }`}
        >
          {podpis && (
            <span
              className={`font-display text-base ${
                naPlycie ? "text-szron" : "text-grafit"
              }`}
            >
              {podpis}
            </span>
          )}
          {detal && (
            <span
              className={`font-utyl text-[0.7rem] ${
                naPlycie ? "text-szron/55" : "text-grafit/50"
              }`}
            >
              {detal}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}
