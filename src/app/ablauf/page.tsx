import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Car, FileCheck2, Paintbrush, Rocket, ArrowRight } from 'lucide-react';
import SiteFooter from '@/components/SiteFooter';
import { data } from '@/lib/data';

export default function AblaufPage() {
  const steps = [
    {
      icon: FileCheck2,
      title: "Ihr einziger Schritt: Daten übermitteln",
      text: "Für Sie ist der Prozess denkbar einfach. Nach der Paketwahl erhalten Sie Zugang zu unserem benutzerfreundlichen Online-Formular. Hier können Sie uns bequem alle relevanten Informationen für Ihre Website zukommen lassen. Das ist der einzige Schritt, den Sie aktiv gehen müssen.",
      details_title: "Was wir von Ihnen benötigen (ganz einfach online):",
      details: [
          "Ihre Wünsche zu Farben und Design",
          "Logo Ihrer Fahrschule",
          "Texte und Bilder, die Sie verwenden möchten",
          "Informationen für Impressum & Datenschutz"
      ]
    },
    {
      icon: Paintbrush,
      title: "Unsere Aufgabe: Design & Umsetzung",
      text: "Sobald Ihre Daten bei uns sind, legen wir los! Innerhalb von nur 2 Werktagen erstellen unsere Experten den ersten Entwurf. Wir kümmern uns um ein modernes Design, das perfekt zu Ihrer Fahrschule passt.",
       details_title: "Was wir in dieser Zeit für Sie erledigen:",
       details: [
          "Erstellung eines professionellen Layouts",
          "Optimierung für alle Endgeräte (Handy, Tablet, PC)",
          "Integration Ihrer Inhalte und Bilder",
          "Technische Einrichtung inkl. SSL und Hosting"
      ]
    },
    {
      icon: Rocket,
      title: "Unsere Aufgabe: Livegang & Service",
      text: "Nach Ihrer Freigabe geht Ihre Website online – ebenfalls innerhalb der 2 Werktage. Wir kümmern uns auch danach weiterhin um Wartung und Sicherheit, damit Ihr digitaler Auftritt erfolgreich bleibt.",
       details_title: "Unser Service für Ihren Erfolg:",
       details: [
          "Finale Prüfung und Abstimmung mit Ihnen",
          "Veröffentlichung Ihrer neuen Website",
          "Laufende technische Wartung und Sicherheitsupdates",
          "Umfassender Support für Ihre zukünftigen Anliegen"
      ]
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
              <h1 id="ablauf-headline">Ihr Weg zur neuen Website: 1 Aufgabe für Sie, 2 Tage für uns.</h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Wir haben den Prozess so gestaltet, dass er für Sie maximal unkompliziert ist. Konzentrieren Sie sich auf Ihr Geschäft, wir kümmern uns um den Rest.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-12 md:gap-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="grid items-start gap-8 md:grid-cols-[auto_1fr]">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                        </div>
                        {index < steps.length - 1 && (
                            <div className="h-16 w-px bg-border md:h-full"></div>
                        )}
                    </div>

                    <div className="pt-2">
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary">Schritt {index + 1}</p>
                      <h2 className="mt-2 !text-3xl">{step.title}</h2>
                      <p className="mt-4 text-lg text-muted-foreground">{step.text}</p>
                      
                       <div className="mt-6 rounded-lg border bg-card p-6">
                            <h4 className="font-semibold">{step.details_title}</h4>
                            <ul className="mt-4 space-y-3">
                                {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-start gap-3">
                                        <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                                        <span className='text-muted-foreground'>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
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
