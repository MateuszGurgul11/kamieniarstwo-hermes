import type { Metadata } from "next";
import { Spectral, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { adresStrony, indeksowanie } from "@/lib/adres";
import { firma } from "@/content/site";
import { DaneStrukturalne } from "@/components/DaneStrukturalne";
import "./globals.css";

/* `latin-ext` jest konieczny — bez niego ą ę ś ć ż ź ł ń wypadają z kroju. */

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const tytul = "Hermes — pracownia kamieniarska Bogusława Krzyśki";
const opis =
  "Nagrobki na wymiar, renowacje, rozbiórki i składanie przy pogrzebie, ekshumacje. Kamień tniemy i obrabiamy sami. Od 1996 roku.";

/** Miniatura pokazywana przy udostępnianiu linku (Facebook, Messenger, WhatsApp). */
const podglad = {
  url: "/og.jpg",
  width: 1200,
  height: 630,
  alt: "Nagrobek podwójny z ciemnego granitu z krzyżem — praca zakładu Hermes",
};

export const metadata: Metadata = {
  metadataBase: new URL(adresStrony),
  title: tytul,
  description: opis,
  applicationName: firma.nazwa,
  keywords: [
    "kamieniarstwo",
    "nagrobki",
    "renowacja nagrobków",
    "ekshumacje",
    "blaty kamienne",
    "parapety",
    "schody z kamienia",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "/",
    siteName: firma.nazwaPelna,
    title: tytul,
    description: opis,
    images: [podglad],
  },
  twitter: {
    card: "summary_large_image",
    title: tytul,
    description: opis,
    images: [podglad],
  },
  robots: {
    index: indeksowanie,
    follow: indeksowanie,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body
        className={`${spectral.variable} ${sourceSans.variable} ${plexMono.variable} antialiased`}
      >
        {/*
          Bez JavaScriptu animacje odsłonięcia nie mogą trzymać treści
          w ukryciu — ten arkusz przywraca wszystko do widoczności.
        */}
        <noscript>
          <style>{`.odslon { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
        <DaneStrukturalne />
      </body>
    </html>
  );
}
