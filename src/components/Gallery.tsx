import Image from "next/image";
import { gallery } from "@/lib/photos";
import { Reveal } from "./Reveal";
import { Section, SectionHead, Wrap } from "./ui";

export function Gallery() {
  return (
    <Section id="gallery">
      <Wrap>
        <Reveal>
          <SectionHead
            eyebrow="Inside the gym"
            title="This is the actual floor"
            lede="No stock photos and no renders — every shot below was taken inside our Sector 39 gym."
          />
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((photo, i) => (
            <Reveal key={photo.src} delay={i * 45} as="li">
              <figure className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-line bg-surface">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-brand group-hover:scale-105"
                />
                {/* keeps the tiles reading as one set rather than eight bright squares */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-transparent"
                />
              </figure>
            </Reveal>
          ))}
        </ul>
      </Wrap>
    </Section>
  );
}
