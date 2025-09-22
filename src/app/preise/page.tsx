import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import SiteFooter from '@/components/SiteFooter';
import { Car } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export default function PricingPage() {
  const { headline, plans, cta, disclaimer } = data.pricing;
  const recommendedPlan = plans.find(p => p.recommended) || plans[0];

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

                <div className="mx-auto mt-16 max-w-4xl">
                    <Tabs defaultValue={recommendedPlan.name} className="w-full">
                        <TabsList className="grid w-full grid-cols-3 gap-4 bg-transparent p-0">
                            {plans.map((plan) => (
                                <TabsTrigger key={plan.name} value={plan.name} className="h-auto flex-col gap-2 p-4 text-lg bg-secondary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                                    <span className="font-bold">{plan.name}</span>
                                    <span className="text-base">{plan.price}</span>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                        {plans.map((plan) => (
                            <TabsContent key={plan.name} value={plan.name}>
                                <Card className="mt-8 shadow-lg">
                                    <CardHeader>
                                        <CardTitle className="text-3xl">{plan.name} Paket</CardTitle>
                                        <CardDescription className="!mt-2 text-base">
                                            Ideal für Fahrschulen, die einen soliden Startpunkt suchen.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-6 text-left">
                                            {plan.features.map((feature, index) => (
                                                <div key={index}>
                                                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                                                    <p className="mt-1 text-muted-foreground">{feature.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex-col gap-4 pt-6">
                                        <Button 
                                            size="lg"
                                            className='w-full'
                                            asChild
                                        >
                                            <Link href="#kontakt">{cta.label}</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
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
