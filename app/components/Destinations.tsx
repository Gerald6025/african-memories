"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Destinations() {
  const destinations = [
    {
      name: "Victoria Falls",
      location: "Masai Mara",
      image:
        "https://images.pexels.com/photos/21631113/pexels-photo-21631113.jpeg",
      alt: "Elephant in Masai Mara",
    },
    {
      name: "Kariba",
      location: "Serengeti",
      image:
        "https://images.pexels.com/photos/16083420/pexels-photo-16083420.jpeg",
      alt: "Wildebeest migration in Serengeti",
    },
    {
      name: "Hwange",
      location: "Kruger National Park",
      image:
        "https://images.pexels.com/photos/18386171/pexels-photo-18386171.jpeg",
      alt: "Lion in Kruger National Park",
    },
    {
      name: "Inyanga",
      location: "Sossusvlei",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f7/12/a6/aberfoyle-lodge.jpg?w=1200&h=-1&s=1",
      alt: "Sand dunes in Namibia",
    },
  ];

  return (
    <section className="bg-[#f7ede0] py-14 sm:py-20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
              Destinations
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">
              Explore Our Safari Destinations Across Zimbabwe
            </h2>
          </div>
          <div className="flex gap-3">
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3b2b18] text-[#3b2b18] transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
              <ArrowLeft size={20} />
              <span className="sr-only">Previous</span>
            </button>
            <button className="flex h-14 w-14 items-center justify-center rounded-full border border-[#3b2b18] text-[#3b2b18] transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
              <ArrowRight size={20} />
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {destinations.map((destination) => (
            <div
              key={destination.name}
              className="w-full max-w-[532px] transition hover:-translate-y-1"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.alt}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="pt-5 text-center">
                <h3 className="text-2xl font-semibold text-[#3b2b18]">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
