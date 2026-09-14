"use client";
/* oxlint-disable next/no-img-element */

import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export const siteAsset = (name: string) => /^https?:\/\//.test(name) ? name : `/assets/${name}`;
export const themeAsset = (name: string) => `/theme-assets/${name}`;

export type ThemeProject = {
  slug: string;
  name: string;
  category: string;
  categories?: string[];
  image: string;
  mobileImage: string;
  description: string;
};

export const themeProjects: ThemeProject[] = [
  {
    slug: "literal-co",
    name: "Literal Co",
    category: "Design",
    image: "Frame-1261153157-21.png",
    mobileImage: "Frame-1261153157-21.png",
    description:
      "The first retail media platform that unites on-site and off-site capabilities. We empower brands and retailers to seamlessly connect with their audiences wherever they are. With our innovative solutions.",
  },
  {
    slug: "emd",
    name: "EMD",
    category: "Design & Development",
    image: "Frame-1261153157-15.png",
    mobileImage: "Frame-1261153157-15.png",
    description:
      "The EMD Construction Company landing page was designed with a clean, professional aesthetic to highlight their expertise and commitment to quality. The layout features a striking hero section with a bold headline and an image of a recent project to capture attention.",
  },
  {
    slug: "vanrock-holdings",
    name: "Vanrock Holdings",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-13.png",
    mobileImage: "Frame-1261153157-13.png",
    description:
      "VanRock is a project that exemplifies the fusion of design and functionality, aimed at delivering robust financial results for investors through expert management. We began by crafting intuitive and visually appealing designs in Figma, focusing on clarity and user experience.",
  },
  {
    slug: "performance-tours",
    name: "Performance Tours",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-19.png",
    mobileImage: "Frame-1261153157-19.png",
    description:
      "The website for Performance Tours showcases a thrilling rafting experience tailored for families seeking adventure in a bold and maximalist aesthetic. Emphasizing safety and excitement, the site’s vibrant visuals and dynamic layout capture the essence of exhilarating river.",
  },
  {
    slug: "express-flooring",
    name: "Express Flooring",
    category: "Design, Development",
    categories: ["Design", "Development"],
    image: "Frame-1261153157-10.png",
    mobileImage: "Frame-1261153157-10.png",
    description:
      "Express Flooring” is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic.",
  },
  {
    slug: "soy-kitty",
    name: "Soy Kitty",
    category: "Design",
    image: "Frame-1261153157-7.png",
    mobileImage: "Frame-1261153157-7.png",
    description:
      "“Soy Kitty” is a thoughtfully designed website that caters to environmentally conscious cat owners seeking non-toxic, odor-free, and eco-friendly cat litter options. The site features a simple yet elegant layout, utilizing soothing pastel colors to create a calming and user-friendly experience.",
  },
  {
    slug: "walter-on-wire",
    name: "Walter On Wine",
    category: "Design",
    image: "frame-1261153220-668d24ff54e6f.webp",
    mobileImage: "Group-626684-optimized-scaled.webp",
    description:
      "A content-rich wine platform that makes discovery, education, and connection feel personal.",
  },
];

type ProjectDetail = ThemeProject & {
  detailDescription: string;
  deliverables: string[];
  typography: string[];
  palette: string[];
  gallery: string[];
  mobileGallery: string[];
};

