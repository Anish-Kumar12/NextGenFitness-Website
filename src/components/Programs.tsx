import Image from "next/image";
import { programs } from "@/lib/site";
import { programIcons } from "./Icons";
import { Reveal } from "./Reveal";
import { Section, SectionHead, Wrap } from "./ui";

export function Programs() {
  return (
    <Section id="programs">
      <Wrap>
        <Reveal>
          <SectionHead
            eyebrow="What we do"
            title="Train with a purpose"
            lede="Three core tracks. Pick one, or let a trainer blend them into a single plan that fits your schedule and your goal."
          />
        </Reveal>

        <div className="grid gap-[22px] md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => {
            const Icon = programIcons[program.icon];
            return (
              <Reveal key={program.title} delay={i * 70} as="article">
                <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 ease-brand hover:-translate-y-1.5 hover:border-line-strong hover:bg-surface-2">
                  <span className="absolute inset-x-0 top-0 z-20 h-[3px] origin-left scale-x-0 bg-grad-copper transition-transform duration-350 ease-brand group-hover:scale-x-100" />

                  <div className="relative aspect-3/2 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-brand group-hover:scale-105"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-surface via-surface/35 to-transparent"
                    />
                    <div className="absolute bottom-4 left-6 grid size-13 place-items-center rounded-2xl border border-copper/30 bg-ink/70 text-copper-light backdrop-blur-sm">
                      <Icon className="size-6.5" />
                    </div>
                  </div>

                  <div className="px-7 pt-5 pb-[30px]">
                  <h3 className="mb-3 text-[23px]">{program.title}</h3>
                  <p className="text-[15.5px] text-muted">{program.body}</p>

                  <ul className="mt-[18px] flex flex-wrap gap-2">
                    {program.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-teal/25 bg-teal/10 px-2.5 py-[5px] text-xs font-semibold text-teal-light"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Wrap>
    </Section>
  );
}
