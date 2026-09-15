"use client";

import gsap from "gsap";
import Lenis, { type LenisOptions } from "lenis";
import { ReactLenis, useLenis } from "lenis/react";
import { useEffect, type ReactNode } from "react";

const lenisOptions: LenisOptions = {
  // Keep the instance on the document scroll root so sticky positioning,
  // native focus scrolling, and route transitions continue to work.
  autoRaf: false,
  smoothWheel: true,
  // Native touch scrolling is more reliable than Lenis' syncTouch inertia on
  // long pages, especially when a swipe is interrupted over an animated
  // section. Wheel input remains smoothly interpolated below.
  syncTouch: false,
  lerp: 0.1,
  anchors: true,
  stopInertiaOnNavigate: true,
  respectReducedMotion: true,
};

function LenisTicker() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // GSAP and Lenis now share one clock. This keeps ScrollTrigger's measured
    // positions and Lenis' animated scroll value on the same frame. Clamp a
    // dropped frame so a busy marquee/image paint cannot become a visible
    // scroll jump when the user reverses direction.
    const maxFrameDelta = 50;
    let safeTime: number | null = null;
    const tick = (time: number) => {
      const currentTime = time * 1000;
      if (safeTime === null) {
        safeTime = currentTime;
      } else {
        const frameDelta = Math.max(0, currentTime - safeTime);
        safeTime += Math.min(frameDelta, maxFrameDelta);
      }
      lenis.raf(safeTime);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(500, 33);

    return () => {
      gsap.ticker.remove(tick);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, [lenis]);

  return null;
}

/**
 * Provides one Lenis instance for every route and advances it from GSAP's
 * shared ticker so scroll-driven animations stay synchronized.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <LenisTicker />
      {children}
    </ReactLenis>
  );
}

export type { Lenis };
