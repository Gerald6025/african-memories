'use client';

import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { accommodations as accommodationCatalog } from '../data/accommodations';
import { getHotelData } from '../data/hotelInfoData';
import Navbar from './Navbar';
import Footer from './Footer';
import ActivitiesSection, { Activity } from './ActivitiesSection';
import {
  Bus, Droplet, Car, PawPrint, Bird, Scissors, Utensils, Waves, Home, Map,
  BedSingle, BedDouble, MapPin, Clock, Shield, CheckCircle, Trees, Binoculars,
  Footprints, Wifi, Coffee, Bell, Sun, Tv, GlassWater, Flame, Club, Fish,
  Dumbbell, Briefcase, Bath, ShoppingBasket, Tent, Wind, Users, Sailboat, Leaf,
  Wine, Camera, Church, Crown, Accessibility, Fan, Plane,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Bus, Droplet, Car, PawPrint, Bird, Scissors, Utensils, Waves, Home, Map,
  BedSingle, BedDouble, MapPin, Clock, Shield, CheckCircle, Trees, Binoculars,
  Footprints, Wifi, Coffee, Bell, Sun, Tv,
  Water: GlassWater, Fire: Flame, Golf: Club, Fish,
  Dumbbell, Briefcase,
  Bathtub: Bath,
  Shopping: ShoppingBasket, Tent, Wind, Users, Sailboat, Leaf, Wine, Camera, Church, Crown,
  Accessibility, Fan, Plane,
};

function IconRenderer({ name }: { name: string }) {
  const Icon = iconMap[name] || MapPin;
  return <Icon className="h-5 w-5 shrink-0 text-stone-400" />;
}

const activityTextMap: Record<number, string> = {
  1: "Palm River Lodge offers riverfront game drives, sunset river cruises, and expert-led safari walks through the Zambezi National Park, plus premium spa treatments and guided bird watching tours.",
  2: "Victoria Falls Safari Lodge provides game-viewing access with full and half-day game drives, walking safaris, cultural village visits, and unforgettable sunset cruises along the Zambezi River.",
  3: "Ilala Lodge, ideally located near the Falls, offers helicopter flights over Victoria Falls, guided walking tours, Cultural Community Visits, and sunset dinner cruises on the Zambezi River.",
  4: "Pamusha Lodge features guided game drives into nearby reserves, cultural tours, sunset viewpoints, bird watching excursions, and adventure activities including canopy tours and nature walks.",
  5: "Pioneer Camp offers guided walking safaris, game drives in open 4x4s, cultural visits to local communities, bird watching, and sunset river experiences on the Zambezi.",
  6: "Troutbeck Resort in Nyanga provides hiking trails through the Eastern Highlands, trout fishing on site, horseback riding, guided nature walks, and bird watching in the montane forest.",
  7: "Elephant Hills Resort features golf on the championship course, guided game drives in nearby parks, sunset cruises, spa treatments, and cultural experiences with local artisans.",
  8: "Mbano Manor Hotel offers guided tours of Victoria Falls, Zambezi sunset cruises, scenic helicopter flights of angels, white water rafting in the gorge, bridge bungee jumping, and game drives in premier national parks.",
  9: "Explorers Village provides exciting full-day Chobe day trips, high-speed jet boat adventures, thrilling white water rafting in the Batoka Gorge, and relaxing sunset river cruises.",
  10: "Dzimbahwe Guest Lodge offers full-day Chobe excursions, thrilling jet boat rides, white water rafting on the Zambezi, and peaceful sunset cruises.",
  11: "Old Drift Lodge features guided game drives in Zambezi National Park, walking safaris with armed professional guides, scenic brunch at Lookout Café, and guided tours of Victoria Falls.",
  12: "Chundu Island offers tranquil river canoeing on the Zambezi, guided island walking safaris, sunset boat cruises, and exceptional bird watching along the riverbanks.",
  13: "Matetsi Victoria Falls provides private game drives across a pristine wilderness concession, boat cruises on the Zambezi, breathtaking helicopter flights of Africa by air, and guided bush walks.",
  14: "Victoria Falls Hotel offers adrenaline-pumping white water rafting, classic Zambezi sunset cruises, personalized guided tours of Victoria Falls, and unforgettable helicopter flights over the Falls.",
  15: "Batonka Guest Lodge features rhino tracking safaris in the private reserve, exhilarating gorge swings over Batoka Gorge, authentic cultural tours, and scenic helicopter rides.",
  16: "Wallow Lodge offers open 4x4 game drives, expert-led walking safaris, gourmet brunch at Lookout Café, and guided tours of Victoria Falls.",
  17: "Lokuthula Lodges provides thrilling white water rafting, relaxing Zambezi sunset cruises, guided tours of Victoria Falls, and spectacular helicopter flights over the Falls.",
  18: "Rainbow Hotel offers exciting white water rafting adventures, Zambezi sunset cruises, guided tours of Victoria Falls, and helicopter flights over the Falls.",
  19: "Fothergill Island offers guided walking safaris across Matusadona National Park, scenic boating safaris on Lake Kariba, sport fishing expeditions, and historic Kariba city tours.",
  20: "Spurwing Island Lodge features guided walking safaris, lake boating safaris, catch-and-release tiger fishing expeditions, and Kariba city and dam tours.",
  21: "Bumi Hills Safari Lodge provides open-vehicle game drives along the lake shoreline, thrilling tiger fishing, guided walking safaris, and legendary sunset cruises.",
  22: "Caribean Bay Hotel offers guided game drives, exciting tiger fishing on Lake Kariba, scenic lakeside walking safaris, and sunset cruises.",
  23: "Hwange Safari Lodge features game drives in Hwange National Park, horseback safaris, prolific bird watching, and guided walking safaris.",
};

