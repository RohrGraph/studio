import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { data } from '@/lib/data';

export default function SocialProof() {
  const { headline, badge, quotes, demos } = data.socialProof;
  return (
    <section className="bg-secondary/50" aria-labelledby="social-proof-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="social-proof-headline">{headline}</h2>
          <Badge className="mt-4 bg-green-100 text-green-800 hover:bg-green-200">{badge}</Badge>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {quotes.map((quote, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="p-6">
                <p className="italic">"{quote.text}"</p>
                <p className="mt-4 font-semibold text-primary">— {quote.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demos.map((demo) => (
                <div key={demo.alt}>
                    <Image
                        src={demo.src}
                        alt={demo.alt}
                        width={800}
                        height={600}
                        className="rounded-lg shadow-lg"
                        data-ai-hint={demo.hint}
                    />
                    <p className="mt-4 text-center font-semibold">{demo.alt}</p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
