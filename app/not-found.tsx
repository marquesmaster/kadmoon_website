import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/sections/Footer';
import { Button } from '@/components/Button';
import { Eyebrow } from '@/components/Eyebrow';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid grid-mask opacity-70" aria-hidden />
        <div className="relative mx-auto flex min-h-[70vh] max-w-shell flex-col items-center justify-center px-6 py-32 text-center">
          <Eyebrow center>Error 404</Eyebrow>
          <h1 className="mt-5 font-display text-display-lg text-ink">This page moved on.</h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-2">
            The page you’re after doesn’t exist. Try the blog, our services, or start a project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back home
            </Button>
            <Button href="/blog" size="lg" variant="ghost">
              Read the blog
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
