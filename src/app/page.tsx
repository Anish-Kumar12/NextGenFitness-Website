import { BottomNav } from "@/components/BottomNav";
import { Contact } from "@/components/Contact";
import { CtaBand } from "@/components/CtaBand";
import { Facilities } from "@/components/Facilities";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramPosts } from "@/components/InstagramPosts";
import { Programs } from "@/components/Programs";
import { Stats } from "@/components/Stats";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Facilities />
        <Gallery />
        <WhyUs />
        <InstagramPosts />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
