'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  MapPin,
  Sparkles,
  Compass,
  ShieldCheck,
  Star,
  X,
  Home,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
} from 'lucide-react';
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

const getLodgeSections = (type: string) => {
  const safari = [
    {
      title: 'A private sanctuary',
      text: 'This tranquil retreat, sheltered by ancient trees, is a peaceful space for families and couples to come together. Connecting with nature in this intimate woodland setting comes naturally, while quiet moments of reflection are enriched by the soundtrack of the surrounding wilderness.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Sheltered and shaded',
      text: 'With its balance of social and tucked-away outdoor areas, the lodge offers spaces that are secluded yet not separate. A private outdoor boma invites fireside vigils and the sharing of stories as old as time.',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'A sought-after wilderness setting',
      text: 'Located in the heart of Africa\'s most breathtaking landscapes, the lodge gives guests access to pristine wilderness areas renowned for their high concentrations of wildlife and unforgettable scenery.',
      image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const beach = [
    {
      title: 'Oceanfront serenity',
      text: 'Soft light, sea air, and a calm rhythm that turns every hour into a little escape. The atmosphere leans into barefoot luxury, ocean views, and a slower pace that feels effortless from arrival to departure.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Tropical relaxation',
      text: 'Choose between spa time, beach lounging, or a local outing. The days are designed around your pace, with gentle mornings, lazy afternoons, and evenings painted in gold.',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Island escape',
      text: 'White sands, crystal-clear water, and gentle luxury come together in this beachfront retreat designed for pure relaxation and unforgettable sunsets.',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const mountain = [
    {
      title: 'Highland retreat',
      text: 'Cool air, thoughtful details, and a feeling of being tucked gently into nature. This is a place for lingering over views, taking long walks, and savoring calm between the day\'s little adventures.',
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Garden sanctuary',
      text: 'Take time for a walk, a garden pause, or a long lunch in comfort. The estate grounds offer plenty of quiet corners and scenic lookouts.',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4aaae?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Panoramic views',
      text: 'Settle in with stargazing, a drink, and a quiet night ahead. The mountain setting provides a dramatic backdrop for every moment of your stay.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const default_sections = [
    {
      title: 'A refined retreat',
      text: 'The experience is designed for ease, elegance, and a sense of being looked after from the first arrival to the last goodbye. Every detail feels carefully chosen.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Thoughtful design',
      text: 'Thoughtful design, easy access to local highlights, and a warm, welcoming atmosphere make this stay truly special.',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Local flavor',
      text: 'A balance of comfort, character, and scenery that feels both luxurious and deeply personal. Discover the unique charm of the region.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  if (/Safari|Camp|Migration/i.test(type)) return safari;
  if (/Beach|Island/i.test(type)) return beach;
  if (/Mountain|Coffee|Estate/i.test(type)) return mountain;
  return default_sections;
};

const getLodgeActivities = (type: string) => {
  const all = [
    { name: 'Game Drives', image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80' },
    { name: 'Guided Walks', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=600&q=80' },
    { name: 'Wellness', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80' },
    { name: 'Dining', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80' },
    { name: 'Swimming Pool', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80' },
    { name: 'Stargazing', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80' },
  ];

  if (/Safari|Camp|Migration/i.test(type)) {
    return [all[0], all[1], all[4], all[5], all[2], all[3]];
  }
  if (/Beach|Island/i.test(type)) {
    return [all[4], all[3], all[2], all[5], all[1], all[0]];
  }
  if (/Mountain|Coffee|Estate/i.test(type)) {
    return [all[1], all[5], all[2], all[3], all[4], all[0]];
  }
  return all;
};

export default function AccommodationDetail({ accommodationId }: { accommodationId: number }) {
  const accommodation = accommodationCatalog.find((item) => item.id === accommodationId);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState(initialBookingForm);

  const handleBookingChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setBookingForm((current) => ({ ...current, [name]: value }));
  };

  const handleBookingSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  const sections = getLodgeSections(accommodation.type);
  const activities = getLodgeActivities(accommodation.type);
  const gallery = [accommodation.image, ...galleryBase];
  const relatedLodges = accommodationCatalog
    .filter((item) => item.id !== accommodation.id && item.location === accommodation.location)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white text-stone-800">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src={accommodation.image}
          alt={accommodation.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end pb-16 sm:pb-24">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                {accommodation.type}
              </p>
              <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl lg:text-7xl">
                {accommodation.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-stone-200">
                <span className="flex items-center gap-2 text-sm uppercase tracking-widest">
                  <MapPin size={16} />
                  {accommodation.location}
                </span>
                <span className="hidden sm:inline text-stone-500">|</span>
                <span className="text-sm uppercase tracking-widest">{accommodation.price}</span>
              </div>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-stone-900 transition hover:bg-orange-500 hover:text-white"
              >
                Check availability
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lodge Menu */}
      <nav className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-8 overflow-x-auto py-4">
            <Link href="/places-to-stay" className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-orange-600">
              <ArrowLeft size={16} />
              Back
            </Link>
            <div className="hidden sm:block h-6 w-px bg-stone-200" />
            <div className="flex items-center gap-6">
              <a href="#overview" className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-orange-600">
                <Home size={16} />
                Overview
              </a>
              <a href="#experience" className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-orange-600">
                <Sparkles size={16} />
                Experience
              </a>
              <a href="#activities" className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-orange-600">
                <Compass size={16} />
                Activities
              </a>
              <a href="#information" className="flex items-center gap-2 text-sm font-medium text-stone-600 transition hover:text-orange-600">
                <ShieldCheck size={16} />
                Information
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Overview Section */}
      <section id="overview" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Overview</p>
              <h2 className="mt-4 text-4xl font-semibold text-stone-800 sm:text-5xl">
                A stay shaped around calm, comfort and discovery
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                {accommodation.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {accommodation.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={gallery[1]}
                alt={accommodation.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Sections */}
      <section id="experience" className="space-y-0">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`border-t border-stone-200 ${
              index % 2 === 0 ? 'bg-white' : 'bg-stone-50'
            }`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className={`grid gap-8 py-16 sm:gap-12 sm:py-24 lg:grid-cols-2 lg:gap-16`}>
                <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
                    {index === 0 ? 'The setting' : index === 1 ? 'The atmosphere' : 'The location'}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">
                    {section.title}
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-stone-600">
                    {section.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Gallery Strip */}
      <section className="border-t border-stone-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Gallery</p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">A closer look</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image}
                  alt={`${accommodation.title} view ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id="activities" className="border-t border-stone-200 bg-stone-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Experiences</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">What to see and do</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div key={activity.name} className="group relative aspect-[4/3] overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{activity.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information */}
      <section id="information" className="border-t border-stone-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Lodge Information</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">Everything you need to know</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <Home size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Accommodation & Amenities</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {accommodation.amenities.join(', ')}
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <Star size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Rates</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {accommodation.price}. Enquire for seasonal variations and special offers.
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <Clock size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Check-in / Check-out</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Flexible timing available. Early arrivals and late departures can be arranged upon request.
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <Users size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Children</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Family-friendly environment with activities and amenities suited for all ages.
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <Phone size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Contact Info</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Direct line for bookings and inquiries. Our team is available to assist with your plans.
              </p>
            </div>
            <div className="border border-stone-200 bg-stone-50 p-8 transition hover:border-orange-300 hover:shadow-sm">
              <ShieldCheck size={24} className="text-orange-600" />
              <h3 className="mt-4 text-lg font-semibold text-stone-800">Health & Travel</h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                All travel requirements and health advisories are covered. We assist with every detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Collection */}
      {relatedLodges.length > 0 && (
        <section className="border-t border-stone-200 bg-stone-50 py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Our Collection</p>
              <h2 className="mt-4 text-3xl font-semibold text-stone-800 sm:text-4xl">More places to stay</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLodges.map((lodge) => (
                <Link
                  key={lodge.id}
                  href={`/places-to-stay/${lodge.id}`}
                  className="group flex flex-col bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={lodge.image}
                      alt={lodge.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-semibold text-stone-800">{lodge.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-stone-500">
                      <MapPin size={14} />
                      {lodge.location}
                    </p>
                    <p className="mt-4 text-sm text-orange-600">{lodge.price}</p>
                    <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-medium text-stone-700 group-hover:text-orange-600">
                      Discover
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-900 py-16 text-stone-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-semibold text-white">{accommodation.title}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-stone-400">
                {accommodation.description}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a href="mailto:geralldgchibanda6025@gmail.com" className="flex items-center gap-2 text-sm text-stone-400 transition hover:text-white">
                  <Mail size={16} />
                  geralldgchibanda6025@gmail.com
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-500">Explore</h4>
              <ul className="mt-4 space-y-3">
                <li><Link href="/" className="text-sm text-stone-400 transition hover:text-white">Home</Link></li>
                <li><Link href="/places-to-stay" className="text-sm text-stone-400 transition hover:text-white">Places to Stay</Link></li>
                <li><Link href="/safaris" className="text-sm text-stone-400 transition hover:text-white">Safaris</Link></li>
                <li><Link href="/activities" className="text-sm text-stone-400 transition hover:text-white">Activities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-widest text-stone-500">Contact</h4>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center gap-2 text-sm text-stone-400">
                  <MapPin size={16} />
                  {accommodation.location}
                </li>
                <li className="flex items-center gap-2 text-sm text-stone-400">
                  <Phone size={16} />
                  +263 ...
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-stone-800 pt-8 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} African Memories. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
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
