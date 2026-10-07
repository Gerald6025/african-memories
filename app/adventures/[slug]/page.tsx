import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cache } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Mail, MapPin, MessageCircle } from 'lucide-react';
import { apiGet, ApiError, type Activity } from '../../../lib/api';
import { categoryLabel, experienceCard, experienceDetails, experienceImage, experiencePrice } from '../../../lib/experiences';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ExperienceDetails from '../../components/ExperienceDetails';
import ExperienceCard from '../../components/ExperienceCard';

interface PageProps { params: Promise<{ slug: string }> }
const getActivity = cache(async (slug: string) => {
  try { return await apiGet<Activity>(`/activities/${encodeURIComponent(slug)}`); }
  catch (error) {
    if (error instanceof ApiError && error.status === 404) notFound();
    throw error;
  }
});

export async function generateMetadata({ params }: PageProps) {
  const activity = await getActivity((await params).slug);
  return { title: `${activity.name} - African Memories`, description: activity.details?.shortDescription || activity.description || undefined };
}

export default async function AdventureDetailPage({ params }: PageProps) {
  const activity = await getActivity((await params).slug);
  const details = experienceDetails(activity);
  const now = Date.now();
  const price = experiencePrice(activity, now);
  const image = experienceImage(details?.featuredImage || activity.image);
  const categories = (details?.categories || [activity.category]).filter(category => category !== 'featured');
  const slots = (activity.availabilities || []).filter(slot => Date.parse(slot.startsAt) > now && slot.remaining > 0)
    .sort((a, b) => Date.parse(a.startsAt) - Date.parse(b.startsAt)).slice(0, 4);
  let related: Activity[] = [];
  if (details?.relatedIds?.length) {
    try {
      const published = await apiGet<Activity[]>('/activities');
      related = published.filter(item => item.id !== activity.id
        && details.relatedIds.some(id => id === item.slug || id === item.id || id === item.details?.id)).slice(0, 3);
    } catch { /* The selected experience remains available if related items cannot load. */ }
  }
  const enquiry = `Hello African Memories, I’d like to enquire about ${activity.name}. Please help me with dates, availability and a quote.`;
  const email = `mailto:info@africanmemories.com?subject=${encodeURIComponent(`Experience enquiry: ${activity.name}`)}&body=${encodeURIComponent(enquiry)}`;
  const whatsapp = `https://wa.me/263772260839?text=${encodeURIComponent(enquiry)}`;
  const sections = [
    { id: 'overview', label: 'Overview', show: true },
    { id: 'highlights', label: 'Highlights', show: Boolean(details?.highlights?.length) },
    { id: 'included', label: 'Inclusions', show: Boolean(details?.whatsIncluded?.length || details?.whatsExcluded?.length) },
    { id: 'itinerary', label: 'Your experience', show: Boolean(details?.steps?.length) },
    { id: 'gallery', label: 'Gallery', show: Boolean(details?.galleryImages?.length) },
    { id: 'faqs', label: 'FAQs', show: Boolean(details?.faqs?.length) },
  ];
  return <main className="min-h-screen bg-[#faf7f1] text-[#30281e]">
    <Navbar />
    <section className="relative flex min-h-[560px] items-end overflow-hidden bg-[#30281e] sm:min-h-[620px]">
      {image && <Image src={image} alt={activity.name} fill priority sizes="100vw" className="object-cover" />}
      <div className="absolute inset-0 bg-gradient-to-t from-[#211a13]/95 via-[#211a13]/40 to-[#211a13]/30" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-40 sm:px-8 sm:pb-16">
        <Link href="/adventures" className="inline-flex items-center gap-2 text-sm text-white/85 hover:text-white"><ArrowLeft size={15} aria-hidden="true" />All experiences</Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#ecd7b8]">{categories.slice(0, 2).map(categoryLabel).join(' · ')}</p>
        {details?.badge && <span className="mt-4 inline-block rounded-full border border-white/30 px-3 py-1 text-xs text-white">{details.badge}</span>}
        <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">{activity.name}</h1>
        {(details?.subtitle || details?.shortDescription || activity.description) && <p className="mt-5 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">{details?.subtitle || details?.shortDescription || activity.description}</p>}
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/90">{details?.duration && <span className="inline-flex items-center gap-2"><Clock3 size={17} aria-hidden="true" />{details.duration}</span>}{details?.location && <span className="inline-flex items-center gap-2"><MapPin size={17} aria-hidden="true" />{details.location}</span>}<span className="font-semibold text-[#edc59c]">{price.label}</span></div>
      </div>
    </section>
    <nav aria-label="On this experience page" className="border-b border-[#ded2c1] bg-[#f5f0e7]">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 sm:gap-8 sm:px-8">{sections.filter(section => section.show).map(section => <a key={section.id} href={`#${section.id}`} className="shrink-0 py-5 text-sm font-medium text-[#6c6256] transition hover:text-[#99441f]">{section.label}</a>)}</div>
    </nav>
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-14">
      <article className="min-w-0">
        <section id="overview" className="experience-section"><p className="experience-eyebrow">Your next African memory</p><h2 className="mt-3 text-3xl sm:text-4xl">The experience at a glance</h2><p className="mt-6 whitespace-pre-line text-base leading-8 text-[#6c6256]">{details?.fullOverview || activity.description || 'Get in touch with our team to learn more about this experience and plan the right option for your stay.'}</p></section>
        {details && <ExperienceDetails details={details} />}
      </article>
      <aside className="self-start rounded-2xl border border-[#ded2c1] bg-white p-6 shadow-[0_8px_35px_-20px_rgba(48,40,30,0.2)] sm:p-8 lg:sticky lg:top-28">
        <p className="experience-eyebrow">Let’s make it happen</p><h2 className="mt-3 text-3xl">Plan your experience</h2>
        <p className="mt-6 text-3xl font-semibold text-[#99441f]">{price.label}</p>
        <p className="mt-3 text-xs leading-6 text-[#6c6256]">{price.source === 'guide' ? 'Guide starting price. Our team will confirm current rates and your final quote.' : 'Speak with our team to confirm your dates and final quote.'}</p>
        {(details?.duration || details?.location) && <dl className="mt-6 space-y-4 border-t border-[#e6dfd4] pt-6">{details.duration && <div className="flex items-start gap-3"><Clock3 size={18} className="mt-0.5 text-[#99441f]" aria-hidden="true" /><div><dt className="text-xs text-[#8a7964]">Duration</dt><dd className="mt-1 text-sm font-medium">{details.duration}</dd></div></div>}{details.location && <div className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 text-[#99441f]" aria-hidden="true" /><div><dt className="text-xs text-[#8a7964]">Location</dt><dd className="mt-1 text-sm font-medium">{details.location}</dd></div></div>}</dl>}
        <div className="mt-6 border-t border-[#e6dfd4] pt-6"><h3 className="flex items-center gap-2 text-xl"><CalendarDays size={18} className="text-[#99441f]" aria-hidden="true" />Dates & availability</h3>
          {slots.length ? <ul className="mt-4 space-y-3">{slots.map(slot => <li key={slot.id} className="rounded-lg bg-[#f6f2eb] p-3 text-sm"><time dateTime={slot.startsAt} className="font-medium">{new Date(slot.startsAt).toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Africa/Harare' })}</time><span className="mt-1 block text-xs text-[#6c6256]">{slot.remaining} spaces available · Zimbabwe time (UTC+2)</span></li>)}</ul> : <p className="mt-3 text-sm leading-6 text-[#6c6256]">Tell us when you’re visiting. We’ll help you find a date that works for your trip.</p>}
        </div>
        <a href={email} className="experience-button mt-7 w-full">Enquire about this experience <ArrowRight size={17} aria-hidden="true" /></a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 rounded-full border border-[#d9cbb7] px-5 py-3.5 text-sm font-semibold text-[#514637] transition hover:bg-[#f5f0e7]"><MessageCircle size={17} aria-hidden="true" />Chat with us on WhatsApp</a>
        <p className="mt-5 flex items-center justify-center gap-2 text-xs text-[#8a7964]"><Mail size={14} aria-hidden="true" />Personal guidance from our team</p>
      </aside>
    </div>
    {related.length > 0 && <section className="border-t border-[#ded2c1] bg-[#f0ebe2] py-14 sm:py-20"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="experience-eyebrow">More moments to remember</p><div className="mt-3 flex flex-wrap items-end justify-between gap-5"><h2 className="text-3xl sm:text-4xl">Make a little more of your stay</h2><Link href="/adventures" className="inline-flex items-center gap-2 text-sm font-semibold text-[#99441f]">All experiences <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{related.map(item => <ExperienceCard key={item.id} experience={experienceCard(item, now)} />)}</div></div></section>}
    <Footer />
  </main>;
}