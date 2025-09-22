import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const { headline, plans, cta } = data.pricing;

  return (
    <section id="preise" className="bg-secondary/50" aria-labelledby="pricing-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 id="pricing-headline">{headline}</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                Keine versteckten Kosten, keine langfristige Bindung. Volle Transparenz von Anfang an.
                Wählen Sie den Plan, der am besten zu Ihrer Fahrschule passt.
            </p>
        </div>
        <div className="mt-16 grid max-w-5xl mx-auto gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
             <Card 
              key={plan.name}
              className={cn('shadow-lg flex flex-col', plan.recommended && 'border-green-600 border-2 relative')}
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
              <CardContent className="flex-1">
                <ul className="space-y-4">
                  {plan.features.slice(0, 5).map((feature) => (
                    <li key={feature.title} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground/90">{feature.title}</span>
                    </li>
                  ))}
                   <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground/90">... und mehr!</span>
                    </li>
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-4 pt-6 mt-auto">
                <Button 
                  size='lg'
                  className={cn('w-full', plan.recommended && 'bg-green-600 hover:bg-green-700')}
                  asChild
                >
                  <Link href="/preise">{cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
