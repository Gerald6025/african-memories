"use client";

import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface AdventureHeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function AdventureHero({
  title = "Adventures",
  subtitle = "Step beyond the ordinary and discover unforgettable adventures across Africa's untamed landscapes and extraordinary wilderness.",
  backgroundImage = "https://ik.imagekit.io/c0x52ylk1/dcbf569031a1715e0080b753865291aae4384211.jpg?updatedAt=1786996423591"
}: AdventureHeroProps) {
  return (
    <div
      className="relative h-screen pt-20 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${backgroundImage}')`,
      }}
    >
      <div className="container mx-auto px-6 lg:px-8 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
