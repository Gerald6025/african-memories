"use client";

export default function ContactHero() {
  return (
    <section className="relative h-[60vh] md:h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/c0x52ylk1/New%20folder/waterfall.jpg?updatedAt=1780424930629"
          alt="Contact African Memories"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Contact Us
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Get in touch with African Memories Safaris. We&apos;re here to help
            you plan your perfect Zimbabwe adventure.
          </p>
        </div>
      </div>
    </section>
  );
}