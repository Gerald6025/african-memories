export interface AccommodationItem {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  overviewImage?: string;
  heroVideo?: string;
  foodImage?: string;
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
    overviewImage: 'https://www.palmriverhotel.com/wp-content/uploads/2023/01/Pool-onto-Zambezi-River-PRH-jpeg.webp',
    foodImage: 'https://www.palmriverhotel.com/wp-content/uploads/2023/05/Pan-Roasted-Ostrich-Fillet-PRH-1351x900.webp',
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
    overviewImage: 'https://ik.imagekit.io/c0x52ylk1/Safari%20Lodge/victoria-falls-safari-lodge-17.webp?updatedAt=1778529082207',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=2',
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
    overviewImage: 'https://www.ilalalodge.com/wp-content/uploads/2019/07/Ilala-Pool-Shot.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=3',
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
    overviewImage: 'https://ik.imagekit.io/c0x52ylk1/Pamusha%20Lodge/room01-768x660.jpeg?updatedAt=1778529150975',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=4',
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
    overviewImage: 'https://ik.imagekit.io/c0x52ylk1/Pioneer%20Lodge/pioneers_06_low-1-1500x630.jpg?updatedAt=1778529644584',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=5',
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
    overviewImage: 'https://africansun.com/wp-content/uploads/2024/03/Property-General-Troutbeck-45-scaled.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=6',
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
    overviewImage: 'https://ik.imagekit.io/c0x52ylk1/Elephant%20Hills/unnamed.jpg?updatedAt=1778529117634',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=7',
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
    overviewImage: 'https://www.mbanomanorhotel.com/wp-content/uploads/2025/03/Bathroom-1.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=8',
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
    overviewImage: 'https://lh3.googleusercontent.com/grass-cs/ACvplmN6QAEL17oZgSXIdrZOvi0bixUpUzs7fxhKOnHo59hZMnVxHtUo-ijwWLRiLZxjruY6D30ocjU3iJmq0o7p6ubeZsqstXnRiDpL1tVN1xxvrUEOqQpokgprvLZoBT5QDdebNyN5=w324-h312-n-k-no',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=9',
    description:
      'Designed for comfort and adventure, this property delivers contemporary styling, easy access to attractions, and a warm atmosphere.',
    highlights: ['Budget-friendly luxury', 'Modern finishes', 'Great location'],
    amenities: ['Pool', 'Free WiFi', 'Breakfast', 'Restaurant'],
  },
  {
    id: 10,
    title: 'Dzimbawe Guest Lodge',
    location: 'Victoria Falls',
    price: 'From US$107 per person per night',
    type: 'Budget',
    image:
      'https://www.dzimbahweguestlodge.com/assets/images/restaurant/pool.jpg',
    overviewImage:
      'https://www.dzimbahweguestlodge.com/assets/images/restaurant/pool.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=10',
    description:
      'A small, personalized lodge in a peaceful residential area of Victoria Falls. Private, clean and reasonably priced accommodation with two swimming pools, airport transfers, and an activity desk.',
    highlights: ['Two swimming pools', 'Airport transfers', 'Activity desk', 'Self catering or B&B'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Breakfast', 'Airport shuttle', 'Garden', 'Terrace'],
  },
  {
    id: 11,
    title: 'Old Drift Lodge',
    location: 'Victoria Falls',
    price: 'From US$836 per person per night',
    type: 'Luxury',
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlXc5o22zGkV-DJ-eZYHDaC6_fWzhM2cm0UcWpq1_KVj8UfYgFb4p6D1LI23zmmGz3asY2K7IJ28vOFrzzf7tuUowyR7ucKCG0MKo7lGlIb03fReYY_KCvs_gF3PSVWzsMP8iLX=s680-w680-h510-rw',
    overviewImage:
      'https://wildhorizons.co.za/wp-content/uploads/2024/12/Old-Drift-Lodge-Landing-Page.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=11',
    description:
      'A luxury tented camp on the banks of the Zambezi River inside Zambezi National Park, upstream from Victoria Falls. The lodge offers 360-degree views over the Zambezi River and a well-visited waterhole.',
    highlights: ['360-degree views', 'Private plunge pools', 'Game drives', 'Boat safaris'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant', 'Spa', 'Air conditioning'],
  },
  {
    id: 12,
    title: 'Chundu Island',
    location: 'Victoria Falls',
    price: 'From US$790 per person per night',
    type: 'Island Safari',
    image:
      'https://www.chundu.co.za/wp-content/uploads/2019/12/chundu-island-gallery-island6.jpg',
    overviewImage:
      'https://www.chundu.co.za/wp-content/uploads/2019/12/chundu-island-gallery-mainlodge6.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=12',
    description:
      'An intimate island getaway in the Zambezi National Park on the Zambezi River, 21km upstream from Victoria Falls. Features 8 luxury suites with river views, canoeing, walking safaris, and game drives.',
    highlights: ['Island setting', 'Canoeing', 'Walking safaris', 'Game drives'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant', 'Fans', 'Outdoor shower'],
  },
  {
    id: 13,
    title: 'Matetsi Victoria Falls',
    location: 'Victoria Falls',
    price: 'From US$1,150 per person per night',
    type: 'Luxury',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFBE6u6XR7mLfrDCOH9Q6x81tBPXHydnXCK25kOhzgzorHVAexwzvZRI&s=10',
    overviewImage:
      'https://www.go2africa.com/wp-content/uploads/2017/08/Matetsi-Victoria-Falls-River-House.jpg',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=13',
    description:
      'A luxury safari lodge set along a nine-mile stretch of the Zambezi River in the Matetsi Private Game Reserve, close to Victoria Falls. Features 18 tented suites with private plunge pools and verandas.',
    highlights: ['Private plunge pools', 'Game drives', 'Zambezi River cruise', 'Victoria Falls tour'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant', 'Spa', 'Fitness center'],
  },
  {
    id: 14,
    title: 'Victoria Falls Hotel',
    location: 'Victoria Falls',
    price: 'From US$350 per person per night',
    type: 'Luxury',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/4b/55/c9/the-grande-dame-of-victoria.jpg?w=800&h=500&s=1',
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7a/a7/82/a-view-from-the-back.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=14',
    description:
      'A historic Edwardian-style hotel with traditional décor, fine wood period furnishings, and en-suite bathrooms with large Edwardian bathtubs. Features three restaurants including The Livingstone Room fine dining and Stanley\'s Terrace high tea.',
    highlights: ['Edwardian décor', 'Fine dining', 'Historic landmark', 'Views of the Falls'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant', 'Spa', 'Salon'],
  },
  {
    id: 15,
    title: 'Batonka Guest Lodge',
    location: 'Victoria Falls',
    price: 'From US$196 per person per night',
    type: 'Boutique',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/5e/a4/b7/batonka-guest-lodge.jpg?w=1000&h=-1&s=1',
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/71/c3/ed/breakfast-at-sunrise.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=15',
    description:
      'A small and elegant retreat set within easy walking distance to Victoria Falls. Offers comfortable rooms with private verandas opening onto surrounding lawns, indoor and outdoor dining, a cosy lounge, and a verandah with garden views.',
    highlights: ['Garden setting', 'Walking distance to Falls', 'Swimming pool', 'Indoor and outdoor dining'],
    amenities: ['Pool', 'Free WiFi', 'Bar', 'Restaurant', 'Air conditioning', 'Garden'],
  },
  {
    id: 16,
    title: 'Wallow Lodge',
    location: 'Victoria Falls',
    price: 'From US$1,100 per person per night',
    type: 'Safari',
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/32/ff/a1/the-sunken-fireplace.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=16',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/7f/4e/lokuthula-lodges.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=17',
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
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=18',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/a3/38/lake-suite.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=19',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fb/48/b9/spurwing-island.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=20',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/af/ad/baobab-villa-a-private.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=21',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/26/59/7f/20180222-073454-largejpg.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=22',
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
    overviewImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/18/e4/hwange-safari-lodge.jpg?w=1000&h=-1&s=1',
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=23',
    description:
      'A memorable base for exploring Hwange National Park with comfortable rooms, expert-guided experiences, and a true bush atmosphere.',
    highlights: ['National park access', 'Guided safaris', 'Bush luxury'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
];
