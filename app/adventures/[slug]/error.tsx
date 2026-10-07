'use client';

import Link from 'next/link';

export default function ExperienceError({ reset }: { reset: () => void }) {
  return <main className="flex min-h-screen items-center justify-center bg-[#faf7f1] px-6 text-[#30281e]"><div className="max-w-xl text-center"><p className="experience-eyebrow">African Memories</p><h1 className="mt-4 text-4xl">Let’s find your next adventure</h1><p className="mt-5 leading-7 text-[#6c6256]">We’re having trouble loading this experience. Try again, or contact our team for help planning your stay.</p><div className="mt-7 flex flex-wrap justify-center gap-4"><button type="button" onClick={reset} className="experience-button">Try again</button><Link href="/adventures" className="rounded-full border border-[#ded2c1] px-6 py-3 text-sm font-semibold">All experiences</Link></div><Link href="/contact" className="mt-6 inline-block text-sm text-[#99441f] underline underline-offset-4">Contact our team</Link></div></main>;
}
