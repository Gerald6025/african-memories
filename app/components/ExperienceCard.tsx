import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Clock3, MapPin } from 'lucide-react';
import { categoryLabel, type ExperienceCardData } from '../../lib/experiences';

export default function ExperienceCard({ experience }: { experience: ExperienceCardData }) {
  const categories = experience.categories.filter(category => category !== 'featured');
  return (
    <Link href={`/adventures/${experience.slug}`} className="experience-card group">
      <div className="experience-card-image">
        {experience.image
          ? <Image src={experience.image} alt={experience.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
          : <div className="flex h-full items-center justify-center bg-[#e8dfd1] text-[#5d4a37]"><MapPin size={36} aria-hidden="true" /></div>}
        {(experience.badge || experience.categories.includes('featured')) && <span className="experience-card-badge">{experience.badge || 'Our favourite'}</span>}
        <span className="experience-card-arrow"><ArrowUpRight size={20} aria-hidden="true" /></span>
      </div>
      <div className="experience-card-body">
        <p className="experience-eyebrow">{categories.slice(0, 2).map(categoryLabel).join(' · ') || 'Victoria Falls experiences'}</p>
        <h3 className="mt-3 text-[26px] leading-tight text-[#30281e]">{experience.title}</h3>
        {experience.description && <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#6c6256]">{experience.description}</p>}
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#6c6256]">
          {experience.duration && <span className="inline-flex items-center gap-1.5"><Clock3 size={14} aria-hidden="true" />{experience.duration}</span>}
          {experience.location && <span className="inline-flex items-center gap-1.5"><MapPin size={14} aria-hidden="true" />{experience.location}</span>}
        </div>
        <div className="experience-card-footer">
          <span className="text-base font-semibold text-[#99441f]">{experience.price.label}{experience.price.source === 'guide' && <span className="mt-1 block text-[10px] font-normal text-[#8a7964]">Guide starting price</span>}</span>
          <span className="text-xs font-semibold text-[#4a3c2e]">View experience <span aria-hidden="true">→</span></span>
        </div>
      </div>
    </Link>
  );
}
