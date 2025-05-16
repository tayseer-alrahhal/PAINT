import About from "@/components/About";
import Hero from "@/components/Hero";
import OurPartners from "@/components/Our-Partners";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurPartners />
      <About />
      <Services />
      <Philosophy />
    </div>
  );
}
