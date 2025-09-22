import Link from 'next/link';
import { Check } from 'lucide-react';
import { data } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function Pricing() {
  const { headline, plan, disclaimer } = data.pricing;

  return (
    <section id="preis" className="bg-secondary/50" aria-labelledby="pricing-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="pricing-headline">{headline}</h2>
        </div>

        <div className="mx-auto mt-16 max-w-lg">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <p className="font-semibold text-primary">{plan.name}</p>
              <CardTitle className="!mt-2 text-5xl tracking-tight">
                {plan.price}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{plan.vatNote}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button size="lg" className="w-full" asChild>
                <Link href={plan.cta.href}>{plan.cta.label}</Link>
              </Button>
              <p className="text-center text-xs text-muted-foreground">{disclaimer}</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
