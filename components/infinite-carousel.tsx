"use client";

import type { CSSProperties, Key, ReactNode } from "react";
import { useInfiniteCarouselMotion } from "./use-carousel-motion";

type InfiniteCarouselProps<T> = {
  items: readonly T[];
  ariaLabel: string;
  className: string;
  trackClassName: string;
  itemSize: string;
  gap?: string;
  dotsClassName?: string;
  dotItems?: readonly T[];
  getItemLabel: (item: T) => string;
  getKey?: (item: T, physicalIndex: number) => Key;
  renderItem: (item: T, logicalIndex: number, physicalIndex: number, isActive: boolean) => ReactNode;
};

export function InfiniteCarousel<T>({
  items,
  ariaLabel,
  className,
  trackClassName,
  itemSize,
  gap = "var(--slider-gap)",
  dotsClassName,
  dotItems,
  getItemLabel,
  getKey,
  renderItem,
}: InfiniteCarouselProps<T>) {
  const motion = useInfiniteCarouselMotion(items.length);
  const loopItems = items.length > 0
    ? [items[items.length - 1], ...items, items[0]]
    : [];
  const dots = dotItems ?? items;

  if (!items.length) return null;

  return (
    <div className={className} aria-label={ariaLabel} {...motion.handlers}>
      <div
        className={`${trackClassName}${motion.isTransitioning ? "" : " is-loop-reset"}`}
        style={{
          transform: `translateX(calc(-${motion.position} * (${itemSize} + ${gap})))`,
        } as CSSProperties}
        onTransitionEnd={motion.handleTransitionEnd}
      >
        {loopItems.map((item, physicalIndex) => {
          const logicalIndex = (physicalIndex - 1 + items.length) % items.length;
          return (
            <div
              className="infinite-carousel-item"
              data-carousel-clone={physicalIndex === 0 || physicalIndex === loopItems.length - 1 ? "true" : undefined}
              key={getKey?.(item, physicalIndex) ?? physicalIndex}
              style={{ flex: `0 0 ${itemSize}`, width: itemSize, minWidth: 0 }}
            >
              {renderItem(item, logicalIndex, physicalIndex, logicalIndex === motion.index)}
            </div>
          );
        })}
      </div>
      {dots.length > 0 ? (
        <div className={dotsClassName ?? "infinite-carousel-dots"} role="tablist" aria-label={`${ariaLabel} choices`}>
          {dots.map((item, index) => (
            <button
              type="button"
              role="tab"
              key={getKey?.(item, index) ?? index}
              className={index === motion.index ? "is-active" : ""}
              aria-label={`Show ${getItemLabel(item)}`}
              aria-selected={index === motion.index}
              aria-pressed={index === motion.index}
              onClick={() => motion.setIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
