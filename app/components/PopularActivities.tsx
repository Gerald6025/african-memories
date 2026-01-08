import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const PopularActivities = () => {
  const activities = {
    left: {
      top: {
        id: 1,
        title: "Devils Pool",
        description: "The devils pool is the worlds ultimate infinity pool. Swim in a natural pool right on the edge of the largest waterfall in the world if you are a thrill seeker looking to experience an adrenaline",
        image: "/devils-pool.jpg",
        large: true
      },
      bottom: [
        {
          id: 2,
          title: "Whitewater Rafting",
          description: "Paddling the adrenaline-inducing Grade 5 rapids of mighty Zambezi river...",
          image: "/rafting.jpg"
        },
        {
          id: 3,
          title: "Bungee Jumping",
          description: "Challenge the limits of the mind and test the edge of fear by leaping off the impressive bridge...",
          image: "/bungee.jpg"
        }
      ]
    },
    right: {
      top: [
        {
          id: 4,
          title: "Helicopter Flight",
          description: "Experience a bird's eye view of the Victoria Falls on a thrilling flight over the Falls as it will give you...",
          image: "/helicopter.jpg"
        },
        {
          id: 5,
          title: "Waterfall View",
          description: "Witness the breathtaking beauty of the Victoria Falls from our exclusive viewing points...",
          image: "/waterfall.jpg"
        }
      ],
      bottom: {
        id: 6,
        title: "Our Guarantee",
        features: [
          {
            icon: "",
            title: "Any Route",
            description: "We will help you make any route for travel"
          },
          {
            icon: "",
            title: "Your Dream",
            description: "Your dreams of an unforgettable journey can come true with us"
          },
          {
            icon: "",
            title: "Our Guarantee",
            description: "We guarantee you an unforgettable journey and a lot of impressions"
          }
        ],
        large: true
      }
    }
  };

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <p className="text-orange-500 text-sm font-medium">POPULAR</p>
          <h2 className="text-3xl font-bold">MOST POPULAR ACTIVITIES</h2>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-orange-500 hover:underline">View All Activities</a>
          <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
            <button
              className="p-2.5 rounded-full bg-white hover:bg-gray-100 transition-colors text-orange-600 border border-orange-600"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              className="p-2.5 rounded-full bg-orange-600 hover:bg-orange-700 transition-colors text-white"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Large top image */}
          <div className="relative rounded-lg overflow-hidden h-96 group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <Image 
              src={activities.left.top.image}
              alt={activities.left.top.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">{activities.left.top.title}</h3>
              <p className="text-sm text-gray-200 drop-shadow">{activities.left.top.description}</p>
            </div>
          </div>
          
          {/* Two small images below */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.left.bottom.map((activity) => (
              <div key={activity.id} className="relative rounded-lg overflow-hidden h-64 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <Image 
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-bold text-lg mb-1 drop-shadow-lg">{activity.title}</h3>
                  <p className="text-sm text-gray-200 drop-shadow">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Two small images on top */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.right.top.map((activity) => (
              <div key={activity.id} className="relative rounded-lg overflow-hidden h-64 group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
                <Image 
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-20">
                  <h3 className="font-bold text-lg mb-1 drop-shadow-lg">{activity.title}</h3>
                  <p className="text-sm text-gray-200 drop-shadow">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Large bottom section with features */}
          <div className="bg-amber-900 text-white p-8 rounded-lg h-96 flex flex-col justify-center">
            {activities.right.bottom.features.map((feature, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-3">{feature.icon}</span>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm text-amber-100 pl-11">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default PopularActivities;
