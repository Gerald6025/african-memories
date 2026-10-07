'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { categoryLabel, type ExperienceCardData } from '../../lib/experiences';

interface Props {
  adventures: ExperienceCardData[] | null;
  className?: string; loading?: boolean; error?: string | null; compact?: boolean;
}

export default function AdventureCards({ adventures, className = '', loading = false, error = null, compact = false }: Props) {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('recommended');
  const categories = useMemo(() => [...new Set((adventures || []).flatMap(item => item.categories))]
    .sort((a, b) => categoryLabel(a).localeCompare(categoryLabel(b))), [adventures]);
  const filtered = useMemo(() => (adventures || []).filter(item =>
    (category === 'all' || item.categories.includes(category))
    && `${item.title} ${item.description} ${item.location || ''} ${item.categories.map(categoryLabel).join(' ')}`
      .toLowerCase().includes(search.trim().toLowerCase()))
    .sort((a, b) => sort === 'name' ? a.title.localeCompare(b.title)
      : Number(b.categories.includes('featured')) - Number(a.categories.includes('featured'))), [adventures, category, search, sort]);

  return <section id="experiences" className={`${compact ? 'bg-transparent py-6' : 'bg-[#faf7f1] py-16 sm:py-20'} text-[#30281e] ${className}`}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        {!compact && <div className="max-w-2xl"><p className="experience-eyebrow">Find your kind of unforgettable</p>
          <h2 className="mt-4 text-4xl sm:text-5xl">A little adventure.<br /><span className="italic text-[#99441f]">A lifetime of memories.</span></h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#6c6256]">From the first glimpse of the Falls to quiet moments on the Zambezi, explore the experiences that make your stay your own.</p>
        </div>}
        <label className="relative block w-full lg:w-80"><span className="sr-only">Search experiences</span><Search className="absolute left-4 top-4 text-[#8a7964]" size={18} aria-hidden="true" />
          <input type="search" value={search} onChange={event => setSearch(event.target.value)} placeholder="Search experiences…" className="w-full rounded-full border border-[#d9cfc0] bg-white py-3.5 pl-12 pr-5 text-sm outline-none focus:border-[#99441f] focus:ring-2 focus:ring-[#99441f]/20" />
        </label>
      </div>
      <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter experiences by category">
        {[{ key: 'all', label: 'All experiences' }, ...categories.map(key => ({ key, label: categoryLabel(key) }))].map(item =>
          <button type="button" key={item.key} aria-pressed={category === item.key} onClick={() => setCategory(item.key)} className={`experience-filter ${category === item.key ? 'is-active' : ''}`}>{item.label}</button>)}
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[#e3dacd] pt-6">
        <p role="status" aria-live="polite" className="text-sm text-[#6c6256]">{error ? 'Experiences temporarily unavailable' : loading ? 'Loading experiences…' : `${filtered.length} ${filtered.length === 1 ? 'experience' : 'experiences'} to explore`}</p>
        <label className="flex items-center gap-2 text-sm text-[#6c6256]"><SlidersHorizontal size={15} aria-hidden="true" /><span className="sr-only">Sort experiences</span>
          <select value={sort} onChange={event => setSort(event.target.value)} className="max-w-full bg-transparent py-2 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-[#99441f]"><option value="recommended">Recommended first</option><option value="name">Name: A–Z</option></select>
        </label>
      </div>
      {loading ? <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[1, 2, 3].map(id => <div key={id} className="h-96 animate-pulse rounded-2xl bg-[#e8dfd1]" />)}</div>
        : error ? <div className="experience-empty"><h3 className="text-3xl">Let us help you find your adventure</h3><p className="mt-3 text-[#6c6256]">We’re having trouble loading the experiences. Please try again shortly, or speak to our team.</p><Link href="/contact" className="experience-button mt-6">Contact our team <ArrowRight size={16} aria-hidden="true" /></Link></div>
        : filtered.length ? <div className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(experience => <ExperienceCard key={experience.id} experience={experience} />)}</div>
        : <div className="experience-empty"><h3 className="text-3xl">{adventures?.length ? 'A different adventure awaits' : 'Your next memory starts here'}</h3><p className="mt-3 text-[#6c6256]">{adventures?.length ? 'Try another search or category to see more experiences.' : 'Speak with our team for help planning your Victoria Falls stay.'}</p>{adventures?.length ? <button type="button" className="experience-button mt-6" onClick={() => { setCategory('all'); setSearch(''); }}>Show all experiences</button> : <Link href="/contact" className="experience-button mt-6">Plan with us</Link>}</div>}
      <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#ede5d8] p-7 sm:p-9 md:flex-row md:items-center">
        <div><h3 className="text-2xl sm:text-3xl">Not sure where to start?</h3><p className="mt-2 max-w-xl text-sm leading-6 text-[#6c6256]">Tell us your dates, your interests, and who’s coming along. We’ll help you choose experiences that fit your trip.</p></div>
        <Link href="/contact" className="experience-button shrink-0">Talk to our team <ArrowRight size={16} aria-hidden="true" /></Link>
      </div>
    </div>
  </section>;
}
