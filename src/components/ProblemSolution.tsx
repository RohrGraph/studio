import Image from 'next/image';
import { data } from '@/lib/data';
import { TrendingUp } from 'lucide-react';

export default function ProblemSolution() {
  const { problem, solution, images } = data.problemSolution;
  return (
    <section aria-labelledby="problem-solution-headline">
      <div className="container">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-16">
          
          <div className="flex flex-col gap-8 text-center md:text-left">
            <h2 id="problem-solution-headline" className="text-xl text-muted-foreground md:text-2xl h-24 flex items-center">
              {problem}
            </h2>
            <div className="relative mx-auto flex max-w-2xl items-center justify-center">
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
          </div>

          <div className="hidden md:flex items-center justify-center h-full">
            <TrendingUp className="h-32 w-32 text-primary" />
          </div>

          <div className="flex flex-col gap-8 text-center md:text-left">
             <p className="text-xl font-semibold tracking-tight md:text-2xl h-24 flex items-center">
              {solution}
            </p>
             <div className="relative mx-auto flex max-w-2xl items-center justify-center">
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
      </div>
    </section>
  );
}