const details: Record<string, Partial<ProjectDetail>> = {
  "literal-co": {
    detailDescription:
      "The first retail media platform that unites on-site and off-site capabilities. We empower brands and retailers to seamlessly connect with their audiences wherever they are. With our innovative solutions, you can effortlessly manage and optimize your advertising campaigns across multiple channels, all from one central platform. Our goal is to help you maximize your reach, engagement, and ROI by providing the tools and insights needed to make data-driven decisions.",
    deliverables: ["User Journey", "UX /UI Design", "Project Documentation", "Story Writing"],
    typography: ["Clash Display", "Regular", "Medium", "Bold"],
    palette: ["#121212", "#3E4B69", "#F5F7FA", "#D8A75C"],
    gallery: [
      "https://devdimensions.com/wp-content/uploads/2024/07/Frame-1261153219-8.svg",
      "https://devdimensions.com/wp-content/uploads/2024/07/Frame-1261153220-11.svg",
      "https://devdimensions.com/wp-content/uploads/2024/07/Frame-1261153220-10.svg",
      "https://devdimensions.com/wp-content/uploads/2024/07/Frame-1261153219-7.svg",
    ],
    mobileGallery: [
      "https://devdimensions.com/wp-content/uploads/2024/07/About-Us.png",
      "https://devdimensions.com/wp-content/uploads/2024/07/Advertisers.png",
      "https://devdimensions.com/wp-content/uploads/2024/07/retailers.png",
      "https://devdimensions.com/wp-content/uploads/2024/07/Homepage.png",
    ],
  },
  emd: {
    detailDescription:
      "The EMD Construction Company landing page was designed with a clean, professional aesthetic to highlight their expertise and commitment to quality. The layout features a striking hero section and a confident content system that makes the company’s work easy to understand.",
    deliverables: ["UX /UI Design", "Responsive Development", "Project Documentation"],
    typography: ["Inter", "Regular", "Medium", "Bold"],
    palette: ["#111827", "#2563EB", "#F3F4F6", "#FFFFFF"],
  },
  "vanrock-holdings": {
    detailDescription:
      "VanRock is a project that exemplifies the fusion of design and functionality, aimed at delivering robust financial results for investors through expert management. We began by crafting intuitive and visually appealing designs in Figma, focusing on clarity and user experience.",
    deliverables: ["Product Strategy", "UX /UI Design", "Responsive Development"],
    typography: ["Gilroy", "Regular", "Medium", "SemiBold"],
    palette: ["#0B0B0B", "#B51E17", "#E7E7E7", "#FFFFFF"],
  },
  "performance-tours": {
    detailDescription:
      "The website for Performance Tours showcases a thrilling rafting experience tailored for families seeking adventure in a bold and maximalist aesthetic. Emphasizing safety and excitement, the site’s vibrant visuals and dynamic layout capture the essence of an exhilarating river experience.",
    deliverables: ["Brand Direction", "UX /UI Design", "Web Development"],
    typography: ["Bicyclette", "Regular", "Bold", "Black"],
    palette: ["#101010", "#F5A623", "#F5F1E8", "#2C7A7B"],
  },
  "express-flooring": {
    detailDescription:
      "Express Flooring is a dynamic website specializing in interior flooring solutions and products, including a wide range of tiles. Utilizing blue as the accent color, the design conveys a sense of trust and professionalism while maintaining a modern and clean aesthetic.",
    deliverables: ["Information Architecture", "UX /UI Design", "Web Development"],
    typography: ["Gilroy", "Regular", "Medium", "Bold"],
    palette: ["#163C75", "#4A90E2", "#F4F8FC", "#FFFFFF"],
  },
  "soy-kitty": {
    detailDescription:
      "Soy Kitty is a thoughtfully designed website that caters to environmentally conscious cat owners seeking non-toxic, odor-free, and eco-friendly cat litter options. The site features a simple yet elegant layout, utilizing soothing pastel colors to create a calming and user-friendly experience.",
    deliverables: ["Brand Strategy", "UX /UI Design", "Web Development"],
    typography: ["Gilroy", "Light", "Regular", "SemiBold"],
    palette: ["#EFE7DC", "#D5B7A5", "#7A5C53", "#FAF8F3"],
  },
};

