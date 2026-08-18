/**
 * Jedyne źródło treści strony.
 *
 * UWAGA: pola oznaczone `DO_UZUPELNIENIA` nie były podane w briefie.
 * Nie zostały zmyślone — trzeba wpisać prawdziwe dane przed publikacją.
 */

export const DO_UZUPELNIENIA = null;

export const firma = {
  nazwa: "Hermes",
  nazwaPelna: "Bogusław Krzyśko Hermes PPHU",
  wlasciciel: "Bogusław Krzyśko",
  rokZalozenia: 1996,
  miesiacZalozenia: "listopad",
  lata: new Date().getFullYear() - 1996,
} as const;

/** Brief nie zawierał danych kontaktowych ani adresu. */
export const kontakt = {
  telefon: DO_UZUPELNIENIA as string | null,
  telefonHref: DO_UZUPELNIENIA as string | null,
  email: DO_UZUPELNIENIA as string | null,
  ulica: DO_UZUPELNIENIA as string | null,
  miasto: DO_UZUPELNIENIA as string | null,
  godziny: DO_UZUPELNIENIA as string | null,
  nip: DO_UZUPELNIENIA as string | null,
} as const;

export const zakresy = [
  {
    id: "kamieniarstwo",
    nazwa: "Kamieniarstwo",
    opis:
      "Nagrobki na wymiar — od projektu, przez cięcie i szlifowanie bloku, po montaż na cmentarzu.",
  },
  {
    id: "budowlanka",
    nazwa: "Budowlanka",
    opis:
      "Kamień w budynku i wokół niego: kostka, opaski, elementy z granitu układane na miejscu.",
  },
  {
    id: "pogrzebowe",
    nazwa: "Usługi pogrzebowe",
    opis:
      "Rozbiórka i ponowne złożenie nagrobka przy pochówku. Ekshumacje.",
  },
] as const;

export const uslugi = [
  {
    nazwa: "Cięcie kamienia",
    opis:
      "Blok trafia pod piłę u nas. Płyty, cokoły i elementy tniemy na wymiar podany w projekcie.",
    material: "granit · piaskowiec · marmur",
  },
  {
    nazwa: "Budowa nagrobków",
    opis:
      "Pojedyncze, podwójne i rodzinne. Kształt, profil krawędzi i liternictwo ustalamy przed cięciem.",
    material: "projekt indywidualny",
  },
  {
    nazwa: "Ustawianie nagrobków na cmentarzu",
    opis:
      "Transport, fundament i poziomowanie na miejscu. Pracujemy w alejkach, gdzie nie wjedzie sprzęt.",
    material: "montaż",
  },
  {
    nazwa: "Podnoszenie i renowacja",
    opis:
      "Osiadły nagrobek podnosimy i prostujemy. Stary kamień czyścimy, uzupełniamy spoiny i litery.",
    material: "naprawa",
  },
  {
    nazwa: "Układanie kostki wokół nagrobków",
    opis:
      "Obrys i dojście do pomnika. Kostka układana tak, żeby woda schodziła poza płytę.",
    material: "kostka · obrzeża",
  },
  {
    nazwa: "Ekshumacje",
    opis:
      "Prowadzimy prace ekshumacyjne wraz z rozbiórką i odtworzeniem nagrobka.",
    material: "na zlecenie rodziny",
  },
] as const;

/**
 * To jest prawdziwa sekwencja w czasie — dlatego numeracja niesie tu
 * informację i jest jedynym miejscem na stronie, gdzie jej używamy.
 */
export const przyPogrzebie = [
  {
    krok: "01",
    nazwa: "Rozbiórka",
    opis:
      "Przed pochówkiem rozbieramy nagrobek i odkładamy elementy na bok grobu. Termin ustala zakład pogrzebowy albo rodzina.",
  },
  {
    krok: "02",
    nazwa: "Pogrzeb",
    opis:
      "Na czas ceremonii nas tam nie ma. Wracamy, gdy rodzina da znać, że można wejść na grób.",
  },
  {
    krok: "03",
    nazwa: "Złożenie nagrobka",
    opis:
      "Składamy pomnik z powrotem, poziomujemy i czyścimy. Jeśli grunt osiadł, poprawiamy podbudowę.",
  },
] as const;

