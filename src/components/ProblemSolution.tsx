import Image from 'next/image';
import { data } from '@/lib/data';
import { ArrowUp } from 'lucide-react';

export default function ProblemSolution() {
  const { problem, solution, images } = data.problemSolution;
  return (
    <section aria-labelledby="problem-solution-headline">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="problem-solution-headline" className="text-2xl md:text-3xl">{problem}</h2>
          <ArrowUp className="mx-auto my-6 h-8 w-8 text-primary" />
          <p className="text-2xl font-semibold tracking-tight sm:text-3xl">{solution}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-4 -top-4 z-10 rounded-full bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground">ALT</div>
            <Image
              src={images.before.src}
              alt={images.before.alt}
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl"
              data-ai-hint={images.before.hint}
            />
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-4 -top-4 z-10 rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">NEU</div>
             <Image
                src={images.after.src}
                alt={images.after.alt}
                width={1200}
                height={800}
                className="rounded-2xl shadow-2xl"
                data-ai-hint={images.after.hint}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
