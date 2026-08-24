/**
 * Photography pulled from the gym's own Instagram (@nextgenfitnessoficial).
 *
 * Stills were taken from their reels and the August carousel, then cropped to
 * remove the burned-in story stickers and the "NEXT GEN Fitness" watermark.
 * Source frames are 720x1280, so nothing here is displayed larger than it can
 * carry — the gallery tiles are portrait and the cards are modest crops.
 */

export type Photo = { src: string; alt: string };

export const heroPhoto: Photo = {
  src: "/photos/hero-floor.jpg",
  alt: "Members training across the main floor at NextGen Fitness, Sector 39",
};

/**
 * Hero background clip — cropped, silent cuts of the gym's own walkthrough
 * reel. The crop band sits between the story sticker (ends ~y190) and the
 * watermark (starts ~y915), and skips the exterior intro so it opens on the
 * floor.
 *
 * Two shapes, because one doesn't suit both layouts: a 2.2:1 cut that matches
 * a wide desktop hero, and a near-square cut for the tall hero on phones.
 * Filling the phone hero with the wide cut would show only ~26% of the frame.
 */
export const heroVideo = {
  desktop: { src: "/video/hero.mp4", poster: "/video/hero-poster.jpg" },
  mobile: {
    src: "/video/hero-portrait.mp4",
    poster: "/video/hero-portrait-poster.jpg",
  },
};

export const gallery: Photo[] = [
  { src: "/photos/gym-dumbbells.jpg", alt: "Dumbbell rack running the length of the mirrored wall" },
  { src: "/photos/gym-freeweights.jpg", alt: "Barbell and free-weight area in front of the mirrors" },
  { src: "/photos/gym-smith.jpg", alt: "Smith machine and pec deck in the strength area" },
  { src: "/photos/gym-machines.jpg", alt: "Row of plate-loaded and selectorised machines" },
  { src: "/photos/gym-cardio-zone.jpg", alt: "Cross-trainer and leg press in the cardio corner" },
  { src: "/photos/gym-treadmills.jpg", alt: "Treadmills and cross-trainers on the cardio floor" },
  { src: "/photos/gym-floor.jpg", alt: "Members working out during an evening session" },
  { src: "/photos/gym-community.jpg", alt: "Members and trainers on the floor between sets" },
];

/** The gym's own Instagram creatives, used as-is. */
export const posts: Photo[] = [
  { src: "/posts/post-limits.jpg", alt: "NextGen Fitness post — Pushing your limits, one mile at a time" },
  { src: "/posts/post-baad-mai.jpg", alt: "NextGen Fitness post shot across the spin bikes and cable machines" },
  { src: "/posts/post-der.jpg", alt: "NextGen Fitness post shot in the free-weight area" },
  { src: "/posts/post-join.jpg", alt: "NextGen Fitness post shot across the treadmills" },
];
