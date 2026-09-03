'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { accommodations as accommodationCatalog } from '../data/accommodations';
import { getHotelData } from '../data/hotelInfoData';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  Bus, Droplet, Car, PawPrint, Bird, Scissors, Utensils, Waves, Home, Map,
  BedSingle, BedDouble, MapPin, Clock, Shield, CheckCircle, Trees, Binoculars,
  Footprints, Wifi, Coffee, Bell, Sun, Tv, GlassWater, Flame, Club, Fish,
  Dumbbell, Briefcase, Bath, ShoppingBasket, Tent, Wind, Users, Sailboat, Leaf,
  Wine, Camera, Church, Crown, Accessibility, Fan, Plane,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Bus, Droplet, Car, PawPrint, Bird, Scissors, Utensils, Waves, Home, Map,
  BedSingle, BedDouble, MapPin, Clock, Shield, CheckCircle, Trees, Binoculars,
  Footprints, Wifi, Coffee, Bell, Sun, Tv,
  Water: GlassWater, Fire: Flame, Golf: Club, Fish,
  Dumbbell, Briefcase,
  Bathtub: Bath,
  Shopping: ShoppingBasket, Tent, Wind, Users, Sailboat, Leaf, Wine, Camera, Church, Crown,
  Accessibility, Fan, Plane,
};

function IconRenderer({ name }: { name: string }) {
  const Icon = iconMap[name] || MapPin;
  return <Icon className="h-5 w-5 shrink-0 text-stone-400" />;
}

export default function AccommodationDetail({ accommodationId }: { accommodationId: number }) {
  const accommodation = accommodationCatalog.find((item) => item.id === accommodationId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('need-to-know');

  const hotelData = getHotelData(accommodation?.id ?? 0);

  if (!accommodation) {
    return (
      <main className="min-h-screen bg-[#f8efe6] px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-stone-800">Accommodation not found</h1>
        <p className="mt-4 text-stone-600">The selected hotel could not be found.</p>
        <Link href="/places-to-stay" className="mt-8 inline-flex items-center gap-2 text-orange-600 hover:underline">
          Back to places to stay
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-stone-800">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        {accommodation.heroVideo ? (
          accommodation.heroVideo.includes('.mp4') ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={accommodation.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <iframe
              src={
                accommodation.heroVideo.includes('facebook.com')
                  ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(accommodation.heroVideo)}&show_text=0&autoplay=1&mute=1`
                  : `${accommodation.heroVideo.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`
              }
              className="absolute inset-0 h-full w-full"
              style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.2)' }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
            />
          )
        ) : (
          <Image
            src={accommodation.image}
            alt={accommodation.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl">
              {accommodation.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                {accommodation.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                {accommodation.description}
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Settle into spacious rooms with bespoke finishes, enjoy curated dining options, and unwind by the pool or riverside terrace. This property blends refined comfort with locally inspired experiences for a memorable stay.
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Ideal for travelers seeking seamless service, cultural excursions, and calm retreat spaces, the lodge makes it easy to relax after a day exploring the region.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center border border-[#3b2b18] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3b2b18] transition hover:bg-[#3b2b18] hover:text-white"
              >
                Learn more
              </Link>
            </div>

            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.overviewImage ?? accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.locationImage ?? accommodation.overviewImage ?? accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                Location
              </h2>
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg leading-8 text-stone-600">
                  {accommodation.location}
                </p>
              </div>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Nestled in the heart of {accommodation.location}, this property offers convenient access to the region&rsquo;s top attractions while providing a tranquil retreat from the everyday hustle.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center border border-[#3b2b18] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3b2b18] transition hover:bg-[#3b2b18] hover:text-white"
              >
                View Larger Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                Accommodation
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                {accommodation.description}
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Each room and suite has been thoughtfully designed to provide the utmost comfort, blending modern amenities with the natural beauty of the surrounding landscape.
              </p>
            </div>

            <div className="relative overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.roomImages?.[currentImageIndex] ?? accommodation.image}
                alt={`${accommodation.title} room`}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? (accommodation.roomImages?.length ?? 1) - 1 : prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === (accommodation.roomImages?.length ?? 1) - 1 ? 0 : prev + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 text-sm text-white">
                {currentImageIndex + 1} / {accommodation.roomImages?.length ?? 1}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600">
                {accommodation.title}
              </h2>
              <p className="text-lg leading-8 text-stone-600 mt-6">
                Lodge Information
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4 text-sm font-medium text-stone-500 uppercase tracking-wider">
                {hotelData.tabs.map((tab) => (
                  <React.Fragment key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 ${activeTab === tab.id ? 'text-orange-600' : 'hover:text-stone-800'}`}
                    >
                      {tab.label}
                    </button>
                    {hotelData.tabs.indexOf(tab) < hotelData.tabs.length - 1 && (
                      <span className="text-stone-300">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {hotelData.tabsData[activeTab]?.map((item) => (
                  <div key={item.id} className={`flex items-center gap-3 border-b border-stone-100 pb-3 ${item.fullSpan ? 'sm:col-span-2' : ''}`}>
                    <IconRenderer name={item.icon} />
                    <span className="text-sm text-stone-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

