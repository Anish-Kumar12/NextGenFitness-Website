import { stats } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Wrap } from "./ui";

export function Stats() {
  return (
    <section className="border-y border-line bg-ink-2">
      <Wrap>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 55}
              className={`border-line px-[22px] py-[38px] text-center ${
                i < 2 ? "border-b md:border-b-0" : ""
              } ${i % 2 === 0 ? "border-r" : "md:border-r"} ${i === 3 ? "md:border-r-0" : ""}`}
            >
              <b className="text-grad-copper block font-display text-[clamp(30px,4vw,44px)] leading-none">
                {stat.value}
              </b>
              <span className="mt-2.5 block text-[12.5px] font-semibold tracking-[0.14em] text-muted uppercase">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
