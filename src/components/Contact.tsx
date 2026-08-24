import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { EnquiryForm } from "./EnquiryForm";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { Section, SectionHead, Wrap } from "./ui";

const linkStyle = "text-base font-semibold transition-colors hover:text-copper-light";

export function Contact() {
  return (
    <Section id="contact">
      <Wrap>
        <Reveal>
          <SectionHead
            eyebrow="Get in touch"
            title="Come see the place"
            lede={
              <>
                Drop in during opening hours, or send us a message and we&rsquo;ll get straight
                back to you. <em>Kal se pakka? Aaj se.</em>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-[34px] lg:grid-cols-2">
          <Reveal as="ul" className="grid content-start gap-4">
            <InfoRow icon={<PinIcon className="size-5" />} heading="Address">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                {site.address.street},
                <br />
                {site.address.locality}, {site.address.region} — open in Maps
              </a>
            </InfoRow>

            <InfoRow icon={<PhoneIcon className="size-5" />} heading="Call us">
              {site.phones.map((phone) => (
                <a key={phone.dial} href={`tel:${phone.dial}`} className={`block ${linkStyle}`}>
                  {phone.display}
                </a>
              ))}
            </InfoRow>

            <InfoRow icon={<WhatsAppIcon className="size-5" />} heading="WhatsApp">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                Message us on WhatsApp
              </a>
            </InfoRow>

            <InfoRow icon={<InstagramIcon className="size-5" />} heading="Instagram">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkStyle}
              >
                {site.instagram.handle}
              </a>
            </InfoRow>

            <InfoRow icon={<ClockIcon className="size-5" />} heading="Timings">
              {site.hours.map((slot) => (
                <p key={slot.days} className="text-base font-semibold">
                  {slot.days} &nbsp;{slot.time}
                </p>
              ))}
            </InfoRow>
          </Reveal>

          <Reveal delay={90}>
            <EnquiryForm />
          </Reveal>
        </div>
      </Wrap>
    </Section>
  );
}

function InfoRow({
  icon,
  heading,
  children,
}: {
  icon: ReactNode;
  heading: string;
  children: ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-line bg-surface px-[22px] py-5 transition duration-250 ease-brand hover:translate-x-[3px] hover:border-line-strong">
      <span
        aria-hidden="true"
        className="grid size-[42px] shrink-0 place-items-center rounded-xl border border-teal/28 bg-teal/12 text-teal-light"
      >
        {icon}
      </span>
      <div className="leading-relaxed">
        <h4 className="mb-[3px] font-sans text-xs font-bold tracking-[0.14em] text-muted uppercase">
          {heading}
        </h4>
        {children}
      </div>
    </li>
  );
}
