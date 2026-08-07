'use client';

import { useEffect, useRef, useState } from 'react';
import { RiPlayCircleFill, RiCloseLine } from 'react-icons/ri';

export default function WhyChooseUs() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideoOverlay = () => {
    setIsOverlayOpen(true);
  };

  useEffect(() => {
    if (!isOverlayOpen || !videoRef.current) return;

    setIsPlaying(true);
    videoRef.current.currentTime = 0;

    videoRef.current
      .play()
      .catch(() => {
        // ignore play rejection on browsers that block autoplay
      });
  }, [isOverlayOpen]);

  const closeVideoOverlay = () => {
    setIsOverlayOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleVideoEnded = () => {
    setIsOverlayOpen(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const reasons = [
    {
      title: 'Journey with Care',
      description: 'We prioritize low-impact travel, supporting eco-conscious practices to protect the environment while you explore the beauty.',
    },
    {
      title: 'Any Route',
      description: 'Explore Zimbabwe on your terms with our flexible itineraries, allowing you to customize your adventure and discover hidden gems beyond the usual paths.',
    },
    {
      title: 'Your Dream',
      description: 'We turn your dream safari into reality, crafting personalized journeys that reflect your unique vision and desires for an unforgettable African experience.',
    },
    {
      title: 'Our Guarantee',
      description: 'We guarantee an unforgettable experience, ensuring your safari exceeds expectations with exceptional service, unique adventures, and cherished memories that last a lifetime.',
    },
  ];

  return (
    <section className="bg-[#f7ede0] py-14 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="space-y-10">
            <div className="max-w-6xl">
              <span className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">Why African Memories</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">Why Choose African Memories Safaris for Your Next Adventure?</h2>
            </div>
              <div className="relative overflow-hidden bg-white max-w-[560px]">
              <img
                src="https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg"
                alt="Safari landscape"
                className="w-full h-[420px] sm:h-[680px] object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.75),rgba(255,255,255,0.02)_35%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={openVideoOverlay}
                  className="group relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-white/90 text-orange-500 shadow-[0_20px_60px_rgba(0,0,0,0.16)] transition duration-300 hover:scale-105 animate-pulse"
                >
                  <span className="absolute inset-0 rounded-full border border-white/40 opacity-70 animate-ping" />
                  <RiPlayCircleFill className="relative text-5xl" />
                  <span className="sr-only">Open video</span>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="flex justify-start sm:justify-end mt-16">
              <button className="inline-flex items-center justify-center rounded-lg border border-[#3b2b18] bg-transparent px-5 py-4 text-sm font-semibold text-[#3b2b18] transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:px-4">
                Plan Your Next Adventures
              </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 mt-50">
              {reasons.map((reason) => {
                return (
                  <div key={reason.title} className="rounded-[28px] p-6">
                    <h3 className="text-[1.5rem] font-semibold text-[#3b2b18] mb-2">{reason.title}</h3>
                    <p className="text-[1.05rem] leading-8 text-[#7a6855]">{reason.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isOverlayOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="relative w-[90vw] max-w-[1100px] h-[50vh] max-h-[600px] overflow-hidden bg-[#111] shadow-2xl">
            <button
              onClick={closeVideoOverlay}
              className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white/15"
            >
              <RiCloseLine className="text-2xl" />
            </button>
            <video
              ref={videoRef}
              src="https://ik.imagekit.io/c0x52ylk1/New%20folder/vid.mp4?updatedAt=1780425027479"
              muted
              playsInline
              controls
              onEnded={handleVideoEnded}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
