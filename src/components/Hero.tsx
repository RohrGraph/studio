import Link from 'next/link';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export default function Hero() {
  const { primaryCTA, secondaryCTA } = data.site;

  return (
    <section className="bg-secondary/50" aria-labelledby="hero-headline">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
            <h1 id="hero-headline">
              Professionelle Website
              <br />
              <span className="text-primary">Ab 97€/Monat</span>
              <br />
              Ohne Einmalkosten
            </h1>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-foreground/80">
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Keine Einmalkosten
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Inkl. Wartung
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                Monatlich Kündbar
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                inkl. Hosting + SSL
              </li>
               <li className="flex items-center gap-2">
                <Check className="h-5 w-5 text-primary" />
                DSGVO Konform
              </li>
            </ul>
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
