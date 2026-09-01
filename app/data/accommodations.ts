export interface AccommodationItem {
  id: number;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  overviewImage?: string;
  locationImage?: string;
  roomImages?: string[];
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/93/64/ab/swimming-pool.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/5b/52/13/the-palm-river-hotel.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/35/63/c1/executive-suite-palm.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/35/63/c8/executive-suite-lounge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/35/64/43/deluxe-room-with-river.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/35/64/ff/presidential-suite-lounge.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/ef/bb/a2/victoria-falls-safari.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/99/c9/0a/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/26/55/ff/victoria-falls-safari.jpg?w=900&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/99/c9/c7/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/99/c9/c5/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/f1/f8/0b/victoria-falls-safari.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/7a/cf/eb/al-fresco-dining-cassia.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/67/0d/a9/classic-suite.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/67/0d/a8/classic-suite-with-additional.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/7f/37/2f/standard-room-private.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/7f/36/f2/standard-twin-room-ilala.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/7f/2a/63/private-patio-hot-tub.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/6e/93/55/20171202-073107-largejpg.jpg?w=800&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9d/45/51/twin-rooms.jpg?w=800&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/77/a0/f6/twin-double-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9d/48/bd/single-room.jpg?w=800&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/1f/5b/62/pamusha-lodge.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/b7/03/the-entrance-to-the-lodge.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/c2/30/family-room-view-from.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/c2/03/elephant-theme-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/c1/e3/monkey-theme-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/ab/9b/pioneers-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/cc/ab/8c/the-children-s-annex.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d2/a6/75/caption.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/dd/2e/a0/lake-facing-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d3/25/d7/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d3/25/d6/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d3/25/d4/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d2/a6/76/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f9/48/5f/elephant-hills-resort.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/0f/9f/3f/standard-room.jpg?w=700&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/aa/23/fa/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4c/ed/54/elephant-hills-resort.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/f9/55/ee/elephant-hills-resort.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/4c/ed/57/elephant-hills-resort.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/e1/77/02/mbano-manor-hotel.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/76/ec/60/mbano-manor-hotel-victoria.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/76/ea/bf/mbano-manor-hotel-victoria.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/94/e2/74/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/1a/8f/cb/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/13/bc/b6/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/74/cc/caption.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/74/ca/deluxe-double-room-bathroom.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/73/02/deluxe-double-room-bathroom.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/72/63/standard-twin-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f4/72/60/standard-double-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/72/64/27/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f9/9c/e9/king-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b2/42/0d/triple-room-in-sellf.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b2/41/aa/triple-room-in-sellf.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b2/42/42/sellf-catering-i-apartment.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/b2/40/f8/self-catering.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/35/c6/86/old-drift-lodge.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/3f/e6/67/old-drift-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/3f/e5/f6/old-drift-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/3f/e5/d4/old-drift-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/f1/da/1b/ol.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/3f/e6/20/old-drift-lodge.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/fe/56/53/caption.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/65/46/b1/chundu-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/65/43/33/chundu-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/00/6b/85/chundu-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/00/6a/48/chundu-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/00/68/e3/chundu-island.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a2/60/46/indoor-seating-area-wall.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a2/60/01/river-lodge-suite-with.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/a2/5f/bd/river-lodge-suite-private.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c8/2d/a1/bathroom-at-andbeyond.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c8/2d/e5/view-of-suite-at-andbeyond.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c8/2e/27/swimming-pool-at-andbeyond.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7a/a7/82/a-view-from-the-back.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/96/93/ab/the-victoria-falls-hotel.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/96/93/c4/the-victoria-falls-hotel.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/96/93/a2/the-victoria-falls-hotel.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3b/30/20/photo2jpg.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3b/30/1f/photo1jpg.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/9f/00/69/the-lounge-seating-area.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/53/29/ef/garden-view-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/53/2d/9c/pool-view-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/71/b7/b4/garden-view-bathroom.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a4/21/ad/grounds-and-our-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/8d/4d/cb/batonka-guest-lodge.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/f2/05/2f/caption.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/33/0e/e0/coffee-station-a-cosy.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1f/33/03/20/each-suite-overlooks.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/28/5a/0b/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/28/5a/07/caption.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/57/8e/fc/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/44/c8/e2/lokuthula-lodges.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/81/6d/lokuthula-lodges.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/e1/80/ca/lokuthula-lodges.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/e8/55/2b/lokuthula-lodges.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/af/e4/d1/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/64/be/49/photo1jpg.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/cd/4e/5c/rainbow-hotel-victoria.jpg?w=600&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/a2/44/a8/standard-twin-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/a2/44/b2/standard-twin-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/a2/44/b4/standard-double-room.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/4d/05/eb/caption.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/7c/31/view-from-the-eco-pond.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/a3/38/lake-suite.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/9f/5f/writing-desk.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/9f/33/fothergill-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/9f/10/fothergill-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/f2/a0/e0/fothergill-island.jpg?w=1000&h=-1&s=1',
    ],
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
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/fb/48/f5/spurwing-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/fe/ce/e6/spurwing-island.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/2c/4b/bb/the-island-approach.jpg?w=600&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/02/e2/c0/49/spurwing-island.jpg?w=600&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/2c/4b/b2/front-harbour.jpg?w=600&h=-1&s=1',
    ],
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-s/01/2c/4b/b3/the-grounds.jpg?w=600&h=-1&s=1',
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/06/e1/87/bumi-hills-safari-lodge.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/ae/54/stylish-decor-that-pays.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/af/d3/baobab-villa-a-private.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/ae/5a/a-bath-with-a-view.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/45/af/9d/baobab-villa-a-private.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/8d/71/22/bumi-hills-safari-lodge.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ef/de/39/caribbea-bay-hotel.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ef/dc/fc/caribbea-bay-hotel.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/0a/85/caribbea-bay-hotel-casino.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/0a/64/caribbea-bay-hotel-casino.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/ff/0c/07/caribbea-bay-hotel-casino.jpg?w=1000&h=-1&s=1',
    ],
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
    locationImage:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/f0/e7/e6/caption.jpg?w=1000&h=-1&s=1',
    roomImages: [
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/84/ee/hwange-safari-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/84/e5/hwange-safari-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/84/e2/hwange-safari-lodge.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/a6/85/4c/blick-auf-das-wasserloch.jpg?w=1000&h=-1&s=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/56/86/1a/hwange-safari-lodge.jpg?w=1000&h=-1&s=1',
    ],
    foodImage: 'https://source.unsplash.com/1350x900/?food&sig=23',
    description:
      'A memorable base for exploring Hwange National Park with comfortable rooms, expert-guided experiences, and a true bush atmosphere.',
    highlights: ['National park access', 'Guided safaris', 'Bush luxury'],
    amenities: ['Pool', 'Free WiFi', 'Restaurant', 'Breakfast'],
  },
];
