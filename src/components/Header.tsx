"use client";

import { useEffect, useState } from "react";
import { BrandLink } from "./Logo";

/** Navigation lives in <BottomNav />; up here we only hold the brand. */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-60 border-b backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-line bg-ink/95" : "border-transparent bg-ink/40"
      }`}
    >
      <div className="mx-auto flex h-[78px] w-full max-w-[1180px] items-center px-[22px]">
        <BrandLink />
      </div>
    </header>
  );
}
