import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import type { ExperienceCardData } from '../../lib/experiences';

export default function Activities({ activities = [] }: { activities?: ExperienceCardData[] }) {
  if (!activities.length) return null;
  return <section className="bg-white py-14 text-[#3b2b18] sm:py-20">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">THINGS TO DO</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">Unforgettable Safari Experiences</h2>
        </div>
        <Link href="/adventures" className="inline-flex items-center gap-2 text-[#3b2b18] hover:underline">View All <ArrowRight size={18} aria-hidden="true" /></Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{activities.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}</div>
    </div>
  </section>;
}
