"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { cn } from "../lib/cn";
import { contact, contactSection, site } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { Chevrons, CornerTicks } from "../ui/Graphics";
import { Action, Arrow, Magnetic } from "../ui/Interactive";
import { MaskLines, Reveal, Rule } from "../ui/Reveal";

type Status = "idle" | "sending" | "sent" | "error";

const channels = [
  {
    label: "واتساب",
    value: contact.phoneDisplay,
    href: `https://wa.me/${contact.whatsapp}`,
    latin: "WHATSAPP",
    external: true,
  },
  {
    label: "البريد الإلكتروني",
    value: contact.email,
    href: `mailto:${contact.email}`,
    latin: "EMAIL",
    external: false,
  },
  {
    label: "الهاتف",
    value: contact.phoneDisplay,
    href: `tel:${contact.phoneDial}`,
    latin: "PHONE",
    external: false,
  },
];

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) throw new Error(json?.error ?? "تعذّر إرسال الرسالة.");

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "تعذّر إرسال الرسالة.");
    }
  }

  return (
    <section id="contact" className="relative bg-ink">
      {/* ---- Statement ------------------------------------------------ */}
      <div className="shell border-b border-rule-dark py-24 text-center sm:py-32">
        <Reveal>
          <div className="flex items-center justify-center gap-4">
            <Chevrons count={3} size={12} className="text-flare" />
            <span className="tech text-flare" dir="ltr">
              [{contactSection.index}] {contactSection.latin}
            </span>
            <Chevrons count={3} size={12} className="text-flare" />
          </div>
        </Reveal>
        <h2 className="display display-xl mt-8 text-bone">
          <MaskLines lines={[site.tagline]} />
        </h2>
        <Reveal delay={0.2}>
          <p className="lede prose-ar mx-auto mt-8 max-w-2xl text-bone/55">
            {contactSection.body}
          </p>
        </Reveal>
      </div>

      {/* ---- Form + channels ------------------------------------------ */}
      <div className="shell grid gap-16 py-20 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
        {/* Form */}
        <div className="relative">
          <h3 className="display display-md text-bone">{contactSection.headline}</h3>
          <Rule className="my-8" />

          <form onSubmit={onSubmit} className="space-y-8">
            {/* Honeypot: off-screen and skipped by keyboard, so only bots fill it. */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute -left-[9999px] size-0 opacity-0"
            />

            <div className="grid gap-8 sm:grid-cols-2">
              <Field
                name="name"
                label={contactSection.form.name.label}
                placeholder={contactSection.form.name.placeholder}
                required
              />
              <Field
                name="email"
                type="email"
                dir="ltr"
                label={contactSection.form.email.label}
                placeholder={contactSection.form.email.placeholder}
                required
              />
            </div>

            <Field
              name="phone"
              type="tel"
              dir="ltr"
              label={contactSection.form.phone.label}
              hint={contactSection.form.phone.hint}
              placeholder={contactSection.form.phone.placeholder}
            />

            <Field
              name="message"
              label={contactSection.form.message.label}
              placeholder={contactSection.form.message.placeholder}
              required
              multiline
            />

            <div className="flex flex-wrap items-center gap-6">
              <Magnetic strength={0.25}>
                <Action type="submit" disabled={status === "sending"}>
                  {status === "sending"
                    ? contactSection.form.sending
                    : contactSection.form.submit}
                  {status !== "sending" && <Arrow />}
                </Action>
              </Magnetic>

              <AnimatePresence mode="wait">
                {status === "sent" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 text-sm text-flare"
                    role="status"
                  >
                    <span className="block size-1.5 bg-flare" aria-hidden />
                    {contactSection.form.success}
                  </motion.p>
                )}
                {status === "error" && error && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-bone/70"
                    role="alert"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>

        {/* Direct channels */}
        <div>
          <span className="tech text-bone/40" dir="ltr">
            DIRECT LINES
          </span>

          <ul className="mt-6 border-t border-rule-dark">
            {channels.map((ch, i) => (
              <motion.li
                key={ch.latin}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={inView}
                transition={{ duration: 0.7, ease: ease.expo, delay: i * 0.08 }}
              >
                <a
                  href={ch.href}
                  {...(ch.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between gap-4 border-b border-rule-dark py-6 transition-colors duration-500 hover:bg-flare hover:px-4"
                >
                  <span>
                    <span className="tech-sm tech block text-flare transition-colors duration-500 group-hover:text-ink">
                      {ch.latin}
                    </span>
                    <span className="mt-1.5 block text-lg font-medium text-bone transition-colors duration-500 group-hover:text-ink" dir="ltr">
                      {ch.value}
                    </span>
                  </span>
                  <Arrow className="text-bone/40 transition-colors duration-500 group-hover:text-ink" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Address block */}
          <Reveal delay={0.2} className="relative mt-10 border border-rule-dark p-6">
            <CornerTicks tone="dark" />
            <span className="tech-sm tech text-bone/40" dir="ltr">
              STUDIO
            </span>
            <p className="mt-2 text-lg text-bone">
              {contact.city}، {contact.country}
            </p>
            <p className="tech mt-4 text-bone/30" dir="ltr">
              SUN–THU · 09:00 — 18:00 AST
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Field({
  name,
  label,
  placeholder,
  hint,
  type = "text",
  required,
  multiline,
  dir,
}: {
  name: string;
  label: string;
  placeholder: string;
  hint?: string;
  type?: string;
  required?: boolean;
  multiline?: boolean;
  dir?: "ltr" | "rtl";
}) {
  const shared = cn(
    "peer w-full border-b border-rule-dark bg-transparent pb-3 pt-2 text-base text-bone",
    "placeholder:text-bone/25 focus:border-flare focus:outline-none",
    "transition-colors duration-300"
  );

  return (
    <div className="relative">
      <label htmlFor={name} className="flex items-baseline gap-2 text-sm text-bone/60">
        {label}
        {required && <span className="text-flare">*</span>}
        {hint && <span className="tech-sm tech text-bone/25">{hint}</span>}
      </label>

      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder={placeholder}
          className={cn(shared, "mt-2 resize-none")}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          dir={dir}
          required={required}
          placeholder={placeholder}
          className={cn(shared, "mt-2")}
        />
      )}

      {/* Focus underline that draws from the reading edge */}
      <span
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-flare transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:scale-x-100"
      />
    </div>
  );
}
