"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface AccommodationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}

const AccommodationCard: React.FC<AccommodationCardProps & { id: number }> = ({
  id,
  title,
  description,
  imageUrl,
  type,
}) => {
  return (
    <Link 
      href={`/accommodations/${id}`}
      className="block h-full"
    >
      <div className="bg-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full cursor-pointer">
        <div className="relative h-64 w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {type}
          </span>
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-gray-600 text-sm flex-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const PopularHotelsAndLodges: React.FC = () => {
  const accommodations = [
    {
      id: 1,
      title: 'Shearwaters Explorers Village',
      description: 'Experience luxury in the heart of the Zambezi River with stunning views and world-class amenities.',
      imageUrl: '/night-shots.jpg',
      type: 'Luxury',
    },
    {
      id: 2,
      title: 'The Palm River Hotel',
      description: 'A unique blend of comfort and adventure in the African wilderness with guided safaris.',
      imageUrl: '/pal4.jpeg',
      type: 'Luxury',
    },
    {
      id: 3,
      title: 'Mbano Mano Hotel ',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/Sig.jpg',
      type: 'Luxury',
    },
     {
      id: 4,
      title: 'Chundu Island',
      description: 'Experience luxury in the heart of the Zambezi River with stunning views and world-class amenities.',
      imageUrl: '/chundu-island.png',
      type: 'Safari',
    },
    {
      id: 5,
      title: 'Victoria Falls Hotel',
      description: 'A unique blend of comfort and adventure in the African wilderness with guided safaris.',
      imageUrl: '/hotel.jpg',
      type: 'Luxury',
    },
    {
      id: 6,
      title: 'Dzimbahwe Guest Lodge',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/202.png',
      type: 'Luxury',
    },
     {
      id: 7,
      title: 'Pioneer Camp',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/pioneer.png',
      type: 'Luxury',
    },
    {
      id: 8,
      title: 'Ilala Lodge Hotel',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/ilala.jpg',
      type: 'Luxury',
    },

    {
      id: 9,
      title: 'Old Drift Lodge',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/ODL-1.jpg',
      type: 'Luxury',
    },

    {
      id: 10,
      title: 'Elephant Hills ',
      description: 'Historic colonial-style hotel offering elegant rooms and views of the Victoria Falls.',
      imageUrl: '/ele.png',
      type: 'Luxury',
    },
  ];

  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);
  const swiperRef = React.useRef<any>(null);

  return (
    <section className="bg-white py-16 w-full">
      <div className="px-4 sm:px-4 lg:px-6 mx-auto max-w-[1540px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <div className="mb-4 md:mb-0">
            <span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
              Places to Stay
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">
              Popular Hotels and Lodges
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="/accommodations" 
              className="text-orange-600 hover:underline font-medium whitespace-nowrap"
            >
              View All Accommodations
            </a>
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
              <button
                ref={navigationPrevRef}
                className="p-2.5 rounded-full bg-orange-100 hover:bg-orange-200 transition-colors text-orange-600"
                aria-label="Previous slide"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                ref={navigationNextRef}
                className="p-2.5 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors text-white"
                aria-label="Next slide"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-12"
          >
            {accommodations.map((item) => (
              <SwiperSlide key={item.id}>
                <AccommodationCard
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default PopularHotelsAndLodges;
