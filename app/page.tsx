"use client";
/* oxlint-disable next/no-img-element */

import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const ASSET_ROOT = "/assets/";
const asset = (name: string) => `${ASSET_ROOT}${name}`;

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
      "A focused digital product that turns a complex workflow into a simple, confident customer journey.",
  },
  {
    name: "Vanrock Holdings",
    image: "frame-1261153213-1-668d2867370a2.webp",
    mobileImage: "Frame-1261153157-13.png",
    category: "Design, Development",
    href: "/project/vanrock-holdings/",
    description:
      "A high-trust web experience built to give a growing holdings group a sharper digital presence.",
  },
  {
    name: "Performance Tours",
    image: "frame-1261153219-2-668d290a3710a.webp",
    mobileImage: "Frame-1261153157-19.png",
    category: "Design, Development",
    href: "/project/performance-tours/",
    description:
      "A conversion-focused experience for high-energy event travel and unforgettable performance tours.",
  },
  {
    name: "Express Flooring",
    image: "frame-1261153221-1-668d272b32aee.webp",
    mobileImage: "Frame-1261153157-10.png",
    category: "Design, Development",
    href: "/project/express-flooring/",
    description:
      "A premium home-services experience designed to make flooring selection and installation easier.",
  },
  {
    name: "Soy Kitty",
    image: "frame-1261153219-1-668d25b7abaae.webp",
    mobileImage: "Frame-1261153157-7.png",
    category: "Design",
    href: "/project/soy-kitty/",
    description:
      "A playful product experience with a bold identity, friendly interactions, and intuitive shopping flow.",
  },
  {
    name: "Walter On Wine",
    image: "frame-1261153220-668d24ff54e6f.webp",
    mobileImage: "Group-626684-optimized-scaled.webp",
    category: "Design",
    href: "/project/walter-on-wire/",
    description:
      "A content-rich wine platform that makes discovery, education, and connection feel personal.",
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
      "DevDimensions has been a game changer for us. Their team understood our product quickly and delivered with the care and speed of an in-house team.",
    project: "OfferForm",
  },
  {
    name: "Ryan S.",
    role: "Founder RSI Motorsports",
    image: "Frame-1261153392.webp",
    logo: "Frame-1261153385-1.png",
    quote:
      "They brought structure to our ideas and helped us move from a rough concept to a polished experience our customers love.",
    project: "RSI Motorsports",
  },
  {
    name: "Markus F.",
    role: "Founder & CEO TripSeer",
    image: "Frame-1261153391.webp",
    logo: "Frame-1261153383.png",
    quote:
      "The quality of talent and the level of communication has been exceptional. We finally have a partner who can scale with us.",
    project: "TripSeer",
  },
  {
    name: "Joshua S.",
    role: "Founder & CEO ThinkWrite",
    image: "Frame-1261153390-1.webp",
    logo: "Frame-1261153386.png",
    quote:
      "From the first conversation to launch, the DevDimensions team made every step clear, collaborative, and genuinely enjoyable.",
    project: "ThinkWrite",
  },
];

const faqs = [
  {
    question: "Why wouldn’t I just hire a freelancer?",
    answer:
      "You could, but it's a pain in the ass. In our experience, it often doesn't end well unless you have experience managing freelancers, which is a headache in itself. We remove all the risk by managing the process and quality checks for you.",
  },
  {
    question: "What separates you? How do you vet your talent?",
    answer:
      'We utilize the GWC method to ensure talent alignment. This ensures candidates "get" their role and your culture, genuinely "want" the job, and have the capacity both in skills and time to excel. Our evaluation includes technical, language, personality, and peer-to-peer checks.',
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
      "There's no contracts or long-term agreements. We give our clients the flexibility they deserve. You can pause or cancel at any time. However, if a dedicated resource has started work before you decide to cancel, you won't be eligible for a refund.",
  },
  {
    question: "How do you make sure I am happy with the work?",
    answer:
      "Our customer experience team will provide bi-weekly check-ins with you and the resource. Our CX team acts as an accountability partner and is available for scheduled meetings to discuss any gaps.",
  },
];

const partners = [
  "Mask-group.svg",
  "Mask-group-1.svg",
  "logo-1-1.svg",
  "Mask-group-2.svg",
  "Frame-1261152960-1.svg",
  "Mask-group-3.svg",
];

