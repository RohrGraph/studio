import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const { headline, plans, cta } = data.pricing;
  const recommendedPlan = plans.find(p => p.recommended) || plans[0];

  return (
    <section id="preise" className="bg-secondary/50" aria-labelledby="pricing-headline">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
                <h2 id="pricing-headline">{headline}</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Keine versteckten Kosten, keine langfristige Bindung. Volle Transparenz von Anfang an.
                    Wählen Sie den Plan, der am besten zu Ihrer Fahrschule passt.
                </p>
                 <Button size="lg" className="mt-8" asChild>
                    <Link href="/preise">Alle Pakete ansehen</Link>
                </Button>
            </div>
            <Card 
              key={recommendedPlan.name}
              className='shadow-2xl relative border-green-600 border-2'
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-green-600 px-4 py-1 text-sm font-bold text-white">
                  Beliebteste Option
              </div>
              <CardHeader className="text-center">
                <p className="font-semibold text-primary">{recommendedPlan.name}</p>
                <CardTitle className="!mt-2 text-5xl tracking-tight">
                  {recommendedPlan.price}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{recommendedPlan.priceSuffix}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recommendedPlan.features.slice(0, 5).map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                   <li className="flex items-start gap-3">
                      <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-foreground/90">... und mehr!</span>
                    </li>
                </ul>
              </CardContent>
              <CardFooter className="flex-col gap-4 pt-6">
                <Button 
                  size='lg'
                  className='w-full bg-green-600 hover:bg-green-700'
                  asChild
                >
                  <Link href="/preise#kontakt">{cta.label}</Link>
                </Button>
              </CardFooter>
            </Card>
        </div>
      </div>
    </section>
  );
}
