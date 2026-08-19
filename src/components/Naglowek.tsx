import { firma, nawigacja } from "@/content/site";

export function Naglowek() {
  return (
    <header className="lico-marmur belka-naglowka sticky top-0 z-50 border-b border-grafit/12 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#gora"
          className="group flex items-baseline gap-2.5"
          aria-label={`${firma.nazwa} — początek strony`}
        >
          <span className="font-display text-xl tracking-tight text-grafit">
            {firma.nazwa}
          </span>
          <span className="etykieta hidden text-grafit/40 sm:inline">
            od {firma.rokZalozenia}
          </span>
        </a>

        <nav aria-label="Główna">
          <ul className="hidden items-center gap-7 lg:flex">
            {nawigacja.map((pozycja) => (
              <li key={pozycja.href}>
                <a
                  href={pozycja.href}
                  className="lacze-nawigacji text-[0.9rem] text-grafit/75 hover:text-grafit"
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
