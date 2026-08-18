# kamieniarstwo-hermes.pl

Strona wizytówka pracowni kamieniarskiej Hermes (Bogusław Krzyśko). Next.js 16
(App Router, Turbopack) + Tailwind CSS 4. Jedna strona, w całości statyczna —
bez bazy danych, API i logowania.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Strona: [http://localhost:3000](http://localhost:3000).

Pozostałe polecenia: `npm run build` (build produkcyjny), `npm run lint`.

## Gdzie się edytuje treść

Cała treść siedzi w jednym pliku: `src/content/site.ts`. Komponenty w
`src/components/` tylko ją renderują — żeby zmienić tekst, cennik usług czy
dane kontaktowe, nie trzeba dotykać JSX-a.

### Dane kontaktowe

Pola w obiekcie `kontakt` mają dziś wartość `DO_UZUPELNIENIA` (czyli `null`).
Nic nie jest zmyślone — każde puste pole renderuje w sekcji Kontakt widoczną
plakietkę „DO UZUPEŁNIENIA", żeby braki rzucały się w oczy zamiast po cichu
zniknąć. Po wpisaniu prawdziwych wartości plakietki znikają same, a dane trafią
też do znacznika JSON-LD dla Google (`src/components/DaneStrukturalne.tsx`).

### Zdjęcia

Pozycje w tablicy `realizacje` z `wizualizacja: true` to obrazy wygenerowane, a
nie zdjęcia prac tego zakładu — dlatego sekcja nosi tytuł „Wizualizacje" i ma
widoczny dopisek. Podmiana na prawdziwe zdjęcie: wgraj plik do
`public/realizacje/`, ustaw `src` i przestaw `wizualizacja: false`. Nagłówek
sekcji przełączy się sam. `src: null` renderuje opisany placeholder.

## Deployment (Vercel)

Projekt nie wymaga żadnych zmiennych środowiskowych, żeby się zbudować —
`import` z GitHuba, preset Next.js, `Deploy`.

### Zmienne środowiskowe

| Zmienna | Wymagana | Do czego |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | nie (ale patrz niżej) | Adres docelowej domeny, bez ukośnika na końcu |

Bez tej zmiennej adres kanoniczny, Open Graph i `sitemap.xml` biorą adres
`*.vercel.app`, który Vercel podaje sam.

**Ważne:** dopóki `NEXT_PUBLIC_SITE_URL` nie jest ustawiona, strona wysyła
`noindex`, a `robots.txt` blokuje roboty. To celowe — tymczasowy adres
`*.vercel.app` nie powinien trafić do Google i konkurować później z właściwą
domeną o tę samą treść.

### Po podpięciu domeny

1. Vercel → Settings → Domains → dodaj `kamieniarstwo-hermes.pl`.
2. Vercel → Settings → Environment Variables → `NEXT_PUBLIC_SITE_URL` =
   `https://kamieniarstwo-hermes.pl`, środowisko **Production**.
3. Redeploy. Od tego momentu strona jest indeksowana, a `sitemap.xml` i
   `robots.txt` wskazują na właściwą domenę.
4. Zgłoś `https://kamieniarstwo-hermes.pl/sitemap.xml` w Google Search Console.
