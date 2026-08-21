"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Odslon } from "@/components/Odslon";

type Praca = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  blurDataURL: string;
  podpis: string;
  detal: string;
};

/**
 * Galeria realizacji z podglądem na całym ekranie.
 *
 * Wszystkie miniatury mają jeden format (4:5) niezależnie od tego, czy
 * zdjęcie źródłowe jest pionowe, czy poziome — siatka ma stać równo jak
 * rząd płyt opartych o ścianę. Kadr przycina `object-cover`, a pełną
 * proporcję widać po powiększeniu.
 *
 * Miniatury są przyciskami; podgląd to natywny <dialog> — przeglądarka
 * sama pilnuje fokusa i zamykania klawiszem Esc. Strzałki przełączają prace.
 */
export function Galeria({ prace }: { prace: readonly Praca[] }) {
  const [otwarta, setOtwarta] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  const otworz = (indeks: number) => {
    setOtwarta(indeks);
    dialog.current?.showModal();
  };

  const zamknij = useCallback(() => {
    dialog.current?.close();
  }, []);

  const przewin = useCallback(
    (krok: number) => {
      setOtwarta((stan) =>
        stan === null ? stan : (stan + krok + prace.length) % prace.length,
      );
    },
    [prace.length],
  );

  useEffect(() => {
    if (otwarta === null) return;
    const naKlawisz = (zdarzenie: KeyboardEvent) => {
      if (zdarzenie.key === "ArrowRight") przewin(1);
      if (zdarzenie.key === "ArrowLeft") przewin(-1);
    };
    window.addEventListener("keydown", naKlawisz);
    return () => window.removeEventListener("keydown", naKlawisz);
  }, [otwarta, przewin]);

  const biezaca = otwarta === null ? null : prace[otwarta];

  return (
    <>
      <div className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
        {prace.map((praca, indeks) => (
          <Odslon key={praca.id} opoznienie={(indeks % 3) * 90}>
            <figure className="flex flex-col">
              <button
                type="button"
                onClick={() => otworz(indeks)}
                className="kadr-zdjecia group relative block aspect-[4/5] w-full cursor-zoom-in"
                aria-label={`Powiększ: ${praca.podpis}, ${praca.detal}`}
              >
                <Image
                  src={praca.src}
                  alt={praca.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={praca.blurDataURL}
                  className="zdjecie-lupa object-cover"
                />
                <span className="znak-powiekszenia" aria-hidden="true">
                  +
                </span>
              </button>
              <figcaption className="rzaz mt-3 flex items-baseline justify-between gap-3 pt-2">
                <span className="font-display text-lg text-grafit">
                  {praca.podpis}
                </span>
                <span className="font-utyl text-lg text-grafit/50">
                  {praca.detal}
                </span>
              </figcaption>
            </figure>
          </Odslon>
        ))}
      </div>

      <dialog
        ref={dialog}
        className="podglad-pracy"
        onClose={() => setOtwarta(null)}
        onClick={(zdarzenie) => {
          /* klik w tło (sam <dialog>, nie jego dzieci) zamyka */
          if (zdarzenie.target === dialog.current) zamknij();
        }}
        aria-label="Podgląd realizacji"
      >
        {biezaca && (
          <div className="flex h-full w-full flex-col items-center justify-center gap-4 p-4 sm:p-8">
            <div className="relative min-h-0 w-full max-w-5xl flex-1">
              <Image
                key={biezaca.id}
                src={biezaca.src}
                alt={biezaca.alt}
                fill
                sizes="100vw"
                className="pojawienie object-contain"
              />
            </div>

            <div className="flex w-full max-w-5xl items-center justify-between gap-4">
              <p className="min-w-0">
                <span className="font-display text-lg text-szron">
                  {biezaca.podpis}
                </span>
                <span className="ml-3 font-utyl text-lg text-szron/55">
                  {biezaca.detal} · {otwarta! + 1} / {prace.length}
                </span>
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => przewin(-1)}
                  className="przycisk-podgladu"
                  aria-label="Poprzednia praca"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => przewin(1)}
                  className="przycisk-podgladu"
                  aria-label="Następna praca"
                >
                  →
                </button>
                <button
                  type="button"
                  onClick={zamknij}
                  className="przycisk-podgladu"
                  aria-label="Zamknij podgląd"
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
