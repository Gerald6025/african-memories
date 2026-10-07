import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import type { ExperienceCardData } from '../../lib/experiences';

export default function Activities({ activities = [] }: { activities?: ExperienceCardData[] }) {
  if (!activities.length) return null;
  return <section className="bg-[#faf7f1] py-16 text-[#30281e] sm:py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="experience-eyebrow">Things to do, memories to keep</p><h2 className="mt-4 max-w-2xl text-4xl sm:text-5xl">Make the most of<br /><span className="italic text-[#99441f]">every moment.</span></h2><p className="mt-5 max-w-xl text-base leading-7 text-[#6c6256]">A few favourite ways to experience Victoria Falls and beyond. Explore the details, discover what’s included, and find your next adventure.</p></div>
        <Link href="/adventures" className="inline-flex items-center gap-2 self-start border-b border-[#99441f] pb-2 text-sm font-semibold text-[#99441f] md:self-auto">Explore all experiences <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">{activities.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}</div>
    </div>
  </section>;
}