import { facilities } from "@/lib/site";
import { CheckIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Section, SectionHead, Wrap } from "./ui";

export function Facilities() {
  return (
    <Section id="facilities" alt>
      <Wrap>
        <Reveal>
          <SectionHead
            eyebrow="The floor"
            title="Everything you need, nothing you don't"
            lede="A clean, bright, fully air-conditioned floor spread over two levels — kit that works, space to use it, and staff who keep it that way."
          />
        </Reveal>

        <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((item, i) => (
            <Reveal key={item} delay={i * 45} as="li">
              <div className="flex h-full items-center gap-3.5 rounded-xl border border-line bg-surface px-[19px] py-[17px] text-[15.5px] font-medium transition duration-250 ease-brand hover:-translate-y-[3px] hover:border-line-strong">
                <CheckIcon className="size-5 shrink-0 text-teal-light" />
                {item}
              </div>
            </Reveal>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
}
