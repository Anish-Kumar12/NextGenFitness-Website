import { enquiryMessage, site, whatsappLink } from "@/lib/site";
import { HeroMedia } from "./HeroMedia";
import { ButtonLink, Wrap } from "./ui";
import { CheckIcon, ClockIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";

/** What actually happens when someone walks in — no offers, no promises. */
const firstVisit = [
  "A walk through the floor and the equipment",
  "A talk about your goal and injury history",
  "Meet the trainer you'd be working with",
  "A straight answer on what would suit you",
];

export function Hero() {
  const primary = site.phones[0];

  return (
    <section className="relative overflow-hidden py-[clamp(54px,8vw,100px)] pb-[clamp(56px,8vw,94px)]">
      <HeroMedia />

      {/* brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-10%] top-[-30%] h-[120%]"
        style={{
          background:
            "radial-gradient(56% 44% at 80% 16%, rgba(201,120,74,0.26), transparent 62%), radial-gradient(52% 44% at 10% 76%, rgba(82,160,169,0.20), transparent 62%)",
        }}
      />

      <Wrap className="relative z-10">
        <div className="grid items-center gap-[clamp(34px,5vw,62px)] lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="text-[clamp(45px,8.4vw,100px)]">
              Build the
              <br />
              <span className="text-grad-copper">next version</span>
              <br />
              of yourself.
            </h1>

            <p className="mt-[22px] max-w-[53ch] text-[clamp(16.5px,1.8vw,19px)] text-muted">
              A fully air-conditioned strength and conditioning gym in Sector 39. Proper equipment,
              certified trainers on the floor, and a plan built around your body — not a generic
              template.
            </p>

            <div className="mt-[34px] flex flex-wrap gap-3">
              <ButtonLink href="#contact">Enquire now</ButtonLink>
              <ButtonLink href={`tel:${primary.dial}`} variant="ghost">
                <PhoneIcon className="size-[18px] shrink-0" />
                {primary.display.replace("+91 ", "")}
              </ButtonLink>
            </div>

            <ul className="mt-[30px] flex flex-wrap gap-x-[26px] gap-y-2.5 text-[14.5px] font-medium text-muted">
              <li className="inline-flex items-center gap-2">
                <PinIcon className="size-4 shrink-0 text-teal-light" /> Pocket D, Sector 39
              </li>
              <li className="inline-flex items-center gap-2">
                <ClockIcon className="size-4 shrink-0 text-teal-light" /> Open 6 days a week
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckIcon className="size-4 shrink-0 text-teal-light" /> Fully air-conditioned
              </li>
            </ul>
          </div>

          {/* Enquiry card */}
          <aside className="rounded-3xl border border-line bg-linear-160 from-surface-2 to-surface p-[30px] shadow-[0_40px_80px_-42px_rgba(0,0,0,0.95)]">
            <h3 className="text-2xl">Start with a conversation</h3>
            <p className="mt-1.5 mb-[22px] text-[15px] text-muted">
              Come in, look around, and ask us anything before you decide.
            </p>

            <ul className="mb-[26px] grid gap-[13px]">
              {firstVisit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15.5px] text-[#d5e2e6]">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-copper-light" />
                  {item}
                </li>
              ))}
            </ul>

            <ButtonLink
              href={whatsappLink(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              className="w-full"
            >
              <WhatsAppIcon className="size-[18px] shrink-0" />
              Send us an enquiry
            </ButtonLink>
            <p className="mt-3.5 text-center text-[12.5px] text-[#6f858e]">
              Usually replies within a few minutes
            </p>
          </aside>
        </div>
      </Wrap>
    </section>
  );
}
