/**
 * Potok zdjęć: images/ -> public/foto/ + src/content/zdjecia.gen.ts
 *
 * Wybrane kadry dostają semantyczne nazwy, rozmiar do 1800 px po dłuższym
 * boku i miniaturę blur (base64) do <Image placeholder="blur">.
 * Uruchomienie: node skrypty/przygotuj-zdjecia.mjs
 */
import sharp from "sharp";
import { writeFileSync, mkdirSync } from "node:fs";

const WYBOR = [
  ["IMG-20260817-WA0108.jpg", "nagrobek-jasny-ukos", "Świeżo ustawiony nagrobek pojedynczy z lastryka, płyta polerowana"],
  ["IMG-20260817-WA0063.jpg", "ksiega-granit", "Księga wykuta z czarnego granitu, otwarte karty polerowane"],
  ["IMG-20260817-WA0087.jpg", "plyty-profilowane", "Profilowane płyty z jasnego granitu z ciemnym użyleniem, obrobione krawędzie"],
  ["IMG-20260817-WA0085.jpg", "plyta-viscount", "Surowa płyta granitu Viscount White z falistym użyleniem, w warsztacie"],
  ["IMG-20260817-WA0022.jpg", "nagrobek-podwojny-krzyz", "Nagrobek podwójny z ciemnego granitu z krzyżem i klombem"],
  ["IMG-20260817-WA0035.jpg", "nagrobek-czarny-mosiadz", "Czarny granit z mosiężnym liternictwem i krzyżem"],
  ["IMG-20260817-WA0114.jpg", "nagrobek-jasny-tablica", "Nagrobek z jasnego granitu z wysoką tablicą, napis Ave Maria"],
  ["IMG-20260817-WA0049.jpg", "tablica-czerwony-granit", "Tablica z czerwonego granitu z jasną obwódką"],
  ["IMG-20260817-WA0045.jpg", "nagrobek-granatowy", "Nagrobek z granitu w odcieniu grafitowo-granatowym, lampiony"],
  ["IMG-20260817-WA0088.jpg", "nagrobek-kostka", "Nagrobek z jasnego granitu z kostką ułożoną wokół"],
  ["IMG-20260817-WA0117.jpg", "nagrobek-rzezbiony", "Nagrobek z czarnego granitu o rzeźbionej, falistej formie"],
  ["IMG-20260817-WA0121.jpg", "nagrobek-czarny-fala", "Czarny nagrobek z wstęgą z czerwonego granitu"],
  ["IMG-20260817-WA0033.jpg", "nagrobek-jasny-wneka", "Nagrobek podwójny z jasnego granitu z wnęką na lampiony"],
  ["IMG-20260817-WA0043.jpg", "schody-czerwony-granit", "Schody zewnętrzne z czerwonego marmuru przy wejściu z kolumnami"],
  ["IMG-20260817-WA0091.jpg", "podest-granit", "Podest i schody z lastryka przy budynku"],
  ["IMG-20260817-WA0084.jpg", "plyty-na-blaty", "Płyty granitowe przycięte w warsztacie, oznaczone do zamówienia"],
  ["IMG-20260817-WA0061.jpg", "nagrobek-zlozony", "Nagrobek złożony ponownie po pochówku, wyrównany grunt"],
  ["IMG-20260817-WA0053.jpg", "serce-rzezba", "Serce z czarnego granitu z ręcznie rzeźbioną bruzdą i motywami kwiatowymi"],
  ["IMG-20260817-WA0054.jpg", "serce-poler", "Serce z czarnego granitu, krawędzie zaokrąglone i wypolerowane ręcznie"],
  ["IMG-20260817-WA0055.jpg", "zwoj-krawedz", "Płyta z czarnego granitu ze zwiniętą krawędzią jak zwój, poler lustrzany"],
  ["IMG-20260817-WA0056.jpg", "ksiega-karty", "Księga z czarnego granitu, karty wykute ręcznie w krawędzi bloku"],
  ["IMG-20260817-WA0057.jpg", "ksiega-grzbiet", "Otwarta księga z czarnego granitu, grzbiet i karty rzeźbione ręcznie"],
  ["IMG-20260817-WA0058.jpg", "pergamin-zwoje", "Pergamin z czarnego granitu ze zwojami na obu końcach, poler ręczny"],
];

mkdirSync("public/foto", { recursive: true });

const wpisy = [];
for (const [zrodlo, nazwa, alt] of WYBOR) {
  const wej = "images/" + zrodlo;
  const meta = await sharp(wej).metadata();
  const skala = Math.min(1, 1800 / Math.max(meta.width, meta.height));
  const w = Math.round(meta.width * skala);
  const h = Math.round(meta.height * skala);
  await sharp(wej).rotate().resize(w, h).jpeg({ quality: 80, mozjpeg: true }).toFile(`public/foto/${nazwa}.jpg`);
  const blur = await sharp(wej).rotate().resize(16).jpeg({ quality: 40 }).toBuffer();
  wpisy.push({ nazwa, src: `/foto/${nazwa}.jpg`, width: w, height: h, alt, blurDataURL: `data:image/jpeg;base64,${blur.toString("base64")}` });
  console.log(nazwa, `${w}x${h}`);
}

// OG: kadr 1200x630 z nagrobka podwójnego
await sharp("images/IMG-20260817-WA0022.jpg").rotate().resize(1200, 630, { fit: "cover" }).jpeg({ quality: 80, mozjpeg: true }).toFile("public/og.jpg");
console.log("og.jpg 1200x630");

const linie = wpisy.map(w =>
  `  "${w.nazwa}": { src: "${w.src}", width: ${w.width}, height: ${w.height}, alt: "${w.alt}", blurDataURL: "${w.blurDataURL}" },`
).join("\n");
writeFileSync("src/content/zdjecia.gen.ts",
`/** Plik generowany przez skrypty/przygotuj-zdjecia.mjs — nie edytuj ręcznie. */

export type Zdjecie = {
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
};

export const zdjecia = {
${linie}
} as const;

export type NazwaZdjecia = keyof typeof zdjecia;
`);
console.log("zdjecia.gen.ts:", wpisy.length, "wpisów");
