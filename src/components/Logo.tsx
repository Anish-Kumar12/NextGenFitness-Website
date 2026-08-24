import Image from "next/image";
import { site } from "@/lib/site";

/** The gym's actual logo badge, taken from their Instagram profile. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo.jpg"
      alt=""
      aria-hidden="true"
      width={512}
      height={512}
      priority
      className={className}
    />
  );
}

export function Wordmark() {
  return (
    <span className="leading-none">
      <span className="font-display text-xl tracking-wide uppercase">
        Next<span className="text-copper-light">Gen</span>
      </span>
      <span className="mt-[3px] block text-[9.5px] font-bold tracking-[0.42em] text-teal uppercase">
        Fitness
      </span>
    </span>
  );
}

export function BrandLink({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label={`${site.name} — back to top`}
      className={`flex shrink-0 items-center gap-3 ${className}`}
    >
      <LogoMark className="size-11 shrink-0 rounded-full ring-1 ring-line" />
      <Wordmark />
    </a>
  );
}
