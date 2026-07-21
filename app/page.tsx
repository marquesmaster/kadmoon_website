import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { Capabilities } from '@/components/sections/Capabilities';
import { WhyKadmoon } from '@/components/sections/WhyKadmoon';
import { HowToChoose } from '@/components/sections/HowToChoose';
import { Process } from '@/components/sections/Process';
import { Work } from '@/components/sections/Work';
import { Industries } from '@/components/sections/Industries';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <Capabilities />
        <WhyKadmoon />
        <HowToChoose />
        <Process />
        <Work />
        <Industries />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
