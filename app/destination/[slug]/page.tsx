import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import Navbar from "../../components/Navbar";
import { accommodations } from "../../data/accommodations";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const destinations = [
  {
     slug: "victoria-falls",
    name: "Victoria Falls",
    image: "https://images.pexels.com/photos/21631113/pexels-photo-21631113.jpeg",
    statement: "Witness one of the world's seven natural wonders here today",
    description:
      "Witness the awe-inspiring Victoria Falls, one of the Seven Natural Wonders of the World. Feel the mist on your face as the Zambezi River plunges into a deep gorge, creating a thunderous spectacle of water and light.",
    highlights: [
      "Helicopter rides over the Falls",
      "Bungee jumping at Victoria Falls Bridge",
      "Sunset cruises on the Zambezi River",
      "Guided walks through The Rain Forest",
    ],
  },
  {
     slug: "kariba",
    name: "Kariba",
    image: "https://images.pexels.com/photos/16083420/pexels-photo-16083420.jpeg",
    statement: "Discover a serene lakeside paradise nestled between Zimbabwe and Zambia",
    description:
      "Discover Kariba, a tranquil lakeside paradise nestled between Zimbabwe and Zambia. Home to the world's largest man-made lake and the legendary tiger fish, Kariba offers unforgettable sunsets and serene island escapes.",
    highlights: [
      "Houseboat safaris on Lake Kariba",
      "Tiger fishing adventures",
      "Sunset game cruises",
      "Island camping under the stars",
    ],
  },
  {
     slug: "hwange",
    name: "Hwange",
    image: "https://images.pexels.com/photos/18386171/pexels-photo-18386171.jpeg",
    statement: "Explore Zimbabwe's largest national park with vast savannas and wildlife",
    description:
      "Explore Zimbabwe's largest national park, Hwange, where vast savannas, ancient woodlands, and abundant wildlife converge. Spot elephants, lions, and rare wild dogs in their natural habitat.",
    highlights: [
      "Game drives with expert rangers",
      "Guided walking safaris",
      "Painted Dogs conservation projects",
      "African wild dog pack tracking",
    ],
  },
  {
     slug: "nyanga",
    name: "Nyanga",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f7/12/a6/aberfoyle-lodge.jpg?w=1200&h=-1&s=1",
    statement: "Escape to Nyanga's lush highlands with cool mountain air today",
    description:
      "Escape to Nyanga's lush highlands and rolling green hills. Zimbabwe's premier mountain destination offers trout fishing, ancient rock art, hiking trails, and cool mountain air.",
    highlights: [
      "Trout fishing in crystal-clear streams",
      "Mount Nyangani hiking trails",
      "Ancient San rock art tours",
      "Waterfalls and trout angling",
    ],
  },
  {
     slug: "masvingo",
    name: "Masvingo",
    image: "https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg",
    statement: "Step back in time at ancient medieval kingdom stone ruins",
    description:
      "Step back in time at Masvingo, home to the majestic Great Zimbabwe Ruins. A UNESCO World Heritage Site, this ancient city tells the story of a once-great medieval kingdom through its stone ruins and rich history.",
    highlights: [
      "Great Zimbabwe Ruins tours",
      "Ancient stone architecture exploration",
      "Museum of cultural artifacts",
      "Traditional storytelling tours",
    ],
  },
];

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return (
      <main className="bg-[#f7ede0] min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-[#3b2b18]">Destination Not Found</h1>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 text-orange-600 hover:underline">
              <ArrowLeft size={16} /> Back to Home
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative bg-[#f7ede0] min-h-screen">
      <Navbar />
      <section className="relative h-[78vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90">
            {destination.statement}
          </p>
          <button className="mt-6 inline-flex items-center gap-2 border border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105">
            <MapPin size={18} />
            View Map
          </button>
        </div>
      </section>

      <section className="container mx-auto px-6 pt-16 pb-20 text-center">
        <h2 className="text-3xl font-semibold text-[#3b2b18] mb-6">
          About {destination.name}
        </h2>
        <p className="mx-auto max-w-2xl text-center text-lg text-[#3b2b18]/70 leading-relaxed mb-12">
          {destination.description}
        </p>

        <h3 className="text-2xl font-semibold text-[#3b2b18] mb-4">
          Top Experiences
        </h3>
        <p className="mx-auto max-w-2xl text-[#3b2b18]/70 leading-relaxed mb-12">
          {destination.highlights.join(" • ")}
        </p>

        <h3 className="text-2xl font-semibold text-[#3b2b18] mb-4">
          Where To Stay In {destination.name}
        </h3>
        <div className="mx-auto max-w-2xl space-y-6">
          {accommodations
            .filter((a) => a.location === destination.name)
            .map((accommodation) => (
              <p
                key={accommodation.id}
                className="text-[#3b2b18]/70 leading-relaxed"
              >
                <span className="font-semibold text-[#3b2b18]">
                  {accommodation.title}
                </span>{" "}
                ({accommodation.type}) — {accommodation.description}
              </p>
            ))}
        </div>
      </section>
    </main>
  );
}