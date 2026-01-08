'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {  FaMapMarkerAlt } from 'react-icons/fa'
import { RiFacebookFill, RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'


interface BannerProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  onVideoDuration?: (duration: number) => void;
  locationTag?: string;
  locationName?: string;
  isActive?: boolean;
}

export default function Banner({ title, subtitle, backgroundImage = '/ban.jpg', backgroundVideo, onVideoDuration, locationTag = 'The most popular tourist destination', locationName = 'The Victoria Falls', isActive = false }: BannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive && backgroundVideo) {
        videoRef.current.play().catch(() => {
          // Autoplay was prevented
        });
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isActive, backgroundVideo]);

  const activities = [
    { id: 1, name: 'Wildlife And Safari', image: '/wildlife and safari.jpg' },
    { id: 2, name: 'Special Tours', image: '/special tours.jpg' },
    { id: 3, name: 'Scenic', image: '/scenic.jpg' },
    { id: 4, name: 'Cultural', image: '/cultural.jpg' },
    { id: 5, name: 'Adrenaline', image: '/adrenaline.jpg' },
  ];

  return (
    <div className="relative h-auto min-h-screen lg:h-screen pt-45 md:pt-0">
      {/* Background Image or Video */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            ref={videoRef}
            src={backgroundVideo}
            autoPlay={false}
            loop
            muted
            className="w-full h-full object-cover"
            onLoadedMetadata={(e) => {
              const duration = e.currentTarget.duration;
              if (onVideoDuration) {
                onVideoDuration(duration);
              }
            }}
          />
        ) : (
          <Image
            src={backgroundImage}
            alt="Safari Adventure"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 sm:px-4">
        {/* Social bar on right side */}
        <div className="absolute right-10 top-72 flex-col items-center gap-4 hidden lg:flex">
          <a href="https://facebook.com/africanmemmoriessafaris" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#0f66d1] transition-colors">
              <RiFacebookFill className="text-white text-2xl" />
            </div>
          </a>
          <a href="https://wa.me/+263772245672" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
              <RiWhatsappFill className="text-white text-2xl" />
            </div>
          </a>
          <a href="https://instagram.com/trigga_92" target="_blank" rel="noopener noreferrer" className="group">
            <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#E4405F] transition-colors">
              <RiInstagramFill className="text-white text-2xl" />
            </div>
          </a>
        </div>
        
        <div className="flex flex-col justify-between h-full pt-16 md:pt-20 lg:pt-32 pb-6 md:pb-8 lg:pb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight pt-0 lg:pt-[150px]">
              {title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:flex-nowrap">
              <button className="bg-orange-500 text-white w-full lg:w-[193px] h-[50px] rounded-lg px-8 py-3 font-medium hover:opacity-90 transition-opacity">
                Explore
              </button>
              <button className="border-2 border-white text-white w-full lg:w-[193px] h-[50px] rounded-lg px-8 py-3 font-medium hover:bg-white/10 transition-colors">
                Choose Activity
              </button>
            </div>
            
            {/* Mobile Social Icons - Only visible on mobile */}
            <div className="flex justify-center gap-5 py-3 lg:hidden">
              <a href="https://facebook.com/africanmemmoriessafaris" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#0f66d1] transition-colors">
                  <RiFacebookFill className="text-white text-xl" />
                </div>
              </a>
              <a href="https://wa.me/+263772245672" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                  <RiWhatsappFill className="text-white text-xl" />
                </div>
              </a>
              <a href="https://instagram.com/trigga_92" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center group-hover:bg-[#E4405F] transition-colors">
                  <RiInstagramFill className="text-white text-xl" />
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end">
            <div className="flex items-center p-3 sm:p-4 rounded-lg mb-3 sm:mb-4 lg:mb-0 w-full lg:w-auto">
              <div className="p-1 sm:p-2 rounded-full mr-2 sm:mr-3"><FaMapMarkerAlt className="text-white text-3xl sm:text-4xl lg:text-5xl" /></div>
              <div>
                <p className="text-sm sm:text-base lg:text-lg text-orange-500">{locationTag}</p>
                <p className="text-white font-medium text-lg sm:text-xl lg:text-2xl">{locationName}</p>
              </div>
            </div>

            {/* Activity Icons */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-4 w-full lg:w-auto lg:flex-wrap lg:overflow-visible lg:pb-0">
              {activities.map((activity) => (
                <div key={activity.id} className="text-center cursor-pointer group flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-[136px] lg:h-[146px] rounded-lg lg:rounded-none bg-white/10 backdrop-blur-sm flex items-center justify-center mb-1 sm:mb-2 group-hover:bg-amber-500 transition-colors overflow-hidden">
                    <div className="w-full h-full rounded-lg lg:rounded-none overflow-hidden">
                      <Image 
                        src={activity.image} 
                        alt={activity.name}
                        width={136}
                        height={146}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <span className="text-[10px] xs:text-xs lg:text-sm text-white group-hover:text-orange-500 transition-colors">{activity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
