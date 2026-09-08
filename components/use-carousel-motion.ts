"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent, PointerEvent, TransitionEvent } from "react";

export function useCarouselMotion(count: number, delay = 9000) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const origin = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const advance = (direction: number) => setIndex((current) => (current + direction + count) % count);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (paused || preference.matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % count);
    }, delay);
    return () => window.clearInterval(timer);
  }, [count, delay, paused, index]);

  return {
    index,
    setIndex,
    handlers: {
      tabIndex: 0,
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: () => setPaused(false),
      onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
        origin.current = { x: event.clientX, y: event.clientY };
        dragged.current = false;
      },
      onPointerUp: (event: PointerEvent<HTMLDivElement>) => {
        const start = origin.current;
        origin.current = null;
        if (!start) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          dragged.current = true;
          advance(dx < 0 ? 1 : -1);
        }
      },
      onPointerCancel: () => { origin.current = null; },
      onClickCapture: (event: React.MouseEvent<HTMLDivElement>) => {
        if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; }
      },
      onDragStart: (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(),
      onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          advance(event.key === "ArrowRight" ? 1 : -1);
        }
      },
    },
  };
}

export function useInfiniteCarouselMotion(count: number, delay = 9000) {
  const itemCount = Math.max(count, 1);
  const [position, setPosition] = useState(1);
  const [paused, setPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const origin = useRef<{ x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const index = ((position - 1) % itemCount + itemCount) % itemCount;

  const advance = (direction: number) => {
    if (itemCount < 2) return;
    setIsTransitioning(true);
    setPosition((current) => current + direction);
  };

  const goTo = (nextIndex: number) => {
    setIsTransitioning(true);
    setPosition(Math.min(Math.max(nextIndex, 0), itemCount - 1) + 1);
  };

  useEffect(() => {
    if (itemCount < 2 || paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) advance(1);
    }, delay);
    return () => window.clearInterval(timer);
  }, [delay, itemCount, paused]);

  useEffect(() => {
    if (position !== 0 && position !== itemCount + 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsTransitioning(false);
      setPosition(position === 0 ? itemCount : 1);
    }
  }, [itemCount, position]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.propertyName !== "transform") return;
    if (position !== 0 && position !== itemCount + 1) return;
    setIsTransitioning(false);
    setPosition(position === 0 ? itemCount : 1);
    // Keep the clone reset outside the browser's transition frame. This makes
    // the next advance continue forward instead of animating back to the first
    // physical slide.
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setIsTransitioning(true));
    });
  };

  return {
    index,
    position,
    isTransitioning,
    setIndex: goTo,
    handleTransitionEnd,
    handlers: {
      tabIndex: 0,
      onMouseEnter: () => setPaused(true),
      onMouseLeave: () => setPaused(false),
      onFocus: () => setPaused(true),
      onBlur: () => setPaused(false),
      onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
        origin.current = { x: event.clientX, y: event.clientY };
        dragged.current = false;
      },
      onPointerUp: (event: PointerEvent<HTMLDivElement>) => {
        const start = origin.current;
        origin.current = null;
        if (!start) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
          dragged.current = true;
          advance(dx < 0 ? 1 : -1);
        }
      },
      onPointerCancel: () => { origin.current = null; },
      onClickCapture: (event: React.MouseEvent<HTMLDivElement>) => {
        if (dragged.current) { event.preventDefault(); event.stopPropagation(); dragged.current = false; }
      },
      onDragStart: (event: React.DragEvent<HTMLDivElement>) => event.preventDefault(),
      onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          advance(event.key === "ArrowRight" ? 1 : -1);
        }
      },
    },
  };
}
