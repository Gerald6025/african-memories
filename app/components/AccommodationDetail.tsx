'use client';

import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { ArrowLeft, MapPin, Waves, Sparkles, Utensils, Wifi, BedDouble, Compass, ShieldCheck, CalendarDays, Star, X } from 'lucide-react';
import Navbar from './Navbar';
import { accommodations as accommodationCatalog } from '../data/accommodations';

const galleryBase = [
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
];

const initialBookingForm = {
  name: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: '2',
  notes: '',
};

const getStayDetails = (type: string) => {
  if (/Safari|Camp|Migration/i.test(type)) {
    return {
      mood: 'A grounded luxury experience shaped by open skies, warm service, and the hush of the wild.',
      intro: 'Each day is paced around sunrise, slow afternoons, and candlelit evenings so the stay feels both restorative and deeply immersive.',
      bullets: ['Private wildlife moments', 'Guided local experiences', 'Quiet luxury at every turn'],
      itinerary: [
        { title: 'Golden mornings', text: 'Wake to a fresh coffee service and a gentle start before the first adventure.' },
        { title: 'Wild afternoons', text: 'Return for a long lunch, pool time, and a few hours to simply unwind.' },
        { title: 'Starlit evenings', text: 'End the day with dinner, fireside conversation, and an unhurried night sky.' },
      ],
      bestFor: 'Travelers who want a blend of comfort, movement, and unforgettable scenery.',
      pace: 'Slow and cinematic',
    };
  }

  if (/Beach|Island/i.test(type)) {
    return {
      mood: 'Soft light, sea air, and a calm rhythm that turns every hour into a little escape.',
      intro: 'The atmosphere leans into barefoot luxury, ocean views, and a slower pace that feels effortless from arrival to departure.',
      bullets: ['Ocean-facing comfort', 'Relaxed island dining', 'Flexible days with space to breathe'],
      itinerary: [
        { title: 'Morning breeze', text: 'Start with breakfast by the water and time for a swim before the heat rises.' },
        { title: 'Tropical afternoons', text: 'Choose between spa time, beach lounging, or a local outing.' },
        { title: 'Evening glow', text: 'Watch the shoreline change color while dinner is served with the sea nearby.' },
      ],
      bestFor: 'Couples and families looking for a bright, restorative coastal stay.',
      pace: 'Bright and breezy',
    };
  }

  if (/Mountain|Coffee|Estate/i.test(type)) {
    return {
      mood: 'Cool air, thoughtful details, and a feeling of being tucked gently into nature.',
      intro: 'This is a place for lingering over views, taking long walks, and savoring calm between the day’s little adventures.',
      bullets: ['Scenic landscapes', 'Warm hospitality', 'Plenty of quiet corners'],
      itinerary: [
        { title: 'Highland mornings', text: 'Enjoy slow breakfasts with fresh air and wide views before the day begins.' },
        { title: 'Afternoon reset', text: 'Take time for a walk, a garden pause, or a long lunch in comfort.' },
        { title: 'Golden evenings', text: 'Settle in with stargazing, a drink, and a quiet night ahead.' },
      ],
      bestFor: 'Guests wanting a calm, scenic stay with character and comfort.',
      pace: 'Gentle and restorative',
    };
  }

  return {
    mood: 'A polished stay where comfort meets character and every detail feels carefully chosen.',
    intro: 'The experience is designed for ease, elegance, and a sense of being looked after from the first arrival to the last goodbye.',
    bullets: ['Thoughtful design', 'Easy access to local highlights', 'A warm, welcoming atmosphere'],
    itinerary: [
      { title: 'Arrival ease', text: 'Step in and settle into a calm, beautifully styled space with everything ready for you.' },
      { title: 'Slow discovery', text: 'Spend the afternoon exploring the property or simply relaxing at your own pace.' },
      { title: 'Evening comfort', text: 'Enjoy a relaxed dinner and a restful night in a space full of quiet luxury.' },
    ],
    bestFor: 'Guests seeking a refined stay with comfort, convenience, and local flavor.',
    pace: 'Elegant and unhurried',
  };
};

