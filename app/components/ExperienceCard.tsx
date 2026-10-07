"use client";

import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import type { ExperienceCardData } from "../../lib/experiences";
import { useState } from "react";

export default function ExperienceCard({ experience: adventure }: { experience: ExperienceCardData }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
              href={'/adventures/' + adventure.slug}
              className="relative block h-72 md:h-80 lg:h-96 overflow-hidden group cursor-pointer focus-visible:outline-2 focus-visible:outline-orange-600 focus-visible:outline-offset-4"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onFocus={() => setHovered(true)}
              onBlur={() => setHovered(false)}
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
                    hovered
                      ? "rgba(0, 0, 0, 0.4)"
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
                      hovered
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {adventure.description}
                  </p>
                </div>
                <div
                  className={`transition-all duration-300 mt-3 self-end ${
                    hovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-2"
                  }`}
                >
                  <FaArrowRight className="text-white text-xl" />
                </div>
              </div>
            </Link>
  );
}
