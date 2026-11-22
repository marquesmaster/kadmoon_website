import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { Problems } from '@/components/sections/Problems';
import { Credibility } from '@/components/sections/Credibility';
import { Capabilities } from '@/components/sections/Capabilities';
import { BoutiqueEdge } from '@/components/sections/BoutiqueEdge';
import { ReportsBand } from '@/components/sections/ReportsBand';
import { MicrosoftStack } from '@/components/sections/MicrosoftStack';
import { Process } from '@/components/sections/Process';
import { Work } from '@/components/sections/Work';
import { CtaBand } from '@/components/sections/CtaBand';
import { Faq } from '@/components/sections/Faq';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

// Lean Power BI home: a tight sequence of strong blocks with an alternating
// color rhythm. Depth lives on the dedicated pages.
export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ReportsBand />
        <Problems />
        <MicrosoftStack />
        <Credibility />
        <Capabilities />
        <Process />
        <BoutiqueEdge />
        <Work />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
