import React from 'react';
import { MapPin, Clock, Wifi, Check, Map, Shield } from 'lucide-react';

const IconMap = {
  MapPin: MapPin,
  Clock: Clock,
  Wifi: Wifi,
  Map: Map,
  Shield: Shield
};

export default function LodgeInformation({ lodgeData }: { lodgeData: any }) {
  if (!lodgeData) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-sm font-semibold tracking-widest text-stone-500 uppercase mb-3">
          {lodgeData.location}
        </h2>
        <h1 className="text-4xl font-serif text-stone-900 mb-6">{lodgeData.name}</h1>
        <p className="text-stone-600 leading-relaxed">
          {lodgeData.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 bg-stone-50 p-8 rounded-2xl border border-stone-100">
        {lodgeData.needToKnow.map((item: any, index: number) => {
          const Icon = IconMap[item.icon as keyof typeof IconMap] || Check;
          return (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <Icon className="w-6 h-6 text-stone-700" strokeWidth={1.5} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-serif text-stone-900 mb-6">Property Amenities</h3>
          <ul className="space-y-4 text-stone-600">
            {lodgeData.amenities.map((amenity: string, index: number) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-stone-400 mr-3 shrink-0" />
                <span className="text-sm">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
          {lodgeData.rooms.map((room: any, index: number) => (
            <div
              key={index}
              className={`p-8 rounded-2xl relative overflow-hidden ${
                room.isPremium
                  ? 'bg-stone-900 text-stone-100 shadow-lg'
                  : 'bg-white border border-stone-200 shadow-sm'
              }`}
            >
              {room.isPremium && (
                <div className="absolute top-0 right-0 bg-stone-800 px-4 py-1 rounded-bl-lg text-xs font-medium tracking-wide uppercase">
                  Premium
                </div>
              )}

              <h4 className={`text-xl font-serif mb-2 ${room.isPremium ? 'text-white' : 'text-stone-900'}`}>
                {room.name}
              </h4>
              <p className={`text-sm mb-6 ${room.isPremium ? 'text-stone-400' : 'text-stone-500'}`}>
                {room.description}
              </p>

              <ul className={`space-y-3 text-sm ${room.isPremium ? 'text-stone-300' : 'text-stone-600'}`}>
                {room.features.map((feature: string, fIndex: number) => (
                  <li key={fIndex} className="flex items-center">
                    <Check className={`w-4 h-4 mr-3 ${room.isPremium ? 'text-stone-400' : 'text-stone-400'}`} />
                    <span className={room.isPremium ? 'text-white font-medium' : ''}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
