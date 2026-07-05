export interface AccommodationItem {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  description: string;
  highlights: string[];
  amenities: string[];
}

export const accommodations: AccommodationItem[] = [
  {
    id: 1,
    title: 'Palm River Lodge',
    location: 'Victoria Falls',
    price: 'From US$1,420 per person per night',
    type: 'Luxury',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Palm%20River%20Lodge/Swimming-Pool-1350x900.jpeg?updatedAt=1778156387582',
    description:
      'A polished retreat overlooking the river with elegant suites, spa treatments, and a tranquil poolside experience in the heart of Victoria Falls.',
    highlights: ['Riverfront setting', 'Spa and wellness', 'Breakfast included'],
    amenities: ['Pool', 'Spa', 'Free WiFi', 'Breakfast'],
  },
  {
    id: 2,
    title: 'Victoria Falls Safari Lodge',
    location: 'Victoria Falls',
    price: 'From US$1,370 per person per night',
    type: 'Safari',
    image:
      'https://ik.imagekit.io/c0x52ylk1/Safari%20Lodge/victoria-falls-safari-lodge-21.webp?updatedAt=1778529081755',
    description:
      'This classic safari lodge blends comfort and wildlife adventure with expansive views, thoughtful hospitality, and easy access to the falls.',
    highlights: ['Game-viewing access', 'Garden terrace', 'Signature dining'],
    amenities: ['Bar', 'Restaurant', 'Pool', 'Free WiFi'],
  },
  {
    id: 3,
    title: 'Ilala Lodge Hotel',
    location: 'Victoria Falls',
    price: 'From US$9,870 per camp per night',
    type: 'Luxury',
    image:
      'https://www.ilalalodge.com/wp-content/uploads/2017/03/KLRS2091-1-1500x957.jpg',
    description:
      'A historic and welcoming stay close to the falls with refined interiors, a relaxed bar scene, and easy access to major attractions.',
    highlights: ['Central location', 'Historic charm', 'Poolside lounge'],
    amenities: ['Pool', 'Restaurant', 'Bar', 'Free WiFi'],
  },
  {
    id: 4,
    title: 'Pamusha Lodge',
    location: 'Victoria Falls',
    price: 'From US$1,850 per person per night',
    type: 'Safari',
    image:
      'https://ik.imagekit.io/c0x52ylk1/Pamusha%20Lodge/Pamusha-familynew-768x600.jpg?updatedAt=1778529149773',
    description:
      'A relaxed hideaway that pairs cozy accommodation with guided excursions and a serene atmosphere ideal for both couples and families.',
    highlights: ['Family-friendly', 'Game drives', 'Tented luxury'],
    amenities: ['Pool', 'Game Drives', 'Free WiFi', 'Breakfast'],
  },
  {
    id: 5,
    title: 'Victoria Falls Pioneer Camp',
    location: 'Victoria Falls',
    price: 'From US$2,100 per person per night',
    type: 'Luxury',
    image:
      'https://ik.imagekit.io/c0x52ylk1/Pioneer%20Lodge/unnamed%20(1).jpg?updatedAt=1778529636152',
    description:
      'Set in lush grounds with a refined atmosphere, this property offers spacious suites, elegant interiors, and a restful retreat near the falls.',
    highlights: ['Garden setting', 'Comfortable suites', 'Scenic surroundings'],
    amenities: ['Pool', 'Spa', 'Free WiFi', 'Breakfast'],
  },
  {
    id: 6,
    title: 'Troutbeck Resort',
    location: 'Nyanga',
    price: 'From US$950 per person per night',
    type: 'Mountain Escape',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d3/35/f4/caption.jpg?w=900&h=-1&s=1',
    description:
      'A beloved highland retreat with mountain views, fresh air, and a calm pace ideal for couples, families, and nature lovers.',
    highlights: ['Scenic hills', 'Lake views', 'Historic estate'],
    amenities: ['Pool', 'Restaurant', 'Free WiFi', 'Breakfast'],
  },
  {
    id: 7,
    title: 'Elephant Hills Resort',
    location: 'Victoria Falls',
    price: 'From US$890 per person per night',
    type: 'Luxury',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/fb/c7/e8/photo0jpg.jpg?w=900&h=500&s=1',
    description:
      'A vibrant resort with a wide range of leisure facilities, a family-friendly atmosphere, and exceptional views over the surrounding landscape.',
    highlights: ['Family facilities', 'Golf and leisure', 'Large pool areas'],
    amenities: ['Pool', 'Spa', 'Restaurant', 'Bar'],
  },
  {
    id: 8,
    title: 'Mbano Manor Hotel',
    location: 'Victoria Falls',
    price: 'From US$1,680 per person per night',
    type: 'Boutique',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/25/37/3d/mbano-manor-hotel-victoria.jpg?w=900&h=500&s=1',
    description:
      'An intimate boutique stay surrounded by greenery, offering refined suites and a quiet setting just outside the town center.',
    highlights: ['Boutique charm', 'Forest setting', 'Luxury suites'],
    amenities: ['Pool', 'Spa', 'Free WiFi', 'Restaurant'],
  },
  {
    id: 9,
    title: 'Explorers Village',
    location: 'Victoria Falls',
    price: 'From US$1,250 per person per night',
    type: 'Adventure',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/74/c7/caption.jpg?w=900&h=500&s=1',
    description:
      'Designed for comfort and adventure, this property delivers contemporary styling, easy access to attractions, and a warm atmosphere.',
    highlights: ['Budget-friendly luxury', 'Modern finishes', 'Great location'],
    amenities: ['Pool', 'Free WiFi', 'Breakfast', 'Restaurant'],
  },
  {
    id: 10,
    title: 'Katavi National Park Camp',
    location: 'Katavi National Park',
    price: 'From US$2,400 per person per night',
    type: 'Remote Safari',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Katavi/katavi-national-park.jpg',
    description:
      'A true wilderness escape offering remoteness, wildlife intensity, and a private safari atmosphere far from the crowds.',
    highlights: ['Remote safari', 'Fly-in access', 'Untouched nature'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Breakfast'],
  },
  {
    id: 11,
    title: 'Mikumi Safari Lodge',
    location: 'Mikumi National Park',
    price: 'From US$780 per person per night',
    type: 'Safari',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Mikumi/mikumi-safari-lodge.jpg',
    description:
      'A comfortable stopover with stylish rooms, peaceful gardens, and easy access to the southern circuit.',
    highlights: ['Gateway safari', 'Malaria-free options', 'Relaxed lounge'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
  {
    id: 12,
    title: 'Arusha Coffee Lodge',
    location: 'Arusha',
    price: 'From US$650 per person per night',
    type: 'Coffee Estate',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Arusha/arusha-coffee-lodge.jpg',
    description:
      'Set on a working plantation, this lodge combines elegant rooms with coffee estate charm and scenic views over the hills.',
    highlights: ['Coffee plantation', 'Relaxed luxury', 'Garden views'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
  {
    id: 13,
    title: 'Mara Grand Migration Camp',
    location: 'Serengeti Mara',
    price: 'From US$1,750 per person per night',
    type: 'Migration Camp',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Serengeti%20Migration/mara-grand-migration.jpg',
    description:
      'A seasonal camp built for tracking the great migration with immersive safari comfort and unforgettable scenery.',
    highlights: ['Migration season', 'Tent suites', 'Wildlife focus'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Breakfast'],
  },
  {
    id: 14,
    title: 'Kilimanjaro View Lodge',
    location: 'Moshi',
    price: 'From US$920 per person per night',
    type: 'Mountain Lodge',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Kilimanjaro/kilimanjaro-view-lodge.jpg',
    description:
      'A serene stopover for climbers and travelers looking for comfort, mountain views, and a calm atmosphere before or after the ascent.',
    highlights: ['Mountain views', 'Climb-friendly', 'Peaceful gardens'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
  {
    id: 15,
    title: 'Zanzibar Beach Retreat',
    location: 'Zanzibar Island',
    price: 'From US$1,100 per person per night',
    type: 'Beach Escape',
    image:
      'https://ik.imagekit.io/c0x52ylk1/African%20Memories%20Resources/Zanzibar/zanzibar-beach-retreat.jpg',
    description:
      'White sands, crystal-clear water, and gentle luxury come together in this beachfront retreat designed for pure relaxation.',
    highlights: ['Beachfront luxury', 'Private beach', 'Island escape'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Bar'],
  },
  {
    id: 16,
    title: 'Wallow Lodge',
    location: 'Victoria Falls',
    price: 'From US$1,100 per person per night',
    type: 'Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/32/fa/c2/panoramic-views-of-the.jpg?w=800&h=500&s=1',
    description:
      'A private safari hideaway overlooking the Masuwe River with a secluded setting, sweeping views, and a quiet atmosphere in Victoria Falls National Park.',
    highlights: ['Private concession', 'Riverfront views', 'Intimate safari'],
    amenities: ['Pool', 'Free WiFi', 'Breakfast', 'Restaurant'],
  },
  {
    id: 17,
    title: 'Lokuthula Lodges',
    location: 'Victoria Falls',
    price: 'From US$1,100 per person per night',
    type: 'Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/44/c8/dd/free-loungers-at-lokuthula.jpg?w=900&h=500&s=1',
    description:
      'These comfortable lodges sit within the Victoria Falls Safari Lodge estate and offer easy access to the falls with thoughtful amenities and a relaxed pace.',
    highlights: ['Estate setting', 'Family-friendly', 'Great value'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
  {
    id: 18,
    title: 'Rainbow Hotel',
    location: 'Victoria Falls',
    price: 'From US$1,100 per person per night',
    type: 'Luxury',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/cd/4c/70/rainbow-hotel-victoria.jpg?w=900&h=500&s=1',
    description:
      'A striking Moorish-style hotel near the falls with a warm atmosphere, striking views, and a convenient location for exploring town.',
    highlights: ['Town proximity', 'Scenic views', 'Cocktail bar'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant'],
  },
  {
    id: 19,
    title: 'Fothergill Island',
    location: 'Kariba',
    price: 'From US$1,100 per person per night',
    type: 'Island Escape',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/a2/f1/main-entertainment-area.jpg?w=1000&h=-1&s=1',
    description:
      'An island retreat on Lake Kariba where rich history, conservation, and calm lakeside living create a memorable safari escape.',
    highlights: ['Island setting', 'Lake views', 'Wildlife-rich surroundings'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Bar'],
  },
  {
    id: 20,
    title: 'Spurwing Island Lodge',
    location: 'Kariba',
    price: 'From US$1,100 per person per night',
    type: 'Remote Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/96/b2/4b/spurwing-island.jpg?w=900&h=500&s=1',
    description:
      'Set on Lake Kariba with dramatic scenery and fishing opportunities, this lodge delivers a peaceful retreat for wildlife lovers and travelers alike.',
    highlights: ['Lakefront location', 'Fishing access', 'Quiet luxury'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
  {
    id: 21,
    title: 'Bumi Hills Safari Lodge',
    location: 'Kariba',
    price: 'From US$1,100 per person per night',
    type: 'Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/ae/2f/sunset-over-the-iconic.jpg?w=900&h=500&s=1',
    description:
      'A classic safari lodge on the shores of Lake Kariba with elevated views, comfortable rooms, and a relaxed atmosphere for exploring the wilderness.',
    highlights: ['Shoreline views', 'Safari atmosphere', 'Relaxed comfort'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Bar'],
  },
  {
    id: 22,
    title: 'Caribean Bay Hotel',
    location: 'Kariba',
    price: 'From US$1,100 per person per night',
    type: 'Family Resort',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/0a/85/caribbea-bay-hotel-casino.jpg?w=900&h=500&s=1',
    description:
      'A lively family-friendly retreat with leisure facilities, water activities, and plenty of room to unwind on the lakeside grounds.',
    highlights: ['Family-friendly', 'Water activities', 'Leisure facilities'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Bar'],
  },
  {
    id: 23,
    title: 'Hwange Safari Lodge',
    location: 'Hwange',
    price: 'From US$1,100 per person per night',
    type: 'Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d0/b9/df/20180411-090930-largejpg.jpg?w=1000&h=-1&s=1',
    description:
      'A memorable base for exploring Hwange National Park with comfortable rooms, expert-guided experiences, and a true bush atmosphere.',
    highlights: ['National park access', 'Guided safaris', 'Bush luxury'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
];
