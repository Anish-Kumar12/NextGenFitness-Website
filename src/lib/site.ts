/**
 * Single source of truth for everything on the site.
 *
 * Values marked PLACEHOLDER were not published anywhere on the gym's
 * Instagram — replace them with the real ones before going live.
 */

export const site = {
  name: "NextGen Fitness",
  shortName: "NextGen",
  description:
    "A fully air-conditioned strength, cardio and personal training gym in Pocket D, Sector 39, Gurgaon. Come see the floor and talk to a trainer.",

  address: {
    street: "754, Pocket D, Sector 39",
    locality: "Gurugram",
    region: "Haryana",
    country: "IN",
  },

  /** First entry is the primary number used by every call-to-action. */
  phones: [
    { display: "+91 80817 22861", dial: "+918081722861" },
    { display: "+91 63763 23305", dial: "+916376323305" },
    { display: "+91 87969 10919", dial: "+918796910919" },
  ],

  /** Country code + number, no "+" — this is what wa.me expects. */
  whatsapp: "918081722861",

  instagram: {
    url: "https://www.instagram.com/nextgenfitnessoficial/",
    handle: "@nextgenfitnessoficial",
  },

  mapsUrl: "https://maps.app.goo.gl/EkVjhZh1mPZdnGcx6",

  /** Open six days, two shifts. */
  hours: [
    { days: "Monday – Saturday", time: "6:00 AM – 12:00 PM" },
    { days: "Monday – Saturday", time: "5:00 PM – 10:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const enquiryMessage =
  "Hi NextGen Fitness, I'd like to know more about joining.";

export const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#instagram", label: "Instagram" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
] as const;

/** PLACEHOLDER — swap in your real numbers. */
export const stats = [
  { value: "500+", label: "Members trained" },
  { value: "6", label: "Days a week" },
  { value: "10+", label: "Certified trainers" },
  { value: "4.8★", label: "Member rating" },
] as const;

export const programs = [
  {
    icon: "barbell",
    image: "/photos/program-strength.jpg",
    imageAlt: "A member pressing on the shoulder-press machine",
    title: "Strength",
    body: "Free weights, benches, Smith machine, cable crossover and plate-loaded stations. Progressive overload programming that actually adds numbers to your lifts — squat, bench, deadlift and everything around them.",
    tags: ["Powerlifting", "Hypertrophy", "Bodybuilding"],
  },
  {
    icon: "heart",
    image: "/photos/program-cardio.jpg",
    imageAlt: "Two members walking on the treadmills",
    title: "Cardio & Conditioning",
    body: "A full cardio floor — treadmills, spin cycles and cross-trainers — plus circuit and HIIT sessions. Built to burn fat, lift your stamina and keep your heart in the range that matters.",
    tags: ["HIIT", "Spin", "Fat loss"],
  },
  {
    icon: "users",
    image: "/photos/program-training.jpg",
    imageAlt: "A trainer coaching members under the NextGen Fitness sign",
    title: "Personal Training",
    body: "One-on-one coaching with a certified trainer. Custom programming, form correction on every rep, diet guidance and monthly progress tracking so nothing is left to guesswork.",
    tags: ["1-on-1", "Diet plan", "Transformation"],
  },
] as const;

export const facilities = [
  "Full dumbbell rack, light to heavy",
  "Smith machine & benches",
  "Cable crossover & functional trainer",
  "Leg press & plate-loaded machines",
  "Treadmills, cycles & cross-trainers",
  "Dedicated spin bike zone",
  "Air-conditioned throughout",
  "Changing rooms & lockers",
  "Staffed reception, easy parking",
] as const;

export const reasons = [
  {
    title: "Coaching on the floor, always",
    body: "A trainer is on the floor through every shift — not sitting in an office. Ask for a form check any time, even on a general membership.",
  },
  {
    title: "Equipment that isn't waiting-listed",
    body: "Multiple benches, cardio machines and stations across two levels, so peak hours don't turn into queuing hours.",
  },
  {
    title: "A plan, not a printout",
    body: "Your program is written for your goal, your schedule and your injury history — and it's revised as you progress.",
  },
  {
    title: "Beginner-safe from day one",
    body: "Never lifted before? Your first two weeks are taught step by step. No judgement, no ego, no rush.",
  },
  {
    title: "A floor women actually train on",
    body: "Plenty of our regulars are women, with trainers who coach them properly and changing rooms that are looked after.",
  },
  {
    title: "Right here in Sector 39",
    body: "Pocket D, easy to reach from Sectors 38, 40, 43, Sushant Lok and South City — with parking outside.",
  },
] as const;

export const goals = [
  "Fat loss",
  "Muscle gain",
  "General fitness",
  "Strength / powerlifting",
  "Personal training",
] as const;
