"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contact, footer, site } from "../lib/content";
import { ease, inView } from "../lib/motion";
import { HazardTape, Mark } from "../ui/Graphics";
import { Arrow } from "../ui/Interactive";
import { scrollToSection } from "../ui/SmoothScroll";

const socials = [
  { name: "Instagram", href: contact.instagram, tag: "IG" },
  { name: "X", href: contact.x, tag: "X" },
  { name: "LinkedIn", href: contact.linkedin, tag: "IN" },
];

export function Footer() {

  return (
    <footer className="relative bg-ink">
      <HazardTape height={14} />

      <div className="shell pb-10 pt-16 sm:pt-20">
        <div className="grid gap-12 border-b border-rule-dark pb-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-16">
          {/* Brand */}
          <div>
            <Image
              src="/images/snaya_logo2323.png"
              alt={site.name}
              width={240}
              height={112}
              className="h-auto w-44 sm:w-52"
            />
            <p className="tech mt-4 text-bone/35" dir="ltr">
              {site.endline}
            </p>
            <p className="prose-ar mt-5 max-w-sm text-sm text-bone/50">{footer.blurb}</p>

            <div className="mt-8 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="tech flex size-11 items-center justify-center border border-rule-dark text-bone/60 transition-colors duration-400 hover:border-flare hover:bg-flare hover:text-ink"
                  dir="ltr"
                >
                  {s.tag}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold text-flare">{col.title}</h3>
              <ul className="mt-6 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href.replace("#", ""));
                      }}
                      className="link-wipe text-sm text-bone/55 transition-colors duration-300 hover:text-bone"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Contact strip */}
        <div className="grid gap-6 border-b border-rule-dark py-8 sm:grid-cols-3">
          <a
            href={`mailto:${contact.email}`}
            className="link-wipe text-sm text-bone/60 hover:text-flare"
            dir="ltr"
          >
            {contact.email}
          </a>
          <a
            href={`tel:${contact.phoneDial}`}
            className="link-wipe text-sm text-bone/60 hover:text-flare sm:text-center"
            dir="ltr"
          >
            {contact.phoneDisplay}
          </a>
          <span className="text-sm text-bone/60 sm:text-end">
            {contact.city}، {contact.country}
          </span>
        </div>

        {/* Colophon */}
        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="tech text-bone/35" dir="ltr">
            © {site.year} {site.latin} — BUILT BY{" "}
            <a
              href={footer.builtBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-wipe text-bone/60 transition-colors duration-300 hover:text-flare"
            >
              {footer.builtBy.label}
            </a>
          </p>

          <Mark className="order-first text-flare sm:order-none" />

          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="group inline-flex items-center gap-3 self-start text-sm text-bone/60 transition-colors duration-300 hover:text-flare"
          >
            <span>عودة للأعلى</span>
            <Arrow className="rotate-[-90deg] group-hover:translate-x-0 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Oversized wordmark that rises out of the fold */}
      <div className="overflow-hidden px-[var(--gutter)]" aria-hidden>
        <motion.span
          className="display block whitespace-nowrap text-center leading-[0.8] text-bone/[0.055]"
          style={{ fontSize: "clamp(4rem, 22vw, 20rem)" }}
          initial={{ y: "35%", opacity: 0 }}
          whileInView={{ y: "18%", opacity: 1 }}
          viewport={inView}
          transition={{ duration: 1.4, ease: ease.expo }}
        >
          {site.latin}
        </motion.span>
      </div>
    </footer>
  );
}
