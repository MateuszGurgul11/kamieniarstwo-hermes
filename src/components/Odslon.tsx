"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Opóźnienie wejścia w ms — do kaskad wewnątrz jednej sekcji. */
  opoznienie?: number;
};

/**
 * Odsłania treść przy wejściu w kadr — jak zdjęcie płyty z palety.
 *
 * Bez JavaScriptu wszystko jest widoczne od razu: klasa `js` na <html>
 * (dokładana skryptem w layoucie) jest warunkiem ukrycia, nie odkrycia.
 * `prefers-reduced-motion` również dostaje wersję statyczną.
 */
export function Odslon({ children, className = "", opoznienie = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("odslon-widoczny");
      return;
    }

    const obserwator = new IntersectionObserver(
      (wpisy) => {
        for (const wpis of wpisy) {
          if (wpis.isIntersecting) {
            el.classList.add("odslon-widoczny");
            obserwator.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    obserwator.observe(el);
    return () => obserwator.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`odslon ${className}`}
      style={{ "--odslon-opoznienie": `${opoznienie}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
