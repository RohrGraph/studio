import { data } from '@/lib/data';
import { CheckCircle2, Clock, ShieldCheck, Euro, Smile } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Clock,
  ShieldCheck,
  Euro,
  Smile,
  CheckCircle2,
};

export default function Benefits() {
    const { headline, items } = data.benefits;
  return (
    <section aria-labelledby="benefits-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
            <h2 id="benefits-headline">{headline}</h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
             const Icon = iconMap[item.icon as keyof typeof iconMap] || CheckCircle2;
            return (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-muted-foreground">{item.text}</p>
                </div>
              </div>
            )
            })}
        </div>
      </div>
    </section>
  );
}
