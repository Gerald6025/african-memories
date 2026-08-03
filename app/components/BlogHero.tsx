"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-0"
      >
        <img
          src="https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg"
          alt="Blog hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500"
        >
          Our Stories
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
        >
          Insights, stories, and tips from the heart of African safaris and
          wildlife adventures.
        </motion.p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-white/70 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}