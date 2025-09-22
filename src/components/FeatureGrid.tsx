// This component is not used anymore in the new design.
// I will leave the file in case you want to use it later.
// You can delete it if you want.
import { Palette, ShieldCheck, TrendingUp, Wrench } from 'lucide-react';
import { data } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const iconMap: { [key: string]: React.ElementType } = {
  Palette,
  ShieldCheck,
  TrendingUp,
  Wrench,
};

export default function FeatureGrid() {
  return (
    <section className="bg-secondary/50" aria-labelledby="features-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="features-headline">Alles, was Sie für einen professionellen Webauftritt brauchen</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Unser Service-Abo deckt alle technischen Aspekte ab, damit Sie sich auf Ihr Geschäft konzentrieren können.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
        </div>
      </div>
    </section>
  );
}
