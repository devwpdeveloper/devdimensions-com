"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const heroSelector = ".hero, .theme-hero, .theme-contact-hero, .project-hero, .listing-hero, .post-page, .not-found";

const revealSelector = [
  ".problems-intro",
  ".problem-map",
  ".problem-map-mobile",
  ".welcome-copy",
  ".welcome-art",
  // Work and approach are intentionally omitted: their large carousel and
  // diagram must stay visible while the first wheel gesture enters them.
  ".utility-copy",
  ".hiring-cards",
  ".partners > .shell > h2",
  ".partner-grid",
  ".partner-logo",
  ".testimonial-heading",
  ".testimonial-viewport",
  ".testimonial-dots",
  ".faq-sidebar",
  ".faq-content",
  ".cta-box",
  ".theme-mission-card",
  ".core-values-art",
  ".theme-join-inner",
  ".theme-case-card",
  ".theme-case-more",
  ".listing-grid-section .listing-card",
  ".post-body",
  ".post-share",
  ".project-spec-grid > *",
  ".project-feature-item",
  ".project-shots h2",
  ".project-related h2",
  ".project-related-viewport",
  ".footer-grid",
].join(", ");

const uniqueElements = (root: Element, selector: string) =>
  Array.from(new Set(Array.from(root.querySelectorAll<HTMLElement>(selector))));

export function SiteMotion() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);
    return () => lenis.off("scroll", updateScrollTrigger);
  }, [lenis]);

  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".site-shell");
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const progress = document.querySelector<HTMLElement>(".site-scroll-progress");
    const refresh = () => ScrollTrigger.refresh();
    let refreshFrame = 0;
    let refreshTimer = 0;
    const context = gsap.context(() => {
      const headerItems = uniqueElements(page, ".site-header > *");
      if (headerItems.length) {
        gsap.from(headerItems, {
          y: -18,
          autoAlpha: 0,
          duration: 0.7,
          delay: 0.05,
          stagger: 0.07,
          ease: "power3.out",
        });
      }

      const hero = page.querySelector<HTMLElement>(heroSelector);
      if (hero) {
        const heroItems = uniqueElements(
          hero,
          ".hero-copy h1, .hero-copy .hero-lede, .theme-hero-copy > *, .theme-get-touch, .project-title-row, .project-hero-content > p, .listing-hero .shell > *, .post-page .shell > h1, .post-page .post-lede, .not-found .shell > *",
        );
        if (heroItems.length) {
          gsap.from(heroItems, {
            y: 34,
            autoAlpha: 0,
            duration: 0.85,
            delay: 0.12,
            stagger: 0.1,
            ease: "power3.out",
          });
        }

        const heroButtons = uniqueElements(hero, ".hero-copy .btn-theme, .theme-contact-form > .btn-theme, .listing-hero .btn-theme, .not-found .btn-theme");
        if (heroButtons.length) {
          // Keep the branded CTA at full contrast while it enters. Fading the
          // button surface with the copy makes the red gradient look disabled.
          gsap.from(heroButtons, {
            y: 18,
            duration: 0.7,
            delay: 0.34,
            stagger: 0.08,
            ease: "power3.out",
          });
        }

        const heroVisuals = uniqueElements(hero, ".hero-visual, .project-hero-cover, .post-image, .not-found img");
        if (heroVisuals.length) {
          gsap.from(heroVisuals, {
            x: 28,
            y: 24,
            scale: 0.96,
            autoAlpha: 0,
            duration: 1.15,
            delay: 0.18,
            ease: "power3.out",
          });
        }

        const backgrounds = uniqueElements(hero, ".hero-background, .theme-hero-background, .project-hero-background");
        backgrounds.forEach((background) => {
          gsap.from(background, {
            scale: 1.06,
            duration: 1.25,
            delay: 0.05,
            ease: "power2.out",
          });
          gsap.to(background, {
            yPercent: 6,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 1.15,
            },
          });
        });
      }

      const revealItems = uniqueElements(page, revealSelector);
      revealItems.forEach((item) => {
        gsap.from(item, {
          y: 42,
          autoAlpha: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 86%",
            once: true,
          },
        });
      });

      const imageReveals = uniqueElements(page, ".theme-case-media img, .listing-card img, .project-gallery img, .theme-mission-card > img");
      imageReveals.forEach((image) => {
        gsap.from(image, {
          scale: 1.08,
          duration: 1.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 88%",
            once: true,
          },
        });
      });

      if (progress) {
        gsap.set(progress, { scaleX: 0 });
        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (trigger) => gsap.set(progress, { scaleX: trigger.progress }),
        });
      }

      refreshFrame = window.requestAnimationFrame(refresh);
      refreshTimer = window.setTimeout(refresh, 450);
      window.addEventListener("load", refresh, { once: true });
    }, page);

    return () => {
      window.cancelAnimationFrame(refreshFrame);
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      context.revert();
      if (progress) gsap.set(progress, { scaleX: 0 });
    };
  }, [pathname]);

  return <span className="site-scroll-progress" aria-hidden="true" />;
}
