"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/BlogHero";
import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    excerpt: "From sunrise game drives to sunset boat cruises, discover what a typical day looks like for a safari enthusiast exploring the vast African wilderness.",
    date: "May 13, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg",
    slug: "a-day-in-the-life-of-a-safari-explorer",
    category: "Safari Life",
  },
  {
    title: "Unveiling the Secrets of Kenya's Maasai Mara Wildlife Reserve",
    excerpt: "Explore the iconic Maasai Mara, home to the Great Migration and an unparalleled concentration of wildlife in the heart of East Africa.",
    date: "Apr 17, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/pal.jpeg",
    slug: "unveiling-the-secrets-of-kenyas-maasai-mara",
    category: "Destinations",
  },
  {
    title: "Mount Kilimanjaro Awaits: Conquer Africa's Highest Peak",
    excerpt: "Standing tall at 5,895 meters, Kilimanjaro beckons adventurers from around the world. Learn what it takes to summit the roof of Africa.",
    date: "Feb 12, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.01.15%20(2).jpeg",
    slug: "mount-kilimanjaro-awaits-conquer-africas-highest-peak",
    category: "Adventure",
  },
  {
    title: "Witness the Majesty of Victoria Falls: A Zimbabwean Adventure",
    excerpt: "The smoke that thunders — Victoria Falls is one of the most breathtaking natural wonders on Earth. Discover its magic from the Zimbabwean side.",
    date: "Mar 25, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Entrance-Staircase-PRH-1351x900.jpeg",
    slug: "witness-the-majesty-of-victoria-falls",
    category: "Destinations",
  },
  {
    title: "How Sustainable Travel is Transforming Safaris",
    excerpt: "Eco-conscious tourism is reshaping the safari experience. Learn how sustainable practices are protecting wildlife and empowering local communities.",
    date: "Feb 7, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2021.03.02.jpeg",
    slug: "how-sustainable-travel-is-transforming-safaris",
    category: "Sustainability",
  },
  {
    title: "From Dunes to Wildlife: Exploring Namibia's Hidden Treasures",
    excerpt: "Beyond the famous Sossusvlei dunes, Namibia offers a wealth of wildlife and landscapes waiting to be discovered by the intrepid traveler.",
    date: "Feb 12, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.43.08.jpeg",
    slug: "from-dunes-to-wildlife-exploring-namibias-hidden-treasures",
    category: "Adventure",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHero />

      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                image={post.image}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-[#3b2b18] text-white px-8 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors duration-300"
            >
              Load More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}