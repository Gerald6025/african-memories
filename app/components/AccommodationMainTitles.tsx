'use client';

import { useState } from 'react';
import Image from 'next/image';
import { accommodations as accommodationCatalog } from '../data/accommodations';

export default function AccommodationMainTitlesSection({ accommodation }: { accommodation: (typeof accommodationCatalog)[0] }) {
  const currentIndex = accommodationCatalog.findIndex((item) => item.id === accommodation.id);
  const galleryImages = [
    accommodation.image,
    accommodationCatalog[(currentIndex + 1) % accommodationCatalog.length]?.image ?? accommodation.image,
    accommodationCatalog[(currentIndex + 2) % accommodationCatalog.length]?.image ?? accommodation.image,
    accommodationCatalog[(currentIndex + 3) % accommodationCatalog.length]?.image ?? accommodation.image,
    accommodationCatalog[(currentIndex + 4) % accommodationCatalog.length]?.image ?? accommodation.image,
    accommodationCatalog[(currentIndex + 5) % accommodationCatalog.length]?.image ?? accommodation.image,
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#f8efe6] pt-6 pb-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="text-2xl uppercase tracking-wide text-[#3b2b18] sm:text-3xl">
              Main Titles
            </h3>
            <p className="mb-8 text-[#3b2b18] text-base leading-7 sm:text-lg">
              {accommodation.type} stay in {accommodation.location}
            </p>

            <h4 className="mb-4 uppercase tracking-[0.2em] text-sm text-[#3b2b18]">
              Highlights
            </h4>

            <ul className="space-y-3 text-base leading-7 text-[#3b2b18] list-disc pl-5">
              {accommodation.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <button className="inline-flex min-w-[160px] items-center justify-center border border-[#3b2b18] bg-[#3b2b18] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-[#2a1f15]">
                Book Now
              </button>
              <button className="inline-flex min-w-[160px] items-center justify-center border border-[#3b2b18] bg-white px-8 py-4 text-sm uppercase tracking-[0.25em] text-[#3b2b18] transition hover:bg-[#f4ede6]">
                Enquire
              </button>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="overflow-hidden">
              <Image
                src={galleryImages[activeIndex]}
                alt={`${accommodation.title} image ${activeIndex + 1}`}
                width={1200}
                height={800}
                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[542px]"
              />
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#ddd] pt-5 text-sm tracking-[0.3em] text-[#3b2b18]">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`min-w-[38px] text-center ${
                    activeIndex === index ? 'font-semibold text-[#3b2b18]' : 'text-[#8d7b63]'
                  }`}
                >
                  {String(index + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
