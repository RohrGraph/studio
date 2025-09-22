import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const { eyebrow, headline, subline, image, bullets, } = data.hero;
  const { primaryCTA, secondaryCTA } = data.site;

  return (
    <section className="bg-secondary/50" aria-labelledby="hero-headline">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col items-start justify-center">
            <span className="mb-4 font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
            <h1 id="hero-headline">{headline}</h1>
            <p className="mt-6 text-lg text-foreground/80 md:text-xl">
              {subline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href={primaryCTA.href}>{primaryCTA.label}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={secondaryCTA.href}>{secondaryCTA.label}</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
             <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl"
                priority
                data-ai-hint="website mockup"
              />
          </div>
        </div>
         <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="font-medium text-foreground/90">{bullet}</span>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
