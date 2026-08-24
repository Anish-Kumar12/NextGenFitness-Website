import { enquiryMessage, site, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";
import { ButtonLink, Wrap } from "./ui";

export function CtaBand() {
  const primary = site.phones[0];

  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2 py-[clamp(60px,9vw,116px)] text-center">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(58% 120% at 50% 0%, rgba(201,120,74,0.2), transparent 70%)",
        }}
      />
      <Wrap className="relative">
        <Reveal>
          <h2 className="text-[clamp(32px,5.6vw,62px)]">Come and see for yourself</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-[18px] max-w-[54ch] text-[17px] text-muted">
            Stop planning it for next Monday. Drop by this week, have a look around, and talk to
            a trainer about what you&rsquo;re after.
          </p>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-[34px] flex flex-wrap justify-center gap-3">
            <ButtonLink href={`tel:${primary.dial}`}>
              Call {primary.display.replace("+91 ", "")}
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              WhatsApp us
            </ButtonLink>
          </div>
        </Reveal>
      </Wrap>
    </section>
  );
}