export function getProject(slug: string): ProjectDetail {
  const project = themeProjects.find((item) => item.slug === slug) ?? themeProjects[0];
  const extra = details[project.slug] ?? {};
  return {
    ...project,
    detailDescription: extra.detailDescription ?? project.description,
    deliverables: extra.deliverables ?? ["UX /UI Design", "Responsive Development"],
    typography: extra.typography ?? ["Gilroy", "Regular", "Medium", "SemiBold"],
    palette: extra.palette ?? ["#0B0B0B", "#B51E17", "#E7E7E7", "#FFFFFF"],
    gallery: extra.gallery ?? [project.image, project.mobileImage, project.image, project.mobileImage],
    mobileGallery: extra.mobileGallery ?? [project.mobileImage, project.mobileImage, project.mobileImage, project.mobileImage],
  };
}

function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!open) return null;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const response = await fetch("/backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Unable to send message");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="modal-backdrop">
      <dialog open className="contact-modal" aria-labelledby="contact-modal-title">
        <button className="modal-close" type="button" aria-label="Close contact form" onClick={onClose}>
          <X size={23} strokeWidth={1.5} />
        </button>
        <h2 id="contact-modal-title">Unlock Success with Us</h2>
        <p className="modal-intro">Fill the form below and our team will get back to you at our earliest.</p>
        {status === "success" ? (
          <output className="form-status form-status--success">
            <span>Thank you — your message is on its way.</span>
            <button className="btn-theme" type="button" onClick={onClose}>Done <ArrowUpRight size={16} /></button>
          </output>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Your Name<input required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@company.com" /></label>
            <label className="contact-form__wide">Brief Message<textarea required rows={4} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Tell us about your project" /></label>
            <button className="btn-theme contact-form__wide" type="submit" disabled={status === "submitting"}>{status === "submitting" ? "Sending…" : "Get Free Consultation"} <ArrowUpRight size={17} /></button>
            {status === "error" ? <p className="form-status form-status--error" role="alert">Please email <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>.</p> : null}
          </form>
        )}
      </dialog>
    </div>
  );
}

function SiteHeader({ menuOpen, onToggle, onContact }: { menuOpen: boolean; onToggle: () => void; onContact: () => void }) {
  return (
    <header className="site-header shell">
      <a className="brand" href="/" aria-label="DevDimensions home"><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/about-us/">About Us</a>
        <a href="/case-studies/">Case Studies</a>
        <a href="/contact-us/">Contact Us</a>
      </nav>
      <button className="header-cta" type="button" onClick={onContact}>Get Free Consultation</button>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={onToggle}>
        {menuOpen ? <X size={25} strokeWidth={1.5} /> : <Menu size={25} strokeWidth={1.5} />}
      </button>
    </header>
  );
}

