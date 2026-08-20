import { firma, nawigacja } from "@/content/site";

export function Stopka() {
  return (
    <footer className="border-t border-grafit/15">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-display text-xl text-grafit">{firma.nazwa}</p>
            <p className="mt-2 max-w-xs text-base leading-relaxed text-grafit/60">
              {firma.nazwaPelna}. Kamieniarstwo, budowlanka i usługi rozbiórkowe
              od {firma.rokZalozenia} roku.
            </p>
          </div>

          <nav aria-label="Stopka">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5">
              {nawigacja.map((pozycja) => (
                <li key={pozycja.href}>
                  <a
                    href={pozycja.href}
                    className="text-base text-grafit/65 transition-colors hover:text-mosiadz"
                  >
                    {pozycja.etykieta}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="rzaz mt-10 pt-5 font-utyl text-base text-grafit/40">
          © {new Date().getFullYear()} {firma.nazwaPelna}
        </p>
      </div>
    </footer>
  );
}
