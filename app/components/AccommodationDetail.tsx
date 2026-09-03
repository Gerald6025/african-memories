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
  8: "Mbano Manor offers guided nature walks, cultural community visits, bird watching in the surrounding forests, helicopter flights over Victoria Falls, and sunset viewpoints.",
  9: "Explorers Village provides guided city tours, adventure activities including zip-lining and white-water rafting, cultural visits, and sunset cruises on the Zambezi River.",
  10: "Dzimbahwe Guest Lodge offers guided tours to Victoria Falls, cultural village visits, bird watching excursions, sunset viewpoints, and walking safaris in the surrounding area.",
  11: "Old Drift Lodge features sunrise and sunset game drives in Zambezi National Park, canoeing safaris on the Zambezi River, walking safaris, fishing excursions, and cultural visits to local communities.",
  12: "Chundu Island offers exclusive island experiences including river canoeing on the Zambezi, guided walking safaris, sunset boat cruises, catch-and-release tiger fishing, and bird watching on the private island.",
  13: "Matetsi Victoria Falls provides private game drives in the Matetsi Private Game Reserve, white-breasted rhino tracking, Zambezi River safaris, cultural visits to local communities, and guided bush walks.",
  14: "Victoria Falls Hotel offers helicopter flights over the Falls (Flight of the Angels), guided Falls tours, sunset cruises, cultural village visits, and white-water rafting on the Zambezi River.",
  15: "Batonka Guest Lodge features guided walking tours to Victoria Falls, cultural community visits, bird watching excursions, sunset viewpoints, and adventure activities including zip-line and gorge swings.",
  16: "Wallow Lodge, set in the Wild Horizons Elephant Sanctuary, offers elephant interaction experiences, guided walking safaris, game drives in Victoria Falls National Park, bird watching, and sunset viewpoints.",
  17: "Lokuthula Lodges provides easy access to Victoria Falls National Park with guided walking safaris, cultural visits, bird watching, sunset viewpoints, and game drives in the surrounding wilderness.",
  18: "Rainbow Hotel offers guided tours to Victoria Falls, cultural visits to local communities, bird watching in the surrounding area, helicopter flights over the Falls, and sunset cruises on the Zambezi.",
  19: "Fothergill Island offers exclusive island experiences including boat transfers, game viewing from the island, bird watching, fishing expeditions, and sunset cruises on Lake Kariba.",
  20: "Spurwing Island, on Lake Kariba, provides fishing expeditions, boat safaris, game drives in Matusadona National Park, bird watching, sunset cruises, and wilderness adventures on the pristine lake.",
  21: "Bumi Hills Safari Lodge features game drives in the surrounding wilderness, tiger fishing on Lake Kariba, walking safaris, bird watching, sunset cruises, and cultural visits to local communities.",
  22: "Caribbean Bay Hotel offers water sports on Lake Kariba, fishing expeditions, boat cruises, cultural village visits, bird watching, and sunset viewpoints over the tranquil lake.",
  23: "Hwange Safari Lodge provides game drives in Hwange National Park, bird watching, night safaris, walking safaris, fishing, and cultural experiences with local communities.",
};

