import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import type { ExperienceCardData } from '../../lib/experiences';

export default function ExperienceCard({ experience }: { experience: ExperienceCardData }) {
  return (
    <Link href={'/adventures/' + experience.slug} className="experience-card group">
      {experience.image ? <Image src={experience.image} alt={experience.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110 group-focus-visible:scale-110" />
        : <div className="absolute inset-0 flex items-center justify-center bg-[#5d4a37]"><MapPin size={36} aria-hidden="true" /></div>}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="mb-2 text-2xl font-bold text-white transition-all duration-300 group-hover:mb-3 group-focus-visible:mb-3 md:text-3xl">{experience.title}</h3>
        <p className="experience-card-description text-sm leading-relaxed text-white md:text-base">{experience.description}</p>
        <ArrowRight className="experience-card-arrow text-white" size={24} aria-hidden="true" />
      </div>
    </Link>
  );
}
