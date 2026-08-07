"use client";

import { motion } from "framer-motion";

export default function BlogHero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img
          src="https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg"
          alt="Blog hero"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white leading-tight"
          >
            Latest from African Memories
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