function MobileNavigation({ onClose, onContact }: { onClose: () => void; onContact: () => void }) {
  return (
    <aside className="menu-panel" aria-label="Main navigation">
      <div className="menu-panel-header">
        <a className="brand" href="/" onClick={onClose}><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
        <button className="menu-close" type="button" aria-label="Close navigation" onClick={onClose}><X size={25} strokeWidth={1.5} /></button>
      </div>
      <nav className="menu-links">
        <a href="/" onClick={onClose}>Home</a>
        <a href="/about-us/" onClick={onClose}>About Us</a>
        <a href="/case-studies/" onClick={onClose}>Case Studies</a>
        <a href="/contact-us/" onClick={onClose}>Contact Us</a>
      </nav>
      <div className="menu-consult">
        <p>Have a project in mind?</p>
        <button className="btn-theme" type="button" onClick={onContact}>Get Free Consultation <ArrowUpRight size={17} /></button>
      </div>
    </aside>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="brand" href="/" aria-label="DevDimensions home"><img src={siteAsset("logo.svg")} alt="DevDimensions" /></a>
            <p className="footer-tagline">We believe in growing together by empowering businesses through technology.</p>
            <div className="social-links" aria-label="Social links">
              <a href="https://www.facebook.com/devdimensions/" target="_blank" rel="noreferrer"><span className="social-mark social-mark--facebook" aria-hidden="true" /><span>Facebook</span></a>
              <a href="https://www.linkedin.com/company/devdimensions?originalSubdomain=pk" target="_blank" rel="noreferrer"><span className="social-mark social-mark--linkedin" aria-hidden="true" /><span>LinkedIn</span></a>
              <a href="https://www.instagram.com/devdimensions.official" target="_blank" rel="noreferrer"><span className="social-mark social-mark--instagram" aria-hidden="true" /><span>Instagram</span></a>
            </div>
          </div>
          <div className="office-grid">
            <section className="office">
              <h3 className="office-heading"><img src={themeAsset("us-flag.png")} alt="" aria-hidden="true" />United States</h3>
              <ul className="office-list">
                <li><img src={themeAsset("icon-location.svg")} alt="" aria-hidden="true" />10788 Lake Wynds, Boynton Beach, FL</li>
                <li><img src={themeAsset("icon-mobile.svg")} alt="" aria-hidden="true" /><span className="office-contact"><a href="tel:+15613360919">+1 (561) 336-0919</a><a href="mailto:sales@devdimensions.com">sales@devdimensions.com</a></span></li>
              </ul>
            </section>
            <section className="office">
              <h3 className="office-heading"><img src={themeAsset("pak-flag.png")} alt="" aria-hidden="true" />Pakistan</h3>
              <ul className="office-list">
                <li><img src={themeAsset("icon-location.svg")} alt="" aria-hidden="true" />26 K Service Rd, Block K, Phase 2, Johar Town Lahore, Pakistan.</li>
                <li><img src={themeAsset("icon-mobile.svg")} alt="" aria-hidden="true" /><span className="office-contact"><a href="tel:+924232296908">+92 42 322 96908</a><a href="mailto:info@devdimensions.com">info@devdimensions.com</a></span></li>
              </ul>
            </section>
          </div>
        </div>
        <div className="copyright"><span>All copyrights by DevDimensions, LLC © 2024 -</span><div className="copyright-link"><a href="https://www.careers-page.com/devdimensions#openings" target="_blank" rel="noreferrer">Careers</a></div></div>
      </div>
    </footer>
  );
}

