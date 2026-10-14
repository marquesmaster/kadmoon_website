import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { Credibility } from '@/components/sections/Credibility';
import { StatsBand } from '@/components/sections/StatsBand';
import { Capabilities } from '@/components/sections/Capabilities';
import { ReportsBand } from '@/components/sections/ReportsBand';
import { Industries } from '@/components/sections/Industries';
import { Process } from '@/components/sections/Process';
import { Comparison } from '@/components/sections/Comparison';
import { Work } from '@/components/sections/Work';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

// Lean trade-software home: a tight sequence of strong blocks with an
// alternating color rhythm. Depth lives on the dedicated pages.
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ReportsBand />
        <Credibility />
        <StatsBand />
        <Capabilities />
        <Industries />
        <Process />
        <Comparison />
        <Work />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
