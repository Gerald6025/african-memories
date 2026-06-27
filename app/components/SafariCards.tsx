"use client";

import {
  MapPin,
  Home,
  Tent,
  Trees,
  Waves,
  Trophy,
  ArrowRight,
} from "lucide-react";

const lodges = [
  {
    id: 1,
    title: "Palm River Lodge",
    price: "FROM US$1420 PER PERSON PER NIGHT",
    location: "Victoria Falls",
    feature1: "8 Tented Suites",
    feature2: "Pool & Spa",
    description:
      "The Palm River Hotel offers a tranquil retreat near Victoria Falls with a full breakfast and daily managers reception. Guests enjoy the outdoor pool, spa services like manicures and massages, and free WiFi to stay connected throughout their stay.",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Swimming-Pool-1350x900.jpeg?updatedAt=1778156387582",
  },
  {
    id: 2,
    title: "Victoria Falls Safari Lodge",
    price: "FROM US$1370 PER PERSON PER NIGHT",
    location: "Victoria Falls",
    feature1: "5 Vintage Tents",
    feature2: "Big Game Area",
    description:
      "Located in Victoria Falls, within 3.1 mi of the Victoria Falls Bridge, Victoria Falls Safari Lodge offers 4-star accommodations with a garden, a terrace and a bar.",
    button: "Explore",
    image:
    "https://ik.imagekit.io/c0x52ylk1/Safari%20Lodge/victoria-falls-safari-lodge-21.webp?updatedAt=1778529081755",
  },
  {
    id: 3,
    title: "Ilala Lodge Hotel",
    price: "FROM US$9870 PER CAMP PER NIGHT",
    location: "Victoria Falls",
    feature1: "4 Luxury Tents",
    feature2: "Exclusive Use",
    description:
      "Ilala Lodge Hotel is a family-run hotel nestled in the heart of Victoria Falls town, only an 8 minute walk away from the Natural World Wonder, Victoria Falls, making it geographically the closest hotel to the waterfall in Zimbabwe.",
    button: "Explore",
    image:
      "https://www.ilalalodge.com/wp-content/uploads/2017/03/KLRS2091-1-1500x957.jpg",
  },
  {
    id: 4,
    title: "Pamusha Lodge",
    price: "FROM US$1850 PER PERSON PER NIGHT",
    location: "Victoria Falls",
    feature1: "12 Luxury Tents",
    feature2: "Game Drives",
    description:
      "The accommodation facility is about 20 minutes walk from the city. It is also 20km from the airport. We also offer accommodation for groups, independent travelers, backpackers and private clients. ",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/Pamusha%20Lodge/Pamusha-familynew-768x600.jpg?updatedAt=1778529149773",
  },
  {
    id: 5,
    title: "Ngorongoro Crater Lodge",
    price: "FROM US$2100 PER PERSON PER NIGHT",
    location: "Ngorongoro Conservation Area",
    feature1: "15 Suite Tents",
    feature2: "Crater Views",
    description:
      "Perched on the rim of the world's largest intact volcanic caldera, offering breathtaking panoramas.",
    button: "Explore",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Ngorongoro/ngorongoro-crater-lodge.jpg",
  },
  {
    id: 6,
    title: "Lake Manyara Serena",
    price: "FROM US$950 PER PERSON PER NIGHT",
    location: "Lake Manyara National Park",
    feature1: "20 Rooms",
    feature2: "Treehouse Views",
    description:
      "Eclipse-style luxury set on the edge of Lake Manyara, framed by the Great Rift Valley escarpment.",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Lake%20Manyara/lake-manyara-serena.jpg",
  },
  {
    id: 7,
    title: "Tarangire Treetops",
    price: "FROM US$890 PER PERSON PER NIGHT",
    location: "Tarangire National Park",
    feature1: "18 Treehouse Suites",
    feature2: "Viewing Deck",
    description:
      "Drift off to the sounds of the wilderness in our elevated treehouse suites among ancient baobabs.",
    button: "Connect",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Tarangire/tarangire-treetops.jpg",
  },
  {
    id: 8,
    title: "Selous Game Reserve Camp",
    price: "FROM US$1680 PER PERSON PER NIGHT",
    location: "Selous Game Reserve",
    feature1: "10 Luxury Tents",
    feature2: "River Access",
    description:
      "A pristine wilderness retreat where you can boat, walk, and drive through untouched African bush.",
    button: "Explore",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Selous/selous-game-reserve.jpg",
  },
  {
    id: 9,
    title: "Ruaha River Lodge",
    price: "FROM US$1250 PER PERSON PER NIGHT",
    location: "Ruaha National Park",
    feature1: "22 Suite Tents",
    feature2: "River Views",
    description:
      "A classic safari lodge set amid the rocky outcrops and riverine forests of remote Ruaha.",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Ruaha/ruaha-river-lodge.jpg",
  },
  {
    id: 10,
    title: "Katavi National Park Camp",
    price: "FROM US$2400 PER PERSON PER NIGHT",
    location: "Katavi National Park",
    feature1: "6 Exclusive Tents",
    feature2: "Fly-in Safari",
    description:
      "True remoteness and unfiltered wildlife encounters in one of Tanzania's most untouched parks.",
    button: "Connect",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Katavi/katavi-national-park.jpg",
  },
  {
    id: 11,
    title: "Mikumi Safari Lodge",
    price: "FROM US$780 PER PERSON PER NIGHT",
    location: "Mikumi National Park",
    feature1: "16 Luxury Rooms",
    feature2: "Pool & Lounge",
    description:
      "A comfortable and stylish stopover on the gateway to the southern circuit, featuring malaria-free safaris.",
    button: "Explore",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Mikumi/mikumi-safari-lodge.jpg",
  },
  {
    id: 12,
    title: "Arusha Coffee Lodge",
    price: "FROM US$650 PER PERSON PER NIGHT",
    location: "Arusha",
    feature1: "29 Plantation Rooms",
    feature2: "Coffee Estate",
    description:
      "A luxurious haven set on a working coffee plantation just outside Tanzania's safari capital.",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Arusha/arusha-coffee-lodge.jpg",
  },
  {
    id: 13,
    title: "Mara Grand Migration Camp",
    price: "FROM US$1750 PER PERSON PER NIGHT",
    location: "Serengeti Mara",
    feature1: "8 En-suite Tents",
    feature2: "Great Migration",
    description:
      "Follow the wildebeest migration in ephemeral camp comfort that moves with the herds.",
    button: "Explore",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Serengeti%20Migration/mara-grand-migration.jpg",
  },
  {
    id: 14,
    title: "Kilimanjaro View Lodge",
    price: "FROM US$920 PER PERSON PER NIGHT",
    location: "Moshi",
    feature1: "21 Garden Rooms",
    feature2: "Mountain Views",
    description:
      "Relax before or after your Kilimanjaro climb in a serene lodge with Africa's highest peak as your backdrop.",
    button: "Discover",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Kilimanjaro/kilimanjaro-view-lodge.jpg",
  },
  {
    id: 15,
    title: "Zanzibar Beach Retreat",
    price: "FROM US$1100 PER PERSON PER NIGHT",
    location: "Zanzibar Island",
    feature1: "12 Beach Villas",
    feature2: "Private Beach",
    description:
      "White sands and turquoise waters come together in this Barefoot Luxury beach escape.",
    button: "Connect",
    image:
      "https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Zanzibar/zanzibar-beach-retreat.jpg",
  },
];

