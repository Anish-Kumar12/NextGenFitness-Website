import { reasons } from "@/lib/site";
import { Reveal } from "./Reveal";
import { Section, SectionHead, Wrap } from "./ui";

export function WhyUs() {
  return (
    <Section id="why">
      <Wrap>
        <Reveal>
          <SectionHead
            eyebrow="Why NextGen"
            title="Not just another gym floor"
            lede="Plenty of places will hand you a membership card and leave you to it. We'd rather get you a result."
          />
        </Reveal>

        <div className="grid gap-x-[34px] gap-y-[22px] md:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 55}>
              <div className="flex items-start gap-[17px]">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-grad-copper font-display text-[17px] text-[#1c0d06]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-1.5 font-sans text-[19px] font-bold tracking-normal normal-case">
                    {reason.title}
                  </h3>
                  <p className="text-[15.5px] text-muted">{reason.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </Section>
  );
}