const activityImagesMap: Record<number, Activity[]> = {
  1: [
    { id: 1, imageSrc: "https://www.palmriverhotel.com/wp-content/uploads/2022/01/KLRS7755-1500x1000-1-1024x683.jpg", imageAlt: "Historic Bridge Tour", title: "HISTORIC BRIDGE TOUR", description: "Guided tour across the iconic Victoria Falls Bridge" },
    { id: 2, imageSrc: "https://www.palmriverhotel.com/wp-content/uploads/2022/01/White-Water-Rafting-1024x682.jpg", imageAlt: "White Water Rafting", title: "WHITE WATER RAFTING", description: "Thrilling rapids on the Zambezi River" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/07/b1/68/caption.jpg?w=720&h=480&s=1", imageAlt: "Birdwatching Cruise", title: "BIRDWATCHING CRUISE", description: "Spot diverse birdlife along the river" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/v2/photo-o/34/53/8f/d0/image.jpg?w=1000&h=-1&s=1", imageAlt: "Ra-Ikane Luxury Sunset Cruise", title: "RA-IKANE LUXURY SUNSET CRUISE", description: "Premium sunset cruise on the Zambezi" },
  ],
  2: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/86/fa/d1/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Vulture Culture Experience", title: "VULTURE CULTURE EXPERIENCE", description: "Watch and learn during the daily conservation feeding at 1:00 PM from the viewing deck." },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/b9/a4/salad-bar-buffet.jpg?w=900&h=500&s=1", imageAlt: "The Boma Dinner & Drum Show", title: "THE BOMA – DINNER & DRUM SHOW", description: "Feast on local dishes while enjoying traditional dancing and interactive drumming." },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/b3/84/05/the-siduli-hide-where.jpg?w=1000&h=-1&s=1", imageAlt: "Siduli Hide Sit", title: "SIDULI HIDE SIT", description: "Watch free-roaming wildlife quietly from a specialized underground or concealed blind." },
    { id: 4, imageSrc: "https://victoria-falls-safari-collection.com/_next/image?url=https%3A%2F%2Fvfsc-umbraco.live.fireworkx.net%2Fmedia%2Fpdtbwzaj%2Fbridal-makeup-at-victoria-falls-safari-spa.jpg&w=1080&q=90", imageAlt: "Relaxation at the Spa", title: "RELAXATION AT THE SPA", description: "Book treatments at the Victoria Falls Safari Spa located directly on the estate." },
  ],
  3: [
    { id: 1, imageSrc: "https://www.ilalalodge.com/wp-content/uploads/2025/07/PRH_HighTea_7-1024x683.jpg", imageAlt: "High Tea Experience", title: "HIGH TEA EXPERIENCE", description: "Enjoy elegant high tea service" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/7c/49/cd/the-zambezi-helicopter.jpg?w=1200&h=-1&s=1", imageAlt: "Scenic Flights", title: "SCENIC FLIGHTS", description: "Aerial views of Victoria Falls and the Zambezi" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/60/8f/24/luxury-river-cruise-abord.jpg?w=300&h=300&s=1", imageAlt: "Ra-Ikane River Cruise", title: "RA-IKANE RIVER CRUISE", description: "Luxury river cruise on the Zambezi" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9e/0f/53/great-photographic-opportuniti.jpg?w=1200&h=-1&s=1", imageAlt: "Game Drive", title: "GAME DRIVE", description: "Guided wildlife viewing experiences" },
  ],
  4: [
    { id: 1, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/4c/f4/6b.jpg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Guided safaris in nearby reserves" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/1b/fb/8d/caption.jpg?w=720&h=480&s=1", imageAlt: "Cultural tour", title: "CULTURAL TOURS", description: "Experience local traditions" },
    { id: 3, imageSrc: "https://ik.imagekit.io/c0x52ylk1/Dennis/WhatsApp%20Image%202026-08-13%20at%2010.06.30%20(1).jpeg?updatedAt=1786610586692", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Spot diverse birdlife" },
    { id: 4, imageSrc: "https://www.andbeyond.com/wp-content/uploads/sites/5/Nature-Walk-Watching-Elephants-On-Safari-In-Mana-Pools-Zimbabwe.jpg", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks through the bushveld" },
  ],
  5: [
    { id: 1, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/4c/f4/6b.jpg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Guided safaris in nearby reserves" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/1b/fb/8d/caption.jpg?w=720&h=480&s=1", imageAlt: "Cultural tour", title: "CULTURAL TOURS", description: "Experience local traditions" },
    { id: 3, imageSrc: "https://ik.imagekit.io/c0x52ylk1/Dennis/WhatsApp%20Image%202026-08-13%20at%2010.06.30%20(1).jpeg?updatedAt=1786610586692", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Spot diverse birdlife" },
    { id: 4, imageSrc: "https://www.andbeyond.com/wp-content/uploads/sites/5/Nature-Walk-Watching-Elephants-On-Safari-In-Mana-Pools-Zimbabwe.jpg", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks through the bushveld" },
  ],
  6: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/f4/a3/74/troutbeck-resort.jpg?w=1000&h=-1&s=1", imageAlt: "Hiking trail", title: "MOUNTAIN HIKING", description: "Trails through the Eastern Highlands" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b1/60/b8/darryl-with-a-10lbs-beautie.jpg?w=600&h=-1&s=1", imageAlt: "Trout fishing", title: "TROUT FISHING", description: "Fishing on the private estate's lake" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d3/25/d9/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Horseback riding", title: "HORSEBACK RIDING", description: "Trail rides through the hills" },
    { id: 4, imageSrc: "https://ik.imagekit.io/c0x52ylk1/Dennis/WhatsApp%20Image%202026-08-13%20at%2010.06.31%20(2).jpeg?updatedAt=1786610599861", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks in montane forest" },
  ],
  7: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/be/bb/26/elephant-hills-golf-club.jpg?w=1000&h=-1&s=1", imageAlt: "Golf course", title: "GOLF", description: "18-hole championship golf course" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/4c/f4/6b.jpg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Guided safaris in nearby parks" },
    { id: 3, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2RK78g_59ORELjWB8kEMkMGi4-pnEF4iz4MvFchgP6w&s=10", imageAlt: "Sunset cruise", title: "SUNSET CRUISES", description: "Scenic river experiences" },
    { id: 4, imageSrc: "https://victoria-falls-hotels.net/elephant-hills-hotel/images/spa2.jpg", imageAlt: "Spa treatment", title: "SPA TREATMENTS", description: "Luxury wellness experiences" },
  ],
  8: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided tour of Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Guided tour of Victoria Falls (Zimbabwe or Zambia side)" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruise on the Zambezi River", title: "SUNSET CRUISE ON THE ZAMBEZI", description: "Sunset cruise on the Zambezi River" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/26/06/b8/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Helicopter flight over the Falls", title: "HELICOPTER FLIGHT OVER THE FALLS", description: "Flight of Angels over the majestic Victoria Falls" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting in the Zambezi Gorge", title: "WHITE WATER RAFTING", description: "White water rafting in the Zambezi Gorge" },
    { id: 5, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/a8/e3/caption.jpg?w=720&h=480&s=1", imageAlt: "Bungee jumping from Victoria Falls Bridge", title: "BUNGEE JUMPING", description: "Bungee jumping from Victoria Falls Bridge" },
    { id: 6, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9e/0f/53/great-photographic-opportuniti.jpg?w=1200&h=-1&s=1", imageAlt: "Game drives", title: "GAME DRIVES", description: "Game drives in Zambezi National Park, Hwange National Park, or Chobe" },
  ],
  9: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/64/1a/ba/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Chobe Day Trip", title: "CHOBE DAY TRIP", description: "Full-day safari excursion into Botswana's Chobe National Park" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/8e/bb/45.jpg", imageAlt: "Jet Boat", title: "JET BOAT", description: "High-adrenaline jet boat thrill rides on the Zambezi rapids" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting", title: "WHITE WATER RAFTING", description: "Conquer world-class whitewater rapids in the Batoka Gorge" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruises", title: "SUNSET CRUISES", description: "Scenic and relaxing sunset cruises along the Zambezi River" },
  ],
  10: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/64/1a/ba/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Chobe Day Trip", title: "CHOBE DAY TRIP", description: "Full-day safari excursion into Botswana's Chobe National Park" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/8e/bb/45.jpg", imageAlt: "Jet Boat", title: "JET BOAT", description: "High-adrenaline jet boat thrill rides on the Zambezi rapids" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting", title: "WHITE WATER RAFTING", description: "Conquer world-class whitewater rapids in the Batoka Gorge" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruises", title: "SUNSET CRUISES", description: "Scenic and relaxing sunset cruises along the Zambezi River" },
  ],
  11: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9e/0f/53/great-photographic-opportuniti.jpg?w=1200&h=-1&s=1", imageAlt: "Game Drive", title: "GAME DRIVE", description: "Guided game drives in Zambezi National Park" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/07/8c/77.jpg", imageAlt: "Walking safari", title: "WALKING SAFARI", description: "Intimate walking safaris guided by licensed professional guides" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/26/5f/a7/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Brunch at lookout cafe", title: "BRUNCH AT LOOKOUT CAFE", description: "Gourmet brunch with spectacular views over the Batoka Gorge" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided Tour of the Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Comprehensive guided walking tour of the mighty Victoria Falls" },
  ],
  12: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/07/b7/b0/caption.jpg?w=720&h=480&s=1", imageAlt: "River Canoeing", title: "RIVER CANOEING", description: "Paddle the Zambezi on tranquil guided canoe trips" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/07/8c/77.jpg", imageAlt: "Walking Safari", title: "WALKING SAFARI", description: "Guided walking safaris exploring island and river ecosystems" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset Boat Cruise", title: "SUNSET BOAT CRUISE", description: "Peaceful evening boat cruise watching the sunset over the Zambezi" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/63/c6/8e/wildlife-along-the-banks.jpg?w=1200&h=-1&s=1", imageAlt: "Bird Watching", title: "BIRD WATCHING", description: "Exceptional birding with over 400 species along the river banks" },
  ],
  13: [
    { id: 1, imageSrc: "https://matetsivictoriafalls.com/app/uploads/2020/07/3B2A7689-1536x1024.jpg", imageAlt: "Private game drive", title: "PRIVATE GAME DRIVE", description: "Exclusive safaris across the pristine Matetsi Private Game Reserve" },
    { id: 2, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaFj1HKyQ1tC6agkoBfY5s2kMXhY8-n3Eb_hIXKHYQA&s=10", imageAlt: "Boat cruise", title: "BOAT CRUISE", description: "Tranquil boat safaris along the private stretch of the Zambezi River" },
    { id: 3, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVx1QdnSpT2DFjBFvesTXQls2M1NcfN5FTwU1uDGuKew&s=10", imageAlt: "Africa by air", title: "AFRICA BY AIR", description: "Breathtaking aerial flights over Victoria Falls and the Zambezi River" },
    { id: 4, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/07/8c/77.jpg", imageAlt: "Bush walks", title: "BUSH WALKS", description: "Expert-led bush walks tracking tracks and wildlife in the wilderness" },
  ],
  14: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting", title: "WHITE WATER RAFTING", description: "World-class rapids in the Batoka Gorge below the Falls" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruises", title: "SUNSET CRUISES", description: "Classic luxury sundowner cruise on the Zambezi River" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided Tour of the Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Personalized guided walking tour through the rainforest and viewpoints" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/26/06/b8/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Helicopter flight over the Falls", title: "HELICOPTER FLIGHT OVER THE FALLS", description: "Flight of Angels helicopter tour offering stunning aerial vistas" },
  ],
  15: [
    { id: 1, imageSrc: "https://batonkaguestlodge.com/wp-content/uploads/2025/08/Stanley__Livingstone_June2025-143-1500x430.jpg", imageAlt: "Rhino tracking", title: "RHINO TRACKING", description: "Track endangered black and white rhinos with dedicated scouts" },
    { id: 2, imageSrc: "https://batonkaguestlodge.com/wp-content/uploads/2018/10/Vic-Falls-Gorge-Swing-2.jpg", imageAlt: "Gorge Swing", title: "GORGE SWING", description: "Adrenaline-filled freefall swing across the Batoka Gorge" },
    { id: 3, imageSrc: "https://batonkaguestlodge.com/wp-content/uploads/2018/09/3-14.jpg", imageAlt: "Cultural Tour", title: "CULTURAL TOUR", description: "Authentic cultural experience visiting local village communities" },
    { id: 4, imageSrc: "https://batonkaguestlodge.com/wp-content/uploads/2018/10/Vic-Falls-Helicopter-Ride-3.jpg", imageAlt: "Helicopter Rides", title: "HELICOPTER RIDES", description: "Scenic helicopter rides over Victoria Falls and Zambezi National Park" },
  ],
  16: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/9e/0f/53/great-photographic-opportuniti.jpg?w=1200&h=-1&s=1", imageAlt: "Game Drive", title: "GAME DRIVES", description: "Open 4x4 game drives in Victoria Falls National Park" },
    { id: 2, imageSrc: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0c/07/8c/77.jpg", imageAlt: "Walking safari", title: "WALKING SAFARI", description: "Expert-led walking safaris through private reserve wilderness" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/26/5f/a7/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Brunch at lookout cafe", title: "BRUNCH AT LOOKOUT CAFE", description: "Gourmet brunch with spectacular views over the Batoka Gorge" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided Tour of the Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Guided exploration of the falls, rainforest trails, and flora" },
  ],
  17: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting", title: "WHITE WATER RAFTING", description: "Exciting whitewater rafting on the famous Zambezi rapids" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruises", title: "SUNSET CRUISES", description: "Relaxing sunset cruise along the picturesque Zambezi River" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided Tour of the Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Educational and awe-inspiring guided tour of the falls" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/26/06/b8/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Helicopter flight over the Falls", title: "HELICOPTER FLIGHT OVER THE FALLS", description: "Flight of Angels helicopter tour with panoramic aerial views" },
  ],
  18: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/08/bb/88/caption.jpg?w=720&h=480&s=1", imageAlt: "White water rafting", title: "WHITE WATER RAFTING", description: "Experience the ultimate Zambezi whitewater rafting excursion" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/19/58/0c/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset cruises", title: "SUNSET CRUISES", description: "Golden hour sunset cruise with refreshments on the Zambezi" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d0/7c/1d/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Guided Tour of the Victoria Falls", title: "GUIDED TOUR OF VICTORIA FALLS", description: "Guided walking journey along Victoria Falls viewpoints" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/34/26/06/b8/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Helicopter flight over the Falls", title: "HELICOPTER FLIGHT OVER THE FALLS", description: "Unforgettable Flight of Angels helicopter excursion" },
  ],
  19: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0d/92/70/caption.jpg?w=700&h=-1&s=1", imageAlt: "Guided Walking Safaris", title: "GUIDED WALKING SAFARIS", description: "Guided walking safaris tracking wildlife in Matusadona National Park" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b0/6e/34/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Boating Safaris", title: "BOATING SAFARIS", description: "Water-based safaris exploring the bays and wildlife of Lake Kariba" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/9c/7a/fishing-guide-teaching.jpg?w=1000&h=-1&s=1", imageAlt: "Fishing", title: "FISHING", description: "Guided tiger fishing and sport fishing on Lake Kariba" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/29/ec/23/fothergill-island.jpg?w=1000&h=-1&s=1", imageAlt: "Kariba City Tour", title: "KARIBA CITY TOUR", description: "Explore the history, engineering marvel of Kariba Dam, and town viewpoints" },
  ],
  20: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/0d/92/70/caption.jpg?w=700&h=-1&s=1", imageAlt: "Guided Walking Safaris", title: "GUIDED WALKING SAFARIS", description: "Guided walks through the national park and lake shorelines" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b0/6e/34/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Boating Safaris", title: "BOATING SAFARIS", description: "Boat cruises exploring birdlife, elephants, and hippos on Lake Kariba" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/9c/7a/fishing-guide-teaching.jpg?w=1000&h=-1&s=1", imageAlt: "Fishing", title: "FISHING", description: "Catch-and-release tiger fishing expeditions with expert skippers" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/29/ec/23/fothergill-island.jpg?w=1000&h=-1&s=1", imageAlt: "Kariba City Tour", title: "KARIBA CITY TOUR", description: "Cultural and historical tour of Kariba town and the Kariba Dam wall" },
  ],
  21: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8d/70/f3/game-drive.jpg?w=1000&h=-1&s=1", imageAlt: "Game Drive", title: "GAME DRIVES", description: "Open-vehicle safaris across the wildlife-rich Lake Kariba shoreline" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/a0/8e/ae/fishing-with-elephant.jpg?w=1000&h=-1&s=1", imageAlt: "Tiger Fishing", title: "TIGER FISHING", description: "Thrilling freshwater game fishing for fighting tigerfish" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ce/39/82/bumi-hills-safari-lodge.jpg?w=1000&h=-1&s=1", imageAlt: "Walking Safari", title: "WALKING SAFARI", description: "Intimate walking safaris guided by licensed professional guides" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/4f/f8/9f/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset Cruise", title: "SUNSET CRUISES", description: "Breathtaking Kariba sunset boat cruises over flooded mopane forests" },
  ],
  22: [
    { id: 1, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8d/70/f3/game-drive.jpg?w=1000&h=-1&s=1", imageAlt: "Game Drive", title: "GAME DRIVES", description: "Guided safari excursions into adjacent game corridors and reserves" },
    { id: 2, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/a0/8e/ae/fishing-with-elephant.jpg?w=1000&h=-1&s=1", imageAlt: "Tiger Fishing", title: "TIGER FISHING", description: "Exciting tiger and bream fishing charters on the vast lake" },
    { id: 3, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/ce/39/82/bumi-hills-safari-lodge.jpg?w=1000&h=-1&s=1", imageAlt: "Walking Safari", title: "WALKING SAFARI", description: "Scenic guided nature walks and birding around the lakeside" },
    { id: 4, imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/4f/f8/9f/caption.jpg?w=1000&h=-1&s=1", imageAlt: "Sunset Cruise", title: "SUNSET CRUISES", description: "Spectacular sundowner cruises against legendary Lake Kariba skies" },
  ],
  23: [
    { id: 1, imageSrc: "https://africansun.com/wp-content/uploads/2024/03/Hwange-Safari-Lodge-35.jpg", imageAlt: "Game Drives", title: "GAME DRIVES", description: "Day and evening game drives inside the iconic Hwange National Park" },
    { id: 2, imageSrc: "https://africansun.com/wp-content/uploads/2024/03/IMG_1277.jpg", imageAlt: "Horse Back Safaris", title: "HORSE BACK SAFARIS", description: "Memorable horseback safaris through the African bush" },
    { id: 3, imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY5hghxUFCf0sAQwl9ZQgWit6PflfFojpqUYe-HcuMV8oX07Kr5llv1aS5&s=10", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Explore over 400 species of raptors, waterbirds, and savanna dwellers" },
    { id: 4, imageSrc: "https://wildhorizons.co.za/wp-content/uploads/elementor/thumbs/activity-synopsis-885-by-828-75-qnr1lbly5uwt7jf2s6ib7uz9oiw6lvewo4odiokyuo.png", imageAlt: "Walking Safari", title: "WALKING SAFARI", description: "Guided walking safaris reading tracks and discovering wilderness details" },
  ],
};

export default function AccommodationDetail({ accommodationId }: { accommodationId: number }) {
  const accommodation = accommodationCatalog.find((item) => item.id === accommodationId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('need-to-know');

  const hotelData = getHotelData(accommodation?.id ?? 0);

  if (!accommodation) {
    return (
      <main className="min-h-screen bg-[#f8efe6] px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-stone-800">Accommodation not found</h1>
        <p className="mt-4 text-stone-600">The selected hotel could not be found.</p>
        <Link href="/places-to-stay" className="mt-8 inline-flex items-center gap-2 text-orange-600 hover:underline">
          Back to places to stay
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-stone-800">
      <Navbar />

      <section className="relative h-screen w-full overflow-hidden">
        {accommodation.heroVideo ? (
          accommodation.heroVideo.includes('.mp4') ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={accommodation.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <iframe
              src={
                accommodation.heroVideo.includes('facebook.com')
                  ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(accommodation.heroVideo)}&show_text=0&autoplay=1&mute=1`
                  : `${accommodation.heroVideo.replace('watch?v=', 'embed/')}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3`
              }
              className="absolute inset-0 h-full w-full"
              style={{ minWidth: '100%', minHeight: '100%', transform: 'scale(1.2)' }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
            />
          )
        ) : (
          <Image
            src={accommodation.image}
            alt={accommodation.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="w-full max-w-4xl text-center">
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-7xl">
              {accommodation.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                {accommodation.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                {accommodation.description}
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Settle into spacious rooms with bespoke finishes, enjoy curated dining options, and unwind by the pool or riverside terrace. This property blends refined comfort with locally inspired experiences for a memorable stay.
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Ideal for travelers seeking seamless service, cultural excursions, and calm retreat spaces, the lodge makes it easy to relax after a day exploring the region.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center border border-[#3b2b18] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3b2b18] transition hover:bg-[#3b2b18] hover:text-white"
              >
                Learn more
              </Link>
            </div>

            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.overviewImage ?? accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.locationImage ?? accommodation.overviewImage ?? accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                Location
              </h2>
              <div className="flex items-center gap-1.5">
                <svg className="h-5 w-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-lg leading-8 text-stone-600">
                  {accommodation.location}
                </p>
              </div>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Nestled in the heart of {accommodation.location}, this property offers convenient access to the region&rsquo;s top attractions while providing a tranquil retreat from the everyday hustle.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center border border-[#3b2b18] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#3b2b18] transition hover:bg-[#3b2b18] hover:text-white"
              >
                View Larger Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold text-orange-600">
                Accommodation
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                {accommodation.description}
              </p>
              <p className="mt-4 text-lg leading-8 text-stone-600">
                Each room and suite has been thoughtfully designed to provide the utmost comfort, blending modern amenities with the natural beauty of the surrounding landscape.
              </p>
            </div>

            <div className="relative overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.roomImages?.[currentImageIndex] ?? accommodation.image}
                alt={`${accommodation.title} room`}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute right-4 top-4 flex gap-2">
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? (accommodation.roomImages?.length ?? 1) - 1 : prev - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentImageIndex((prev) => (prev === (accommodation.roomImages?.length ?? 1) - 1 ? 0 : prev + 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/50 px-3 py-1 text-sm text-white">
                {currentImageIndex + 1} / {accommodation.roomImages?.length ?? 1}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="overflow-hidden lg:h-[528px]">
              <Image
                src={accommodation.image}
                alt={accommodation.title}
                width={1400}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-orange-600">
                {accommodation.title}
              </h2>
              <p className="text-lg leading-8 text-stone-600 mt-6">
                Lodge Information
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-stone-200 pb-4 text-sm font-medium text-stone-500 uppercase tracking-wider">
                {hotelData.tabs.map((tab) => (
                  <React.Fragment key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`pb-3 ${activeTab === tab.id ? 'text-orange-600' : 'hover:text-stone-800'}`}
                    >
                      {tab.label}
                    </button>
                    {hotelData.tabs.indexOf(tab) < hotelData.tabs.length - 1 && (
                      <span className="text-stone-300">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {hotelData.tabsData[activeTab]?.map((item) => (
                  <div key={item.id} className={`flex items-center gap-3 border-b border-stone-100 pb-3 ${item.fullSpan ? 'sm:col-span-2' : ''}`}>
                    <IconRenderer name={item.icon} />
                    <span className="text-sm text-stone-600">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ActivitiesSection
        activityText={activityTextMap[accommodationId]}
        activities={activityImagesMap[accommodationId]}
      />

      <Footer />
    </main>
  );
}

