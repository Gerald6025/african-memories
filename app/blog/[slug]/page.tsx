"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

interface BlogPost {
  title: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

const blogPosts: Record<string, BlogPost> = {
  "a-day-in-the-life-of-a-safari-explorer": {
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    date: "May 13, 2025",
    category: "Safari Life",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg",
    content: "There is something profoundly transformative about waking up in the African bush before dawn. As the first light spills over the savanna, painting the sky in hues of amber and rose, the wilderness comes alive with a symphony of sounds that no recording can truly capture.\n\nThe early morning game drive is the crown jewel of any safari experience. The air is crisp, the golden light filters through the acacia trees, and the animals are at their most active. From the subtle rustle of grass signaling a nearby leopard to the distant trumpet of an elephant herd moving through the mist, every moment is a revelation.\n\nAs the day progresses, the heat settles in and the bush takes on a different character. Herds of elephants gather at waterholes, their silhouettes framed against the shimmering horizon. Lions rest in the shade of ancient marula trees, their golden manes catching the light.\n\nThe sunset drive offers yet another perspective. As the sun dips below the acacia-dotted plains, the sky erupts in a cascade of oranges and purples. The golden hour transforms the landscape into a painter's dream, and every snapshot feels like a masterpiece.\n\nA night under the African sky, away from the glow of cities, reveals a celestial display that humbles even the most seasoned traveler. The Milky Way stretches across the heavens like a river of light, and the silence of the bush is broken only by the distant call of a hyena or the rustle of leaves as nocturnal creatures begin their rounds.\n\nThis is what a safari offers — not just a holiday, but a journey into the soul of the wild.",
  },
  "unveiling-the-secrets-of-kenyas-maasai-mara": {
    title: "Unveiling the Secrets of Kenya's Maasai Mara Wildlife Reserve",
    date: "Apr 17, 2025",
    category: "Destinations",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/pal.jpeg",
    content: "The Maasai Mara is more than a destination — it is a living, breathing testament to the raw power and beauty of the natural world. Stretching across vast expanses of golden grassland in southwestern Kenya, this iconic reserve is home to one of the most spectacular wildlife events on Earth: the Great Migration.\n\nEvery year, over a million wildebeest, accompanied by thousands of zebras and gazelles, traverse the Mara River in a dramatic crossing that has been called the eighth wonder of the world. The sight of thousands of animals surging across the river, braving crocodile-infested waters, is an experience that defies description.\n\nBeyond the migration, the Maasai Mara offers year-round game viewing of extraordinary quality. The Big Five — lion, leopard, elephant, buffalo, and rhinoceros — are all present, and the predator density is among the highest in Africa.\n\nThe Maasai people, whose name gives the reserve its identity, have coexisted with wildlife for centuries. Their rich cultural heritage, vibrant traditions, and deep spiritual connection to the land add a profound dimension to any visit.\n\nConservation efforts in the Mara have been instrumental in protecting this irreplaceable ecosystem. Community-based tourism initiatives ensure that the benefits of safari tourism flow directly to local communities, creating a sustainable model that preserves both wildlife and culture for future generations.",
  },
  "mount-kilimanjaro-awaits-conquer-africas-highest-peak": {
    title: "Mount Kilimanjaro Awaits: Conquer Africa's Highest Peak",
    date: "Feb 12, 2025",
    category: "Adventure",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.01.15%20(2).jpeg",
    content: "Rising 5,895 meters above the East African plains, Mount Kilimanjaro stands as the tallest mountain on the African continent and the highest freestanding mountain in the world. Its snow-capped peak, visible from miles away, has captivated explorers, adventurers, and dreamers for centuries.\n\nClimbing Kilimanjaro is unlike any other mountaineering experience. There are no technical climbing skills required — no ropes, no ice axes, no specialized equipment. What is required is determination, endurance, and the will to push through the thinning air as you ascend through five distinct ecological zones.\n\nThe journey begins in the lush rainforest zone, where towering trees draped in moss create a cathedral-like canopy. As you climb higher, the vegetation gives way to moorland dotted with giant lobelias and groundsels that seem almost alien in their appearance.\n\nThe alpine desert zone is stark and beautiful, with rocks and ice defining the landscape. Finally, the summit zone reveals a barren, windswept terrain where Uhuru Peak awaits — the roof of Africa.\n\nThe descent is often the most memorable part, as climbers reflect on the incredible journey and the sense of accomplishment that comes with standing on top of the continent.",
  },
  "witness-the-majesty-of-victoria-falls": {
    title: "Witness the Majesty of Victoria Falls: A Zimbabwean Adventure",
    date: "Mar 25, 2025",
    category: "Destinations",
    image: "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Entrance-Staircase-PRH-1351x900.jpeg",
    content: 'Known to the local Tonga people as Mosi-oa-Tunya — "The Smoke That Thunders" — Victoria Falls is one of the most awe-inspiring natural wonders of the world. The sheer scale of the falls, where the Zambezi River plunges 108 meters into a narrow gorge, is almost impossible to comprehend until you stand at the edge.\n\nThe spray from Victoria Falls rises over 400 meters into the air, creating a permanent rainbow that can be seen from kilometers away. The lush rainforest that grows in the spray zone is a unique ecosystem, home to rare plants and birds found nowhere else.\n\nThe Zimbabwean side offers the most dramatic vantage points, including the iconic Knife-Edge Bridge and the Falls Bridge, both of which place you at the very brink of the cascading waters.\n\nBeyond the falls, the surrounding area offers a wealth of activities. Helicopter flights provide a bird\'s-eye view of the entire gorge, while sunset cruises on the Zambezi River offer a more relaxed perspective of the landscape.\n\nThe nearby Hwange National Park and Chobe National Park in Botswana make for excellent extensions to any Victoria Falls itinerary, offering world-class wildlife viewing in pristine wilderness settings.',
  },
  "how-sustainable-travel-is-transforming-safaris": {
    title: "How Sustainable Travel is Transforming Safaris",
    date: "Feb 7, 2025",
    category: "Sustainability",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2021.03.02.jpeg",
    content: "The safari industry is undergoing a profound transformation, driven by a growing awareness of the need for sustainable and responsible tourism. As travelers become more conscious of their environmental impact, safari operators are adapting their practices to protect the very ecosystems that make these experiences so extraordinary.\n\nCommunity-based tourism has emerged as a powerful model for sustainable safari travel. By involving local communities in tourism operations — from guiding and hospitality to conservation management — these initiatives ensure that the economic benefits of safari tourism are shared equitably.\n\nConservation-focused lodges are leading the way in eco-friendly hospitality. Solar-powered camps, zero-waste kitchens, and water recycling systems are becoming standard features, demonstrating that luxury and sustainability can coexist.\n\nWildlife conservation programs funded by tourism revenue are making a tangible difference. Anti-poaching initiatives, habitat restoration projects, and wildlife monitoring programs all rely on the support of eco-conscious travelers.\n\nThe shift toward sustainable safari travel is not just about protecting nature — it is about enriching the experience itself. Travelers who engage with conservation efforts and local communities return home with a deeper understanding of the African wilderness and a lasting connection to the places they have visited.",
  },
  "from-dunes-to-wildlife-exploring-namibias-hidden-treasures": {
    title: "From Dunes to Wildlife: Exploring Namibia's Hidden Treasures",
    date: "Feb 12, 2025",
    category: "Adventure",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.43.08.jpeg",
    content: "Namibia is a land of contrasts — from the towering red dunes of Sossusvlei to the stark beauty of the Namib Desert, from the rugged Skeleton Coast to the abundant wildlife of Etosha National Park. This is a country that rewards the intrepid traveler with experiences found nowhere else on Earth.\n\nThe dunes of the Namib Desert are among the tallest in the world, some reaching over 300 meters. At sunrise and sunset, the sand transforms into a kaleidoscope of colors — deep reds, burnt oranges, and soft pinks that shift with the changing light.\n\nEtosha National Park is one of Africa's premier wildlife destinations. Its vast salt pan, visible from space, is surrounded by waterholes that attract enormous concentrations of game. Elephants, lions, giraffes, and endangered black rhinos are all regularly spotted.\n\nThe Skeleton Coast, where the desert meets the Atlantic Ocean, is a hauntingly beautiful landscape of shipwrecks, fog, and desolate beauty. Seal colonies thrive along the shore, and the contrast between the desert and the ocean is striking.\n\nNamibia's commitment to conservation is remarkable. Communal conservancies give local communities ownership over wildlife management, creating a model where conservation and economic development go hand in hand.",
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3b2b18] mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you are looking for does not exist.</p>
          <Link href="/blog" className="text-orange-500 font-semibold hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[50vh] overflow-hidden"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium tracking-wide text-[#ea580c]">
              {post.category}
            </span>
            <span className="inline-block h-1 w-1 rounded-full bg-white" />
            <span className="text-sm text-white/80">{post.date}</span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-normal text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </motion.section>

      <article className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-12 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i} className="mb-6 leading-[1.8] text-[#5D4A37] text-base md:text-lg">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#ea580c] font-semibold hover:text-[#3b2b18] transition-colors"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </motion.div>
      </article>

      <Footer />
    </div>
  );
}
