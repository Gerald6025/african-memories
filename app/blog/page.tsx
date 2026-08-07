"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "../components/BlogHero";
import BlogCard from "../components/BlogCard";

const blogPosts = [
  {
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    excerpt: "From sunrise game drives to sunset boat cruises, discover what a typical day looks like for a safari enthusiast exploring the vast African wilderness. Every moment brings a new wonder, from the golden light of dawn painting the savanna to the star-filled African sky at night.",
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

const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <div className="min-h-screen">
      <Navbar />
      <BlogHero />

      {/* Featured Post - Full Width */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 md:px-0 lg:px-0 pt-14 pb-18">
          {featuredPost && (
            <BlogCard
              title={featuredPost.title}
              excerpt={featuredPost.excerpt}
              date={featuredPost.date}
              image={featuredPost.image}
              slug={featuredPost.slug}
              category={featuredPost.category}
              featured
            />
          )}
        </div>
      </section>

      {/* Smaller Posts with Sidebar */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1280px] px-4 md:px-0 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-7 pt-9 pb-18">
            {/* Sidebar */}
            <aside className="w-full lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-8">
                <div className="mb-10">
                  <h2 className="font-serif text-lg font-semibold text-[#4B3621] mb-4">
                    Search
                  </h2>
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-[#5D4A37] placeholder:text-gray-400 focus:border-[#ea580c] focus:outline-none"
                  />
                </div>

                <div>
                  <h2 className="font-serif text-lg font-semibold text-[#4B3621] mb-4">
                    Select category
                  </h2>
                  <div className="flex flex-row lg:flex-col items-start gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        className="whitespace-nowrap px-4 py-2 text-sm text-[#5D4A37] transition-colors hover:text-[#ea580c]"
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Blog Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    date={post.date}
                    image={post.image}
                    slug={post.slug}
                    category={post.category}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
