"use client"
import React, { useEffect, useState } from "react";
import { imagekitUrl } from '../../lib/imagekit';

const AnimatedCounter = ({ target, duration = 2000 }: { target: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const numericTarget = parseInt(target);

  useEffect(() => {
    if (isNaN(numericTarget)) return;
    
    let start = 0;
    const incrementTime = (duration / numericTarget) * 1000;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= numericTarget) clearInterval(timer);
    }, incrementTime / 100);

    return () => clearInterval(timer);
  }, [numericTarget, duration]);

  return <span>{count}+</span>;
};

const Welcome: React.FC = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative bg-white">
      {/* Left Image */}
      <div className="relative z-0">
        <img
          src={imagekitUrl('/unnamed.png')}
          alt="Chameleon on leaves"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col justify-center px-8 lg:px-16 bg-gray-200 relative top-5 -ml-5 z-10">
        <span className="text-orange-500 font-medium mb-4">
          Welcome To African Memories
        </span>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Memories That <br /> Never Fade.
        </h1>

        <p className="text-gray-600 max-w-xl mb-10">
          Exclusive Deals, Central Locations! Search & Book Cheap Hotels
          Online. Next Stop: The Right Property for You. Big Range of
          Top-Rated Properties. Earn Reward Nights.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          <Stat value="35+" label="Successful Bookings" />
          <Stat value="20+" label="Unique Itenaries created" />
          <Stat value="5+" label="Years Experience" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-orange-600 transition">
            More About Us
          </button>
          <button className="border border-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
  const numericValue = value.replace(/\D/g, '');
  return (
    <div className="flex flex-col items-start">
      <span className="text-3xl font-bold text-gray-900 mb-1">
        <AnimatedCounter target={numericValue} duration={2000} />
      </span>
      <span className="text-gray-500 text-sm">{label}</span>
    </div>
  );
};

export default Welcome;
