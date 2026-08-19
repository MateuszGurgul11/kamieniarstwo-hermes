/**
 * Tekstura kamienia dla ciemnych płyt — sekcji hero, „Co nas różni"
 * i kontaktu. Jasne sekcje strony zostają gładkie, bez tekstury.
 *
 * Źródłem jest prawdziwe zdjęcie z images/, nie generator szumu. Wycinamy
 * czysty fragment lica, odbarwiamy do skali szarości i spłaszczamy kontrast
 * wokół szarości neutralnej dla `overlay` (128), czyli trybu, którym CSS
 * nakłada teksturę. Dzięki temu kafel sam z siebie nie zmienia koloru
 * powierzchni — raz rozjaśnia, raz przyciemnia, dokładając samo ziarno.
 *
 * Wyrównanie światła (`wyrownanie`): zdjęcie niesie ze sobą oświetlenie
 * sceny — jaśniejszy brzeg płyty, cień od krawędzi. Przy kafelkowaniu ten
 * gradient zamienia się w pasy i zdradza szew. Filtr górnoprzepustowy
 * (oryginał minus mocno rozmyta kopia) zostawia samo ziarno, a wielkie
 * plamy jasności kasuje. Marmur go nie dostaje — tam użylenie w dużej
 * skali JEST treścią tekstury.
 *
 * Bezszwowość: kafel składamy z czterech odbić lustrzanych 2×2. Działa
 * dla ziarna izotropowego, gdzie odbicie jest niewidoczne. Tekstura
 * kierunkowa (użylenie marmuru) zwinęłaby się przy tym w romby jak
 * tapeta, więc takiej tu nie używamy.
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
    nazwa: "granit-ciemny",
    wycinek: { left: 400, top: 1000, width: 400, height: 400 },
    bok: 420,
    wyrownanie: 11,
    srodek: 128,
    kontrast: 0.30,
    opis: "ziarno granitu na ciemne płyty (overlay)",
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

  const wyjscie = `public/tekstury/${t.nazwa}.webp`;
  await sharp({
    create: { width: bok * 2, height: bok * 2, channels: 3, background: "#fff" },
  })
    .composite([
      { input: cwiartka, top: 0, left: 0 },
      { input: await sharp(cwiartka).flop().toBuffer(), top: 0, left: bok },
      { input: await sharp(cwiartka).flip().toBuffer(), top: bok, left: 0 },
      { input: await sharp(cwiartka).flip().flop().toBuffer(), top: bok, left: bok },
    ])
    .webp({ quality: 74, effort: 6 })
    .toFile(wyjscie);

  const st = await sharp(wyjscie).stats();
  const kb = Math.round(statSync(wyjscie).size / 1024);
  console.log(
    `${t.nazwa.padEnd(14)} ${bok * 2}×${bok * 2}  ${String(kb).padStart(3)} KB  ` +
      `ton ${Math.round(st.channels[0].min)}–${Math.round(st.channels[0].max)} ` +
      `(śr. ${Math.round(st.channels[0].mean)})  — ${t.opis}`,
  );
}
