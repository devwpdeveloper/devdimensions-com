"use client";

import Lenis, { type LenisOptions } from "lenis";
import { ReactLenis, type LenisRef } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

const lenisOptions: LenisOptions = {
  // Keep the instance on the document scroll root so sticky positioning,
  // native focus scrolling, and route transitions continue to work.
  autoRaf: false,
  smoothWheel: true,
  syncTouch: true,
  syncTouchLerp: 0.075,
  touchInertiaExponent: 1.7,
  lerp: 0.085,
  duration: 1.05,
  anchors: true,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
};

/**
 * Provides one Lenis instance for every route and advances it from the
 * browser's shared requestAnimationFrame clock.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    let frame = 0;

    const raf = (time: number) => {
      lenisRef.current?.lenis?.raf(time);
      frame = window.requestAnimationFrame(raf);
    };

    frame = window.requestAnimationFrame(raf);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export type { Lenis };

