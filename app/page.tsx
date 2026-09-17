"use client";
/* oxlint-disable next/no-img-element */
/* oxlint-disable next/no-html-link-for-pages */

import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { CaseStudyCarousel } from "../components/case-study-carousel";
import { useInfiniteCarouselMotion } from "../components/use-carousel-motion";
import { MobileNavigation } from "../components/theme-pages";

const ASSET_ROOT = "/assets/";
const CONTACT_ENDPOINT = "/backend/contact.php";
const asset = (name: string) => `${ASSET_ROOT}${name}`;
const normalizeNavPath = (path: string) => path.replace(/\/+$/, "") || "/";
const isNavActive = (pathname: string, href: string) => {
  const currentPath = normalizeNavPath(pathname);
  const targetPath = normalizeNavPath(href);

  if (targetPath === "/") return currentPath === "/";

  return currentPath === targetPath
    || currentPath.startsWith(`${targetPath}/`)
    || (targetPath === "/case-studies" && currentPath.startsWith("/project/"));
};

type Logo = {
  file: string;
  label: string;
};

type Project = {
  name: string;
  image: string;
  mobileImage: string;
  category: string;
  href: string;
  description: string;
};

type Testimonial = {
  name: string;
  role: string;
  image: string;
  logo: string;
  quote: string;
  project: string;
};

const techLogos: Logo[] = [
  { file: "Wordpress.svg", label: "WordPress" },
  { file: "Vue-Js.svg", label: "Vue Js" },
  { file: "Frame-1261153381.svg", label: "Angular Js" },
  { file: "PHP-Storm.svg", label: "PhpStorm" },
  { file: "Python.svg", label: "Python" },
  { file: "Ruby-Rails.svg", label: "Ruby on Rails" },
  { file: "Webflow.svg", label: "Webflow" },
  { file: "Frame-1261153380.svg", label: "Express Js" },
  { file: "Frame-1261153379.svg", label: "Shopify" },
  { file: "Node-js.svg", label: "Node Js" },
  { file: "React-js.svg", label: "React Js" },
  { file: "Laravel.svg", label: "Laravel" },
  { file: "Dot-Net.svg", label: ".Net" },
  { file: "Apple.svg", label: "IOS" },
  { file: "Android.svg", label: "Android" },
  { file: "Express-Js.svg", label: "Express Js" },
  { file: "Java-Script.svg", label: "JavaScript" },
  { file: "Mongo-DB.svg", label: "Mongo DB" },
  { file: "Next-js.svg", label: "Next Js" },
  { file: "Nuxt-Js.svg", label: "Nuxt Js" },
];

const clientLogos: Logo[] = [
  { file: "Zoho-CRM.svg", label: "Zoho" },
  { file: "Zapier.svg", label: "Zapier" },
  { file: "Vs-Code.svg", label: "VS Code" },
  { file: "Photo-Shop.svg", label: "Photoshop" },
  { file: "Adobe-Xd.svg", label: "Adobe XD" },
  { file: "Adobe-Indesign.svg", label: "AI" },
  { file: "Amazon.svg", label: "Amazon" },
  { file: "Unbounce.svg", label: "Unbounce" },
  { file: "Click-Funnel.svg", label: "Click Funnel" },
  { file: "Figma.svg", label: "Figma" },
];

const projects: Project[] = [
  {
    name: "Express Flooring",
    image: "frame-1261153221-1-668d272b32aee.webp",
    mobileImage: "Frame-1261153157-10.png",
    category: "Design, Development",
    href: "/project/express-flooring/",
    description:
      "Express Flooring” is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic.",
  },
  {
    name: "Literal Co",
    image: "frame-1261153219-3-668d2b050ac7a.webp",
    mobileImage: "Frame-1261153157-21.png",
    category: "Design",
    href: "/project/literal-co/",
    description:
      "The first retail media platform that unites on-site and off-site capabilities. We empower brands and retailers to seamlessly connect with their audiences wherever they are. With our innovative solutions.",
  },
  {
    name: "EMD",
    image: "frame-1261153220-1-668d297b1a2ea.webp",
    mobileImage: "Frame-1261153157-15.png",
    category: "Design & Development",
    href: "/project/emd/",
    description:
      "The EMD Construction Company landing page was designed with a clean, professional aesthetic to highlight their expertise and commitment to quality. The layout features a striking hero section with a bold headline and an image of a recent project to capture attention.",
  },
  {
    name: "Vanrock Holdings",
    image: "frame-1261153213-1-668d2867370a2.webp",
    mobileImage: "Frame-1261153157-13.png",
    category: "Design, Development",
    href: "/project/vanrock-holdings/",
    description:
      "VanRock is a project that exemplifies the fusion of design and functionality, aimed at delivering robust financial results for investors through expert management. We began by crafting intuitive and visually appealing designs in Figma, focusing on clarity and user experience.",
  },
  {
    name: "Performance Tours",
    image: "frame-1261153219-2-668d290a3710a.webp",
    mobileImage: "Frame-1261153157-19.png",
    category: "Design, Development",
    href: "/project/performance-tours/",
    description:
      "The website for Performance Tours showcases a thrilling rafting experience tailored for families seeking adventure in a bold and maximalist aesthetic. Emphasizing safety and excitement, the site’s vibrant visuals and dynamic layout capture the essence of exhilarating river.",
  },
];

