"use client";

/* oxlint-disable next/no-img-element */

import { ArrowUpRight } from "lucide-react";
import { InfiniteCarousel } from "./infinite-carousel";

export type CaseStudyCarouselItem = {
  id: string;
  name: string;
  imageSrc: string;
  mobileImageSrc: string;
  categories: readonly string[];
  href: string;
  description: string;
};

type CaseStudyCarouselProps = {
  items: readonly CaseStudyCarouselItem[];
  ariaLabel: string;
  className?: string;
  trackClassName?: string;
  dotsClassName?: string;
  dotItems?: readonly CaseStudyCarouselItem[];
  itemSize?: string;
};

export function CaseStudyCarousel({
  items,
  ariaLabel,
  className = "work-viewport",
  trackClassName = "work-track",
  dotsClassName = "work-dots",
  dotItems,
  itemSize = "var(--work-card-width)",
}: CaseStudyCarouselProps) {
  return (
    <InfiniteCarousel
      items={items}
      ariaLabel={ariaLabel}
      className={className}
      trackClassName={trackClassName}
      itemSize={itemSize}
      getItemLabel={(item) => item.name}
      getKey={(item, physicalIndex) => `${item.id}-${physicalIndex}`}
      dotsClassName={dotsClassName}
      dotItems={dotItems}
      renderItem={(item, _logicalIndex, _physicalIndex, isActive) => (
        <article className={`work-card${isActive ? " is-active" : ""}`}>
          <div className="work-card-grid">
            <a className="work-cover-link" href={item.href} aria-label={`View ${item.name} case study`}>
              <picture>
                <source media="(max-width: 767px)" srcSet={item.mobileImageSrc} />
                <img className="work-cover" src={item.imageSrc} alt={`${item.name} project`} loading="lazy" decoding="async" />
              </picture>
            </a>
            <div className="work-card-content">
              <h3 className="work-card-title">
                <span className="work-title-flow">
                  <a href={item.href}>{item.name}</a>
                  <span className="work-categories">
                    {item.categories.map((category) => <span className="work-category" key={category}>{category}</span>)}
                  </span>
                </span>
              </h3>
              <p className="work-description">{item.description}</p>
              <div className="work-tools" aria-label="Tools used">
                <span className="work-tools-label">Tools:</span>
                <img src="/assets/tool-1.png" alt="Design tool" loading="lazy" decoding="async" />
                <img src="/assets/tool-2.png" alt="Development tool" loading="lazy" decoding="async" />
              </div>
              <div className="work-card-resources">
                <a className="square-arrow" href={item.href} aria-label={`Open ${item.name}`}>
                  <ArrowUpRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </article>
      )}
    />
  );
}
