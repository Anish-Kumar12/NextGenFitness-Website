"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { heroVideo } from "@/lib/photos";

const fade = "transition-opacity duration-1000";

/**
 * Phones: a 2.2:1-tall-ish box pinned to the top of the hero, running down to
 * roughly where the enquiry card starts, with its lower edge masked into the
 * page so there's no hard seam.
 */
const mobileBox =
  `absolute inset-x-0 top-0 h-[53%] w-full object-cover md:hidden ${fade} ` +
  "[mask-image:linear-gradient(to_bottom,#000_62%,transparent_100%)]";

/** Desktop: fills the whole section, no letterbox bars. */
const desktopBox = `absolute inset-0 hidden size-full object-cover md:block ${fade}`;

/**
 * The hero backdrop: a still by default, with the walkthrough clip fading in
 * over it once it can play. The poster fades out as it does — two layers at the
 * same opacity would ghost against each other.
 *
 * Which cut loads is decided on the client, so a phone never pulls the heavier
 * desktop file (or vice versa). Both posters are rendered and toggled with CSS
 * so the correct one is right there in the server-rendered HTML.
 */
export function HeroMedia() {
  const [variant, setVariant] = useState<"mobile" | "desktop" | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // Deferred so the poster paints first and the check stays out of render.
    const timer = setTimeout(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setVariant(window.matchMedia("(min-width: 768px)").matches ? "desktop" : "mobile");
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const posterOpacity = playing ? "opacity-0" : "opacity-65";
  const videoOpacity = playing ? "opacity-65" : "opacity-0";

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      <Image
        src={heroVideo.mobile.poster}
        alt=""
        width={680}
        height={684}
        priority
        sizes="100vw"
        className={`${mobileBox} ${posterOpacity}`}
      />
      <Image
        src={heroVideo.desktop.poster}
        alt=""
        width={1584}
        height={720}
        priority
        sizes="100vw"
        className={`${desktopBox} ${posterOpacity}`}
      />

      {variant ? (
        <video
          src={heroVideo[variant].src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          onCanPlay={() => setPlaying(true)}
          className={`${variant === "mobile" ? mobileBox : desktopBox} ${videoOpacity}`}
        />
      ) : null}

      <span className="absolute inset-0 bg-linear-to-r from-ink via-ink/70 to-ink/25" />
      <span className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/55" />
    </div>
  );
}
