import Image from 'next/image';
import Link from 'next/link';
import type { ExperienceDetails as Details } from '../../lib/api';

export default function ExperienceDetails({ details }: { details: Details }) {
  return <div className="mt-10 space-y-10">
    <div className="flex flex-wrap gap-4 text-sm"><span>{details.duration}</span>{details.location && <span>{details.location}</span>}</div>
    {details.whyWeRecommend && <section><h3 className="text-2xl">Why we recommend it</h3><p className="mt-4 leading-7">{details.whyWeRecommend}</p></section>}
    {([
      ['Highlights', details.highlights], ['What’s included', details.whatsIncluded],
      ['What’s excluded', details.whatsExcluded], ['Good to know', details.goodToKnow],
    ] as [string, string[] | undefined][]).map(([title, items]) => items?.length ? <section key={title}>
      <h3 className="text-2xl">{title}</h3><ul className="mt-4 list-disc space-y-2 pl-5 leading-7">{items.map((item, i) => <li key={i}>{item}</li>)}</ul>
    </section> : null)}
    {details.steps?.length ? <section><h3 className="text-2xl">Your experience</h3><ol className="mt-6 space-y-6">{details.steps.map(step => <li key={step.stepNumber}>
      <h4 className="text-xl">{step.stepNumber}. {step.title}</h4>{step.time && <p className="mt-1 text-sm">{step.time}</p>}
      <p className="mt-3 leading-7">{step.description}</p>{step.highlight && <p className="mt-3 font-medium">{step.highlight}</p>}
      {step.image && <Image src={step.image} alt={step.title} width={900} height={600} sizes="(max-width: 768px) 100vw, 60vw" className="mt-4 h-64 w-full object-cover" />}
    </li>)}</ol></section> : null}
    {details.localExpertTip && <section className="border-l-2 border-orange-700 pl-5"><h3 className="text-xl">Local expert tip</h3><p className="mt-3 leading-7">{details.localExpertTip}</p></section>}
    {details.galleryImages.length > 0 && <section><h3 className="text-2xl">Gallery</h3><div className="mt-6 grid grid-cols-2 gap-3">{details.galleryImages.map((src, i) => <Image key={`${src}-${i}`} src={src} alt={`${details.title} photo ${i + 1}`} width={600} height={400} sizes="(max-width: 768px) 50vw, 30vw" className="h-48 w-full object-cover sm:h-60" />)}</div></section>}
    {details.faqs.length > 0 && <section><h3 className="text-2xl">Frequently asked questions</h3><div className="mt-4 divide-y divide-[#3b2b18]/15">{details.faqs.map((faq, i) => <details key={i} className="py-4"><summary className="cursor-pointer font-medium">{faq.q}</summary><p className="mt-3 leading-7">{faq.a}</p></details>)}</div></section>}
    {details.relatedIds.length > 0 && <section><h3 className="text-2xl">Related experiences</h3><div className="mt-4 flex flex-wrap gap-4">{details.relatedIds.map(slug => <Link key={slug} className="underline underline-offset-4" href={`/adventures/${slug}`}>{slug.replaceAll('-', ' ')}</Link>)}</div></section>}
  </div>;
}
