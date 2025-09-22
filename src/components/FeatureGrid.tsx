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
          {data.features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Wrench;
            return (
              <Card key={feature.title} className="bg-background shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
