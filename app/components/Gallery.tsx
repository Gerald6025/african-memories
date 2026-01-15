"use client"
import React from "react";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/1.jpg", alt: "Safari Adventure" },
    { id: 2, src: "/3.jpg", alt: "Wildlife" },
    { id: 3, src: "/2.jpg", alt: "Scenic Views" },
    { id: 4, src: "/4.jpg", alt: "Cultural Experience" },
    { id: 5, src: "/5.jpg", alt: "Sunset Safari" },
    { id: 6, src: "/6.jpg", alt: "Wildlife Close-up" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="text-orange-500 font-medium">OUR GALLERY</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
            Explore African Beauty
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-medium shadow hover:bg-orange-600 transition">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
