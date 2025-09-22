import { data } from '@/lib/data';

export default function Process() {
  const { headline, subline, steps } = data.process;
  return (
    <section id="prozess" aria-labelledby="process-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="process-headline">{headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {subline}
          </p>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-1/2 top-4 hidden h-full w-px -translate-x-1/2 bg-border md:block"
            aria-hidden="true"
          />
          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background text-lg font-bold text-primary">
                  {item.step}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