export function CtaBand({ onContact }: { onContact: () => void }) {
  return (
    <section className="cta">
      <div className="shell">
        <div className="cta-box">
          <h2>Connect With The <span>Top 3%</span> Where Brilliance Ignites Extraordinary Achievements.</h2>
          <div className="cta-actions">
            <button className="btn-theme" type="button" onClick={onContact}>Hire Engineers <ArrowUpRight size={17} /></button>
            <a className="btn-ghost" href="/contact-us/">Develop With Us <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SitePageFrame({ children, showCta = true, className = "" }: { children: ReactNode; showCta?: boolean; className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const openContact = () => { setMenuOpen(false); setModalOpen(true); };

  useEffect(() => {
    if (menuOpen || modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setMenuOpen(false); setModalOpen(false); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.removeProperty("overflow"); window.removeEventListener("keydown", onKeyDown); };
  }, [menuOpen, modalOpen]);

  return (
    <div className={`site-shell theme-page ${className}`}>
      <SiteHeader menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onContact={openContact} />
      {menuOpen ? <MobileNavigation onClose={() => setMenuOpen(false)} onContact={openContact} /> : null}
      {children}
      {showCta ? <CtaBand onContact={openContact} /> : null}
      <SiteFooter />
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

function ThemeHero({ variant, title, description }: { variant: "about" | "cases" | "contact"; title: ReactNode; description: string }) {
  const isAbout = variant === "about";
  return (
    <section className={`theme-hero theme-hero--${variant}`}>
      <img className="theme-hero-background" src={themeAsset("home-hero.png")} alt="" aria-hidden="true" />
      <div className="shell theme-hero-inner">
        <div className="theme-hero-copy">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {isAbout ? (
          <a className="theme-get-touch" href="/contact-us/" aria-label="Get in touch">
            <img className="theme-get-circle" src={themeAsset("about-get.png")} alt="" aria-hidden="true" />
            <img className="theme-get-arrow" src={themeAsset("get-arrow.png")} alt="" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function AboutPage() {
  const coreValues = [
    {
      key: "fun",
      className: "top",
      icon: "core-value-fist.png",
      content: <><strong>Fun &amp; Entertainment</strong><span>is not skipped</span></>,
    },
    {
      key: "accountable",
      className: "left",
      icon: "core-value-shield.png",
      content: <>Everyone is equally<span><strong>accountable</strong></span></>,
    },
    {
      key: "honesty",
      className: "right",
      icon: "core-value-shield.png",
      content: <><strong>Honesty is our</strong><span>Guiding Principle</span></>,
    },
    {
      key: "empathy",
      className: "bottom-left",
      icon: "core-value-shield.png",
      content: <>We show <strong>Empathy</strong><span>for each other</span></>,
    },
    {
      key: "growth",
      className: "bottom-right",
      icon: "core-value-growth.png",
      content: <>We believe in<span><strong>growing together</strong></span></>,
    },
  ] as const;

  return (
    <SitePageFrame showCta={false} className="theme-page--about">
      <ThemeHero
        variant="about"
        title={<>Discover DevDimensions:<br /><span>Your Premier Talent Partner</span></>}
        description="At DD, we’re all about the people. From our talent, teams, to partners: We believe the real magic lies in harnessing human potential. Winning, to us, means creating lasting relationships with our partners. We want to run marathons with you, not just the sprints."
      />
      <section className="theme-mission">
        <div className="shell">
          <div className="theme-mission-grid">
            <article className="theme-mission-card"><img src={themeAsset("our-mision.png")} alt="" aria-hidden="true" /><div><h2>Our Mission</h2><p>Our mission is to enable the talent, cultivating a fertile ground where professional growth and innovation bloom. Our aim is to channel this reservoir of expertise into building success stories for clients.</p></div></article>
            <article className="theme-mission-card"><img src={themeAsset("our-vision.png")} alt="" aria-hidden="true" /><div><h2>Our vision</h2><p>Our vision is a world where every company has access to a dream team to accelerate their success. We provide a pain free way to source global talent, setting the stage for a lifetime of innovation.</p></div></article>
          </div>
        </div>
      </section>
      <section className="theme-core-values" aria-labelledby="core-values-title">
        <div className="shell">
          <h2 id="core-values-title">Our Core Values</h2>
          <div className="core-values-art" role="list" aria-label="DevDimensions core values">
            <span className="core-values-orbit core-values-orbit--inner" aria-hidden="true" />
            <span className="core-values-orbit core-values-orbit--middle" aria-hidden="true" />
            <span className="core-values-orbit core-values-orbit--outer" aria-hidden="true" />
            <div className="core-values-center" aria-hidden="true">
              <img src={themeAsset("core-values-logo.png")} alt="" />
            </div>
            {coreValues.map((value) => (
              <article className={`core-value core-value--${value.className}`} key={value.key} role="listitem">
                <img src={themeAsset(value.icon)} alt="" aria-hidden="true" />
                <p>{value.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="theme-join">
        <div className="shell">
          <div className="theme-join-inner">
            <img src={themeAsset("logo_d.svg")} alt="DevDimensions" />
            <h2>Your turn to step up to the plate!</h2>
            <p>You&apos;ve gotten to know the line-up behind DevDimensions, now it&apos;s our turn to learn about your game plan. Join our team and let’s huddle to talk strategy.</p>
            <a className="btn-theme" href="/contact-us/">Let&apos;s Dive In <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </section>
    </SitePageFrame>
  );
}

function CaseStudyCard({ project, index }: { project: ThemeProject; index: number }) {
  return (
    <article className="theme-case-card">
      <img className={`theme-case-shape theme-case-shape--${index % 2 ? "left" : "right"}`} src={themeAsset(index % 2 ? "left-shape.png" : "rihght-shape.png")} alt="" aria-hidden="true" />
      <div className="theme-case-grid">
        <div className="theme-case-media"><a href={`/project/${project.slug}/`}><picture><source media="(max-width: 767px)" srcSet={siteAsset(project.mobileImage)} /><img src={siteAsset(project.image)} alt={`${project.name} project`} /></picture></a></div>
        <div className="theme-case-copy">
          <div className="theme-case-topline"><span>{project.category}</span><a className="square-arrow" href={`/project/${project.slug}/`} aria-label={`Open ${project.name}`}><ArrowUpRight size={20} /></a></div>
          <h2><a href={`/project/${project.slug}/`}>{project.name}</a>{(project.categories ?? [project.category]).map((category) => <span className="theme-case-category" key={category}>{category}</span>)}</h2>
          <p>{project.description}</p>
          <div className="theme-case-tools"><span>Tools:</span><img src={siteAsset("tool-1.png")} alt="Design tool" /><img src={siteAsset("tool-2.png")} alt="Development tool" /></div>
          <a className="theme-case-arrow" href={`/project/${project.slug}/`} aria-label={`View ${project.name}`}><ArrowUpRight size={23} /></a>
        </div>
      </div>
    </article>
  );
}

export function CaseStudiesPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <SitePageFrame className="theme-page--cases">
      <ThemeHero
        variant="cases"
        title={<>We Win, <span>When You Do.</span></>}
        description="You can’t build a winning product without a winning team. Discover what’s possible with our seasoned designers, veteran developers, & technical strategists."
      />
      <section className="theme-case-list">
        <div className="shell">
          <div className="theme-case-items">{themeProjects.slice(0, visibleCount).map((project, index) => <CaseStudyCard key={project.slug} project={project} index={index} />)}</div>
          {visibleCount < themeProjects.length ? <div className="theme-case-more"><button className="btn-theme" type="button" onClick={() => setVisibleCount(themeProjects.length)}>Show More <ArrowUpRight size={17} /></button></div> : null}
        </div>
      </section>
    </SitePageFrame>
  );
}

type ContactStepData = { name: string; company: string; email: string; phone: string; project: string; timeline: string; budget: string; message: string };

function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState<ContactStepData>({ name: "", company: "", email: "", phone: "", project: "", timeline: "", budget: "", message: "" });
  const update = (key: keyof ContactStepData, value: string) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    if (step < 3) { setStep((current) => current + 1); return; }
    setError(false);
    try {
      const response = await fetch("/backend/contact.php", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: form.name, email: form.email, company: form.company, message: `${form.project}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\n${form.message}` }) });
      if (!response.ok) throw new Error("Unable to send message");
      setSubmitted(true);
    } catch { setError(true); }
  };

  if (submitted) return <div className="theme-form-success"><img src={themeAsset("thank-you.svg")} alt="" aria-hidden="true" /><h2>We Heard You!</h2><p>Your message has been received. We will get back to you as soon as possible.</p><a className="btn-theme" href="/">Return To Home <ArrowUpRight size={17} /></a></div>;

  return (
    <form className="theme-form" onSubmit={handleSubmit}>
      <div className="theme-form-card">
        <div className="theme-form-progress" aria-label="Form progress">
          {["Your Information", "Project Information", "Let’s finalize"].map((label, index) => <div className={step === index + 1 ? "is-active" : step > index + 1 ? "is-complete" : ""} key={label}><span>0{index + 1}</span><strong>{label}</strong></div>)}
        </div>
        {step === 1 ? <div className="theme-form-fields"><label>Full Name<input required value={form.name} onChange={(event) => update("name", event.target.value)} /></label><label>Company/Organization<input value={form.company} onChange={(event) => update("company", event.target.value)} /></label><label>Your Email<input required type="email" value={form.email} onChange={(event) => update("email", event.target.value)} /></label><label>Contact Number<input value={form.phone} onChange={(event) => update("phone", event.target.value)} /></label></div> : null}
        {step === 2 ? <div className="theme-form-fields"><label className="theme-form-wide">Tell us about your project<textarea required rows={6} value={form.project} onChange={(event) => update("project", event.target.value)} /></label><label>Desired timeline<input value={form.timeline} onChange={(event) => update("timeline", event.target.value)} placeholder="e.g. 8 weeks" /></label><label>Estimated budget<select value={form.budget} onChange={(event) => update("budget", event.target.value)}><option value="">Select one</option><option>Under $10,000</option><option>$10,000–$25,000</option><option>$25,000+</option></select></label></div> : null}
        {step === 3 ? <div className="theme-form-fields"><label className="theme-form-wide">Anything else we should know?<textarea rows={8} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="Share any goals, constraints, or context." /></label></div> : null}
      </div>
      <div className="theme-form-actions">{step > 1 ? <button className="theme-form-back" type="button" onClick={() => setStep((current) => current - 1)}>Back</button> : <span /> }<button className="btn-theme" type="submit">{step === 3 ? "Submit" : "Next"} <ArrowUpRight size={17} /></button></div>
      {error ? <p className="form-status form-status--error" role="alert">We couldn’t send this automatically. Please email <a href="mailto:info@devdimensions.com">info@devdimensions.com</a>.</p> : null}
    </form>
  );
}

export function ContactPage() {
  return (
    <SitePageFrame className="theme-page--contact">
      <section className="theme-contact-hero">
        <img className="theme-hero-background" src={themeAsset("home-hero.png")} alt="" aria-hidden="true" />
        <div className="shell theme-contact-inner">
          <div className="theme-hero-copy">
            <h1>Let’s Collaborate. <span>We’re All Ears!</span></h1>
            <p>Unlock the gateway to collaboration by sharing your personal details, project aspirations, and desired timelines. Let our connection become the bridge that brings your vision to life, as we navigate together towards a shared destination.</p>
          </div>
          <div className="theme-contact-form"><ContactForm /></div>
        </div>
      </section>
    </SitePageFrame>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = getProject(slug);
  const related = themeProjects.filter((item) => item.slug !== project.slug).slice(0, 5);
  return (
    <SitePageFrame className="theme-page--project">
      <section className="project-hero">
        <img className="project-hero-background" src={themeAsset("home-hero.png")} alt="" aria-hidden="true" />
        <img className="project-hero-cover" src={siteAsset(project.image)} alt={`${project.name} project`} />
        <div className="shell project-hero-content">
          <div className="project-title-row"><h1>{project.name}</h1><span className="theme-case-category">{project.category}</span><div className="project-tools"><img src={siteAsset("tool-1.png")} alt="Design tool" /><img src={siteAsset("tool-2.png")} alt="Development tool" /></div></div>
          <p>{project.detailDescription}</p>
        </div>
      </section>
      <section className="project-specs"><div className="shell project-spec-grid"><div><h2>Deliverables</h2><ul>{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h2>Typography</h2><ul className="project-type-list">{project.typography.map((item, index) => <li key={item} className={`type-${index}`}>{item}</li>)}</ul></div><div><h2>Color Palette</h2><div className="project-palette">{project.palette.map((color) => <span key={color} style={{ backgroundColor: color }} title={color} />)}</div></div></div></section>
      <section className="project-before-after"><div className="shell"><div className="project-shot-grid"><div><h2>Before</h2><img src={siteAsset(project.image)} alt={`${project.name} before`} /></div><div><h2>After</h2><img src={siteAsset(project.mobileImage)} alt={`${project.name} after`} /></div></div></div></section>
      <section className="project-shots"><div className="shell"><h2>Some Top Shots</h2><div className="project-gallery">{project.gallery.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} project view ${index + 1}`} />)}</div></div></section>
      <section className="project-shots project-final"><div className="shell"><h2>Relevant Case Studies</h2></div></section>
      <section className="project-shots project-mobile"><div className="shell"><h2>Mobile Variations</h2><div className="project-gallery project-gallery--mobile">{project.mobileGallery.map((image, index) => <img key={`${image}-${index}`} src={siteAsset(image)} alt={`${project.name} mobile view ${index + 1}`} />)}</div></div></section>
      <section className="project-related"><div className="shell"><h2>Relevant Case Studies</h2><div className="project-related-track">{related.map((item, index) => <CaseStudyCard key={item.slug} project={item} index={index} />)}</div></div></section>
    </SitePageFrame>
  );
}

const samplePosts = [
  { title: "Building a team that compounds", excerpt: "A practical look at aligning product strategy, engineering, and design from the first sprint.", image: "group-101.jpg", slug: "building-a-team-that-compounds" },
  { title: "The case for a 7-day trial", excerpt: "Why the right trial period creates clarity for both ambitious businesses and exceptional talent.", image: "about.jpg", slug: "the-case-for-a-7-day-trial" },
  { title: "Designing for momentum", excerpt: "Small decisions in research and UX can make a big difference to the pace of delivery.", image: "pop2.jpg", slug: "designing-for-momentum" },
];

function ListingPage({ title, subtitle = "", posts = samplePosts }: { title: string; subtitle?: string; posts?: typeof samplePosts }) {
  return <SitePageFrame className="theme-page--listing"><section className="listing-hero"><div className="shell"><h1>{title}</h1>{subtitle ? <p>{subtitle}</p> : null}</div></section><section className="listing-grid-section"><div className="shell"><div className="listing-grid">{posts.map((post) => <article className="listing-card" key={post.slug}><a href={`/post/${post.slug}/`}><img src={themeAsset(post.image)} alt="" /><div><h2>{post.title}</h2><p>{post.excerpt}</p><span className="btn-outline">Read More <ArrowUpRight size={15} /></span></div></a></article>)}</div></div></section></SitePageFrame>;
}

export function SearchPage() {
  const [query, setQuery] = useState("");
  useEffect(() => { setQuery(new URLSearchParams(window.location.search).get("s") ?? ""); }, []);
  const posts = query ? samplePosts.filter((post) => `${post.title} ${post.excerpt}`.toLowerCase().includes(query.toLowerCase())) : samplePosts;
  return <ListingPage title={`Search : ${query}`} posts={posts} />;
}

export function TaxonomyPage({ type, name }: { type: "Category" | "Tag" | "Author"; name: string }) {
  return <ListingPage title={`${type} : ${name}`} posts={samplePosts} />;
}

export function PostPage({ slug }: { slug: string }) {
  const post = samplePosts.find((item) => item.slug === slug) ?? samplePosts[0];
  return <SitePageFrame className="theme-page--post"><article className="post-page"><div className="shell"><img className="post-image" src={themeAsset(post.image)} alt="" /><h1>{post.title}</h1><p className="post-lede">{post.excerpt}</p><div className="post-body"><p>Great products are built through close collaboration. The best work starts with a clear objective, a thoughtful plan, and a team that knows how to move together.</p><p>DevDimensions helps ambitious businesses bring those pieces into focus, then turns the plan into a useful, durable digital experience.</p></div><div className="post-share"><span>Share this article</span><a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(`/post/${post.slug}/`)}`} target="_blank" rel="noreferrer">Facebook</a><a href={`mailto:?subject=${encodeURIComponent(post.title)}`}>Email</a></div></div></article></SitePageFrame>;
}

export function NotFoundPage() {
  return <SitePageFrame className="theme-page--404"><section className="not-found"><div className="shell"><img src={themeAsset("thank-you.svg")} alt="" aria-hidden="true" /><p>Oops something went wrong!</p><h1>Page not found.</h1><h2>The page you are looking for is not found here.</h2><a className="btn-theme" href="/">Back to home <ArrowUpRight size={17} /></a></div></section></SitePageFrame>;
}
