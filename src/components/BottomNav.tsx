"use client";

import { useEffect, useState } from "react";
import { enquiryMessage, navLinks, site, whatsappLink } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

/** Frosted-glass surface shared by the dock and the expanded sheet. */
const glass =
  "border border-white/12 bg-white/8 backdrop-blur-2xl backdrop-saturate-150 " +
  "shadow-[0_8px_32px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.16)]";

const sectionIds = navLinks.map((link) => link.href.slice(1));

export function BottomNav() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Highlight whichever section is currently under the reader. Measured from
  // scroll position rather than IntersectionObserver, which only fires on
  // transitions and so goes stale when the page jumps via an anchor.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const update = () => {
      const line = window.innerHeight * 0.4;
      let current: string | null = null;
      for (const section of sections) {
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= line && bottom > line) {
          current = section.id;
          break;
        }
        // Past the line already — remember it in case nothing straddles it.
        if (top <= line) current = section.id;
      }
      setActive(current);
    };

    // Reading six rects is cheap enough to do straight from the handler.
    // An rAF-coalesced version drops updates whenever the tab is backgrounded
    // and rAF gets throttled.
    const onScroll = () => update();

    // Landing on /#gallery jumps the page before this runs, and that jump
    // doesn't always emit a scroll event — so measure once it has settled.
    const first = setTimeout(update, 0);
    const settled = setTimeout(update, 300);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      clearTimeout(first);
      clearTimeout(settled);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-70 flex justify-center px-4 pb-[calc(16px+env(safe-area-inset-bottom))]">
      <div className="pointer-events-auto flex w-full max-w-max flex-col items-center gap-2.5">
        {/* Expanded links — phones only */}
        {menuOpen ? (
          <nav
            aria-label="Sections"
            className={`${glass} w-full rounded-3xl p-2 md:hidden`}
          >
            <ul className="grid gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-[15px] font-semibold transition-colors ${
                      active === link.href.slice(1)
                        ? "bg-white/12 text-fg"
                        : "text-muted hover:bg-white/8 hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className={`${glass} flex items-center gap-1 rounded-full p-1.5`}>
          {/* Phones: call + enquire + menu toggle */}
          <a
            href={`tel:${site.phones[0].dial}`}
            aria-label="Call the gym"
            className="grid size-11 place-items-center rounded-full text-fg transition-colors hover:bg-white/12 md:hidden"
          >
            <PhoneIcon className="size-[18px]" />
          </a>

          {/* Desktop: the section links live inline */}
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-full px-4 py-2.5 text-[14px] font-semibold transition-colors ${
                      active === link.href.slice(1)
                        ? "bg-white/14 text-fg"
                        : "text-muted hover:bg-white/8 hover:text-fg"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <span aria-hidden="true" className="mx-1 hidden h-6 w-px bg-white/12 md:block" />

          <a
            href={whatsappLink(enquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-grad-copper px-5 py-2.5 text-[14px] font-bold text-[#1c0d06] shadow-[0_6px_20px_-8px_rgba(201,120,74,0.9)] transition-transform duration-200 ease-brand hover:-translate-y-0.5"
          >
            Enquire now
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close sections" : "Browse sections"}
            aria-expanded={menuOpen}
            className="grid size-11 place-items-center rounded-full text-fg transition-colors hover:bg-white/12 md:hidden"
          >
            {menuOpen ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
