import { data } from '@/lib/data';

export default function SocialProof() {
  const { logos, quote } = data.socialProof;

  return (
    <section aria-label="Kunden, die uns vertrauen">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Vertrauen von etablierten Unternehmen und Start-ups
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
                {logos.map((logo) => (
                    <div key={logo.alt} className="h-10 flex items-center justify-center text-xl font-bold text-muted-foreground/80 grayscale hover:grayscale-0 transition-all">
                        {logo.alt}
                    </div>
                ))}
            </div>

            <figure className="mt-16">
                <blockquote className="text-2xl font-medium leading-snug text-foreground">
                    <p>"{quote.text}"</p>
                </blockquote>
                <figcaption className="mt-6">
                    <div className="font-semibold text-foreground/80">{quote.author}</div>
                </figcaption>
            </figure>
        </div>
      </div>
    </section>
  );
}
