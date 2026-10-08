import Image from 'next/image';
import { Check, ChevronDown, Info, Minus, Quote } from 'lucide-react';
import type { ExperienceDetails as Details } from '../../lib/api';

function ItemList({ items, excluded = false }: { items: string[]; excluded?: boolean }) {
  return <ul className="mt-5 space-y-3">{items.map((item, index) => <li key={index} className="flex gap-3 text-sm leading-6 text-[#5d4a37]">{excluded ? <Minus size={16} className="mt-1 shrink-0 text-[#8a7964]" aria-hidden="true" /> : <Check size={16} className="mt-1 shrink-0 text-[#ea580c]" aria-hidden="true" />}<span>{item}</span></li>)}</ul>;
}

export default function ExperienceDetails({ details }: { details: Details }) {
  return <div className="mt-12 space-y-12">
    {details.highlights?.length > 0 && <section id="highlights" className="experience-section">
      <p className="experience-eyebrow">The moments that matter</p><h2 className="mt-3 text-3xl sm:text-4xl">Experience highlights</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">{details.highlights.map((item, index) => <div key={index} className="flex gap-3 rounded-none bg-[#f8efe6] p-5"><p className="text-sm leading-6 text-[#3b2b18]">{item}</p></div>)}</div>
    </section>}
    {details.whyWeRecommend && <section className="rounded-none border border-[#ded2c1] bg-white p-6 sm:p-8"><Quote size={25} className="text-[#ea580c]" aria-hidden="true" /><h2 className="mt-4 text-2xl">Why we love this experience</h2><p className="mt-4 text-base leading-7 text-[#5d4a37]">{details.whyWeRecommend}</p></section>}
    {(details.whatsIncluded?.length > 0 || details.whatsExcluded?.length) ? <section id="included" className="experience-section"><p className="experience-eyebrow">Plan with confidence</p><h2 className="mt-3 text-3xl sm:text-4xl">What’s included</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">{details.whatsIncluded?.length > 0 && <div className="rounded-none border border-[#ded2c1] bg-white p-6"><h3 className="text-xl">Included in your experience</h3><ItemList items={details.whatsIncluded} /></div>}{details.whatsExcluded?.length ? <div className="rounded-none border border-[#ded2c1] bg-white p-6"><h3 className="text-xl">To budget for separately</h3><ItemList items={details.whatsExcluded} excluded /></div> : null}</div>
    </section> : null}
    {details.steps?.length ? <section id="itinerary" className="experience-section"><p className="experience-eyebrow">A closer look at your day</p><h2 className="mt-3 text-3xl sm:text-4xl">How the experience unfolds</h2>
      <ol className="mt-8 space-y-8">{details.steps.map(step => <li key={step.stepNumber} className="relative border-l border-[#d9cbb8] pl-8"><span className="absolute -left-4 top-0 flex size-8 items-center justify-center rounded-none bg-[#ea580c] text-xs font-semibold text-white">{step.stepNumber}</span>
        {step.time && <p className="experience-eyebrow mb-2">{step.time}</p>}<h3 className="text-2xl">{step.title}</h3><p className="mt-3 text-base leading-7 text-[#5d4a37]">{step.description}</p>
        {step.highlight && <p className="mt-4 rounded-none bg-[#f8efe6] px-4 py-3 text-sm leading-6 text-[#3b2b18]">{step.highlight}</p>}
        {step.image && <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-none"><Image src={step.image} alt={step.title} fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>}
      </li>)}</ol>
    </section> : null}
    {details.goodToKnow?.length > 0 && <section id="good-to-know" className="experience-section rounded-none border border-[#ded2c1] bg-[#f7ede0] p-6 sm:p-8"><div className="flex items-center gap-3"><Info size={21} className="text-[#ea580c]" aria-hidden="true" /><h2 className="text-2xl">Before you go</h2></div><ItemList items={details.goodToKnow} /></section>}
    {details.localExpertTip && <section className="border-l-4 border-[#ea580c] py-1 pl-6"><p className="experience-eyebrow">A little local insight</p><h2 className="mt-3 text-2xl">Our expert’s tip</h2><p className="mt-3 text-base leading-7 text-[#5d4a37]">{details.localExpertTip}</p></section>}
    {details.galleryImages?.length > 0 && <section id="gallery" className="experience-section"><p className="experience-eyebrow">Picture yourself here</p><h2 className="mt-3 text-3xl sm:text-4xl">A glimpse of the experience</h2>
      <div className="mt-6 grid grid-cols-2 gap-3">{details.galleryImages.map((src, index) => <div key={`${src}-${index}`} className={`relative overflow-hidden rounded-none ${index === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}><Image src={src} alt={`${details.title} — photo ${index + 1}`} fill sizes={index === 0 ? '(max-width: 1024px) 100vw, 60vw' : '(max-width: 1024px) 50vw, 30vw'} className="object-cover" /></div>)}</div>
    </section>}
    {details.faqs?.length > 0 && <section id="faqs" className="experience-section"><p className="experience-eyebrow">Your questions, answered</p><h2 className="mt-3 text-3xl sm:text-4xl">Good questions. Clear answers.</h2><div className="mt-6 divide-y divide-[#ded2c1] border-y border-[#ded2c1]">{details.faqs.map((faq, index) => <details key={index} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-[#3b2b18]">{faq.q}<ChevronDown size={18} className="shrink-0 text-[#ea580c] transition-transform group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-4 pr-6 text-base leading-7 text-[#5d4a37]">{faq.a}</p></details>)}</div></section>}
  </div>;
}