const Icon = ({ text }: { text?: string }) => {
  const value = (text || "").toLowerCase();

  if (value.includes("pool")) return <Waves size={15} />;
  if (value.includes("tent")) return <Tent size={15} />;
  if (value.includes("game")) return <Trees size={15} />;
  if (value.includes("exclusive")) return <Trophy size={15} />;

  return <Home size={15} />;
};

export default function SafariCards({ heading }: { heading?: string }) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        {heading && (
          <div className="mb-12 flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
                Places to Stay
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">
                {heading}
              </h2>
            </div>
          </div>
        )}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {lodges.map((lodge, index) => (
          <article
            key={lodge.id}
            className="group flex flex-col h-full bg-white overflow-hidden animate-fade-in-up"
            style={{
              animationDelay: `${index * 200}ms`,
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={lodge.image}
                alt={lodge.title}
                className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h2 className="text-4xl font-serif mb-3">{lodge.title}</h2>

                <p className="text-xs tracking-[3px] uppercase font-semibold">
                  {lodge.price}
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="border-b border-stone-300 py-5 flex flex-wrap gap-5 text-xs uppercase tracking-wider text-stone-600">
              <div className="flex items-center gap-2">
                <MapPin size={15} />
                {lodge.location}
              </div>

              {lodge.feature1 && (
                <div className="flex items-center gap-2">
                  <Icon text={lodge.feature1} />
                  {lodge.feature1}
                </div>
              )}

              {lodge.feature2 && (
                <div className="flex items-center gap-2">
                  <Icon text={lodge.feature2} />
                  {lodge.feature2}
                </div>
              )}
            </div>

            <div className="flex-grow py-8">
              <p className="text-stone-600 leading-8 text-[15px]">
                {lodge.description}
              </p>

               <button className="mt-10 flex items-center gap-3 uppercase tracking-[4px] text-sm font-medium text-stone-700 hover:gap-5 transition-all">
                 {lodge.button}
                 <ArrowRight size={18} />
               </button>
               <div className="border-b border-stone-300 mt-10" />
             </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  );
}