const approachSteps = [
  {
    number: "01",
    icon: "icon-1.svg",
    title: "Clarify Objectives",
    description:
      "We'll Meet to collaborate on understanding your requirements, defining your Goals, and Strategising for Your Success.",
  },
  {
    number: "02",
    icon: "Group-39218.svg",
    title: "Meet Engineers",
    description:
      "We will save your time by efficiently connecting you with one of the Most Compatible Talents from Our Family of Experts.",
  },
  {
    number: "03",
    icon: "Group-39216.svg",
    title: "7 Day Try Out",
    description:
      "Experience a 7-day trial before deciding because we believe successful allocations build long-term partnerships.",
  },
  {
    number: "04",
    icon: "startup-1.svg",
    title: "Build Your Dream Team",
    description:
      "Embrace your chosen standout by adding them to your dream team & solidify a powerful partnership built for success.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Cody T.",
    role: "Co-Founder OfferForm",
    image: "Frame-1261153390.webp",
    logo: "Frame-1261153385.png",
    quote:
      "We recently brought on a team from DevDimensions for a real estate project. Their deep knowledge and extensive experience in the real estate sector, coupled with their proficiency in integrating various APIs for property listings and market data, have significantly boosted our project’s performance and quality.",
    project: "OfferForm",
  },
  {
    name: "Ryan S.",
    role: "Founder RSI Motorsports",
    image: "Frame-1261153392.webp",
    logo: "Frame-1261153385-1.png",
    quote:
      "DevDimensions team’s deep understanding of the automotive market and expertise in integrating the Turn14 API has truly transformed our platform. The attention to detail and commitment they showed ensured everything ran smoothly.",
    project: "RSI Motorsports",
  },
  {
    name: "Markus F.",
    role: "Founder & CEO TripSeer",
    image: "Frame-1261153391.webp",
    logo: "Frame-1261153383.png",
    quote:
      "DevDimensions designed and developed an exceptional travel booking system and agent dashboards for TripSeer. Their expertise, seamless communication, and timely delivery exceeded our expectations. Highly recommend them for their outstanding work!",
    project: "TripSeer",
  },
  {
    name: "Joshua S.",
    role: "Founder & CEO ThinkWrite",
    image: "Frame-1261153390-1.webp",
    logo: "Frame-1261153386.png",
    quote:
      "We hired couple of resources from DevDimensions, and they have been exceptional. Their expertise and dedication have greatly enhanced our project’s efficiency and quality. The team’s professionalism and seamless collaboration make DevDimensions a fantastic choice for staffing needs.",
    project: "ThinkWrite",
  },
];

