/**
 * Bazowy adres strony — potrzebny do metadanych, sitemapy i robots.txt.
 *
 * Kolejność źródeł:
 * 1. NEXT_PUBLIC_SITE_URL — ustaw po podpięciu własnej domeny.
 * 2. VERCEL_PROJECT_PRODUCTION_URL — Vercel wstawia sam (bez schematu).
 * 3. localhost — tryb deweloperski.
 */

function bezUkosnika(url: string) {
  return url.replace(/\/$/, "");
}

export const adresStrony = bezUkosnika(
  process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
);

/**
 * Wyszukiwarki wpuszczamy dopiero na docelową domenę.
 *
 * Dzięki temu tymczasowy adres *.vercel.app nie trafia do Google i nie
 * konkuruje potem z właściwą domeną o tę samą treść. Ustawienie
 * NEXT_PUBLIC_SITE_URL w Vercelu włącza indeksowanie samo.
 */
export const indeksowanie = Boolean(process.env.NEXT_PUBLIC_SITE_URL);
