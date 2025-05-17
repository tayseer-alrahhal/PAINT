import About from "@/components/About";
import Charts from "@/components/Charts";
import Hero from "@/components/Hero";
import OurPartners from "@/components/Our-Partners";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import News from "@/components/News";
import Pricing from "@/components/Pricing";
import Opinions from "@/components/Opinions";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurPartners />
      <About />
      <Services />
      <Philosophy />
      <Charts />
      <News />
      <Pricing />
      <Opinions />
    </div>
  );
}
