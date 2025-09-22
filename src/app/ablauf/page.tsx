import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, FileCheck2, Paintbrush, Rocket } from 'lucide-react';
import SiteFooter from '@/components/SiteFooter';
import { data } from '@/lib/data';

export default function AblaufPage() {
  const steps = [
    {
      icon: FileCheck2,
      title: "1. Daten übermitteln",
      text: "Nach der Paketwahl erhalten Sie Zugang zu einem einfachen Online-Formular, über das Sie uns alle relevanten Informationen und Dateien für Ihre Website zukommen lassen.",
    },
    {
      icon: Paintbrush,
      title: "2. Design & Umsetzung",
      text: "Basierend auf Ihren Angaben erstellen unsere Experten den ersten Entwurf. Wir kümmern uns um ein modernes Design, das perfekt zu Ihrer Fahrschule passt.",
    },
    {
      icon: Rocket,
      title: "3. Livegang & Service",
      text: "Nach Ihrer Freigabe geht Ihre Website online. Wir kümmern uns weiterhin um Wartung und Sicherheit, damit Ihr digitaler Auftritt erfolgreich bleibt."
    }
  ];


  return (
    <div className="flex min-h-screen flex-col">
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold">Fahrschul-Websites</span>
          </Link>
          <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
             <Link href="/preise" className="text-foreground/60 transition-colors hover:text-foreground/80">
              Preise
            </Link>
             <Link href="/ablauf" className="text-foreground transition-colors hover:text-foreground/80">
              Ablauf
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
        <section id="ablauf" aria-labelledby="ablauf-headline">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 id="ablauf-headline">Klar und einfach: Ihr Weg zur neuen Website</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir haben den Prozess so gestaltet, dass er für Sie maximal unkompliziert ist. Konzentrieren Sie sich auf Ihr Geschäft, wir kümmern uns um den Rest.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.text}</p>
                  </div>
                )
              })}
            </div>
             <div className="mt-16 text-center">
                <Button size="lg" asChild>
                    <Link href="/preise">Jetzt Ihr Paket entdecken</Link>
                </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
