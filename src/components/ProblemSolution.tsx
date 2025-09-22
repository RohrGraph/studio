import Image from 'next/image';
import { data } from '@/lib/data';
import { TrendingUp } from 'lucide-react';

export default function ProblemSolution() {
  const { problem, solution, images } = data.problemSolution;
  return (
    <section aria-labelledby="problem-solution-headline">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-3 md:gap-12">
            <h2 id="problem-solution-headline" className="text-xl text-muted-foreground md:text-right md:text-2xl">
              {problem}
            </h2>
            <TrendingUp className="mx-auto h-12 w-12 rotate-[-45deg] text-primary md:rotate-0" />
            <p className="text-xl font-semibold tracking-tight md:text-2xl">
              {solution}
            </p>
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
