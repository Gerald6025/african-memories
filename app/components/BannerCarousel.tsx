'use client';

import { useState, useEffect } from 'react';
import Banner from './Banner';

interface BannerData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  backgroundVideo?: string;
  locationTag: string;
  locationName: string;
}

interface BannerCarouselProps {
  banners: BannerData[];
}

export default function BannerCarousel({ banners }: BannerCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Always auto-advance every 6 seconds; video will extend to 15 seconds when playing
  const slideDuration = banners[currentIndex]?.backgroundVideo ? 15000 : 6000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [banners.length, slideDuration]);

  return (
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-1000 ease-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {banners.map((banner, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Banner 
              title={banner.title}
              subtitle={banner.subtitle}
              backgroundImage={banner.backgroundImage}
              backgroundVideo={banner.backgroundVideo}
              locationTag={banner.locationTag}
              locationName={banner.locationName}
              isActive={index === currentIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
