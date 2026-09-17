"use client";

import { ArrowUpRight, X } from "lucide-react";
import { useState } from "react";

export const CONTACT_ENDPOINT = "/api/contact";

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
