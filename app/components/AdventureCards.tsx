"use client";

import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

interface Adventure {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface AdventureCardsProps {
  adventures: Adventure[];
  className?: string;
}

export default function AdventureCards({ adventures, className }: AdventureCardsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className={`bg-white py-16 md:py-20 lg:py-24 ${className || ''}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {adventures.map((adventure) => (
            <div
              key={adventure.id}
              className="relative h-72 md:h-80 lg:h-96 overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredId(adventure.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${adventure.image}')`,
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{
                  backgroundColor:
                    hoveredId === adventure.id
                      ? "rgba(225, 119, 45, 0.45)"
                      : "rgba(0, 0, 0, 0.4)",
                }}
              />

              {/* Text Readability Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:mb-3 transition-all duration-300">
                    {adventure.title}
                  </h3>
                  <p
                    className={`text-white text-sm md:text-base leading-relaxed transition-all duration-300 overflow-hidden ${
                      hoveredId === adventure.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {adventure.description}
                  </p>
                </div>
                <div
                  className={`transition-all duration-300 mt-3 self-end ${
                    hoveredId === adventure.id
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2"
                  }`}
                >
                  <FaArrowRight className="text-white text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
