import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { Credibility } from '@/components/sections/Credibility';
import { StatsBand } from '@/components/sections/StatsBand';
import { Capabilities } from '@/components/sections/Capabilities';
import { MigrationHighlight } from '@/components/sections/MigrationHighlight';
import { Industries } from '@/components/sections/Industries';
import { Process } from '@/components/sections/Process';
import { Comparison } from '@/components/sections/Comparison';
import { Work } from '@/components/sections/Work';
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
        <Credibility />
        <StatsBand />
        <Capabilities />
        <MigrationHighlight />
        <Industries />
        <Process />
        <Comparison />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
