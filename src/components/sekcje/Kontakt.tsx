import { firma, kontakt } from "@/content/site";

/**
 * Brief nie zawierał żadnych danych kontaktowych.
 *
 * Nic tu nie jest zmyślane — puste pola renderują widoczny znacznik
 * "do uzupełnienia", żeby strona nie mogła pojechać na produkcję
 * z wymyślonym numerem telefonu.
 */

function Pole({
  etykieta,
  wartosc,
  href,
  opisBraku,
}: {
  etykieta: string;
  wartosc: string | null;
  href?: string | null;
  opisBraku: string;
}) {
  return (
    <div className="rzaz-jasny pt-4">
      <p className="etykieta text-szron/40">{etykieta}</p>
      {wartosc ? (
        href ? (
          <a
            href={href}
            className="lacze-mosiadz mt-2 block font-display text-2xl text-mosiadz-jasny underline decoration-mosiadz/40 sm:text-3xl"
          >
            {wartosc}
          </a>
        ) : (
          <p className="mt-2 font-display text-2xl text-szron sm:text-3xl">
            {wartosc}
          </p>
        )
      ) : (
        <p className="mt-2 font-utyl text-sm leading-snug text-szron/45">
          <span className="mr-2 inline-block border border-mosiadz/50 px-1.5 py-0.5 text-[0.65rem] tracking-wider text-mosiadz-jasny">
            DO UZUPEŁNIENIA
          </span>
          <span className="mt-2 block">{opisBraku}</span>
        </p>
      )}
    </div>
  );
}

export function Kontakt() {
  return (
    <section id="kontakt" className="plyta">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="etykieta text-mosiadz-jasny">Kontakt</p>
            <h2 className="naglowek-dzialu mt-4 text-4xl text-szron sm:text-5xl">
              Porozmawiajmy o tym,
              <br />
              co ma powstać
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-szron/75">
              Przy nagrobku najlepiej zacząć od rozmowy — wymiary grobu, rodzaj
              kamienia i napisy ustalamy przed wyceną. Jeśli sprawa dotyczy
              pogrzebu w istniejącym grobie, prosimy o telefon; termin rozbiórki
              trzeba dopasować do ceremonii.
            </p>

            <p className="mt-8 text-sm leading-relaxed text-szron/50">
              {firma.nazwaPelna}
            </p>
          </div>

          <div className="space-y-7">
            <Pole
              etykieta="Telefon"
              wartosc={kontakt.telefon}
              href={kontakt.telefonHref}
              opisBraku="Numer nie był podany w briefie — wpisz go w src/content/site.ts"
            />
            <Pole
              etykieta="E-mail"
              wartosc={kontakt.email}
              href={kontakt.email ? `mailto:${kontakt.email}` : null}
              opisBraku="Adres e-mail do uzupełnienia"
            />
            <Pole
              etykieta="Warsztat"
              wartosc={
                kontakt.ulica && kontakt.miasto
                  ? `${kontakt.ulica}, ${kontakt.miasto}`
                  : null
              }
              opisBraku="Adres warsztatu do uzupełnienia"
            />
            <Pole
              etykieta="Godziny"
              wartosc={kontakt.godziny}
              opisBraku="Godziny otwarcia do uzupełnienia"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
