"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface Activity {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface ActivitiesSectionProps {
  activityText?: string;
  activities?: Activity[];
}

const defaultActivityText =
  "From thrilling game drives to serene sunset cruises, discover a world of unforgettable experiences curated to bring you closer to nature's wonders.";

const defaultActivities: Activity[] = [
  {
    id: 1,
    imageSrc: "https://images.pexels.com/photos/6190116/pexels-photo-6190116.jpeg",
    imageAlt: "Activity image 1",
    title: "ACTIVITY ONE",
    description: "Experience the thrill of the wild with guided game drives through pristine wilderness.",
  },
  {
    id: 2,
    imageSrc: "https://images.pexels.com/photos/6190118/pexels-photo-6190118.jpeg",
    imageAlt: "Activity image 2",
    title: "ACTIVITY TWO",
    description: "Unwind with sunset cruises along the river as the sun dips below the horizon.",
  },
  {
    id: 3,
    imageSrc: "https://images.pexels.com/photos/6190119/pexels-photo-6190119.jpeg",
    imageAlt: "Activity image 3",
    title: "ACTIVITY THREE",
    description: "Discover local culture through authentic community visits and traditional experiences.",
  },
  {
    id: 4,
    imageSrc: "https://images.pexels.com/photos/6190120/pexels-photo-6190120.jpeg",
    imageAlt: "Activity image 4",
    title: "ACTIVITY FOUR",
    description: "Explore diverse ecosystems on guided nature walks with expert local guides.",
  },
];

export default function ActivitiesSection({ activityText, activities }: ActivitiesSectionProps) {
  const text = activityText || defaultActivityText;
  const items = activities || defaultActivities;
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  useEffect(() => {
    if (containerRef.current) {
      if (isMobile) {
        containerRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
      } else {
        const itemWidth = containerRef.current.scrollWidth / items.length;
        const offset = currentIndex * itemWidth;
        containerRef.current.style.transform = `translateX(-${offset}px)`;
      }
    }
  }, [currentIndex, items.length, isMobile]);

  return (
    <section className="bg-[#3b2b18] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-orange-500 sm:text-sm">
            ACTIVITIES & EXCURSIONS
          </p>

          <p className="mb-6 text-base font-light text-white sm:text-lg md:text-xl">
            {text}
          </p>

          <div className="flex items-center justify-center">
              <Link
                href="/adventures"
                className="group relative inline-block text-sm font-medium uppercase tracking-widest text-white sm:text-base"
              >
                DISCOVER MORE
                <span className="absolute bottom-0 left-0 block h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
        </div>

        <div className="relative mt-8 sm:mt-10 md:mt-12">
          <div className="overflow-hidden">
            <div
              ref={containerRef}
              className="flex items-stretch transition-transform duration-500 ease-out"
            >
              {items.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex-none px-3 sm:px-2"
                  style={{ width: isMobile ? "100%" : "calc(28.571428571428573% - 1rem)" }}
                >
                  <div className="mb-4 h-48 w-full sm:h-56 md:h-64 lg:h-72">
                    <Image
                      src={activity.imageSrc}
                      alt={activity.imageAlt}
                      width={400}
                      height={450}
                      className="h-full w-full object-cover"
                      sizes="(max-width: 640px) 100vw, 28.57vw"
                    />
                  </div>

                  <div className="p-1">
                    <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-200 sm:text-sm">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-gray-300 sm:text-sm">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
           </div>
          <div className="absolute -top-[60px] right-4 flex items-center gap-3 sm:right-6">
            <button onClick={goToPrevious} aria-label="Previous activity">
              <ArrowLeft className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </button>
            <button onClick={goToNext} aria-label="Next activity">
              <ArrowRight className="h-6 w-6 text-white sm:h-7 sm:w-7" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-gray-500 hover:bg-gray-300"
                }`}
                aria-label={`Go to activity ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
