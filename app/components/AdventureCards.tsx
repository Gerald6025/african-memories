'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { categoryLabel, type ExperienceCardData } from '../../lib/experiences';

interface Props {
  adventures: ExperienceCardData[] | null;
  className?: string;
  loading?: boolean;
  error?: string | null;
  compact?: boolean;
}

export default function AdventureCards({ adventures, className = '', loading = false, error = null, compact = false }: Props) {
  const [category, setCategory] = useState('all');
  const categories = useMemo(() => [...new Set((adventures || []).flatMap(item => item.categories))].filter(item => item !== 'featured').sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b))), [adventures]);
  const filtered = (adventures || []).filter(item => category === 'all' || item.categories.includes(category));

  return <section id="experiences" className={'bg-white ' + (compact ? 'py-6 ' : 'py-16 md:py-20 lg:py-24 ') + className}>
    <div className="container mx-auto px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-center gap-3">
        <label className="text-sm font-medium text-[#5D4A37]">Filter:
          <select value={category} onChange={event => setCategory(event.target.value)} className="ml-3 border-0 border-b border-gray-300 bg-transparent py-1 pr-8 text-sm text-[#5D4A37] focus:border-orange-600 focus:outline-none">
            <option value="all">All</option>
            {categories.map(item => <option key={item} value={item}>{categoryLabel(item)}</option>)}
          </select>
        </label>
      </div>
      {loading ? <p role="status" className="py-12 text-center text-stone-600">Loading experiences...</p>
        : error ? <div className="py-12 text-center text-stone-600"><p>Experiences are temporarily unavailable. Please try again shortly.</p><Link href="/contact" className="mt-4 inline-block text-orange-600 hover:underline">Contact our team</Link></div>
        : filtered.length ? <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">{filtered.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}</div>
        : <p role="status" className="py-12 text-center text-stone-600">No experiences in this category.</p>}
    </div>
  </section>;
}