function Header({
  menuOpen,
  onToggle,
}: {
  menuOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <header className="site-header shell">
      <a className="brand" href="#top" aria-label="DevDimensions home">
        <img src={asset("logo.svg")} alt="DevDimensions" />
      </a>
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

function LogoRow({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) {
  const loop = [...logos, ...logos];

  return (
    <div className={`marquee-row${reverse ? " marquee-row--reverse" : ""}`}>
      <div className="marquee-track">
        {loop.map((logo, index) => (
          <div className="chip-box" key={`${logo.label}-${index}`}>
            <img src={asset(logo.file)} alt={logo.label} />
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
      const response = await fetch("/backend/contact.php", {
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
        aria-labelledby="contact-modal-title"
      >
        <button className="modal-close" type="button" aria-label="Close contact form" onClick={onClose}>
          <X size={23} strokeWidth={1.5} />
        </button>
        <p className="eyebrow">Let’s build something brilliant</p>
        <h2 id="contact-modal-title">Unlock Success with Us</h2>
        <p className="modal-intro">Tell us a little about your goals and we’ll be in touch shortly.</p>

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
              Name
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
            <label>
              Company <span>(optional)</span>
              <input
                name="company"
                value={form.company}
                onChange={(event) => setForm({ ...form, company: event.target.value })}
                placeholder="Your company"
              />
            </label>
            <label className="contact-form__wide">
              What can we help with?
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
              {status === "submitting" ? "Sending…" : "Request a consultation"} <ArrowUpRight size={17} />
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
  const [projectIndex, setProjectIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [role, setRole] = useState("Product Designer");
  const [specialty, setSpecialty] = useState("Prototyping");
  const [outcome, setOutcome] = useState("UX Optimization");

  const openContact = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  const workStep =
    viewportWidth >= 992
      ? Math.min(900, viewportWidth - 140) + 20
      : viewportWidth >= 768
        ? 507
        : Math.min(400, Math.max(0, viewportWidth - 60)) + 20;
  const testimonialStep =
    viewportWidth >= 992
      ? 800
      : viewportWidth >= 768
        ? 801
        : Math.max(0, viewportWidth - 30);

  useEffect(() => {
    const locked = menuOpen || modalOpen;
    document.body.style.overflow = locked ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, modalOpen]);

  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  return (
    <div className="site-shell">
      <main>
        <section className="hero" id="top">
          <img className="hero-background" src={asset("home-hero-1.png")} alt="" aria-hidden="true" />
          <Header menuOpen={menuOpen} onToggle={() => setMenuOpen(!menuOpen)} />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>
                Build Your <span>Dream Team</span>
              </h1>
              <p className="hero-lede">
                We&apos;ve scouted and interviewed thousands of game changers in technology: We match you with our top
                standouts – all while <span>cutting costs by 43% and reducing staffing times by 5x.</span>
              </p>
              <button className="btn-theme" type="button" onClick={openContact}>
                7 Days Free Trial <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="hero-visual">
              <picture>
                <source media="(max-width: 767px)" srcSet={asset("Frame-1261152964-1-optimized-1.webp")} />
                <img src={asset("Right-Side-_1_.webp")} alt="A developer working at a desk" />
              </picture>
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
            <div className="problem-map" aria-label="Common hiring problems">
              <img className="map-line" src={asset("path-line.png")} alt="" aria-hidden="true" />
              <div className="company-badge">
                <span>Your Company</span>
              </div>
              <div className="problem-note problem-note--top">No guarantee on project timeline or completion</div>
              <div className="problem-note problem-note--mid">Quality isn&apos;t worth money/time spent</div>
              <div className="issue issue-1">
                <img src={asset("engineer.svg")} alt="" aria-hidden="true" />
                <span>Exhausting<br />Interviews</span>
              </div>
              <div className="issue issue-2">
                <img src={asset("clarity_talk-bubbles-line.svg")} alt="" aria-hidden="true" />
                <span>Communication<br />Gaps</span>
              </div>
              <div className="issue issue-3">
                <img src={asset("like-shapes.svg")} alt="" aria-hidden="true" />
                <span>Quality<br />Issues</span>
              </div>
              <div className="issue issue-4">
                <img src={asset("uim_process.svg")} alt="" aria-hidden="true" />
                <span>Minimal<br />Systems</span>
              </div>
              <div className="issue issue-5">
                <img src={asset("fluent_clock-28-regular.svg")} alt="" aria-hidden="true" />
                <span>Timeline<br />Constraints</span>
              </div>
              <div className="problem-end">
                <img src={asset("Frame-1261153171.svg")} alt="" aria-hidden="true" />
              </div>
            </div>
            <img
              className="problem-map-mobile"
              src={asset("Group-39236.png")}
              alt="A map of common hiring problems"
            />
          </div>
        </section>

        <section className="welcome" id="hiring">
          <div className="shell welcome-grid">
            <div className="welcome-copy">
              <h2>
                Welcome to <span>DevDimensions</span>
              </h2>
              <p>
                We solve those hiring headaches. No we aren’t doctors, just former exited founders with a proven
                process that has worked for us. From websites, applications, to enterprise solutions, we don’t just
                design + develop; we become your innovation partner.
              </p>
              <div className="chooser" aria-label="Build a hiring brief">
                <button
                  className="chooser-line"
                  type="button"
                  onClick={() =>
                    setRole(
                      role === "Product Designer"
                        ? "QA Testing Analyst"
                        : role === "QA Testing Analyst"
                          ? "Full Stack Developer"
                          : "Product Designer",
                    )
                  }
                >
                  <span>I need a</span>
                  <strong className="is-selected">{role}</strong>
                  <ChevronDown size={17} />
                </button>
                <button
                  className="chooser-line"
                  type="button"
                  onClick={() =>
                    setSpecialty(
                      specialty === "Prototyping"
                        ? "Automated Testing"
                        : specialty === "Automated Testing"
                          ? "MERN Stack"
                          : "Prototyping",
                    )
                  }
                >
                  <span>that specializes in</span>
                  <strong className="is-selected">{specialty}</strong>
                  <ChevronDown size={17} />
                </button>
                <button
                  className="chooser-line"
                  type="button"
                  onClick={() =>
                    setOutcome(
                      outcome === "UX Optimization"
                        ? "Bug Detection"
                        : outcome === "Bug Detection"
                          ? "Web Application"
                          : "UX Optimization",
                    )
                  }
                >
                  <span>for</span>
                  <strong className="is-selected">{outcome}</strong>
                  <ChevronDown size={17} />
                </button>
                <button className="btn-theme chooser-submit" type="button" onClick={openContact}>
                  Request Quote <ArrowUpRight size={17} />
                </button>
              </div>
            </div>
            <div className="welcome-art">
              <img src={asset("submit-hire.png")} alt="Win history and submit-to-hire results" />
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
              <a className="btn-theme" href="#contact">
                View More Work <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="work-viewport">
            <div
              className="work-track"
              style={{ transform: `translateX(-${projectIndex * workStep}px)` }}
            >
              {projects.map((project, index) => (
                <article className={`work-card${index === projectIndex ? " is-active" : ""}`} key={project.name}>
                  <a className="work-cover-link" href={project.href} aria-label={`View ${project.name} case study`}>
                    <picture>
                      <source media="(max-width: 767px)" srcSet={asset(project.mobileImage)} />
                      <img className="work-cover" src={asset(project.image)} alt={`${project.name} project`} />
                    </picture>
                  </a>
                  <div className="work-card-content">
                    <div className="work-card-topline">
                      <span className="work-category">{project.category}</span>
                      <a className="square-arrow" href={project.href} aria-label={`Open ${project.name}`}>
                        <ArrowUpRight size={20} />
                      </a>
                    </div>
                    <h3 className="work-card-title">
                      <a href={project.href}>{project.name}</a>
                    </h3>
                    <p className="work-description">{project.description}</p>
                    <div className="work-tools" aria-label="Tools used">
                      <img src={asset("tool-1.png")} alt="Design tool" />
                      <img src={asset("tool-2.png")} alt="Development tool" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="work-dots" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                type="button"
                key={project.name}
                className={index === projectIndex ? "is-active" : ""}
                aria-label={`Show ${project.name}`}
                aria-pressed={index === projectIndex}
                onClick={() => setProjectIndex(index)}
              />
            ))}
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="shell">
            <div className="approach-heading">
              <h2>
                Our <span>Approach</span>
              </h2>
            </div>
            <div className="process-list">
              {approachSteps.map((step) => (
                <article className="process-row" data-step={step.number} key={step.number}>
                  <div>
                    <h3>
                      <img src={asset(step.icon)} alt="" aria-hidden="true" />
                      {step.title}
                    </h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="utility" id="utility">
          <img className="utility-shape utility-shape--left" src={asset("left-shape-optimized.webp")} alt="" aria-hidden="true" />
          <img className="utility-shape utility-shape--right" src={asset("right-shape.webp")} alt="" aria-hidden="true" />
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
                <li><Check size={17} aria-hidden="true" />Hire Individual Resource</li>
                <li><Check size={17} aria-hidden="true" />Hire Multiple Resources</li>
                <li><Check size={17} aria-hidden="true" />Hire Entire Team or Department</li>
              </ul>
              <button className="btn-theme" type="button" onClick={openContact}>
                Get Free Consultation <ArrowUpRight size={17} />
              </button>
            </div>
            <div className="hiring-cards">
              <article className="hire-box">
                <img className="icon" src={asset("HE.svg")} alt="" aria-hidden="true" />
                <h3>Hire Team Member</h3>
                <p>
                  Have a team but need to add a key player or two? Draft your MVP&apos;s here. Our curated pool of talent
                  seamlessly integrates with your existing team, ensuring rapid and efficient results.
                </p>
              </article>
              <article className="hire-box">
                <img className="icon" src={asset("Group-626683-2.svg")} alt="" aria-hidden="true" />
                <h3>Hire Entire Team</h3>
                <p>
                  Have an idea but no team to build it? Stack your team or department with our designers, developers,
                  and project managers to ensure your core focus remains on business growth.
                </p>
              </article>
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
                  <img src={asset(partner)} alt={`DevDimensions partner ${index + 1}`} />
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
          <div className="testimonial-viewport">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${testimonialIndex * testimonialStep}px)` }}
            >
              {testimonials.map((testimonial, index) => (
                <article className={`testimonial-card${index === testimonialIndex ? " is-active" : ""}`} key={testimonial.name}>
                  <img
                    className="testimonial-card-image"
                    src={asset(testimonial.image)}
                    alt={`${testimonial.name}, ${testimonial.role}`}
                  />
                  <div className="testimonial-copy">
                    <p className="testimonial-quote">“{testimonial.quote}”</p>
                    <div className="testimonial-author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                    <div className="testimonial-project">
                      <span>Project</span>
                      <img className="testimonial-logo" src={asset(testimonial.logo)} alt={testimonial.project} />
                    </div>
                  </div>
                </article>
              ))}
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
          <div className="shell">
            <h2>
              Frequently Asked <span>Questions</span>
            </h2>
            <p className="faq-subtitle">We value long-term partnerships, and we bet you do too.</p>
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
                    {isOpen ? <p className="faq-answer">{faq.answer}</p> : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="shell">
            <div className="cta-box">
              <h2>
                Connect With The <span>Top 3%</span> Where Brilliance Ignites Extraordinary Achievements.
              </h2>
              <div className="cta-actions">
                <button className="btn-theme" type="button" onClick={openContact}>
                  Hire Engineers <ArrowUpRight size={17} />
                </button>
                <a className="btn-ghost" href="mailto:info@devdimensions.com">
                  Develop With Us <ArrowUpRight size={17} />
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
              <a className="brand" href="#top" aria-label="DevDimensions home">
                <img src={asset("logo.svg")} alt="DevDimensions" />
              </a>
              <p className="footer-tagline">We believe in growing together by empowering businesses through technology.</p>
              <div className="social-links" aria-label="Social links">
                <a href="https://www.facebook.com/devdimensions/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <span className="social-mark" aria-hidden="true">f</span>
                  <span>Facebook</span>
                </a>
                <a href="https://www.linkedin.com/company/devdimensions?originalSubdomain=pk" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <span className="social-mark" aria-hidden="true">in</span>
                  <span>LinkedIn</span>
                </a>
                <a href="https://www.instagram.com/devdimensions.official" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span className="social-mark" aria-hidden="true">◎</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div className="footer-link-column">
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#work">Case Studies</a>
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
                <li><MapPin size={16} /> 10788 Lake Wynds, Boynton Beach, FL</li>
                <li>
                  <Phone size={16} />
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
                <li><MapPin size={16} /> 26 K Service Rd, Block K, Phase 2, Johar Town Lahore, Pakistan.</li>
                <li>
                  <Phone size={16} />
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
            <span>{" "}</span>
            <a href="https://www.careers-page.com/devdimensions#openings" target="_blank" rel="noreferrer">Careers</a>
          </div>
        </div>
      </footer>

      {menuOpen ? (
        <aside className="menu-panel" aria-label="Main navigation">
          <div className="menu-panel-header">
            <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
              <img src={asset("logo.svg")} alt="DevDimensions" />
            </a>
            <button className="menu-close" type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)}>
              <X size={25} strokeWidth={1.5} />
            </button>
          </div>
          <nav className="menu-links">
            <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Case Studies</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
          </nav>
          <div className="menu-consult">
            <p>Have a project in mind?</p>
            <button className="btn-theme" type="button" onClick={openContact}>
              Get Free Consultation <ArrowUpRight size={17} />
            </button>
          </div>
        </aside>
      ) : null}

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
