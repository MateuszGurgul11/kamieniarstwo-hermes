/**
 * Tekstury kamienia dla teł strony.
 *
 * Źródłem są prawdziwe zdjęcia z images/ — nie generatory szumu. Z każdego
 * wycinamy czysty fragment lica, odbarwiamy do skali szarości i spłaszczamy
 * kontrast wokół punktu neutralnego dla trybu mieszania, którym tekstura
 * będzie nakładana w CSS. Dzięki temu kafel sam z siebie nie zmienia koloru
 * powierzchni — dokłada wyłącznie ziarno.
 *
 *   multiply → neutralna biel (255): tekstura tylko przyciemnia
 *   overlay  → neutralna szarość (128): tekstura rozjaśnia i przyciemnia
 *
 * Wyrównanie światła (`wyrownanie`): zdjęcie niesie ze sobą oświetlenie
 * sceny — jaśniejszy brzeg płyty, cień od krawędzi. Przy kafelkowaniu ten
 * gradient zamienia się w pasy i zdradza szew. Filtr górnoprzepustowy
 * (oryginał minus mocno rozmyta kopia) zostawia samo ziarno, a wielkie
 * plamy jasności kasuje. Marmur go nie dostaje — tam użylenie w dużej
 * skali JEST treścią tekstury.
 *
 * Bezszwowość:
 *   „lustro4" — cztery odbicia 2×2. Działa dla ziarna izotropowego
 *               (granit, lastryko), gdzie odbicie jest niewidoczne.
 *   „lustroX" — odbicie tylko w poziomie, kafel powtarzany repeat-x.
 *               Dla marmuru z kierunkowym użyleniem, które przy odbiciu
 *               w obu osiach zwinęłoby się w romby jak tapeta. Poziome
 *               odbicie to za to „book-match" — układ dwóch płyt ciętych
 *               z jednego bloku, robiony w kamieniarstwie naprawdę.
 *
 * Uruchomienie: node skrypty/przygotuj-tekstury.mjs
 */
import sharp from "sharp";
import { mkdirSync, statSync } from "node:fs";

/** Oryginał minus rozmyta kopia, wyśrodkowane na szarości 128. */
async function wyrownajSwiatlo(wejscie, sigma) {
  const { data, info } = await sharp(wejscie)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const rozmyte = await sharp(wejscie).blur(sigma).raw().toBuffer();

  const wynik = Buffer.allocUnsafe(data.length);
  for (let i = 0; i < data.length; i++) {
    const v = 128 + data[i] - rozmyte[i];
    wynik[i] = v < 0 ? 0 : v > 255 ? 255 : v;
  }
  return sharp(wynik, {
    raw: { width: info.width, height: info.height, channels: info.channels },
  })
    .png()
    .toBuffer();
}

const TEKSTURY = [
  {
    plik: "IMG-20260817-WA0098.jpg",
    nazwa: "granit",
    wycinek: { left: 400, top: 1000, width: 400, height: 400 },
    bok: 420,
    uklad: "lustro4",
    wyrownanie: 26,
    srodek: 248,
    kontrast: 0.23,
    opis: "granit sól-pieprz — jasne tło strony (multiply)",
  },
  {
    plik: "IMG-20260817-WA0098.jpg",
    nazwa: "granit-ciemny",
    wycinek: { left: 400, top: 1000, width: 400, height: 400 },
    bok: 420,
    uklad: "lustro4",
    wyrownanie: 26,
    srodek: 128,
    kontrast: 0.22,
    opis: "to samo ziarno na ciemne płyty (overlay)",
  },
  {
    plik: "IMG-20260817-WA0091.jpg",
    nazwa: "lastryko",
    wycinek: { left: 800, top: 800, width: 400, height: 400 },
    bok: 400,
    uklad: "lustro4",
    wyrownanie: 20,
    srodek: 247,
    kontrast: 0.38,
    opis: "posadzka lastrykowa — pasy przejściowe (multiply)",
  },
  {
    plik: "IMG-20260817-WA0085.jpg",
    nazwa: "marmur",
    wycinek: { left: 430, top: 90, width: 420, height: 420 },
    bok: 460,
    uklad: "lustroX",
    wyrownanie: null,
    srodek: 246,
    kontrast: 0.26,
    opis: "Viscount White — belka nagłówka i stopka (multiply, repeat-x)",
  },
];

mkdirSync("public/tekstury", { recursive: true });

for (const t of TEKSTURY) {
  const lico = await sharp("images/" + t.plik)
    .extract(t.wycinek)
    .resize(t.bok, t.bok, { fit: "fill" })
    .greyscale()
    .png()
    .toBuffer();

  const cwiartka = await sharp(
    t.wyrownanie ? await wyrownajSwiatlo(lico, t.wyrownanie) : lico,
  )
    // out = a·in + b — spłaszczenie kontrastu wokół punktu neutralnego
    .linear(t.kontrast, t.srodek - t.kontrast * 128)
    .toBuffer();

  const bok = t.bok;
  const wysokosc = t.uklad === "lustroX" ? bok : bok * 2;

  const kafle =
    t.uklad === "lustroX"
      ? [
          { input: cwiartka, top: 0, left: 0 },
          { input: await sharp(cwiartka).flop().toBuffer(), top: 0, left: bok },
        ]
      : [
          { input: cwiartka, top: 0, left: 0 },
          { input: await sharp(cwiartka).flop().toBuffer(), top: 0, left: bok },
          { input: await sharp(cwiartka).flip().toBuffer(), top: bok, left: 0 },
          { input: await sharp(cwiartka).flip().flop().toBuffer(), top: bok, left: bok },
        ];

  const wyjscie = `public/tekstury/${t.nazwa}.webp`;
  await sharp({
    create: { width: bok * 2, height: wysokosc, channels: 3, background: "#fff" },
  })
    .composite(kafle)
    .webp({ quality: 74, effort: 6 })
    .toFile(wyjscie);

  const st = await sharp(wyjscie).stats();
  const kb = Math.round(statSync(wyjscie).size / 1024);
  console.log(
    `${t.nazwa.padEnd(14)} ${bok * 2}×${wysokosc}  ${String(kb).padStart(3)} KB  ` +
      `ton ${Math.round(st.channels[0].min)}–${Math.round(st.channels[0].max)} ` +
      `(śr. ${Math.round(st.channels[0].mean)})  — ${t.opis}`,
  );
}
