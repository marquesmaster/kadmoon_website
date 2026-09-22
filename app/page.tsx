import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { Credibility } from '@/components/sections/Credibility';
import { StatsBand } from '@/components/sections/StatsBand';
import { MicrosoftPlatform } from '@/components/sections/MicrosoftPlatform';
import { Capabilities } from '@/components/sections/Capabilities';
import { MigrationHighlight } from '@/components/sections/MigrationHighlight';
import { Guarantees } from '@/components/sections/Guarantees';
import { Work } from '@/components/sections/Work';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

// Lean, Brex-style home: a tight sequence of strong blocks with an alternating
// color rhythm (canvas / ink / cream / orange), instead of a long scroll.
// Depth lives on the dedicated pages (/services, /packages, /industries, ...).
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Credibility />
        <StatsBand />
        <MicrosoftPlatform />
        <Capabilities />
        <MigrationHighlight />
        <Guarantees />
        <Work />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
