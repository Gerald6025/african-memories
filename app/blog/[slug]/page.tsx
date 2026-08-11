"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const blogPosts = [
  {
    title: "A Day in the Life of a Safari Explorer Experiencing Africa's Untamed Beauty",
    excerpt: "From sunrise game drives to sunset boat cruises, discover what a typical day looks like for a safari enthusiast exploring the vast African wilderness. Every moment brings a new wonder, from the golden light of dawn painting the savanna to the star-filled African sky at night.",
    date: "May 13, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/ban.jpg",
    slug: "a-day-in-the-life-of-a-safari-explorer",
    category: "Safari Life",
    content:
      "The first light of dawn breaks over the savanna, casting a golden hue across the endless plains. As the sky lightens, the calls of birds begin to echo through the acacia trees, signaling the start of another day in the African bush. Our safari explorer slips out of the canvas tent, the cool morning air a refreshing contrast to the stillness of the night.\n\nWith camera in hand, we set out in a sturdy 4x4 across the rugged tracks that wind through the reserve. The engine growls softly as we navigate the terrain, searching for the telltale signs of wildlife. A family of elephants ambles across the road ahead, their calm demeanor a reminder of the raw beauty that surrounds us. The matriarch leads the way, her trunk occasionally lifting to test the air for danger.\n\nBreakfast is served under the shade of an ancient baobab tree. Fresh fruit, coffee, and warm pastries provide sustenance before we venture further into the reserve. The afternoon brings a different rhythm to the bush. Predators emerge from their hiding spots, and the landscape transforms as shadows lengthen. A lone lioness stalks through the tall grass, her golden coat blending seamlessly with the terrain.\n\nAs the sun begins to set, painting the sky in brilliant oranges and reds, we find a scenic spot to watch the day fade away. The silence is broken only by the distant calls of nocturnal creatures. Dinner is a feast under the stars, with the Milky Way stretching overhead in a dazzling display of light. This is the magic of the African wilderness, a place where time slows down and every moment is a gift.",
  },
  {
    title: "Unveiling the Secrets of Kenya's Maasai Mara Wildlife Reserve",
    excerpt: "Explore the iconic Maasai Mara, home to the Great Migration and an unparalleled concentration of wildlife in the heart of East Africa.",
    date: "Apr 17, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/New%20folder/pal.jpeg",
    slug: "unveiling-the-secrets-of-kenyas-maasai-mara",
    category: "Destinations",
    content:
      "The Maasai Mara National Reserve sprawls across the vast savanna of southwestern Kenya, a landscape of golden grasslands and acacia-dotted horizons. Named after the traditional Maasai people who have called this land home for centuries, the reserve is a treasure trove of natural wonders waiting to be discovered.\n\nAt the heart of the reserve lies the Great Migration, one of nature's most spectacular events. Over 1.5 million wildebeest, accompanied by hundreds of thousands of zebras and gazelles, make the perilous journey across the Mara River each year. The thundering hooves echo across the plains as they seek greener pastures, pursued by hungry predators lurking in the tall grass.\n\nThe diversity of wildlife here is staggering. Towering giraffes browse from the treetops while herds of elephants trudge through the dust. Leopards lounge in the shade of acacia trees, their spotted coats a masterclass in camouflage. The reserve is also home to the rare black rhinoceros, a critically endangered species that conservationists are working tirelessly to protect.\n\nFor the Maasai, the land holds deep spiritual significance. Their traditional way of life, centered around cattle herding and a profound connection to nature, has been shaped by the rhythms of the savanna. Visitors can experience this culture firsthand through traditional village visits, where stories are shared around the fire and ancient customs are passed down through generations.",
  },
  {
    title: "Mount Kilimanjaro Awaits: Conquer Africa's Highest Peak",
    excerpt: "Standing tall at 5,895 meters, Kilimanjaro beckons adventurers from around the world. Learn what it takes to summit the roof of Africa.",
    date: "Feb 12, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.01.15%20(2).jpeg",
    slug: "mount-kilimanjaro-awaits-conquer-africas-highest-peak",
    category: "Adventure",
    content:
      "Rising majestically from the Tanzanian landscape, Mount Kilimanjaro stands as Africa's highest peak at 5,895 meters above sea level. This dormant stratovolcano, with its distinctive snow-capped summit, has captivated adventurers for centuries. Unlike many high peaks, Kilimanjaro can be summited without technical climbing equipment, making it accessible to determined trekkers from all walks of life.\n\nThe journey to the roof of Africa is as much a mental challenge as it is a physical one. There are several established routes, each offering a unique perspective on the mountain's diverse ecosystems. The Marangu route, known for its hut accommodations, is the most popular. The Lemosho route, starting from the west, is favored by those seeking a more scenic and less crowded experience. Each path winds through lush rainforests, across barren lunar landscapes, and finally into the thin air of the alpine desert.\n\nThe climb is a test of endurance and willpower. As altitude increases, the air thins and every step becomes more laborious. The infamous 'summit night' begins around midnight, with climbers trudging through the dark in freezing temperatures. But those who persevere are rewarded with an unforgettable sunrise from the crater's edge, with views stretching across the African continent.\n\nFor many, reaching the summit of Kilimanjaro is a life-changing experience. It is a testament to human resilience and the power of determination. The mountain does not give its secrets easily, but those who earn its respect are forever changed by the journey.",
  },
  {
    title: "Witness the Majesty of Victoria Falls: A Zimbabwean Adventure",
    excerpt: "The smoke that thunders — Victoria Falls is one of the most breathtaking natural wonders on Earth. Discover its magic from the Zimbabwean side.",
    date: "Mar 25, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Entrance-Staircase-PRH-1351x900.jpeg",
    video: "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Vids/WhatsApp%20Video%202026-07-15%20at%2012.47.18.mp4?updatedAt=1784210740812",
    slug: "witness-the-majesty-of-victoria-falls",
    category: "Destinations",
    content:
      "On the border between Zambia and Zimbabwe, the Zambezi River plunges over a mile-wide sheet of rock, creating Victoria Falls — one of the Seven Natural Wonders of the World. Known locally as 'Mosi-oa-Ye' (the smoke that thunders), the falls are a spectacle of raw power and beauty that must be seen to be believed.\n\nFrom the Zimbabwean side, visitors can walk along the rim of the falls, getting soaked by the fine mist that rises from the gorge below. The noise is thunderous, a constant roar that reverberates through the chest. Rainbows dance in the spray, creating a surreal atmosphere that feels almost otherworldly. The view from Knife-Edge Bridge offers a heart-stopping perspective, with the full might of the falls spread out before you.\n\nBut the adventure doesn't end there. Thrill-seekers can take a helicopter ride for aerial views of the falls, or join a sunset river cruise on the Zambezi. For the truly brave, white-water rafting through the calm pools below the falls offers an adrenaline-pumping experience. The diverse wildlife of the surrounding national park adds another layer of excitement, with elephants, buffalo, and elusive leopards roaming freely.\n\nThe cultural heritage of the region is equally compelling. Local guides share the legends of the falls, weaving tales of ancient spirits and forbidden love. The combination of natural beauty, thrilling activities, and rich culture makes Victoria Falls an unforgettable destination for any adventurer.",
  },
  {
    title: "How Sustainable Travel is Transforming Safaris",
    excerpt: "Eco-conscious tourism is reshaping the safari experience. Learn how sustainable practices are protecting wildlife and empowering local communities.",
    date: "Feb 7, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2021.03.02.jpeg",
    slug: "how-sustainable-travel-is-transforming-safaris",
    category: "Sustainability",
    content:
      "The face of safari tourism in Africa is undergoing a quiet revolution. As travelers become more conscious of their environmental impact, the industry is embracing sustainable practices that protect wildlife and empower local communities. This shift toward eco-conscious tourism is transforming the traditional safari model into a force for conservation and community development.\n\nAt the heart of this transformation are community-based conservancies. These areas, managed by local communities, provide economic incentives for wildlife conservation while offering authentic cultural experiences for visitors. In Namibia, communal conservancies have played a crucial role in reversing the decline of species such as the black rhinoceros and desert-adapted elephants. By generating revenue through tourism, local communities have a vested interest in protecting their natural heritage.\n\nTourism operators are also adopting innovative practices to minimize their footprint. Solar power systems reduce reliance on fossil fuels, while waste management programs ensure that nothing is left behind. Many lodges now source their food locally, supporting small-scale farmers and reducing the carbon cost of transportation. Water conservation techniques, such as rainwater harvesting and greywater recycling, help preserve this precious resource in arid regions.\n\nEducation plays a key role in sustainable safari tourism. Guides are trained not only in wildlife knowledge but also in conservation principles. Visitors leave with a deeper understanding of the delicate balance between humans and nature. This awareness creates a ripple effect, inspiring travelers to make more responsible choices long after they leave the African bush.\n\nThe future of safari tourism lies in this harmonious balance between adventure and responsibility. As more travelers seek meaningful experiences that give back to the places they visit, sustainable tourism will continue to evolve, ensuring that Africa's wildlife and wild places remain for generations to come.",
  },
  {
    title: "From Dunes to Wildlife: Exploring Namibia's Hidden Treasures",
    excerpt: "Beyond the famous Sossusvlei dunes, Namibia offers a wealth of wildlife and landscapes waiting to be discovered by the intrepid traveler.",
    date: "Feb 12, 2025",
    image: "https://ik.imagekit.io/c0x52ylk1/Resource/WhatsApp%20Image%202026-06-22%20at%2020.43.08.jpeg",
    slug: "from-dunes-to-wildlife-exploring-namibias-hidden-treasures",
    category: "Adventure",
    content:
      "Namibia is a land of striking contrasts, where the ancient Namib Desert meets the vast savanna of the north. While the iconic red dunes of Sossusvlei draw visitors from around the world, the country's hidden treasures extend far beyond these dramatic sand formations. From the rugged Skeleton Coast to the lush wetlands of the Caprivi Strip, Namibia offers an unforgettable journey through diverse landscapes and abundant wildlife.\n\nThe Skeleton Coast is perhaps one of Namibia's most hauntingly beautiful regions. Shipwrecks dot the shoreline, remnants of vessels that met their doom on the treacherous waters. The fog that rolls in from the Atlantic creates an ethereal atmosphere, while desert-adapted elephants and lions roam the inland areas. These hardy creatures have evolved to survive in one of the world's harshest environments, finding water from deep-rooted plants and moisture-laden fog.\n\nIn the north, Etosha National Park is a wildlife haven centered around a vast salt pan. During the dry season, animals gather around the waterholes, providing exceptional game viewing opportunities. The park is home to some of the world's largest populations of endangered species, including black rhinos and African wild dogs. The contrast between the stark salt pans and the vibrant green of the surrounding mopane woodland creates a landscape that is both surreal and alive.\n\nDamaraland, nestled between the Namib Desert and the central plateau, is a haven for adventure seekers. The rugged terrain of the Gamsberg massif offers hiking opportunities for experienced climbers, while the Petrified Forest and Twyfelfontein rock art sites provide a glimpse into the region's ancient past. The area is also home to desert-adapted black rhinos, a testament to successful conservation efforts that have brought this majestic species back from the brink of extinction.",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#f7f4ee]">
        <Navbar />
        <main className="mx-auto w-full max-w-[600px] px-6 py-8 md:px-8">
          <h1 className="font-serif text-[28px] text-[#263d55]">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="mt-4 inline-block text-[10px] text-[#c56a32] transition-colors hover:text-[#263d55]"
          >
            &larr; Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  let similarPosts = blogPosts.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  );
  if (similarPosts.length < 3) {
    const others = blogPosts.filter((p) => p.category !== post.category);
    similarPosts = [...similarPosts, ...others].slice(0, 3);
  }

  return (
    <div className="min-h-screen bg-[#f7f4ee]">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen w-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          {post.video ? (
            <video
              src={post.video}
              autoPlay
              muted
              loop
              playsInline
              aria-label={post.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f7f4ee] to-transparent" />
      </section>

      <main className="mx-auto w-full max-w-[700px] px-6 py-8 md:px-8">
        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Meta */}
          <div className="mb-3 flex items-center gap-1.5 text-[11px] md:text-[12px]">
            <span className="text-[#6f6257]">
              {post.date}
            </span>

            <span className="text-[#c56a32]">&bull;</span>

            <span className="text-[#c56a32]">
              {post.category}
            </span>

            <span className="text-[#c56a32]">&bull;</span>

            <span className="text-[#c56a32]">
              Experience
            </span>
          </div>

          {/* Title */}
          <h1 className="max-w-[460px] font-serif text-[30px] font-normal leading-[1.08] tracking-[-0.02em] text-[#263d55] md:text-[34px]">
            {post.title}
          </h1>
        </motion.header>

        {/* Article body */}
        <motion.article
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-5"
        >
          {post.content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="mb-3 text-[15px] leading-[1.7] text-[#403d39] md:text-[16px]"
            >
              {paragraph}
            </p>
          ))}

          {/* Main image */}
          <figure className="mt-2">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 720px) 100vw, 652px"
              />
            </div>

              <figcaption className="mt-1.5 text-center text-[11px] text-[#403d39]">
              The longer you stay, the richer the experience
            </figcaption>
          </figure>

          {/* Secondary section */}
          <section className="mt-5">
            <h2 className="font-serif text-[20px] font-normal leading-tight text-[#263d55]">
              Landscapes made for slow exploration
            </h2>

            <p className="mt-2 text-[15px] leading-[1.7] text-[#403d39] md:text-[16px]">
              Once in the embrace of the lodge, there is much still to be
              explored. Since its opening, the property has been rewilded,
              allowing the forest and buffer zone to merge and endemic birds
              and wildlife to thrive.
            </p>

            <p className="mt-3 text-[15px] leading-[1.7] text-[#403d39] md:text-[16px]">
              Nature walks and birdwatching on the grounds are a gentle,
              contemplative way to learn about this landscape, and just one
              of the many ways to experience it.
            </p>
          </section>

          {/* Similar Blogs */}
          <section className="mt-8">
            <h2 className="font-serif text-[20px] font-normal leading-tight text-[#263d55]">
              Similar Blogs
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {similarPosts.map((sp) => (
                <Link
                  key={sp.slug}
                  href={`/blog/${sp.slug}`}
                  className="group flex items-start gap-3"
                >
                  <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded">
                    <Image
                      src={sp.image}
                      alt={sp.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="112px"
                    />
                  </div>
                  <div>
                    <p className="text-[13px] font-medium text-[#263d55] group-hover:text-[#c56a32]">
                      {sp.title}
                    </p>
                    <p className="text-[10px] text-[#6f6257]">
                      {sp.date} &bull; {sp.category}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </motion.article>
      </main>

      <Footer />
    </div>
  );
}
