"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import SiteFooter from '@/components/SiteFooter';
import { Car } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQ from '@/components/FAQ';

export default function PricingPage() {
  const { headline, plans, cta, disclaimer } = data.pricing;
  const recommendedPlan = plans.find(p => p.recommended) || plans[0];
  const [activePlan, setActivePlan] = useState(recommendedPlan.name);
  const selectedPlan = plans.find(p => p.name === activePlan) || recommendedPlan;

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
             <Link href="/ablauf" className="text-foreground/60 transition-colors hover:text-foreground/80">
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
              <p className="mt-4 text-lg text-muted-foreground">
                  Keine versteckten Kosten, keine langfristige Bindung. Volle Transparenz von Anfang an.
                  Wählen Sie den Plan, der am besten zu Ihrer Fahrschule passt.
              </p>
            </div>

            <div className="mt-16">
              <div className="flex justify-center">
                <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
                    {plans.map((plan) => (
                      <div 
                        key={plan.name}
                        onClick={() => setActivePlan(plan.name)}
                        className={cn(
                          'cursor-pointer rounded-xl p-6 text-center transition-all',
                          activePlan === plan.name ? 'bg-card ring-2 ring-primary shadow-2xl' : 'bg-card/50 hover:bg-card/80',
                           plan.recommended && 'relative'
                        )}
                      >
                         {plan.recommended && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
                              Beliebteste Option
                            </div>
                          )}
                          <p className="font-semibold text-primary">{plan.name}</p>
                          <p className="!mt-2 text-3xl font-bold tracking-tight">
                            {plan.price}
                             <span className="text-base font-normal text-muted-foreground"> / Monat</span>
                          </p>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 max-w-4xl">
              <Card className="shadow-lg border-primary/20">
                  <CardContent className="pt-8">
                      <ul className="space-y-4">
                          {selectedPlan.features.map((feature, index) => (
                              <li key={index} className="flex items-start gap-4">
                                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                  <div>
                                      <h4 className="font-semibold">{feature.title}</h4>
                                      <p className="text-muted-foreground">{feature.description}</p>
                                  </div>
                              </li>
                          ))}
                      </ul>
                  </CardContent>
              </Card>
              <div className="mt-12 flex justify-center">
                  <Button 
                      size="lg"
                      className='w-full max-w-md'
                      asChild
                  >
                      <Link href="#kontakt">{cta.label}</Link>
                  </Button>
              </div>
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