export const naZamowienie = [
  {
    nazwa: "Parapety",
    opis: "Cięte i szlifowane pod wymiar okna, z okapnikiem lub bez.",
  },
  {
    nazwa: "Blaty kuchenne",
    opis: "Wycięcie pod zlew i płytę, profilowanie krawędzi, montaż.",
  },
  {
    nazwa: "Schody z kamienia",
    opis: "Stopnice i podstopnice, wewnątrz i na zewnątrz, z powierzchnią antypoślizgową.",
  },
] as const;

/**
 * Zdjęcia otwierające sekcje.
 * Obie pozycje to wizualizacje wygenerowane (Kling 3 Omni, sierpień 2026).
 */
export const zdjeciaSekcji = {
  hero: {
    src: "/realizacje/blok-polerowany.png",
    alt: "Blok granitu z jedną ścianą wypolerowaną do lustra",
    podpis: "Blok i lustro",
    detal: "wizualizacja",
  },
  rzemioslo: {
    src: "/realizacje/warsztat-ciecie.png",
    alt: "Tarcza pilarki tnąca płytę granitową, chłodzenie wodą",
    podpis: "Cięcie płyty",
    detal: "wizualizacja",
  },
} as const;

/**
 * Galeria.
 *
 * UWAGA — stan na dziś: pozycje z `wizualizacja: true` to obrazy
 * wygenerowane, a nie zdjęcia prac wykonanych przez ten zakład.
 * Dlatego sekcja nosi tytuł „Wizualizacje", a nie „Realizacje",
 * i ma widoczny dopisek pod nagłówkiem. Podmiana na prawdziwe zdjęcia:
 * wgraj plik do /public/realizacje/, podmień `src` i ustaw
 * `wizualizacja: false` — nagłówek i dopisek przełączą się same.
 *
 * `src: null` renderuje widoczny placeholder z opisem, czego brakuje.
 */
export const realizacje = [
  {
    id: "nagrobek-pojedynczy",
    src: "/realizacje/nagrobek-pojedynczy.png" as string | null,
    wizualizacja: true,
    alt: "Nagrobek pojedynczy z ciemnego granitu, front polerowany, boki łupane",
    podpis: "Nagrobek pojedynczy",
    detal: "granit, front polerowany",
    format: "pion" as const,
  },
  {
    id: "nagrobek-podwojny",
    src: "/realizacje/nagrobek-podwojny.png" as string | null,
    wizualizacja: true,
    alt: "Nagrobek podwójny z obramowaniem i płytami wokół",
    podpis: "Nagrobek podwójny",
    detal: "z obrysem i kostką",
    format: "poziom" as const,
  },
  {
    id: "renowacja",
    src: null as string | null,
    wizualizacja: false,
    alt: "Nagrobek przed renowacją i po renowacji",
    podpis: "Renowacja",
    detal: "przed / po",
    format: "pion" as const,
  },
  {
    id: "blat-kuchenny",
    src: null as string | null,
    wizualizacja: false,
    alt: "Blat kuchenny z kamienia z wycięciem pod zlew",
    podpis: "Blat kuchenny",
    detal: "na zamówienie",
    format: "poziom" as const,
  },
  {
    id: "schody",
    src: null as string | null,
    wizualizacja: false,
    alt: "Schody z kamienia — stopnice i podstopnice",
    podpis: "Schody",
    detal: "na zamówienie",
    format: "pion" as const,
  },
] as const;

export const nawigacja = [
  { href: "#zakres", etykieta: "Zakres" },
  { href: "#uslugi", etykieta: "Usługi" },
  { href: "#realizacje", etykieta: "Galeria" },
  { href: "#pogrzeb", etykieta: "Przy pogrzebie" },
  { href: "#zamowienie", etykieta: "Na zamówienie" },
  { href: "#kontakt", etykieta: "Kontakt" },
] as const;