export default function AccommodationDetail({ accommodationId }: { accommodationId: number }) {
  const accommodation = accommodationCatalog.find((item) => item.id === accommodationId);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState(initialBookingForm);
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBookingChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setBookingForm((current) => ({ ...current, [name]: value }));
  };

  const handleBookingSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Booking request for ${accommodation?.title ?? 'selected hotel'}`);
    const body = encodeURIComponent([
      'Hello Gerald,',
      '',
      'A new booking request has been submitted from the African Memories website.',
      `Hotel: ${accommodation?.title ?? 'Selected hotel'}`,
      `Location: ${accommodation?.location ?? 'N/A'}`,
      `Price: ${accommodation?.price ?? 'N/A'}`,
      `Name: ${bookingForm.name}`,
      `Email: ${bookingForm.email}`,
      `Phone: ${bookingForm.phone}`,
      `Check-in: ${bookingForm.checkIn}`,
      `Check-out: ${bookingForm.checkOut}`,
      `Guests: ${bookingForm.guests}`,
      `Notes: ${bookingForm.notes || 'None'}`,
      '',
      'Please reply to the guest directly to confirm the booking.',
    ].join('\n'));

    window.location.href = `mailto:geralldgchibanda6025@gmail.com?subject=${subject}&body=${body}`;
    setBookingMessage('Your booking request is ready. Please send it from your email app to complete the request.');
    setBookingForm(initialBookingForm);
    setIsBookingOpen(false);
  };

  if (!accommodation) {
    return (
      <main className="min-h-screen bg-[#f8efe6] px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-stone-800">Accommodation not found</h1>
        <p className="mt-4 text-stone-600">The selected hotel could not be found.</p>
        <Link href="/places-to-stay" className="mt-8 inline-flex items-center gap-2 text-orange-600 hover:underline">
          <ArrowLeft size={16} />
          Back to places to stay
        </Link>
      </main>
    );
  }

  const stayDetails = getStayDetails(accommodation.type);
  const gallery = [accommodation.image, ...galleryBase];

  return (
    <main className="min-h-screen bg-[#f7efe4] text-stone-800">
      <section className="relative flex min-h-screen w-full flex-col overflow-hidden border-b border-stone-200 bg-white shadow-[0_25px_80px_rgba(59,43,24,0.12)]">
        <img src={accommodation.image} alt={accommodation.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />

        <div className="relative z-10 flex flex-1 flex-col">
          <div className="w-full">
            <Navbar />
          </div>

          <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-start px-6 py-10 pr-10 sm:py-12 sm:pr-14 lg:px-8 lg:py-16 lg:pr-20">
            <div className="max-w-3xl text-left text-white">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">{accommodation.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-200 sm:text-lg">{accommodation.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-stone-100">
                  {accommodation.location}
                </span>
                <span className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-stone-100">
                  {accommodation.price}
                </span>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="group relative overflow-hidden rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:text-white"
                >
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-orange-600 transition-all duration-300 group-hover:h-full" />
                  <span className="relative z-10">Book now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">

        {bookingMessage && (
          <div className="mb-6 w-full border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {bookingMessage}
          </div>
        )}

        <section className="w-full overflow-hidden border border-stone-200 bg-white shadow-[0_25px_80px_rgba(59,43,24,0.12)]">
          <div className="grid gap-6 border-t border-stone-200 bg-[#fcf4e9] p-6 lg:grid-cols-[1.15fr_0.85fr] lg:p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">Overview</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight text-stone-800 sm:text-4xl">
                A stay shaped around calm, comfort and discovery
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-700">{stayDetails.mood}</p>
              <p className="mt-4 text-base leading-8 text-stone-700">{stayDetails.intro}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stayDetails.bullets.map((item) => (
                  <div key={item} className="flex w-full items-center gap-3 border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-sm">
                    <Sparkles size={15} className="text-orange-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <aside className="w-full border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">Reserve now</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-stone-500">From</p>
              <p className="mt-2 text-2xl font-semibold text-stone-800">{accommodation.price}</p>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-[#3b2b18] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-orange-600"
              >
                Book now
              </button>
              <div className="mt-6 space-y-3 border-t border-stone-200 pt-5 text-sm text-stone-600">
                <div className="flex items-center justify-between gap-4">
                  <span>Location</span>
                  <span className="font-semibold text-stone-800">{accommodation.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Stay type</span>
                  <span className="font-semibold text-stone-800">{accommodation.type}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Best for</span>
                  <span className="font-semibold text-stone-800">{stayDetails.bestFor}</span>
                </div>
              </div>
              <div className="mt-6 w-full border border-stone-200 bg-[#fcf4e9] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-orange-500">The rhythm</p>
                <p className="mt-2 text-sm leading-7 text-stone-700">{stayDetails.pace}</p>
              </div>
            </aside>
          </div>

          <div className="border-t border-stone-200 bg-white p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">The experience</p>
                <h3 className="mt-3 text-2xl font-semibold text-stone-800">A carefully paced stay</h3>
                <div className="mt-5 space-y-4">
                  {stayDetails.itinerary.map((item) => (
                    <div key={item.title} className="w-full border border-stone-200 bg-stone-50 p-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-stone-800">
                        <CalendarDays size={15} className="text-orange-500" />
                        {item.title}
                      </div>
                      <p className="mt-2 text-sm leading-7 text-stone-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full bg-[#3b2b18] p-6 text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-300">Highlights</p>
                <h2 className="mt-3 text-2xl font-semibold">What makes this stay shine</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {accommodation.highlights.map((item) => (
                    <span key={item} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm text-stone-100">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 w-full border border-white/10 bg-white/10 p-4">
                  <h3 className="text-lg font-semibold">Amenities</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {accommodation.amenities.map((item) => (
                      <span key={item} className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm text-stone-100">
                        {item === 'Pool' && <Waves size={14} />}
                        {item === 'Free WiFi' && <Wifi size={14} />}
                        {item === 'Breakfast' && <Utensils size={14} />}
                        {item === 'Spa' && <Sparkles size={14} />}
                        {item === 'Restaurant' && <Utensils size={14} />}
                        {item === 'Bar' && <Utensils size={14} />}
                        {item === 'Game Drives' && <BedDouble size={14} />}
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 bg-white p-6 lg:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-orange-500">Gallery</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-800">A closer look at the stay</h2>
              </div>
              <p className="text-sm text-stone-500">{stayDetails.pace}</p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {gallery.map((image, index) => (
                <div key={`${image}-${index}`} className="w-full overflow-hidden border border-stone-200 bg-stone-50">
                  <img src={image} alt={`${accommodation.title} view ${index + 1}`} className="h-56 w-full object-cover" />
                  <div className="p-4 text-sm text-stone-600">
                    {index === 0 && 'Main view'}
                    {index === 1 && 'Arrival experience'}
                    {index === 2 && 'Comfort and detail'}
                    {index === 3 && 'Atmosphere at dusk'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-200 bg-[#fcf6eb] p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="w-full border border-stone-200 bg-white p-5">
                <Compass size={18} className="text-orange-500" />
                <h3 className="mt-3 text-lg font-semibold text-stone-800">Best for</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">{stayDetails.bestFor}</p>
              </div>
              <div className="w-full border border-stone-200 bg-white p-5">
                <ShieldCheck size={18} className="text-orange-500" />
                <h3 className="mt-3 text-lg font-semibold text-stone-800">Comfort promise</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">Every stay is shaped around ease, thoughtful service, and a restful atmosphere.</p>
              </div>
              <div className="w-full border border-stone-200 bg-white p-5">
                <Star size={18} className="text-orange-500" />
                <h3 className="mt-3 text-lg font-semibold text-stone-800">Guest favorite</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">A balance of comfort, character, and scenery that feels both luxurious and deeply personal.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-4">
          <div className="w-full max-w-2xl bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">Booking request</p>
                <h2 className="mt-2 text-2xl font-semibold text-stone-800">Reserve {accommodation.title}</h2>
              </div>
              <button
                onClick={() => setIsBookingOpen(false)}
                className="rounded-full border border-stone-200 p-2 text-stone-600 transition hover:border-orange-500 hover:text-orange-600"
                aria-label="Close booking form"
              >
                <X size={18} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-stone-600">
              Fill out the form below. Your booking details will open in your email app and be sent to Gerald at the address provided.
            </p>

            <form onSubmit={handleBookingSubmit} className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-stone-700">Full name</label>
                <input
                  required
                  name="name"
                  value={bookingForm.name}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={bookingForm.email}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Phone</label>
                <input
                  required
                  name="phone"
                  value={bookingForm.phone}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                  placeholder="+263 ..."
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Check-in</label>
                <input
                  required
                  type="date"
                  name="checkIn"
                  value={bookingForm.checkIn}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Check-out</label>
                <input
                  required
                  type="date"
                  name="checkOut"
                  value={bookingForm.checkOut}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-stone-700">Guests</label>
                <select
                  name="guests"
                  value={bookingForm.guests}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-stone-700">Notes</label>
                <textarea
                  name="notes"
                  rows={4}
                  value={bookingForm.notes}
                  onChange={handleBookingChange}
                  className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none ring-0 focus:border-orange-500"
                  placeholder="Tell us about your trip, room preferences, or special requests"
                />
              </div>

              <div className="sm:col-span-2 flex flex-col gap-2 border-t border-stone-200 pt-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-stone-600">This will open your email app with the booking request ready to send.</p>
                <button
                  type="submit"
                  className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-orange-600"
                >
                  Send booking request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
