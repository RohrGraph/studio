import Link from 'next/link';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { headline, subline, } = data.hero;
  const { primaryCTA, secondaryCTA } = data.site;

  return (
    <section className="bg-secondary/50" aria-labelledby="hero-headline">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
            <h1 id="hero-headline">{headline}</h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              {subline}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
}
