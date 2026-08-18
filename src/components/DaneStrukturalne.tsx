import { firma, kontakt, uslugi } from "@/content/site";
import { adresStrony } from "@/lib/adres";

/**
 * JSON-LD dla wyszukiwarek (wizytówka lokalnej firmy).
 *
 * Pola z `src/content/site.ts`, które nie są jeszcze uzupełnione, po prostu
 * nie trafiają do wyniku — Google woli brak danych niż dane wymyślone.
 */
export function DaneStrukturalne() {
  const dane: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: firma.nazwaPelna,
    alternateName: firma.nazwa,
    description:
      "Pracownia kamieniarska. Nagrobki na wymiar, renowacje, rozbiórki i składanie przy pogrzebie, ekshumacje, blaty i parapety z kamienia.",
    url: adresStrony,
    image: `${adresStrony}/realizacje/blok-polerowany.png`,
    foundingDate: String(firma.rokZalozenia),
    founder: { "@type": "Person", name: firma.wlasciciel },
    areaServed: { "@type": "Country", name: "Polska" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Usługi kamieniarskie",
      itemListElement: uslugi.map((usluga) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: usluga.nazwa },
      })),
    },
  };

  if (kontakt.telefon) dane.telephone = kontakt.telefon;
  if (kontakt.email) dane.email = kontakt.email;
  if (kontakt.nip) dane.vatID = kontakt.nip;

  if (kontakt.ulica || kontakt.miasto) {
    dane.address = {
      "@type": "PostalAddress",
      addressCountry: "PL",
      ...(kontakt.ulica ? { streetAddress: kontakt.ulica } : {}),
      ...(kontakt.miasto ? { addressLocality: kontakt.miasto } : {}),
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dane) }}
    />
  );
}
