/**
 * Jedyne źródło treści strony.
 *
 * UWAGA: pola oznaczone `DO_UZUPELNIENIA` nie były podane w briefie.
 * Nie zostały zmyślone — trzeba wpisać prawdziwe dane przed publikacją.
 */

import { zdjecia } from "@/content/zdjecia.gen";

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

/**
 * Trzy dziedziny zakładu. `lico` wskazuje ton, na jaki sekcja maluje płytę
 * — od ciemnego grafitu przez piaskowy po jasny — żeby trzy rodzaje pracy
 * dało się rozróżnić jednym spojrzeniem.
 */
export const zakresy = [
  {
    id: "kamieniarstwo",
    numer: "I",
    nazwa: "Kamieniarstwo",
    lico: "lico-plyta-ciemna",
    opis:
      "Nagrobki na wymiar — od projektu, przez cięcie i szlifowanie bloku, po montaż na cmentarzu.",
    punkty: [
      "Cięcie kamienia",
      "Budowa nagrobków",
      "Ustawianie na cmentarzu",
      "Podnoszenie i renowacja",
    ],
  },
  {
    id: "budowlanka",
    numer: "II",
    nazwa: "Budowlanka",
    lico: "lico-plyta-piasek",
    opis:
      "Kamień w budynku i wokół niego: schody, podesty, kostka, elementy z granitu układane na miejscu.",
    punkty: [
      "Schody i podesty",
      "Kostka wokół nagrobków",
      "Parapety i blaty",
      "Montaż u klienta",
    ],
  },
  {
    id: "rozbiurkowe",
    numer: "III",
    nazwa: "Usługi rozbiórkowe",
    lico: "lico-plyta-jasna",
    opis:
      "Rozbiórka i ponowne złożenie nagrobka przy pochówku. Ekshumacje.",
    punkty: [
      "Rozbiórka przed pogrzebem",
      "Złożenie po ceremonii",
      "Wyrównanie podbudowy",
      "Ekshumacje",
    ],
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

/** Zdjęcia otwierające sekcje — prawdziwe kadry z warsztatu i cmentarzy. */
export const zdjeciaSekcji = {
  hero: {
    ...zdjecia["nagrobek-jasny-ukos"],
    podpis: "Po montażu",
    detal: "granit polerowany",
  },
  rzemioslo: {
    ...zdjecia["ksiega-granit"],
    podpis: "Księga z granitu",
    detal: "praca ręczna",
  },
  rzemiosloDetal: {
    ...zdjecia["plyty-profilowane"],
    podpis: "Profil krawędzi",
    detal: "obróbka własna",
  },
  material: {
    ...zdjecia["plyta-viscount"],
    podpis: "Viscount White",
    detal: "surowa płyta w warsztacie",
  },
} as const;

/** Galeria — fotografie prac wykonanych przez zakład. */
export const realizacje = [
  {
    id: "nagrobek-podwojny-krzyz",
    ...zdjecia["nagrobek-podwojny-krzyz"],
    podpis: "Nagrobek podwójny",
    detal: "ciemny granit, krzyż",
  },
  {
    id: "nagrobek-czarny-mosiadz",
    ...zdjecia["nagrobek-czarny-mosiadz"],
    podpis: "Czarny granit",
    detal: "mosiężne liternictwo",
  },
  {
    id: "nagrobek-jasny-tablica",
    ...zdjecia["nagrobek-jasny-tablica"],
    podpis: "Nagrobek pojedynczy",
    detal: "jasny granit",
  },
  {
    id: "tablica-czerwony-granit",
    ...zdjecia["tablica-czerwony-granit"],
    podpis: "Tablica",
    detal: "czerwony granit",
  },
  {
    id: "nagrobek-kostka",
    ...zdjecia["nagrobek-kostka"],
    podpis: "Z kostką wokół",
    detal: "obrys i dojście",
  },
  {
    id: "nagrobek-granatowy",
    ...zdjecia["nagrobek-granatowy"],
    podpis: "Granit grafitowy",
    detal: "płyta pełna",
  },
  {
    id: "nagrobek-rzezbiony",
    ...zdjecia["nagrobek-rzezbiony"],
    podpis: "Forma rzeźbiona",
    detal: "czarny granit",
  },
  {
    id: "nagrobek-czarny-fala",
    ...zdjecia["nagrobek-czarny-fala"],
    podpis: "Projekt indywidualny",
    detal: "wstęga z czerwonego granitu",
  },
  {
    id: "nagrobek-jasny-wneka",
    ...zdjecia["nagrobek-jasny-wneka"],
    podpis: "Nagrobek z wnęką",
    detal: "miejsce na lampiony",
  },
] as const;

/** Zdjęcia przy sekcji „Na zamówienie" — kamień poza cmentarzem. */
export const naZamowienieZdjecia = [
  {
    id: "schody-czerwony-granit",
    ...zdjecia["schody-czerwony-granit"],
    podpis: "Schody",
    detal: "czerwony granit",
  },
  {
    id: "podest-granit",
    ...zdjecia["podest-granit"],
    podpis: "Podest wejściowy",
    detal: "granit płomieniowany",
  },
] as const;

export const nawigacja = [
  { href: "#zakres", etykieta: "Zakres" },
  { href: "#uslugi", etykieta: "Usługi" },
  { href: "#realizacje", etykieta: "Realizacje" },
  { href: "#pogrzeb", etykieta: "Przy pogrzebie" },
  { href: "#zamowienie", etykieta: "Na zamówienie" },
  { href: "#kontakt", etykieta: "Kontakt" },
] as const;
