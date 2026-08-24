import Image from "next/image";
import { posts } from "@/lib/photos";
import { site } from "@/lib/site";
import { InstagramIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { ButtonLink, Section, SectionHead, Wrap } from "./ui";

export function InstagramPosts() {
  return (
    <Section id="instagram" alt>
      <Wrap>
        <Reveal>
          <SectionHead
            center
            eyebrow="From our Instagram"
            title="Straight from the feed"
            lede={`We post what's happening on the floor — new kit, member progress and the odd bit of motivation. Follow along at ${site.instagram.handle}.`}
          />
        </Reveal>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {posts.map((post, i) => (
            <Reveal key={post.src} delay={i * 60} as="li">
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-4/5 overflow-hidden rounded-2xl border border-line bg-surface"
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-brand group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/35" />
                <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full bg-ink/70 text-fg opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="size-[18px]" />
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-9 flex justify-center">
            <ButtonLink
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <InstagramIcon className="size-[18px] shrink-0" />
              Follow {site.instagram.handle}
            </ButtonLink>
          </div>
        </Reveal>
      </Wrap>
    </Section>
  );
}
