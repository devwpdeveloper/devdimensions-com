# Live-site comparison — 7 September 2026

Reference: https://devdimensions.com/
Local preview: http://localhost:3000/

## Verified on the original site

- The trial button and hiring calls to action link to `/contact-us/`.
- “Get Free Consultation” opens a popup containing Your Name, Email, and Brief Message.
- The phone navigation slides in from the right. It contains a Menu heading, four page links, and a consultation button.
- Hiring text changes automatically. The supplied theme synchronizes three vertical text transitions every 5 seconds (300/350/400 ms transitions).
- Hiring-problem highlights cycle every 2 seconds.
- The theme configures testimonials and work sliders with 9-second autoplay and 300 ms transitions, with separate responsive configurations.
- Technology rails move continuously in opposite directions and include labels.
- Mobile uses different hero/project artwork and substantially different carousel layouts.
- At a 390 px viewport, the original hero is approximately 794 px high, project cards are 234 × 600 px, testimonial cards are 264 px wide, partner logos use three columns, and FAQ buttons have 25 px vertical padding.

## Implemented in this pass

- Automatic synchronized hiring-text changes and animated text entry.
- Carousel autoplay, pause on hover/focus, horizontal swipe gestures, arrow-key control, and corrected phone slide distances.
- Correct trial/hiring link destinations and three-field consultation forms.
- Mobile navigation heading, button structure, spacing, and entrance animation.
- Technology labels and continuous repeatable rail movement.
- Original testimonial text in place of placeholder quotations.
- Animated FAQ expansion and reduced-motion handling.
- Measured mobile adjustments to approach steps, partner logos, testimonials, and FAQ spacing.

## Validation and remaining work

- Production build passed. Local homepage returned HTTP 200 with the updated carousel markup.
- Browser access disconnected before the final visual and interaction regression check. The new gestures, final mobile geometry, and tablet/desktop regressions still need browser verification.
- Pixel-perfect parity across every page and breakpoint is not yet established. The current implementation still has differences in testimonial composition, footer/CTA layout, and some project content.
- Dynamic posts/taxonomies still use sample content. The PHP endpoint handles contact submissions; a full PHP content backend is not yet implemented.
- Live forms were inspected without submitting messages.
