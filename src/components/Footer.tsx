import { navLinks, site } from "@/lib/site";
import { InstagramIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { BrandLink } from "./Logo";
import { Wrap } from "./ui";

const socialStyle =
  "grid size-10 place-items-center rounded-xl border border-line text-muted transition duration-250 ease-brand hover:-translate-y-0.5 hover:border-teal hover:text-teal-light";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink pt-14 pb-[34px]">
      <Wrap>
        <div className="mb-[38px] grid gap-[38px] md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <BrandLink />
            <p className="mt-4 max-w-[38ch] text-[15px] text-muted">
              Strength, cardio and personal training in {site.address.street},{" "}
              {site.address.locality}. Come build the next version of yourself.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={socialStyle}
              >
                <InstagramIcon className="size-[19px]" />
              </a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={socialStyle}
              >
                <WhatsAppIcon className="size-[19px]" />
              </a>
              <a
                href={`tel:${site.phones[0].dial}`}
                aria-label="Call us"
                className={socialStyle}
              >
                <PhoneIcon className="size-[19px]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-[12.5px] font-extrabold tracking-[0.14em] text-fg uppercase">
              Explore
            </h4>
            <ul className="grid gap-[11px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[15px] text-muted transition-colors hover:text-copper-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-[12.5px] font-extrabold tracking-[0.14em] text-fg uppercase">
              Visit
            </h4>
            <ul className="grid gap-[11px] text-[15px]">
              <li>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-copper-light"
                >
                  {site.address.street}, {site.address.locality}
                </a>
              </li>
              {site.phones.slice(0, 2).map((phone) => (
                <li key={phone.dial}>
                  <a
                    href={`tel:${phone.dial}`}
                    className="text-muted transition-colors hover:text-copper-light"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-copper-light"
                >
                  {site.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 border-t border-line pt-6 text-[13.5px] text-[#5f757e]">
          <span>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </span>
          <span>
            {site.address.street}, {site.address.locality}, {site.address.region}
          </span>
        </div>
      </Wrap>
    </footer>
  );
}