const faqs = [
  {
    question: "Why wouldn’t I just hire a freelancer?",
    answer:
      "You could but it's a pain in the ass. In our experience, it often doesn’t end well unless you have experience managing freelancers, which is a headache in itself. We remove all the risk by managing the process and quality checks for you.",
  },
  {
    question: "What separates you? How do you vet your talent?",
    answer:
      [
        `We utilize the GWC method to ensure talent alignment. This ensures candidates "get" their role and your culture, genuinely "want" the job, and have the “capacity” both in skills and time to excel.`,
        `1 - Technical Test: Customized assessments for engineers/designers  to gauge proficiency in required tools and languages for the specific role they are being considered for.`,
        `2 -  Language Literacy Test: Evaluates spoken and written English capabilities, ensuring clarity in conveying technical and non-technical concepts. Effective communication is crucial for project management and collaboration.`,
        `3 -  Personality Tests (Myers-Briggs & Team Dimensions Profile):  These pinpoint a candidate's strengths and preferred role in team settings, ensuring smoother team dynamics and more successful placements.`,
        `4 - 9-Step Peer to Peer Evaluation (HHS System): Determines if a candidate embodies the traits of being Humble, Hungry, and Smart, which are crucial for fostering a collaborative and efficient work environment.  It gauges the humility, work ethic, and emotional intelligence of candidates, ensuring they're not just skilled but also a cultural fit for the organization.`,
      ].join(String.fromCharCode(10, 10)),
  },
  {
    question: "Can I set up video calls or check-ins with my resource(s)?",
    answer:
      "Our talents are equipped to handle video meetings, ensuring effective communication and project alignment.",
  },
  {
    question: 'What is the "7-day risk-free trial"?',
    answer:
      "It's our confidence in our talent. Try out our recommended standout for 7 days. If they aren't the right fit, there's no charge.",
  },
  {
    question: "Can I hire both individual resources and complete teams?",
    answer:
      "Absolutely! Whether you need one expert or an entire department, we've got you covered.",
  },
  {
    question: "How does Billing work?",
    answer:
      "We establish the monthly salary of an engineer by referencing their per-hour rate. This total is determined and processed by our firm.",
  },
  {
    question: "Are there any long-term contracts or commitments?",
    answer:
      "We believe in flexibility. While we aim for long-term partnerships, we don't bind you with lengthy contracts.",
  },
  {
    question: "Can I cancel if I don’t like it?",
    answer:
      "There's no contracts or long-term agreements. We give our clients the flexibility they deserve. You can pause or cancel at any time.\nHowever, If we have a dedicated resource that  has started work on your project before you decide to cancel, you won't be eligible for a refund.",
  },
  {
    question: "How do you make sure I am happy with the work?",
    answer:
      "Our customer experience team will provide bi-weekly check-ins to make sure the resource is performing to the DevDimensions standard with both you and our resources. Our CX team acts as an accountability partner to your dedicated resource.  They are available for scheduled meetings to discuss any mishaps or gaps that need to be addressed.",
  },
];

const partners = [
  "partner-virgo-labs.png",
  "partner-pittsburg.png",
  "partner-fhg.png",
  "partner-panoramic.png",
  "partner-cellianos.png",
  "partner-thinkrite.png",
];

function Header({
  menuOpen,
  onToggle,
  onContact,
}: {
  menuOpen: boolean;
  onToggle: () => void;
  onContact: () => void;
}) {
  const pathname = usePathname();

  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="DevDimensions home">
        <img src={asset("logo.svg")} alt="DevDimensions" />
      </a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/" aria-current={isNavActive(pathname, "/") ? "page" : undefined}>Home</a>
        <a href="/about-us/" aria-current={isNavActive(pathname, "/about-us/") ? "page" : undefined}>About Us</a>
        <a href="/case-studies/" aria-current={isNavActive(pathname, "/case-studies/") ? "page" : undefined}>Case Studies</a>
        <a href="/contact-us/" aria-current={isNavActive(pathname, "/contact-us/") ? "page" : undefined}>Contact Us</a>
      </nav>
      <button className="header-cta" type="button" onClick={onContact}>Get Free Consultation</button>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={onToggle}
      >
        {menuOpen ? <X size={25} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
      </button>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-html-visual" aria-label="DevDimensions hiring options">
      <div className="hero-browser-card">
        <div className="hero-browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-browser-rule" aria-hidden="true" />
        <p>
          Do you plan to <strong>Turn Your<br />Ideas into Reality?</strong>
        </p>
        <div className="hero-browser-actions">
          <a href="/contact-us/">Hire Engineer</a>
          <a href="/contact-us/">Hire Agency</a>
        </div>
      </div>

      <div className="hero-profile-card">
        <span className="hero-avatar-frame">
          <img className="hero-avatar" src={asset("hero-avatar.png")} alt="Nauman A. avatar" />
        </span>
        <div className="hero-profile-copy">
          <strong>
            <span className="hero-profile-desktop">Nauman A.</span>
            <span className="hero-profile-mobile">Austin M.</span>
          </strong>
          <span>
            <span className="hero-profile-desktop">Sr. Laravel Developer</span>
            <span className="hero-profile-mobile">MERN Stack Developer</span>
          </span>
          <em>25 projects completed</em>
        </div>
      </div>

      <div className="hero-coffee-card">
        Sip Coffee While We Bring Your Ideas
        <br />
        To Life With Flawless Execution!
      </div>
    </div>
  );
}

const hireBars = [
  { month: "Jan", height: 83, tone: "deep" },
  { month: "Feb", height: 77, tone: "soft" },
  { month: "Mar", height: 100, tone: "bright" },
  { month: "Apr", height: 72, tone: "deep" },
  { month: "May", height: 40, tone: "soft" },
] as const;

