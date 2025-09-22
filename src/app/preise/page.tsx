import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import SiteFooter from '@/components/SiteFooter';
import { Car } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export default function PricingPage() {
  const { headline, plans, cta, disclaimer } = data.pricing;

  return (
    <div className="flex min-h-screen flex-col">
       <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="font-bold">Fahrschul-Websites</span>
          </Link>
          <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
             <Link href="/preise" className="text-foreground transition-colors hover:text-foreground/80">
              Preise
            </Link>
             <Link href="/#prozess" className="text-foreground/60 transition-colors hover:text-foreground/80">
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
        <section id="preise" className="bg-background" aria-labelledby="pricing-headline">
            <div className="container py-12 md:py-16 lg:py-20">
                <div className="mx-auto max-w-3xl text-center">
                <h1 id="pricing-headline" className="text-4xl sm:text-5xl lg:text-6xl">{headline}</h1>
                </div>

                <div className="mt-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
                {plans.map((plan) => (
                    <Card 
                    key={plan.name}
                    className={cn(
                        'shadow-lg hover:shadow-2xl transition-shadow',
                        plan.recommended && 'border-green-600 border-2 shadow-2xl relative'
                    )}
                    >
                    {plan.recommended && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
                        Beliebteste Option
                        </div>
                    )}
                    <CardHeader className="text-center">
                        <p className="font-semibold text-primary">{plan.name}</p>
                        <CardTitle className="!mt-2 text-5xl tracking-tight">
                        {plan.price}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.priceSuffix}</p>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4">
                        {plan.features.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                            <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-foreground/90">{item}</span>
                            </li>
                        ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-4 pt-6">
                        <Button 
                        size={plan.recommended ? 'lg' : 'default'}
                        className={cn(
                            'w-full',
                            plan.recommended && 'bg-green-600 hover:bg-green-700'
                        )}
                        asChild
                        >
                        <Link href="#kontakt">{cta.label}</Link>
                        </Button>
                    </CardFooter>
                    </Card>
                ))}
                </div>
                <div className="mt-8 text-center text-sm text-muted-foreground">
                    <p>{disclaimer}</p>
                </div>
            </div>
        </section>
        <FAQ />
        <ContactForm />
      </main>
      <SiteFooter />
    </div>
  );
}
