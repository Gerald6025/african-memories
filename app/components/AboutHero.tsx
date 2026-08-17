"use client";

export default function AboutHero() {
  return (
    <section className="relative h-[72vh] md:h-[84vh] lg:h-[120vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/c0x52ylk1/Dennis/WhatsApp%20Image%202026-08-13%20at%2010.06.13.jpeg?updatedAt=1786610597358"
          alt="About African Memories"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            About Us
          </p>
          <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Creating unforgettable safari experiences across Zimbabwe&apos;s most breathtaking destinations.
          </p>
        </div>
      </div>
    </section>
  );
}
