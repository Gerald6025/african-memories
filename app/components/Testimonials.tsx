"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: "Sangeeta Raja",
      title: "Traveler",
      image:
        "https://ik.imagekit.io/c0x52ylk1/sangeeta%20raja.jpg?updatedAt=1778680138239",
      quote:
        "My experience with African Memories Safaris is one I am thoroughly pleased with. The warmth and kind nature shown to us was exemplary along with the wonderful family touch. The personal touch and flexibility with timings of our packed days was so kind along with our transfers from hotels, airports and experiences. Our trips to Hwange and Victoria Falls are something that will hold memories within our family for time to come and that can only be thanks to African Memories Safaris ",
      rating: 4,
    },
    {
      name: "Kim Oliver",
      title: "Adventure Enthusiast",
      image:
        "https://ik.imagekit.io/c0x52ylk1/kim%20oliver.jpg?updatedAt=1778680132036",
      quote:
        "Gerald and his team were so accommodating in arranging our activities while in Victoria Falls. I would HIGHLY recommend African Memories Safaris for hassle-free activities! Thank you for amazing memories",
      rating: 5,
    },
    {
      name: "Velda Tsitsi",
      title: "Photography Enthusiast",
      image:
        "https://ik.imagekit.io/c0x52ylk1/velda%20tsitsi.jpg?updatedAt=1778680129388",
      quote:
        "Thank you so much we had an amazing time!!!!❤️❤️❤️you guys are such great hosts",
      rating: 5,
    },

    {
      name: "Pranil Raja",
      title: "Photography Enthusiast",
      image:
        "https://ik.imagekit.io/c0x52ylk1/pranil%20raja.jpg?updatedAt=1778680129355",
      quote:
        "Excellent tour operator and fantastic service. Would highly recommend using African Memories Safaris. Each part of our tour and stay at the Falls was organised with precision and we were welcomed with generosity and warmth. Everyone made our visit comfortable and enjoyable",
      rating: 5,
    },

    {
      name: "Zanele",
      title: "Photography Enthusiast",
      image:
        "https://ik.imagekit.io/c0x52ylk1/zanele.jpg?updatedAt=1778680128147",
      quote:
        "African memories safaris are very good hosts, we had a good time & enjoyed every minute of all activities recommend. I would do it all over again😎. Thank you Gerald and your team",
      rating: 5,
    },

     {
      name: "Tendai Marengereke",
      title: "Photography Enthusiast",
      image:
        "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/306312776_10158292192946537_8717320259780373136_n.jpg?stp=dst-jpg_tt6&cstp=mx837x837&ctp=s837x837&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8LxQpfC5A-oQ7kNvwHDqXuU&_nc_oc=AdpmyADkGIL78_xLHgkQTx_zhMiBiGHvlV6XdvLtcCJ-FNAcZyhpMpGHT3KmnSVHJEo&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=jLVRUqNG9si9XI1OFyjbpg&_nc_ss=7b2a8&oh=00_Af-peS1Wzr6EQzXCD2AdZHDoHR7Y7vYnAaj_G8Qh3zaiKw&oe=6A3C7AE1",
      quote:
        "The team at African Memories Safari was very amazing. We got very good treatment from Gerald and his team, especially the Elephant interaction and the Zambezi River beach breakfast during our game drive.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="relative py-20 sm:py-28 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/33650538/pexels-photo-33650538.jpeg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-500">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            What Our Client Say
          </h2>
        </div>

         <div className="mt-16 relative">
          <div className="max-w-2xl mx-auto">
            <div
              className={`text-center space-y-8 transition-all duration-700 ease-in-out ${
                isAnimating
                  ? "opacity-0 -translate-x-10"
                  : "opacity-100 translate-x-0"
              }`}
              onTransitionEnd={() => setIsAnimating(false)}
            >
              {/* Star Rating */}
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-8 w-8 ${i < current.rating ? "text-orange-500" : "text-gray-400"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

               {/* Quote */}
               <p className="text-lg leading-relaxed text-white min-h-[160px]">
                 {current.quote}
               </p>

              {/* Client Info */}
              <div className="space-y-3">
                <div className="flex justify-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-16 w-16 rounded-full object-cover border-4 border-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {current.name}
                </h3>
                <p className="text-gray-300">{current.title}</p>
              </div>
            </div>
          </div>

           {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute bottom-6 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} className="text-[#5c3d2e]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute bottom-6 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowRight size={20} className="text-[#5c3d2e]" />
          </button>
        </div>
      </div>
    </section>
  );
}
