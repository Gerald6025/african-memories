'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { imagekitUrl } from '../../lib/imagekit';

const links = [
  ['/', 'Home'], ['/adventures', 'Things to do'], ['/places-to-stay', 'Places to stay'],
  ['/about', 'About'], ['/blog', 'Blog'], ['/contact', 'Contact'],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [open]);
  const logo = process.env.NEXT_PUBLIC_IMAGEKIT_URL ? imagekitUrl('/logo.png') : null;
  const solid = scrolled || open;
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${solid ? 'border-[#e3dacd] bg-[#faf7f1]/95 text-[#30281e] shadow-sm backdrop-blur-md' : 'border-white/20 bg-transparent text-white'}`}>
    <div className="mx-auto flex h-24 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8">
      <Link href="/" aria-label="African Memories home" onClick={() => setOpen(false)} className="shrink-0">{logo ? <Image src={logo} alt="African Memories Safaris" width={170} height={60} priority className="h-14 w-auto max-w-40 object-contain sm:max-w-44" /> : <span className="block"><span className="block font-serif text-[23px] leading-none tracking-tight">African<br />Memories</span><span className="mt-1.5 block text-[8px] font-medium uppercase tracking-[0.35em] opacity-75">Safaris · Victoria Falls</span></span>}</Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">{links.map(([href, label]) => <Link key={href} href={href} aria-current={(href === '/' ? pathname === '/' : pathname.startsWith(href)) ? 'page' : undefined} className="rounded-full px-3 py-2 text-sm font-medium transition hover:text-[#df995b] aria-[current=page]:underline aria-[current=page]:decoration-[#c8864d] aria-[current=page]:underline-offset-8">{label}</Link>)}</nav>
      <Link href="/contact" className="hidden items-center gap-2 rounded-full bg-[#99441f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7b3518] lg:inline-flex">Plan your trip <ArrowUpRight size={16} aria-hidden="true" /></Link>
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} className="rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-offset-4 lg:hidden">{open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#ded2c1] bg-[#faf7f1] px-5 pb-6 pt-3 text-[#30281e] lg:hidden">{links.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={(href === '/' ? pathname === '/' : pathname.startsWith(href)) ? 'page' : undefined} className="block rounded-lg px-3 py-3 text-base transition hover:bg-[#eee7dc]">{label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)} className="experience-button mt-4 w-full">Plan your trip <ArrowUpRight size={16} aria-hidden="true" /></Link></nav>}
  </header>;
}
