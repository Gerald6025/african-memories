"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
}

export default function BlogCard({
  title,
  date,
  image,
  slug,
}: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-[28px] bg-white transition duration-300"
    >
      <Link href={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative h-72 overflow-hidden rounded-[28px] bg-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-4 p-6">
          <h3 className="text-2xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            {title}
          </h3>
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
            {date}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}