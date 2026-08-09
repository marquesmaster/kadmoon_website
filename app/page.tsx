import { Nav } from '@/components/Nav';
import { Hero } from '@/components/sections/Hero';
import { StatsBand } from '@/components/sections/StatsBand';
import { Credibility } from '@/components/sections/Credibility';
import { Capabilities } from '@/components/sections/Capabilities';
import { MigrationHighlight } from '@/components/sections/MigrationHighlight';
import { TechStack } from '@/components/sections/TechStack';
import { WhyKadmoon } from '@/components/sections/WhyKadmoon';
import { Comparison } from '@/components/sections/Comparison';
import { HowToChoose } from '@/components/sections/HowToChoose';
import { Process } from '@/components/sections/Process';
import { Engagement } from '@/components/sections/Engagement';
import { Work } from '@/components/sections/Work';
import { Industries } from '@/components/sections/Industries';
import { ClientLogos } from '@/components/sections/ClientLogos';
import { BlogPreview } from '@/components/sections/BlogPreview';
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
        <Credibility />
        <ClientLogos />
        <Capabilities />
        <MigrationHighlight />
        <WhyKadmoon />
        <Process />
        <Work />
        <Industries />
        <TechStack />
        <HowToChoose />
        <Comparison />
        <Engagement />
        <BlogPreview />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
