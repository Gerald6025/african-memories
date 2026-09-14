"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, Maximize2, ChevronLeft, ChevronRight, Play, Pause, Grid, Film } from "lucide-react";
import { AccommodationItem } from "../data/accommodations";
import { Activity } from "./ActivitiesSection";

export interface GalleryMedia {
  id: string;
  type: "image" | "video";
  url: string;
  title: string;
  caption?: string;
}

interface LodgeGalleryAndVideoProps {
  accommodation: AccommodationItem;
  activities?: Activity[];
}

// Curated ambient safari videos for select premier lodges
const lodgeVideos: Record<number, string> = {
  1: "https://assets.mixkit.co/videos/preview/mixkit-african-landscape-at-sunset-with-trees-43640-large.mp4",
  2: "https://assets.mixkit.co/videos/preview/mixkit-elephants-walking-in-the-savannah-43639-large.mp4",
  8: "https://assets.mixkit.co/videos/preview/mixkit-flowing-waterfall-in-a-forest-43657-large.mp4",
  11: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-river-in-the-forest-43649-large.mp4",
  13: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-safari-jeep-on-a-dirt-road-43644-large.mp4",
  14: "https://assets.mixkit.co/videos/preview/mixkit-waterfall-in-the-middle-of-the-jungle-43652-large.mp4",
  21: "https://assets.mixkit.co/videos/preview/mixkit-sunset-over-a-calm-lake-43642-large.mp4",
};

