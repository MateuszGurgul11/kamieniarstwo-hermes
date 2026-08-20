import { firma, nawigacja } from "@/content/site";

export function Naglowek() {
  return (
    <header className="sticky top-0 z-50 border-b border-grafit/12 bg-kamien/85 backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:gap-6 sm:px-8 sm:py-0 sm:h-[4.25rem]">
        <a
          href="#gora"
          className="group min-w-0 shrink"
          aria-label={`${firma.nazwaPelna} — początek strony`}
        >
          <span className="font-display text-lg leading-tight tracking-tight text-grafit sm:text-xl">
            {firma.nazwaPelna}
          </span>
        </a>

        <nav aria-label="Główna" className="shrink-0">
          <ul className="hidden items-center gap-7 lg:flex">
            {nawigacja.map((pozycja) => (
              <li key={pozycja.href}>
                <a
                  href={pozycja.href}
                  className="lacze-nawigacji text-base text-grafit/75 hover:text-grafit"
                >
                  {pozycja.etykieta}
                </a>
              </li>
            ))}
          </ul>

          {/* Na wąskim ekranie zostaje jedno łącze — to, po które ktoś tu przyszedł. */}
          <a
            href="#kontakt"
            className="etykieta text-mosiadz lg:hidden"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}
