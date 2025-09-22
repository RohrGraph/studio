import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const { headline, plans, cta, disclaimer } = data.pricing;

  return (
    <section id="preise" className="bg-secondary/50" aria-labelledby="pricing-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="pricing-headline">{headline}</h2>
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
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>{disclaimer}</p>
        </div>
        <div className="mt-16 text-center">
          <h3 className='text-2xl'>{data.contact.headline}</h3>
           <Button size="lg" className="mt-6" asChild>
            <Link href="#kontakt">{data.contact.ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