export default function LodgeGalleryAndVideo({
  accommodation,
  activities,
}: LodgeGalleryAndVideoProps) {
  // Build the complete media list for this specific accommodation
  const mediaList: GalleryMedia[] = [];

  // Main hero image
  if (accommodation.image) {
    mediaList.push({
      id: "main",
      type: "image",
      url: accommodation.image,
      title: `${accommodation.title} — Main Lodge`,
      caption: "Panoramic view of the lodge grounds and natural surroundings",
    });
  }

  // Overview image
  if (accommodation.overviewImage && accommodation.overviewImage !== accommodation.image) {
    mediaList.push({
      id: "overview",
      type: "image",
      url: accommodation.overviewImage,
      title: `${accommodation.title} — Exterior & Grounds`,
      caption: "Scenic architecture and landscaped wilderness spaces",
    });
  }

  // Location image
  if (
    accommodation.locationImage &&
    accommodation.locationImage !== accommodation.image &&
    accommodation.locationImage !== accommodation.overviewImage
  ) {
    mediaList.push({
      id: "location",
      type: "image",
      url: accommodation.locationImage,
      title: `${accommodation.title} — Setting & Views`,
      caption: "Spectacular vantage points and surrounding flora and fauna",
    });
  }

  // Room images
  if (accommodation.roomImages && accommodation.roomImages.length > 0) {
    accommodation.roomImages.forEach((url, index) => {
      if (url && !mediaList.some((m) => m.url === url)) {
        mediaList.push({
          id: `room-${index}`,
          type: "image",
          url,
          title: `${accommodation.title} — Luxury Suite ${index + 1}`,
          caption: "Elegantly appointed interiors designed for calm and comfort",
        });
      }
    });
  }

  // Dining / Food image
  if (
    accommodation.foodImage &&
    !accommodation.foodImage.includes("unsplash.com") &&
    !mediaList.some((m) => m.url === accommodation.foodImage)
  ) {
    mediaList.push({
      id: "dining",
      type: "image",
      url: accommodation.foodImage,
      title: `${accommodation.title} — Fine Dining Experience`,
      caption: "Locally inspired cuisine crafted with fresh ingredients",
    });
  }

  // Curated video slide if available
  if (lodgeVideos[accommodation.id]) {
    mediaList.push({
      id: "video-1",
      type: "video",
      url: lodgeVideos[accommodation.id],
      title: `${accommodation.title} — Ambient Safari Film`,
      caption: "Immersive cinematic glimpse into the surrounding wilderness",
    });
  }

  // Activity images for this lodge
  if (activities && activities.length > 0) {
    activities.forEach((act, index) => {
      if (act.imageSrc && !mediaList.some((m) => m.url === act.imageSrc)) {
        mediaList.push({
          id: `activity-${index}`,
          type: "image",
          url: act.imageSrc,
          title: act.title,
          caption: act.description,
        });
      }
    });
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxView, setLightboxView] = useState<"slider" | "grid">("slider");
  const [isPlaying, setIsPlaying] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const total = mediaList.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
    setIsPlaying(false);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
    setIsPlaying(false);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "Escape" && isLightboxOpen) setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, isLightboxOpen]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();
  };

  const currentMedia = mediaList[currentIndex] || mediaList[0];

  if (!currentMedia) return null;

  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      {/* Header matching user reference */}
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#d95d39] uppercase">
          GALLERY AND VIDEO
        </p>

        {/* View Full Gallery Link/Button */}
        <div className="mt-4 sm:mt-5">
          <button
            onClick={() => {
              setLightboxView("slider");
              setIsLightboxOpen(true);
            }}
            className="inline-block text-xs sm:text-sm font-medium tracking-[0.22em] text-stone-500 uppercase transition-colors hover:text-stone-900 cursor-pointer"
          >
            VIEW FULL GALLERY
          </button>
        </div>

        {/* Thin Minimalist Arrows */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center gap-7 sm:gap-8 text-stone-600">
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="group p-1 transition-all hover:text-stone-900 focus:outline-none"
          >
            <svg
              className="h-3.5 w-8 sm:w-9 stroke-current transition-transform duration-200 group-hover:-translate-x-1"
              viewBox="0 0 36 14"
              fill="none"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="35" y1="7" x2="1" y2="7" />
              <polyline points="7,1 1,7 7,13" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next image"
            className="group p-1 transition-all hover:text-stone-900 focus:outline-none"
          >
            <svg
              className="h-3.5 w-8 sm:w-9 stroke-current transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 36 14"
              fill="none"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="1" y1="7" x2="35" y2="7" />
              <polyline points="29,1 35,7 29,13" />
            </svg>
          </button>
        </div>
      </div>

      {/* Media Slider Viewport */}
      <div className="mt-8 sm:mt-10 md:mt-12 w-full">
        <div
          className="relative mx-auto w-full max-w-[1720px] overflow-hidden bg-stone-950"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Display */}
          <div className="relative h-[440px] sm:h-[540px] md:h-[640px] lg:h-[720px] xl:h-[780px] w-full">
            {currentMedia.type === "video" ? (
              <div className="relative h-full w-full bg-black">
                <video
                  ref={videoRef}
                  src={currentMedia.url}
                  className="h-full w-full object-cover"
                  loop
                  playsInline
                  autoPlay
                  muted
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
                <button
                  onClick={() => {
                    if (videoRef.current) {
                      if (isPlaying) {
                        videoRef.current.pause();
                        setIsPlaying(false);
                      } else {
                        videoRef.current.play();
                        setIsPlaying(true);
                      }
                    }
                  }}
                  className="absolute bottom-6 left-6 z-20 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-xs uppercase tracking-widest text-white backdrop-blur-sm transition hover:bg-black/80"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-3.5 w-3.5" /> Pause Film
                    </>
                  ) : (
                    <>
                      <Play className="h-3.5 w-3.5" /> Play Film
                    </>
                  )}
                </button>
              </div>
            ) : (
              <div
                onClick={() => {
                  setLightboxView("slider");
                  setIsLightboxOpen(true);
                }}
                className="group relative h-full w-full cursor-pointer"
              >
                <Image
                  src={currentMedia.url}
                  alt={currentMedia.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />

                {/* Subtle dark gradient overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Expand icon hint on hover */}
                <div className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white opacity-0 backdrop-blur-sm transition group-hover:opacity-100">
                  <Maximize2 className="h-4 w-4" />
                </div>

                {/* Caption / Title overlay */}
                <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 z-10 max-w-xl text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-400">
                    {accommodation.title}
                  </p>
                  <h3 className="mt-1 text-lg sm:text-2xl font-light tracking-wide drop-shadow-sm">
                    {currentMedia.title}
                  </h3>
                  {currentMedia.caption && (
                    <p className="mt-1 text-xs sm:text-sm font-light text-stone-300 line-clamp-2">
                      {currentMedia.caption}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Slide Counter (Bottom Right) */}
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 z-10 flex items-center gap-3">
              <span className="rounded bg-black/50 px-3 py-1 text-xs font-mono tracking-widest text-white backdrop-blur-sm">
                {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>

              <button
                onClick={() => {
                  setLightboxView("grid");
                  setIsLightboxOpen(true);
                }}
                className="hidden sm:flex items-center gap-1.5 rounded-none border border-white/20 bg-black/60 px-3 py-1 text-xs uppercase tracking-wider text-white backdrop-blur-sm transition hover:bg-black/80"
                title="View Grid"
              >
                <Grid className="h-3.5 w-3.5" />
                <span>View Grid</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FULL GALLERY LIGHTBOX MODAL */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-md">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-stone-800 px-6 py-4 text-white">
            <div className="flex items-center gap-4">
              <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-orange-500 uppercase">
                {accommodation.title}
              </p>
              <span className="hidden sm:inline text-stone-500">|</span>
              <p className="hidden sm:inline text-xs text-stone-400 tracking-wider">
                Gallery & Video ({total} Media)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  setLightboxView((prev) => (prev === "slider" ? "grid" : "slider"))
                }
                className="flex items-center gap-1.5 rounded-none border border-stone-700 bg-stone-900 px-3.5 py-1.5 text-xs uppercase tracking-wider text-stone-300 transition hover:border-white hover:text-white hover:bg-stone-800"
              >
                {lightboxView === "slider" ? (
                  <>
                    <Grid className="h-3.5 w-3.5" /> View Grid
                  </>
                ) : (
                  <>
                    <Film className="h-3.5 w-3.5" /> View Slides
                  </>
                )}
              </button>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="rounded-full border border-stone-700 bg-stone-900 p-2 text-stone-300 transition hover:border-white hover:text-white hover:bg-stone-800"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="relative flex-1 overflow-hidden p-4 sm:p-8">
            {lightboxView === "slider" ? (
              <div className="flex h-full flex-col">
                {/* Main View */}
                <div className="relative flex-1">
                  {currentMedia.type === "video" ? (
                    <div className="flex h-full w-full items-center justify-center">
                      <video
                        src={currentMedia.url}
                        controls
                        autoPlay
                        className="max-h-full max-w-full rounded shadow-2xl"
                      />
                    </div>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={currentMedia.url}
                        alt={currentMedia.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1280px) 100vw, 1280px"
                      />
                    </div>
                  )}

                  {/* Left & Right Nav Controls */}
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/90"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-3 text-white transition hover:bg-black/90"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Caption bar */}
                <div className="mt-3 text-center text-white">
                  <h4 className="text-base sm:text-lg font-light tracking-wide">
                    {currentMedia.title}
                  </h4>
                  {currentMedia.caption && (
                    <p className="text-xs sm:text-sm text-stone-400">{currentMedia.caption}</p>
                  )}
                  <p className="mt-1 text-xs font-mono text-stone-500">
                    {currentIndex + 1} of {total}
                  </p>
                </div>

                {/* Thumbnail Strip */}
                <div className="mt-4 flex justify-center gap-2 overflow-x-auto py-2">
                  {mediaList.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`relative h-14 w-20 flex-shrink-0 overflow-hidden rounded transition ${
                        idx === currentIndex
                          ? "ring-2 ring-orange-500"
                          : "opacity-40 hover:opacity-100"
                      }`}
                    >
                      {item.type === "video" ? (
                        <div className="flex h-full w-full items-center justify-center bg-stone-800 text-white">
                          <Film className="h-5 w-5" />
                        </div>
                      ) : (
                        <Image
                          src={item.url}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              /* Grid View of all photos */
              <div className="h-full overflow-y-auto pr-2">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {mediaList.map((item, idx) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCurrentIndex(idx);
                        setLightboxView("slider");
                      }}
                      className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded bg-stone-900"
                    >
                      {item.type === "video" ? (
                        <div className="flex h-full w-full items-center justify-center bg-stone-900 text-white">
                          <Film className="h-8 w-8 text-orange-400" />
                        </div>
                      ) : (
                        <Image
                          src={item.url}
                          alt={item.title}
                          fill
                          className="object-cover transition duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-3">
                        <p className="text-xs text-white line-clamp-1">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