function HireGraphic() {
  return (
    <div className="hire-graphic" aria-label="Win history and submit-to-hire results">
      <div className="hire-graph-card">
        <p className="hire-graph-kicker">Win History - Across All Platforms</p>
        <h3>3:1 Submit to Hire</h3>
        <p className="hire-graph-rating"><strong>98%</strong> Job Success Rating</p>
      </div>

      <div className="hire-bars" aria-label="Monthly hiring results">
        {hireBars.map((bar) => (
          <div className="hire-bar" key={bar.month}>
            <span className={`hire-bar-fill hire-bar-fill--${bar.tone}`} style={{ height: `${bar.height}%` }} />
            <span className="hire-bar-label">{bar.month}</span>
          </div>
        ))}
      </div>

      <div className="hire-review-card">
        <p className="hire-review-count">
          <strong>3K</strong> <span>reviews</span>
          <span className="hire-review-stars" aria-label="5 out of 5 stars">★★★★★</span>
        </p>
        <div className="hire-review-meta">
          <span className="hire-review-arrow" aria-hidden="true">↗</span>
          <strong>4.9</strong>
        </div>
        <img
          className="hire-review-thumbnails"
          src={asset("review-thumbnails.png")}
          alt="Client review avatars"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}

function LogoRow({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) {
  // The live site keeps two identical 20-item groups in each rail. The
  // client-logo source list is shorter, so fill that group before cloning it
  // for the seamless loop.
  const groupLogos = logos.length < 20 ? [...logos, ...logos] : logos;
  const groups = [groupLogos, groupLogos];

  return (
    <div className={`marquee-row${reverse ? " marquee-row--reverse" : ""}`}>
      <div className="marquee-track">
        {groups.map((group, groupIndex) => (
          <div
            className="marquee-group"
            key={`marquee-group-${groupIndex}`}
            aria-hidden={groupIndex === 1}
          >
            {group.map((logo, index) => (
              <div className="chip-box" key={`${groupIndex}-${logo.label}-${index}`}>
                <img src={asset(logo.file)} alt={logo.label} loading="lazy" decoding="async" />
                <span>{logo.label}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("The contact endpoint returned an error.");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-backdrop">
      <dialog
        open
        className="contact-modal"
        data-lenis-prevent
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button className="modal-close" type="button" aria-label="Close contact form" onClick={onClose}>
          <X size={23} strokeWidth={1.5} />
        </button>
        <p className="eyebrow">Let’s build something brilliant</p>
        <h2 id="contact-modal-title">Unlock Success with Us</h2>
        <p className="modal-intro">Fill the form below and our team will get back to you at our earliest.</p>

        {status === "success" ? (
          <output className="form-status form-status--success">
            <span>Thank you — your message is on its way.</span>
            <button className="btn-theme" type="button" onClick={onClose}>
              Done <ArrowUpRight size={16} />
            </button>
          </output>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Your Name
              <input
                required
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@company.com"
              />
            </label>
            <label className="contact-form__wide">
              Company
              <input
                name="company"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                placeholder="Your company"
              />
            </label>
            <label className="contact-form__wide">
              Brief Message
              <textarea
                required
                name="message"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Tell us about your project"
                rows={4}
              />
            </label>
            <button className="btn-theme contact-form__wide" type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Get Free Consultation"} <ArrowUpRight size={17} />
            </button>
            {status === "error" ? (
              <p className="form-status form-status--error" role="alert">
                We couldn’t send this automatically. Please email <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>.
              </p>
            ) : null}
          </form>
        )}
      </dialog>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const testimonialMotion = useInfiniteCarouselMotion(testimonials.length);
  const {
    index: testimonialIndex,
    position: testimonialPosition,
    isTransitioning: testimonialIsTransitioning,
    setIndex: setTestimonialIndex,
    handleTransitionEnd: handleTestimonialTransitionEnd,
  } = testimonialMotion;
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [role, setRole] = useState("Full Stack Developer");
  const [specialty, setSpecialty] = useState("MERN Stack");
  const [outcome, setOutcome] = useState("Web Application");
  const [activeProblem, setActiveProblem] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const roles = ["Full Stack Developer", "Product Designer", "QA Testing Analyst"];
    const specialties = ["MERN Stack", "Prototyping", "Automated Testing"];
    const outcomes = ["Web Application", "UX Optimization", "Bug Detection"];
    let current = 0;
    const textTimer = window.setInterval(() => {
      if (document.hidden) return;
      current = (current + 1) % roles.length;
      setRole(roles[current]); setSpecialty(specialties[current]); setOutcome(outcomes[current]);
    }, 5000);
    const problemTimer = window.setInterval(() => {
      if (!document.hidden) setActiveProblem((value) => (value + 1) % 5);
    }, 2000);
    return () => { window.clearInterval(textTimer); window.clearInterval(problemTimer); };
  }, []);

  const openContact = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  useEffect(() => {
    const locked = menuOpen || modalOpen;
    if (locked) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      lenis?.start();
      document.body.style.removeProperty("overflow");
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      lenis?.start();
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, modalOpen, lenis]);

  useEffect(() => {
    // Lenis owns wheel input when available. Keep this small header workaround
    // only for the CSS-smooth fallback, where the browser can otherwise treat
    // the first gesture over a navigation link as a click.
    if (lenis) return;

    const handleHeaderWheel = (event: WheelEvent) => {
      const target = event.target;
      if (!(target instanceof Element) || !target.closest(".site-header")) return;
      if (event.ctrlKey || event.deltaY <= 0 || window.scrollY > 0) return;

      // A first wheel gesture over a navigation link can be consumed by the
      // browser's click/scroll negotiation. Forward that delta to the one
      // document scroll root so the hero never pauses at the header.
      event.preventDefault();
      window.scrollBy({ top: event.deltaY, left: event.deltaX, behavior: "smooth" });
    };

    window.addEventListener("wheel", handleHeaderWheel, { capture: true, passive: false });
    return () => window.removeEventListener("wheel", handleHeaderWheel, { capture: true });
  }, [lenis]);

  useEffect(() => {
    // The Lenis instance handles touch inertia globally. This listener is only
    // a fallback for browsers where the provider cannot initialize.
    if (lenis) return;

    let lastY: number | null = null;
    let startedOnHeader = false;

    const handleTouchStart = (event: TouchEvent) => {
      const target = event.target;
      startedOnHeader = target instanceof Element && Boolean(target.closest(".site-header"));
      lastY = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (!startedOnHeader || lastY === null || currentY === undefined) return;

      const deltaY = lastY - currentY;
      lastY = currentY;
      if (deltaY <= 0 || window.scrollY > 0 || document.body.style.overflow === "hidden") return;

      event.preventDefault();
      window.scrollBy({ top: deltaY, behavior: "smooth" });
    };

    const resetTouch = () => {
      lastY = null;
      startedOnHeader = false;
    };

    window.addEventListener("touchstart", handleTouchStart, { capture: true, passive: true });
    window.addEventListener("touchmove", handleTouchMove, { capture: true, passive: false });
    window.addEventListener("touchend", resetTouch, { capture: true, passive: true });
    window.addEventListener("touchcancel", resetTouch, { capture: true, passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart, { capture: true });
      window.removeEventListener("touchmove", handleTouchMove, { capture: true });
      window.removeEventListener("touchend", resetTouch, { capture: true });
      window.removeEventListener("touchcancel", resetTouch, { capture: true });
    };
  }, [lenis]);

  return (
    <div className="site-shell">
      <main>
        <section className="hero" id="top">
          <img className="hero-background" src={asset("home-hero-1.png")} alt="" aria-hidden="true" />
          <Header menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} onContact={openContact} />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>
                Build Your <span className="heading-accent">Dream Team</span>
              </h1>
              <p className="hero-lede">
                We&apos;ve scouted and interviewed thousands of game changers in technology: We match you with our top
                standouts – all while <span>cutting costs by 43% <span className="hero-and">and</span> reducing staffing times by 5x.</span>
              </p>
              <a className="btn-theme" href="/contact-us/">
                7 Days Free Trial
              </a>
            </div>
            <div className="hero-visual">
              <HeroVisual />
            </div>
          </div>
        </section>

        <section className="marquee-section" aria-label="Technology partners">
          <LogoRow logos={techLogos} />
          <LogoRow logos={clientLogos} reverse />
        </section>

        <section className="problems" id="about">
          <div className="shell">
            <div className="problems-intro">
              <h2>
                Finding All-Star <span>Talent</span> is hard
              </h2>
              <p>
                Navigating job posts? Brace for an inbox flood of mismatched candidates. Survive interviews,
                onboarding, and training only to grapple with subpar work and communication gaps. Frustration isn&apos;t
                the goal and you can do better.
              </p>
            </div>
            <div className="problem-map" data-active-problem={activeProblem} aria-label="Common hiring problems">
              <img className="map-line" src={asset("path-line.png")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <h2 className="company-badge">Your<br />Company</h2>
              <img className="problem-end" src={asset("Frame-1261153171.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              <div className="steps">
                <div className={`step s-1${activeProblem === 0 ? " active" : ""}`}>
                  <h5 className="title">
                    <img className="icon" src={asset("engineer.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <strong>Exhausting</strong><br />Interviews
                  </h5>
                  <div className="toltip">30+ interviews for every 1 job slot</div>
                </div>
                <div className={`step s-2${activeProblem === 1 ? " active" : ""}`}>
                  <h5 className="title">
                    <img className="icon" src={asset("clarity_talk-bubbles-line.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    Communication<br /><strong>Gaps</strong>
                  </h5>
                  <div className="toltip">Communication across time zones is slow, unclear, &amp; difficult</div>
                </div>
                <div className={`step s-3${activeProblem === 2 ? " active" : ""}`}>
                  <h5 className="title">
                    <img className="icon" src={asset("like-shapes.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <strong>Quality</strong><br />Issues
                  </h5>
                  <div className="toltip">Quality isn&apos;t worth money/time spent</div>
                </div>
                <div className={`step s-4${activeProblem === 3 ? " active" : ""}`}>
                  <h5 className="title">
                    <img className="icon" src={asset("uim_process.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <strong>Minimal</strong><br />Systems
                  </h5>
                  <div className="toltip">Minimal consistency across projects without systems</div>
                </div>
                <div className={`step s-5${activeProblem === 4 ? " active" : ""}`}>
                  <h5 className="title">
                    <img className="icon" src={asset("fluent_clock-28-regular.svg")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <strong>Timeline</strong><br />Constraints
                  </h5>
                  <div className="toltip">No guarantee on project timeline or completion</div>
                </div>
              </div>
            </div>
            <img
              className="problem-map-mobile"
              src={asset("Group-39236.png")}
              alt="A map of common hiring problems"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="welcome need" id="hiring">
          <div className="shell welcome-grid">
            <div className="welcome-copy">
              <h2>Welcome to DevDimensions</h2>
              <p>
                We solve those hiring headaches. No we aren’t doctors, just former exited founders with a proven
                process that has worked for us. From websites, applications, to enterprise solutions, we don’t just
                design + develop; we become your innovation partner.
              </p>
              <ul className="we-needs" aria-label="Build a hiring brief">
                <li>
                  <span className="start">I need a</span>
                  <span className="slide-hold">
                    <span className="experties-text-slider tex_slide1">
                      <span key={role} className="g-red rotating-word">{role}</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="start">that specializes in</span>
                  <span className="slide-hold">
                    <span className="experties-text-slider tex_slide2">
                      <span key={specialty} className="g-red rotating-word">{specialty}</span>
                    </span>
                  </span>
                </li>
                <li>
                  <span className="start">for</span>
                  <span className="slide-hold">
                    <span className="experties-text-slider tex_slide3">
                      <span key={outcome} className="g-red rotating-word">{outcome}</span>
                    </span>
                  </span>
                </li>
              </ul>
              <a className="btn-theme welcome-section-btn" href="/contact-us/" onClick={() => setMenuOpen(false)}>
                Request Quote
              </a>
            </div>
            <div className="welcome-art">
              <HireGraphic />
            </div>
          </div>
        </section>

        <section className="work" id="work">
          <div className="shell">
            <div className="work-heading">
              <div>
                <h2>
                  Discover What’s <span>Possible</span>
                </h2>
              </div>
              <a className="btn-theme" href="/case-studies/">
                View More Work <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <CaseStudyCarousel
            items={projects.map((project) => ({
              id: project.href,
              name: project.name,
              imageSrc: asset(project.image),
              mobileImageSrc: asset(project.mobileImage),
              categories: project.category.split(/,\s*/),
              href: project.href,
              description: project.description,
            }))}
            ariaLabel="Case studies carousel"
            className="work-viewport"
            trackClassName="work-track"
            itemSize="var(--work-card-width)"
            dotsClassName="work-dots"
          />
        </section>

        <section className="our-process" id="approach">
          <div className="shell">
            <div className="approach-heading">
              <h2>
                Our Approach
              </h2>
            </div>
          </div>
            <div className="process">
              <img className="circle" src={asset("semi-cirlce.svg")} alt="" aria-hidden="true" />
              <img className="logo" src={asset("logo-big.svg")} alt="" aria-hidden="true" />
              {approachSteps.map((step) => (
                <article className={`proces-box s-${Number(step.number)}`} key={step.number}>
                    <span className="no">{Number(step.number)}</span><br />
                    <img className="icon" src={asset(step.icon)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                    <h3>
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                </article>
              ))}
            </div>
        </section>

        <section className="utility" id="utility">
          <img className="utility-shape utility-shape--left" src={asset("left-shape-optimized.webp")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <img className="utility-shape utility-shape--right" src={asset("right-shape.webp")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="shell utility-grid">
            <div className="utility-copy">
              <h2>
                We’re the <span>Utility Player</span>
              </h2>
              <p>
                Whether you need niche expertise or an entire project force, we’ll work directly with you to bring
                your project to life helping cover any skill gaps along the way.
              </p>
              <ul className="check-list">
                <li><img src={asset("Check-Circle.svg")} alt="" aria-hidden="true" />Hire Individual Resource</li>
                <li><img src={asset("Check-Circle.svg")} alt="" aria-hidden="true" />Hire Multiple Resources</li>
                <li><img src={asset("Check-Circle.svg")} alt="" aria-hidden="true" />Hire Entire Team or Department</li>
              </ul>
              <button className="btn-theme" type="button" onClick={openContact}>
                Get Free Consultation <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="hiring-cards">
              <a className="hire-box" href="/contact-us/" aria-label="Hire a team member">
                <img className="icon" src={asset("hire-entire-team.png")} width={100} height={116} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div className="hire-box-copy">
                <h3><span className="hire-heading">Hire Team Member</span></h3>
                <p>
                  Have a team but need to add a key player or two? Draft your MVP&apos;s here. Our curated pool of talent
                  seamlessly integrates with your existing team, ensuring rapid and efficient results.
                </p>
                </div>
              </a>
              <a className="hire-box" href="/contact-us/" aria-label="Hire an entire team">
                <img className="icon" src={asset("Group-626683-2.svg")} width={147} height={106} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div className="hire-box-copy">
                <h3><span className="hire-heading">Hire Entire Team</span></h3>
                <p>
                  Have an idea but no team to build it? Stack your team or department with our designers, developers,
                  and project managers to ensure your core focus remains on business growth.
                </p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="partners" aria-labelledby="partners-title">
          <div className="shell">
            <h2 id="partners-title">
              Our <span>Partners</span>
            </h2>
            <div className="partner-grid">
              {partners.map((partner, index) => (
                <div className="partner-logo" key={partner}>
                  <img src={asset(partner)} alt={`DevDimensions partner ${index + 1}`} loading="lazy" decoding="async" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <div className="shell testimonial-heading">
            <h2>
              Don’t Take Our <span>Word</span> for it
            </h2>
          </div>
          <div className="testimonial-viewport" aria-label="Testimonials carousel" {...testimonialMotion.handlers}>
            <div
              className={`testimonial-track${testimonialIsTransitioning ? "" : " is-loop-reset"}`}
              style={{ transform: `translateX(calc(-1 * ${testimonialPosition} * var(--testimonial-step)))` }}
              onTransitionEnd={handleTestimonialTransitionEnd}
            >
              {[testimonials[testimonials.length - 1], ...testimonials, testimonials[0]].map((testimonial, physicalIndex) => {
                const index = (physicalIndex - 1 + testimonials.length) % testimonials.length;
                return (
                <article className={`testimonial-card${index === testimonialIndex ? " is-active" : ""}`} key={`${testimonial.name}-${physicalIndex}`}>
                  <img
                    className="testimonial-card-image"
                    src={asset(testimonial.image)}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="testimonial-copy">
                    <p className="testimonial-quote">“{testimonial.quote}”</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                    <div className="testimonial-project">
                      <span>Project:{testimonial.project}</span>
                      <img className="testimonial-logo" src={asset(testimonial.logo)} alt={testimonial.project} loading="lazy" decoding="async" />
                    </div>
                  </div>
                </article>
                );
              })}
            </div>
          </div>
          <div className="testimonial-dots" aria-label="Choose a testimonial">
            {testimonials.map((testimonial, index) => (
              <button
                type="button"
                key={testimonial.name}
                className={index === testimonialIndex ? "is-active" : ""}
                aria-label={`Show testimonial from ${testimonial.name}`}
                aria-pressed={index === testimonialIndex}
                onClick={() => setTestimonialIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="faqs" id="faq">
          <div className="shell faq-grid">
            <div className="faq-sidebar">
              <h2>
                Frequently Asked <span>Questions</span>
              </h2>
              <p className="faq-subtitle">We value long-term partnerships, and we bet you do too.</p>
              <a className="btn-theme faq-btn" href="/contact-us/">Book a Free Call</a>
            </div>
            <div className="faq-content">
              <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = faqOpen === index;
                return (
                  <article className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setFaqOpen(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={19} />
                    </button>
                    <div className="faq-answer-wrap" aria-hidden={!isOpen}><div><p className="faq-answer">{faq.answer}</p></div></div>
                  </article>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="shell">
            <div className="cta-box">
              <h2>
                Connect With The <span>Top 3%</span> Where
                <br className="cta-title-break" />
                Brilliance Ignites Extraordinary Achievements.
              </h2>
              <div className="cta-actions">
                <a className="btn-theme" href="/contact-us/">
                  Hire Engineers
                  <img className="cta-button-arrow" src="/theme-assets/ArrowUpLeft.svg" alt="" aria-hidden="true" />
                </a>
                <a className="btn-ghost" href="/contact-us/">
                  Develop With Us
                  <img className="cta-button-arrow" src="/theme-assets/ArrowUpLeft.svg" alt="" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="shell">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="/" aria-label="DevDimensions home">
                <img src={asset("logo.svg")} alt="DevDimensions" />
              </a>
              <p className="footer-tagline">We believe in growing together by empowering businesses through technology.</p>
              <div className="social-links" aria-label="Social links">
                <a href="https://www.facebook.com/devdimensions/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <span className="social-mark social-mark--facebook" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/devdimensions?originalSubdomain=pk" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <span className="social-mark social-mark--linkedin" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/devdimensions.official" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span className="social-mark social-mark--instagram" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div className="footer-link-column">
              <h3>Company</h3>
              <a href="/about-us/">About Us</a>
              <a href="/case-studies/">Case Studies</a>
              <a href="#faq">FAQs</a>
              <a href="https://www.careers-page.com/devdimensions#openings" target="_blank" rel="noreferrer">
                Careers
              </a>
            </div>
            <div className="footer-link-column">
              <h3>Work with us</h3>
              <button type="button" onClick={openContact}>Hire Engineers</button>
              <button type="button" onClick={openContact}>Develop With Us</button>
              <button type="button" onClick={openContact}>Get Consultation</button>
            </div>
          <div className="office-grid">
            <section className="office">
              <h3 className="office-heading">
                <img src={asset("us-flag.png")} alt="" aria-hidden="true" /> United States
              </h3>
              <ul className="office-list">
                <li>
                  <img src={asset("icon-location.svg")} alt="" aria-hidden="true" />
                  <a
                    className="office-address"
                    href="https://www.google.com/maps/search/?api=1&query=10788+Lake+Wynds%2C+Boynton+Beach%2C+FL"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open the United States office in Google Maps"
                  >
                    10788 Lake Wynds, Boynton Beach, FL
                  </a>
                </li>
                <li>
                  <img src={asset("icon-mobile.svg")} alt="" aria-hidden="true" />
                  <span className="office-contact">
                    <a href="tel:+15613360919">+1 (561) 336-0919</a>
                    <a href="mailto:sales@devdimensions.com">sales@devdimensions.com</a>
                  </span>
                </li>
              </ul>
            </section>
            <section className="office">
              <h3 className="office-heading">
                <img src={asset("pak-flag.png")} alt="" aria-hidden="true" /> Pakistan
              </h3>
              <ul className="office-list">
                <li>
                  <img src={asset("icon-location.svg")} alt="" aria-hidden="true" />
                  <a
                    className="office-address"
                    href="https://www.google.com/maps/search/?api=1&query=26+K+Service+Rd%2C+Block+K%2C+Phase+2%2C+Johar+Town%2C+Lahore%2C+Pakistan"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open the Pakistan office in Google Maps"
                  >
                    26 K Service Rd, Block K, Phase 2, Johar Town Lahore, Pakistan.
                  </a>
                </li>
                <li>
                  <img src={asset("icon-mobile.svg")} alt="" aria-hidden="true" />
                  <span className="office-contact">
                    <a href="tel:+924232296908">+92 42 322 96908</a>
                    <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>
                  </span>
                </li>
              </ul>
            </section>
          </div>

          </div>

          <div className="copyright">
            <span>All copyrights by DevDimensions, LLC © 2024 -</span>
            <div className="copyright-link">
              <a href="https://www.careers-page.com/devdimensions#openings" target="_blank" rel="noreferrer">Careers</a>
            </div>
          </div>
        </div>
      </footer>

      {menuOpen ? <MobileNavigation onClose={() => setMenuOpen(false)} onContact={openContact} /> : null}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
