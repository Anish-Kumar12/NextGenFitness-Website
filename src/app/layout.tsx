import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Gym in Sector 39, Gurgaon`,
  description: site.description,
  keywords: [
    "gym in Sector 39 Gurgaon",
    "personal trainer Gurgaon",
    "fitness centre Gurugram",
    "NextGen Fitness",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    title: `${site.name} — Gym in Sector 39, Gurgaon`,
    description: "Strength • Cardio • Personal Training. Pocket D, Sector 39, Gurgaon.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b1216",
};

/** Helps Google Search and Maps understand the gym as a local business. */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  telephone: site.phones[0].dial,
  sameAs: [site.instagram.url],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${anton.variable}`}>
      <body className="pb-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
