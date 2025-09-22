import Link from 'next/link';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import SiteFooter from '@/components/SiteFooter';
import { Mountain } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="#" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold">WebStart</span>
          </Link>
          <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
             <Link href="#preis" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Leistungen & Preis
            </Link>
          </nav>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button asChild>
              <Link href={data.site.primaryCTA.href}>{data.site.primaryCTA.label}</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <Process />
        <Pricing />
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
