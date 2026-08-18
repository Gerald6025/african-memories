import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../components/Navbar";

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

const activities = [
  { id: 1, name: 'Wildlife And Safari', image: 'https://ik.imagekit.io/c0x52ylk1/New%20folder/wildlife%20and%20safari.jpg' },
  { id: 2, name: 'Special Tours', image: 'https://ik.imagekit.io/c0x52ylk1/New%20folder/special%20tours.jpg' },
  { id: 3, name: 'Scenic', image: 'https://ik.imagekit.io/c0x52ylk1/New%20folder/scenic.jpg' },
  { id: 4, name: 'Cultural', image: 'https://ik.imagekit.io/c0x52ylk1/New%20folder/cultural.jpg' },
  { id: 5, name: 'Adrenaline', image: 'https://ik.imagekit.io/c0x52ylk1/New%20folder/adrenaline.jpg' },
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
      <section className="bg-[#f7ede0]">
        <div className="container mx-auto px-6 pt-36 pb-16 text-center mb-[50px]">
          <h1 className="text-4xl font-extrabold text-[#3b2b18] sm:text-5xl">
            {destination.name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-[#3b2b18]/80">
            {destination.description}
          </p>
        </div>
      </section>
      <section className="relative h-[78vh] overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </section>

      <section className="container mx-auto px-6 pt-16 pb-20">
        <h2 className="text-center text-3xl font-semibold text-[#3b2b18] mb-6">
          Overview
        </h2>
        <div className="max-w-3xl">
          <p className="mx-auto text-center text-lg text-[#3b2b18]/80 leading-relaxed mb-10">
            {destination.description}
          </p>

          <h3 className="text-center text-2xl font-semibold text-[#3b2b18] mb-4">
            Top Experiences
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {destination.highlights.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-[#3b2b18]/10 bg-white/60 px-4 py-3 text-center text-[#3b2b18]"
              >
                <span className="mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-orange-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f7ede0] py-14 sm:py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-600">
              THINGS TO DO
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#3b2b18] sm:text-5xl">
              Things To Do In {destination.name}
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {activities.map((activity) => (
              <Link key={activity.id} href="/adventures" className="group block text-center">
                <div className="aspect-[4/5] overflow-hidden rounded-lg lg:rounded-none bg-white/10 backdrop-blur-sm">
                  <img
                    src={activity.image}
                    alt={activity.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="mt-2 block text-sm font-medium text-[#3b2b18] group-hover:text-orange-500 transition-colors">
                  {activity.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}