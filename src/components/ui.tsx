import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

/* ---------------------------------------------------------------- Button */

type Variant = "primary" | "teal" | "ghost" | "whatsapp";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full border border-transparent px-7 py-[15px] " +
  "text-[15px] font-bold whitespace-nowrap transition duration-200 ease-brand " +
  "hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-grad-copper text-[#1c0d06] shadow-[0_10px_30px_-12px_rgba(201,120,74,0.85)] " +
    "hover:shadow-[0_16px_40px_-14px_rgba(230,160,106,0.95)]",
  teal: "bg-grad-teal text-[#05191c] shadow-[0_10px_30px_-12px_rgba(82,160,169,0.8)]",
  ghost:
    "border-line bg-white/[0.025] text-fg hover:border-teal hover:text-teal-light",
  whatsapp: "bg-whatsapp text-[#04250f]",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

/* --------------------------------------------------------------- Layout */

export function Wrap({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1180px] px-[22px] ${className}`}>{children}</div>;
}

export function Section({
  id,
  alt = false,
  className = "",
  children,
}: {
  id?: string;
  /** Renders the darker banded background used to separate sections. */
  alt?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-[clamp(60px,9vw,116px)] ${
        alt ? "border-y border-line bg-ink-2" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ------------------------------------------------------------ Typography */

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] text-teal-light uppercase">
      <span className="h-0.5 w-[26px] rounded-sm bg-grad-teal" />
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`mb-[clamp(38px,5vw,56px)] max-w-[760px] ${
        center ? "mx-auto flex flex-col items-center text-center" : ""
      }`}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(34px,5.4vw,60px)]">{title}</h2>
      {lede ? (
        <p className="mt-[18px] max-w-[62ch] text-[clamp(16px,1.6vw,18.5px)] text-muted">{lede}</p>
      ) : null}
    </div>
  );
}
