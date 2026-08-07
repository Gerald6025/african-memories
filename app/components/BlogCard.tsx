"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  excerpt?: string;
  date: string;
  image: string;
  slug: string;
  category?: string;
  featured?: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  image,
  slug,
  category,
  featured,
}: BlogCardProps) {
  if (featured) {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="group"
      >
        <Link href={`/blog/${slug}`} className="block">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
            <div className="relative w-full md:w-1/2 aspect-[16/9] md:aspect-auto md:h-[500px] overflow-hidden bg-slate-100 flex-shrink-0">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex-1">
              {category && (
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-base font-medium tracking-wide text-[#ea580c]">
                    {category}
                  </span>
                  <span className="inline-block h-1 w-1 rounded-full bg-black" />
                  <span className="text-base text-[#5D4A37]">{date}</span>
                </div>
              )}
              <h3 className="font-serif text-[38px] md:text-[44px] font-normal text-[#4B3621] leading-snug relative inline">
                {title}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#4B3621] transition-all duration-500 group-hover:w-full" />
              </h3>
              {excerpt && (
                <p className="mt-4 text-xl font-light leading-relaxed text-[#5D4A37]">
                  {excerpt}
                </p>
              )}
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        <div className="mt-4">
          <h3 className="font-serif text-xl md:text-2xl font-normal text-[#4B3621] leading-snug relative inline">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-px bg-[#4B3621] transition-all duration-500 group-hover:w-full" />
          </h3>
          <p className="mt-2 text-sm text-[#5D4A37]">{date}</p>
        </div>
      </Link>
    </motion.article>
  );
}