const activityImagesMap: Record<number, Activity[]> = {
  1: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190116/pexels-photo-6190116.jpeg", imageAlt: "Game drive at Palm River Lodge", title: "RIVERFRONT GAME DRIVES", description: "Expert-guided safaris through Zambezi National Park" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190117/pexels-photo-6190117.jpeg", imageAlt: "Sunset cruise on Zambezi", title: "SUNSET RIVER CRUISES", description: "Scenic boat trips along the Zambezi River" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190118/pexels-photo-6190118.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Spot over 400 bird species with expert guides" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190119/pexels-photo-6190119.jpeg", imageAlt: "Spa treatment", title: "SPA TREATMENTS", description: "Relax with luxury spa treatments" },
  ],
  2: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190120/pexels-photo-6190120.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Full and half-day safaris in Victoria Falls National Park" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190121/pexels-photo-6190121.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VILLAGE VISITS", description: "Experience local Zimbabwean culture" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190122/pexels-photo-6190122.jpeg", imageAlt: "Sunset cruise", "title": "SUNSET CRUISES", description: "Unforgettable boat trips along the Zambezi River" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190123/pexels-photo-6190123.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Guided walks through the African bush" },
  ],
  3: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190124/pexels-photo-6190124.jpeg", imageAlt: "Helicopter over Falls", title: "HELICOPTER FLIGHTS", description: "Flight of the Angels over Victoria Falls" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190125/pexels-photo-6190125.jpeg", imageAlt: "Walking tour", title: "GUIDED WALKING TOURS", description: "Explore the Falls with expert guides" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190126/pexels-photo-6190126.jpeg", imageAlt: "Cultural visit", title: "CULTURAL COMMUNITY VISITS", description: "Traditional village experiences" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190127/pexels-photo-6190127.jpeg", imageAlt: "Sunset cruise", title: "SUNSET DINNER CRUISES", description: "Cruise the river at sunset with dinner" },
  ],
  4: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190128/pexels-photo-6190128.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Guided safaris in nearby reserves" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190129/pexels-photo-6190129.jpeg", imageAlt: "Cultural tour", title: "CULTURAL TOURS", description: "Experience local traditions" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190130/pexels-photo-6190130.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Spot diverse birdlife" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190131/pexels-photo-6190131.jpeg", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks through the bushveld" },
  ],
  5: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190132/pexels-photo-6190132.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Open 4x4 game drives and guided walks" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190133/pexels-photo-6190133.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VISITS", description: "Local community experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190134/pexels-photo-6190134.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Diverse birdlife on guided tours" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190135/pexels-photo-6190135.jpeg", imageAlt: "Sunset cruise", title: "SUNSET RIVER EXPERIENCES", description: "Evening cruises on the Zambezi" },
  ],
  6: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190136/pexels-photo-6190136.jpeg", imageAlt: "Hiking trail", title: "MOUNTAIN HIKING", description: "Trails through the Eastern Highlands" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190137/pexels-photo-6190137.jpeg", imageAlt: "Trout fishing", title: "TROUT FISHING", description: "Fishing on the private estate's lake" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190138/pexels-photo-6190138.jpeg", imageAlt: "Horseback riding", title: "HORSEBACK RIDING", description: "Trail rides through the hills" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190139/pexels-photo-6190139.jpeg", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks in montane forest" },
  ],
  7: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190140/pexels-photo-6190140.jpeg", imageAlt: "Golf course", title: "GOLF", description: "18-hole championship golf course" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190141/pexels-photo-6190141.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Guided safaris in nearby parks" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190142/pexels-photo-6190142.jpeg", imageAlt: "Sunset cruise", title: "SUNSET CRUISES", description: "Scenic river experiences" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190143/pexels-photo-6190143.jpeg", imageAlt: "Spa treatment", title: "SPA TREATMENTS", description: "Luxury wellness experiences" },
  ],
  8: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190144/pexels-photo-6190144.jpeg", imageAlt: "Nature walk", title: "NATURE WALKS", description: "Guided walks in surrounding forests" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190145/pexels-photo-6190145.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VISITS", description: "Community experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190146/pexels-photo-6190146.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Diverse forest birdlife" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190147/pexels-photo-6190147.jpeg", imageAlt: "Helicopter flight", title: "HELICOPTER FLIGHTS", description: "Aerial views of Victoria Falls" },
  ],
  9: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190148/pexels-photo-6190148.jpeg", imageAlt: "City tour", title: "CITY TOURS", description: "Guided tours of Victoria Falls town" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190149/pexels-photo-6190149.jpeg", imageAlt: "Zip line", title: "ZIP-LINING", description: "Thrilling canopy tours" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190150/pexels-photo-6190150.jpeg", imageAlt: "Rafting", title: "WHITE-WATER RAFTING", description: "Adrenaline-pumping river adventures" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190151/pexels-photo-6190151.jpeg", imageAlt: "Sunset cruise", title: "SUNSET CRUISES", description: "Relaxing river experiences" },
  ],
  10: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190152/pexels-photo-6190152.jpeg", imageAlt: "Victoria Falls tour", title: "VICTORIA FALLS TOURS", description: "Guided visits to the mighty Falls" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190153/pexels-photo-6190153.jpeg", imageAlt: "Cultural village", title: "CULTURAL VILLAGE VISITS", description: "Traditional village experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190154/pexels-photo-6190154.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Local birdlife excursions" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190155/pexels-photo-6190155.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Explore the African bush on foot" },
  ],
  11: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190156/pexels-photo-6190156.jpeg", imageAlt: "Sunrise game drive", title: "SUNRISE GAME DRIVES", description: "Morning safaris in Zambezi National Park" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190157/pexels-photo-6190157.jpeg", imageAlt: "Canoeing safari", title: "CANOEING SAFARIS", description: "River adventures on the Zambezi" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190158/pexels-photo-6190158.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Guided bush walks" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190159/pexels-photo-6190159.jpeg", imageAlt: "Fishing excursion", title: "FISHING EXCURSIONS", description: "Catch-and-release fishing on the river" },
  ],
  12: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190160/pexels-photo-6190160.jpeg", imageAlt: "River canoeing", title: "RIVER CANOEING", description: "Paddle the Zambezi on guided canoe trips" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190161/pexels-photo-6190161.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Island and riverbank guided walks" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190162/pexels-photo-6190162.jpeg", imageAlt: "Sunset cruise", title: "SUNSET BOAT CRUISES", description: "Island sunset experiences" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190163/pexels-photo-6190163.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Island birdlife observation" },
  ],
  13: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190164/pexels-photo-6190164.jpeg", imageAlt: "Private game drive", title: "PRIVATE GAME DRIVES", description: "Exclusive safaris in Matetsi Reserve" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190165/pexels-photo-6190165.jpeg", imageAlt: "Rhino tracking", title: "RHINO TRACKING", description: "White-breasted rhino conservation experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190166/pexels-photo-6190166.jpeg", imageAlt: "River safari", title: "ZAMBEZI RIVER SAFARIS", description: "River-based wildlife viewing" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190167/pexels-photo-6190167.jpeg", imageAlt: "Bush walk", title: "GUIDED BUSH WALKS", description: "Expert-led nature walks" },
  ],
  14: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190168/pexels-photo-6190168.jpeg", imageAlt: "Helicopter flight", title: "HELICOPTER FLIGHTS", description: "Flight of the Angels over the Falls" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190169/pexels-photo-6190169.jpeg", imageAlt: "Falls tour", title: "GUIDED FALLS TOURS", description: "Walk to the Thundering Smoke" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190170/pexels-photo-6190170.jpeg", imageAlt: "Sunset cruise", title: "SUNSET CRUISES", description: "Elegant river experiences" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190171/pexels-photo-6190171.jpeg", imageAlt: "Whitewater rafting", title: "WHITE-WATER RAFTING", description: "Adventure on the Zambezi Rapids" },
  ],
  15: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190172/pexels-photo-6190172.jpeg", imageAlt: "Walking tour", title: "WALKING TOURS", description: "Guided walks to Victoria Falls" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190173/pexels-photo-6190173.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VISITS", description: "Community experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190174/pexels-photo-6190174.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Local birdlife excursions" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190175/pexels-photo-6190175.jpeg", imageAlt: "Adventure activities", title: "ADVENTURE ACTIVITIES", description: "Zip-line and gorge swings" },
  ],
  16: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190176/pexels-photo-6190176.jpeg", imageAlt: "Elephant encounter", title: "ELEPHANT INTERACTIONS", description: "Ethical elephant experiences at Wild Horizons" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190177/pexels-photo-6190177.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Guided walks in Victoria Falls NP" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190178/pexels-photo-6190178.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Wildlife viewing in the National Park" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190179/pexels-photo-6190179.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Diverse birdlife observation" },
  ],
  17: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190180/pexels-photo-6190180.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "National Park guided walks" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190181/pexels-photo-6190181.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VISITS", description: "Traditional community experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190182/pexels-photo-6190182.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Park birdlife excursions" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190183/pexels-photo-6190183.jpeg", imageAlt: "Sunset viewpoint", title: "SUNSET VIEWPOINTS", description: "Spectacular Falls sunsets" },
  ],
  18: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190184/pexels-photo-6190184.jpeg", imageAlt: "Falls tour", title: "FALLS TOURS", description: "Guided tours to Victoria Falls" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190185/pexels-photo-6190185.jpeg", imageAlt: "Cultural visit", title: "CULTURAL VISITS", description: "Community experiences" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190186/pexels-photo-6190186.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Local birdlife excursions" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190187/pexels-photo-6190187.jpeg", imageAlt: "Helicopter flight", title: "HELICOPTER FLIGHTS", description: "Aerial views of the Falls" },
  ],
  19: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190188/pexels-photo-6190188.jpeg", imageAlt: "Boat transfer", title: "BOAT TRANSFERS", description: "Scenic transfers to the island" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190189/pexels-photo-6190189.jpeg", imageAlt: "Island game viewing", title: "ISLAND GAME VIEWING", description: "Wildlife observation from the island" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190190/pexels-photo-6190190.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Lake Kariba birdlife" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190191/pexels-photo-6190191.jpeg", imageAlt: "Fishing expedition", title: "FISHING EXPEDITIONS", description: "Lake fishing with guides" },
  ],
  20: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190192/pexels-photo-6190192.jpeg", imageAlt: "Fishing expedition", title: "FISHING EXPEDITIONS", description: "Tiger and bream fishing on Lake Kariba" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190193/pexels-photo-6190193.jpeg", imageAlt: "Boat safari", title: "BOAT SAFARIS", description: "Explore the lake by boat" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190194/pexels-photo-6190194.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Matusadona National Park safaris" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190195/pexels-photo-6190195.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Prolific birdlife observation" },
  ],
  21: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190196/pexels-photo-6190196.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Wilderness safaris around Lake Kariba" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190197/pexels-photo-6190197.jpeg", imageAlt: "Tiger fishing", title: "TIGER FISHING", description: "Catch-and-release fishing on the lake" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190198/pexels-photo-6190198.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Guided nature walks" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190199/pexels-photo-6190199.jpeg", imageAlt: "Sunset cruise", title: "SUNSET CRUISES", description: "Lake Kariba sunset experiences" },
  ],
  22: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190200/pexels-photo-6190200.jpeg", imageAlt: "Water sports", title: "WATER SPORTS", description: "Activities on Lake Kariba" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190201/pexels-photo-6190201.jpeg", imageAlt: "Fishing expedition", title: "FISHING EXPEDITIONS", description: "Lake fishing excursions" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190202/pexels-photo-6190202.jpeg", imageAlt: "Boat cruise", title: "BOAT CRUISES", description: "Scenic lake cruises" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190203/pexels-photo-6190203.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Lakeside birdlife observation" },
  ],
23: [
    { id: 1, imageSrc: "https://images.pexels.com/photos/6190204/pexels-photo-6190204.jpeg", imageAlt: "Game drive", title: "GAME DRIVES", description: "Hwange National Park safaris" },
    { id: 2, imageSrc: "https://images.pexels.com/photos/6190205/pexels-photo-6190205.jpeg", imageAlt: "Bird watching", title: "BIRD WATCHING", description: "Diverse park birdlife" },
    { id: 3, imageSrc: "https://images.pexels.com/photos/6190206/pexels-photo-6190206.jpeg", imageAlt: "Night safari", title: "NIGHT SAFARIS", description: "Nocturnal wildlife experiences" },
    { id: 4, imageSrc: "https://images.pexels.com/photos/6190207/pexels-photo-6190207.jpeg", imageAlt: "Walking safari", title: "WALKING SAFARIS", description: "Guided bush walks" },
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

