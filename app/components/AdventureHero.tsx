import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Compass, MapPin } from 'lucide-react';

export default function AdventureHero({ count = 0 }: { count?: number }) {
  return <section className="relative overflow-hidden bg-[#30281e] text-white">
    <div className="absolute inset-0">
      <Image src="https://ik.imagekit.io/c0x52ylk1/dcbf569031a1715e0080b753865291aae4384211.jpg?updatedAt=1786996423591" alt="Explore the landscapes around Victoria Falls" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#241d15]/90 via-[#241d15]/65 to-[#241d15]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#241d15]/60 to-transparent" />
    </div>
    <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-44 sm:px-8 sm:pb-20 lg:pt-52">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#ecd7b8]"><MapPin size={15} aria-hidden="true" />Victoria Falls & beyond</p>
      <h1 className="mt-6 max-w-3xl text-5xl leading-[1.06] sm:text-6xl lg:text-7xl">Extraordinary places.<br /><span className="italic text-[#edc59c]">Unforgettable moments.</span></h1>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/85 sm:text-lg">Walk beside the world’s greatest waterfall. Follow the wildlife. Stay for the sunset. Find the experiences that bring your African story to life.</p>
      <Link href="#experiences" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f5ede0] px-6 py-3.5 text-sm font-semibold text-[#30281e] transition hover:bg-white">Explore experiences <ArrowDown size={16} aria-hidden="true" /></Link>
      <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/80">
        {count > 0 && <span className="inline-flex items-center gap-2"><Compass size={17} aria-hidden="true" />{count} experiences to discover</span>}
        <span>Local insight, personal guidance</span><span>Adventures for every kind of traveller</span>
      </div>
    </div>
  </section>;
}