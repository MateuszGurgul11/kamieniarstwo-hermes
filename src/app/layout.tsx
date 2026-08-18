import type { Metadata } from "next";
import { Spectral, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hermes — pracownia kamieniarska Bogusława Krzyśki",
  description:
    "Nagrobki na wymiar, renowacje, rozbiórki i składanie przy pogrzebie, ekshumacje. Kamień tniemy i obrabiamy sami. Od 1996 roku.",
  keywords: [
    "kamieniarstwo",
    "nagrobki",
    "renowacja nagrobków",
    "ekshumacje",
    "blaty kamienne",
    "parapety",
    "schody z kamienia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl">
      <body
        className={`${spectral.variable} ${sourceSans.variable} ${plexMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
