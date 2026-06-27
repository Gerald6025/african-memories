"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const galleryImages = [
  "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.01.15%20(2).jpeg?updatedAt=1782214503422",
  "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Entrance-Staircase-PRH-1351x900.jpeg?updatedAt=1778156388218",
  "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2021.03.02.jpeg?updatedAt=1782214499979",
  "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.43.08.jpeg?updatedAt=1782214499580",
  "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Swimming-Pool-1350x900.jpeg?updatedAt=1778156387582",
  "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.43.09.jpeg?updatedAt=1782214505207",
  "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/889b14e7d15c7599674fb48762f5da7c07a47c6d.jpg?updatedAt=1778156382658",
  "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.01.13%20(1).jpeg?updatedAt=1782214500817",
  "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Bathroom-Deluxe-Suite-PRH-1350x900.jpg?updatedAt=1778156386768"
]

export default function GallerySection() {
  return (
    <section className="bg-white py-14 sm:py-20 text-[#3b2b18]">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
              Gallery
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">
              See what awaits you
            </h2>

            
          </motion.div>

          <div>
            <Link
              href="#"
              className="flex items-center gap-2 text-[#3b2b18] transition-all duration-300 bg-gradient-to-r from-[#3b2b18] to-[#3b2b18] bg-no-repeat bg-left-bottom bg-[length:0_2px] hover:bg-[length:100%_2px]"
            >
              View All →
            </Link>
          </div>
        </div>

        {/* Taller Grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
          {/* Row 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-4 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[0]} alt="Gallery image 1" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-3 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[1]} alt="Gallery image 2" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-12 md:col-span-5 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[2]} alt="Gallery image 3" fill className="object-cover" />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-12 md:col-span-3 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[3]} alt="Gallery image 4" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="col-span-12 md:col-span-5 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[4]} alt="Gallery image 5" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-12 md:col-span-4 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[5]} alt="Gallery image 6" fill className="object-cover" />
          </motion.div>

          {/* Row 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="col-span-12 md:col-span-5 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[6]} alt="Gallery image 7" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-12 md:col-span-3 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[7]} alt="Gallery image 8" fill className="object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="col-span-12 md:col-span-4 overflow-hidden relative"
            whileHover={{ scale: 1.02 }}
          >
            <Image src={galleryImages[8]} alt="Gallery image 9" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}