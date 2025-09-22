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

                <div className="mx-auto mt-16 max-w-5xl">
                    <Tabs defaultValue={recommendedPlan.name} className="w-full">
                        <TabsList className="grid w-full grid-cols-1 gap-4 bg-transparent p-0 sm:grid-cols-3">
                            {plans.map((plan) => (
                                <TabsTrigger key={plan.name} value={plan.name} asChild>
                                  <Card className={cn(
                                    'cursor-pointer shadow-lg data-[state=inactive]:bg-secondary/30 data-[state=inactive]:hover:bg-secondary/50 data-[state=active]:border-2 data-[state=active]:border-primary data-[state=active]:shadow-2xl relative',
                                    plan.recommended && "border-green-600"
                                  )}>
                                     {plan.recommended && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
                                          Beliebteste Option
                                        </div>
                                      )}
                                    <CardHeader className="text-center">
                                      <p className="font-semibold text-primary">{plan.name}</p>
                                      <CardTitle className="!mt-2 text-4xl tracking-tight">
                                        {plan.price}
                                        <span className="text-base font-normal text-muted-foreground">{plan.priceSuffix}</span>
                                      </CardTitle>
                                    </CardHeader>
                                  </Card>
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        <div className="mt-16">
                            {plans.map((plan) => (
                                <TabsContent key={plan.name} value={plan.name} className="mt-0">
                                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                                        {plan.features.map((feature, index) => (
                                            <Card key={index} className="flex flex-col border border-primary/50">
                                                <CardHeader>
                                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="flex-1">
                                                    <p className="text-muted-foreground">{feature.description}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                    <div className="mt-12 flex justify-center">
                                        <Button 
                                            size="lg"
                                            className='w-full max-w-md'
                                            asChild
                                        >
                                            <Link href="#kontakt">{cta.label}</Link>
                                        </Button>
                                    </div>
                                </TabsContent>
                            ))}
                        </div>
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
