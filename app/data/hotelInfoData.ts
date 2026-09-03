export interface InfoItem {
  id: string;
  icon: string;
  text: string;
  fullSpan?: boolean;
}

export interface HotelData {
  tabs: { id: string; label: string }[];
  tabsData: Record<string, InfoItem[]>;
}

export const defaultHotelData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'rooms', label: 'STANDARD ROOMS' },
  ],
  tabsData: {
    'need-to-know': [
      { id: '1', icon: 'Bus', text: '30 Minutes from Arusha' },
      { id: '2', icon: 'Bus', text: '20 Minutes to Ngorongoro Gate' },
      { id: '3', icon: 'Bus', text: '50 Minutes to Lake Manyara' },
      { id: '4', icon: 'Trees', text: 'At the Foot of Mount Oldeani' },
      { id: '5', icon: 'Bus', text: '40 Minutes to Mto wa Mbu' },
    ],
    'amenities': [
      { id: '6', icon: 'PawPrint', text: 'Full / Half Day Game Drives' },
      { id: '7', icon: 'Bird', text: 'Birds Sanctuary' },
      { id: '8', icon: 'Scissors', text: 'Spa Services' },
      { id: '9', icon: 'Utensils', text: 'Fine Dining' },
      { id: '10', icon: 'Waves', text: 'Rim Flow Pool' },
    ],
    'rooms': [
      { id: '11', icon: 'BedSingle', text: '34 Double Rooms' },
      { id: '12', icon: 'BedDouble', text: '16 Deluxe Twin Rooms' },
      { id: '13', icon: 'BedSingle', text: '1 Single Bedroom Suite', fullSpan: true },
    ],
  },
};

export const palmRiverHotelData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'villa', label: 'THE VILLA' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'pr-1', icon: 'Bus', text: '5km to Victoria Falls Entrance' },
      { id: 'pr-2', icon: 'Droplet', text: 'Banks of the Zambezi River' },
      { id: 'pr-3', icon: 'Bus', text: 'Complimentary Town & Falls Shuttle' },
      { id: 'pr-4', icon: 'PawPrint', text: 'Frequent Wildlife Sightings' },
      { id: 'pr-5', icon: 'Bus', text: 'Private Jetty & River Cruises' },
    ],
    'amenities': [
      { id: 'pr-6', icon: 'Scissors', text: 'Spa & Fitness Center' },
      { id: 'pr-7', icon: 'Utensils', text: 'On-site Restaurant & Bar' },
      { id: 'pr-8', icon: 'Waves', text: '34-Meter Infinity Pool' },
      { id: 'pr-9', icon: 'Map', text: 'River or Garden Views' },
      { id: 'pr-10', icon: 'PawPrint', text: 'Welcomes Children of All Ages' },
    ],
    'accommodations': [
      { id: 'pr-11', icon: 'BedDouble', text: '72 Total Rooms & Suites' },
      { id: 'pr-12', icon: 'BedSingle', text: 'Family-Friendly Accommodations' },
      { id: 'pr-13', icon: 'Car', text: 'Accessible Rooms Available' },
    ],
    'villa': [
      { id: 'pr-14', icon: 'Home', text: '1 Private 3-Bedroom Villa' },
      { id: 'pr-15', icon: 'Waves', text: 'Private Plunge Pool', fullSpan: true },
    ],
  },
};

export const victoriaFallsHotelData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'dining-history', label: 'DINING & HISTORY' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'vf-1', icon: 'Footprints', text: 'Private stairway to the railway station' },
      { id: 'vf-2', icon: 'Camera', text: 'Views of the Batoka Gorge and Victoria Falls Bridge' },
      { id: 'vf-3', icon: 'Map', text: 'Historic 5-star hotel built in 1904' },
      { id: 'vf-4', icon: 'Church', text: 'On-site Chapel of St Mary Magdalene' },
      { id: 'vf-5', icon: 'Utensils', text: 'Fine dining at The Livingstone Room' },
      { id: 'vf-6', icon: 'Waves', text: 'Historic Edwardian-style swimming pool' },
      { id: 'vf-7', icon: 'Utensils', text: "Stanley's Terrace and Stanley's Bar" },
      { id: 'vf-8', icon: 'Scissors', text: 'Day spa, hair salon, and fitness centre' },
      { id: 'vf-9', icon: 'Wind', text: 'Fully air-conditioned with modern amenities' },
      { id: 'vf-10', icon: 'Crown', text: 'Member of The Leading Hotels of the World' },
      { id: 'vf-11', icon: 'BedDouble', text: '149 elegantly appointed rooms and suites' },
      { id: 'vf-12', icon: 'Leaf', text: 'Expansive landscaped gardens and a conservation garden' },
    ],
    'amenities': [
      { id: 'vf-a1', icon: 'Waves', text: 'Historic Edwardian-style swimming pool' },
      { id: 'vf-a2', icon: 'Scissors', text: 'Day spa, hair salon, and fitness centre' },
      { id: 'vf-a3', icon: 'Wind', text: 'Fully air-conditioned rooms' },
      { id: 'vf-a4', icon: 'Utensils', text: "Stanley's Bar & The Livingstone Room" },
      { id: 'vf-a5', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'vf-a6', icon: 'Church', text: 'On-site Chapel of St Mary Magdalene' },
    ],
    'accommodations': [
      { id: 'vf-r1', icon: 'BedSingle', text: 'Elegantly Appointed Rooms' },
      { id: 'vf-r2', icon: 'BedDouble', text: 'Suites with Views' },
      { id: 'vf-r3', icon: 'BedDouble', text: '149 Total Rooms & Suites' },
    ],
    'dining-history': [
      { id: 'vf-d1', icon: 'Utensils', text: 'The Livingstone Room Fine Dining' },
      { id: 'vf-d2', icon: 'Leaf', text: 'Historic 1904 Heritage', fullSpan: true },
    ],
  },
};

export const batonkaHotelData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'sustainability', label: 'SUSTAINABILITY' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'bat-1', icon: 'Bus', text: '2.5km to Victoria Falls Entrance' },
      { id: 'bat-2', icon: 'Trees', text: 'Set in a Quiet Residential Suburb' },
      { id: 'bat-3', icon: 'Sun', text: 'Eco-Friendly & Solar Powered' },
      { id: 'bat-4', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'bat-5', icon: 'Utensils', text: 'Indoor & Outdoor Dining Area' },
      { id: 'bat-6', icon: 'Utensils', text: 'Comfortable Lounge & Bar' },
      { id: 'bat-7', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'bat-8', icon: 'MapPin', text: 'Private Patios or Balconies' },
      { id: 'bat-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'bat-10', icon: 'Map', text: 'Dedicated Activity Booking Desk' },
      { id: 'bat-11', icon: 'BedDouble', text: '27 Total Guest Rooms' },
      { id: 'bat-12', icon: 'Accessibility', text: 'Universal Access Rooms Available' },
    ],
    'amenities': [
      { id: 'bat-a1', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'bat-a2', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'bat-a3', icon: 'Utensils', text: 'Indoor & Outdoor Dining' },
      { id: 'bat-a4', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'bat-a5', icon: 'Car', text: 'Free Parking' },
      { id: 'bat-a6', icon: 'Scissors', text: 'Spa Treatments' },
    ],
    'accommodations': [
      { id: 'bat-r1', icon: 'BedSingle', text: 'En-Suite Rooms' },
      { id: 'bat-r2', icon: 'BedDouble', text: '27 Total Guest Rooms' },
      { id: 'bat-r3', icon: 'Accessibility', text: 'Universal Access Rooms' },
    ],
    'sustainability': [
      { id: 'bat-s1', icon: 'Sun', text: 'Eco-Friendly & Solar Powered' },
      { id: 'bat-s2', icon: 'Trees', text: 'Conservation Efforts', fullSpan: true },
    ],
  },
};

export const ilalaLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'cruises', label: 'RA-IKANE CRUISES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'il-1', icon: 'Footprints', text: '8-Minute Walk to Victoria Falls' },
      { id: 'il-2', icon: 'Trees', text: 'Borders Zambezi National Park' },
      { id: 'il-3', icon: 'PawPrint', text: 'Wildlife Grazing on Lawns' },
      { id: 'il-4', icon: 'Bus', text: 'Exclusive Ra-Ikane River Cruises' },
      { id: 'il-5', icon: 'Utensils', text: 'Award-Winning Palm Restaurant' },
      { id: 'il-6', icon: 'Waves', text: 'Swimming Pool & Sun Deck' },
      { id: 'il-7', icon: 'MapPin', text: 'Private Balcony or Patio' },
      { id: 'il-8', icon: 'Scissors', text: 'Poolside Spa Treatments' },
      { id: 'il-9', icon: 'Map', text: 'Dedicated In-House Tour Desk' },
      { id: 'il-10', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'il-11', icon: 'BedDouble', text: '73 Total Rooms & Suites' },
      { id: 'il-12', icon: 'Utensils', text: 'Poolside Bar & Lounge' },
    ],
    'amenities': [
      { id: 'il-a1', icon: 'Waves', text: 'Swimming Pool & Sun Deck' },
      { id: 'il-a2', icon: 'Scissors', text: 'Spa & Wellness Treatments' },
      { id: 'il-a3', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'il-a4', icon: 'Utensils', text: 'Palm Restaurant' },
      { id: 'il-a5', icon: 'Utensils', text: 'Poolside Bar & Lounge' },
      { id: 'il-a6', icon: 'Bus', text: 'In-House Tour Desk' },
    ],
    'accommodations': [
      { id: 'il-r1', icon: 'BedSingle', text: 'Luxury Rooms & Suites' },
      { id: 'il-r2', icon: 'BedDouble', text: 'Family Rooms Available' },
      { id: 'il-r3', icon: 'CheckCircle', text: 'Private Balconies/Patios' },
    ],
    'cruises': [
      { id: 'il-c1', icon: 'Bus', text: 'Ra-Ikane River Cruises' },
      { id: 'il-c2', icon: 'PawPrint', text: 'Exclusive Zambezi Experience', fullSpan: true },
    ],
  },
};

export const oldDriftLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safari', label: 'SAFARI ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'od-1', icon: 'Bus', text: 'Access via Luxury River Cruiser' },
      { id: 'od-2', icon: 'Trees', text: 'Located inside Zambezi National Park' },
      { id: 'od-3', icon: 'Car', text: 'Morning & Afternoon Game Drives' },
      { id: 'od-4', icon: 'PawPrint', text: 'Frequent Riverfront Wildlife Encounters' },
      { id: 'od-5', icon: 'Utensils', text: 'Dining on Floating River Deck' },
      { id: 'od-6', icon: 'Waves', text: 'Private Plunge Pools in Every Suite' },
      { id: 'od-7', icon: 'Bathtub', text: 'Indoor & Outdoor Showers' },
      { id: 'od-8', icon: 'Moon', text: 'Outdoor "Star Beds" for Sleepouts' },
      { id: 'od-9', icon: 'Tent', text: 'Luxury Canvas Tented Suites' },
      { id: 'od-10', icon: 'Wind', text: 'Air-Conditioned with Canvas Roll-Up Walls' },
      { id: 'od-11', icon: 'BedDouble', text: '10 Double & 4 Family Suites' },
      { id: 'od-12', icon: 'Trees', text: 'Environmentally Friendly Design' },
    ],
    'amenities': [
      { id: 'od-a1', icon: 'Waves', text: 'Private Plunge Pools' },
      { id: 'od-a2', icon: 'Utensils', text: 'Dining on Floating River Deck' },
      { id: 'od-a3', icon: 'Scissors', text: 'Spa Treatments' },
      { id: 'od-a4', icon: 'PawPrint', text: 'Game Drives' },
      { id: 'od-a5', icon: 'Wind', text: 'Air-Conditioned Suites' },
      { id: 'od-a6', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
    ],
    'accommodations': [
      { id: 'od-r1', icon: 'Tent', text: 'Luxury Canvas Tented Suites' },
      { id: 'od-r2', icon: 'BedDouble', text: '10 Double Suites' },
      { id: 'od-r3', icon: 'Users', text: '4 Family Suites' },
      { id: 'od-r4', icon: 'Bathtub', text: 'Indoor & Outdoor Showers' },
    ],
    'safari': [
      { id: 'od-s1', icon: 'Jeep', text: 'Morning & Afternoon Game Drives' },
      { id: 'od-s2', icon: 'PawPrint', text: 'Riverfront Wildlife Encounters', fullSpan: true },
    ],
  },
};

export const maraSafariCampData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'rooms', label: 'STANDARD ROOMS' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'ms-1', icon: 'Trees', text: 'Serengeti National Park' },
      { id: 'ms-2', icon: 'Bus', text: 'Remote Bush Location' },
      { id: 'ms-3', icon: 'Clock', text: 'Seasonal: June - March' },
    ],
    'amenities': [
      { id: 'ms-4', icon: 'PawPrint', text: 'Game Drives' },
      { id: 'ms-5', icon: 'Utensils', text: 'Traditional Meals' },
      { id: 'ms-6', icon: 'Scissors', text: 'Maasai Cultural Experiences' },
    ],
    'rooms': [
      { id: 'ms-7', icon: 'BedSingle', text: 'Luxury Safari Tents' },
      { id: 'ms-8', icon: 'CheckCircle', text: 'Private Decks' },
    ],
  },
};

export const victoriaFallsSafariLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'boma', label: 'THE BOMA' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'vfs-1', icon: 'MapPin', text: '4km to Victoria Falls Entrance' },
      { id: 'vfs-2', icon: 'Binoculars', text: 'Overlooks Zambezi National Park' },
      { id: 'vfs-3', icon: 'Bus', text: 'Complimentary Town & Falls Shuttle' },
      { id: 'vfs-4', icon: 'PawPrint', text: 'On-site Wildlife Waterhole' },
      { id: 'vfs-5', icon: 'PawPrint', text: 'Nature Trails & Hide Sits' },
      { id: 'vfs-6', icon: 'Scissors', text: 'Glass-Fronted Fitness Centre' },
      { id: 'vfs-7', icon: 'Utensils', text: 'MaKuwa-Kuwa & The Boma Restaurants' },
      { id: 'vfs-8', icon: 'Waves', text: 'Two-Tiered Swimming Pool' },
      { id: 'vfs-9', icon: 'MapPin', text: 'Private Balconies for All Rooms' },
      { id: 'vfs-10', icon: 'MapPin', text: 'Westward-Facing for African Sunsets' },
      { id: 'vfs-11', icon: 'BedDouble', text: '72 Total Rooms & Suites' },
      { id: 'vfs-12', icon: 'Utensils', text: 'Buffalo Bar & Viewing Deck' },
    ],
    'amenities': [
      { id: 'vfs-a1', icon: 'Waves', text: 'Two-Tiered Swimming Pool' },
      { id: 'vfs-a2', icon: 'Scissors', text: 'Spa & Fitness Centre' },
      { id: 'vfs-a3', icon: 'Utensils', text: 'MaKuwa-Kuwa Restaurant' },
      { id: 'vfs-a4', icon: 'PawPrint', text: 'Wildlife Waterhole' },
      { id: 'vfs-a5', icon: 'MapPin', text: 'Private Balconies' },
      { id: 'vfs-a6', icon: 'Car', text: 'Complimentary Parking' },
    ],
    'accommodations': [
      { id: 'vfs-r1', icon: 'BedSingle', text: 'Luxury Rooms & Suites' },
      { id: 'vfs-r2', icon: 'BedDouble', text: 'Family Rooms Available' },
      { id: 'vfs-r3', icon: 'CheckCircle', text: 'Air Conditioning' },
    ],
    'boma': [
      { id: 'vfs-b1', icon: 'Utensils', text: 'The Boma Restaurant Experience' },
      { id: 'vfs-b2', icon: 'PawPrint', text: 'Boma Night Game Viewing', fullSpan: true },
    ],
  },
};

export const pamushaLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safaris', label: 'PAMUSHA SAFARIS' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'pam-1', icon: 'Bus', text: '2km to Victoria Falls' },
      { id: 'pam-2', icon: 'Trees', text: 'Peaceful Teak Tree Garden' },
      { id: 'pam-3', icon: 'Bus', text: '24-Hour Shuttle Service' },
      { id: 'pam-4', icon: 'Bus', text: 'Pamusha River Cruises' },
      { id: 'pam-5', icon: 'Utensils', text: 'Open-Air Restaurant & 24hr Bar' },
      { id: 'pam-6', icon: 'Waves', text: 'Outdoor Swimming Pool' },
      { id: 'pam-7', icon: 'Coffee', text: 'Complimentary English Breakfast' },
      { id: 'pam-8', icon: 'Bell', text: '24-Hour Room Service' },
      { id: 'pam-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'pam-10', icon: 'Map', text: 'Dedicated Adventure Desk' },
      { id: 'pam-11', icon: 'BedDouble', text: '17 En-Suite Rooms' },
      { id: 'pam-12', icon: 'Home', text: 'Family-Run Bed & Breakfast' },
    ],
    'amenities': [
      { id: 'pam-a1', icon: 'Waves', text: 'Outdoor Swimming Pool' },
      { id: 'pam-a2', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'pam-a3', icon: 'Utensils', text: 'Open-Air Restaurant & 24hr Bar' },
      { id: 'pam-a4', icon: 'Bell', text: '24-Hour Room Service' },
      { id: 'pam-a5', icon: 'Coffee', text: 'Complimentary English Breakfast' },
      { id: 'pam-a6', icon: 'Map', text: 'Dedicated Adventure Desk' },
    ],
    'accommodations': [
      { id: 'pam-r1', icon: 'BedSingle', text: 'En-Suite Rooms' },
      { id: 'pam-r2', icon: 'BedDouble', text: '17 Total Rooms' },
      { id: 'pam-r3', icon: 'Home', text: 'Family-Run B&B' },
    ],
    'safaris': [
      { id: 'pam-s1', icon: 'PawPrint', text: 'Guided Safaris' },
      { id: 'pam-s2', icon: 'Bus', text: 'Pamusha River Cruises', fullSpan: true },
    ],
  },
};

export const victoriaFallsPioneerCampData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'pfc-1', icon: 'Bus', text: '2.5km to Victoria Falls' },
      { id: 'pfc-2', icon: 'Trees', text: 'Set in a Quiet Residential Suburb' },
      { id: 'pfc-3', icon: 'Sun', text: 'Largely Solar-Powered' },
      { id: 'pfc-4', icon: 'Scissors', text: 'Ukuthula Day Spa' },
      { id: 'pfc-5', icon: 'Utensils', text: 'Saloon-Style Bar & Local Craft Beer' },
      { id: 'pfc-6', icon: 'Waves', text: 'Two Swimming Pools' },
      { id: 'pfc-7', icon: 'Home', text: '4 Dedicated Family Rooms' },
      { id: 'pfc-8', icon: 'Tv', text: 'Guest TV Room & Lounge' },
      { id: 'pfc-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'pfc-10', icon: 'PawPrint', text: 'Supports Local Conservation' },
      { id: 'pfc-11', icon: 'BedDouble', text: '50 Garden-View Rooms' },
      { id: 'pfc-12', icon: 'Map', text: 'Nostalgic Explorer Aesthetic' },
    ],
    'amenities': [
      { id: 'pfc-a1', icon: 'Scissors', text: 'Ukuthula Day Spa' },
      { id: 'pfc-a2', icon: 'Waves', text: 'Two Swimming Pools' },
      { id: 'pfc-a3', icon: 'Utensils', text: 'Saloon-Style Bar & Local Craft Beer' },
      { id: 'pfc-a4', icon: 'Home', text: 'Family Rooms' },
      { id: 'pfc-a5', icon: 'Tv', text: 'Guest TV Room & Lounge' },
      { id: 'pfc-a6', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
    ],
    'accommodations': [
      { id: 'pfc-r1', icon: 'BedSingle', text: 'Garden-View Rooms' },
      { id: 'pfc-r2', icon: 'BedDouble', text: '50 Total Rooms' },
      { id: 'pfc-r3', icon: 'Home', text: '4 Dedicated Family Rooms' },
    ],
  },
};

export const troutbeckResortData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'activities', label: 'ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'tr-1', icon: 'MapPin', text: 'Set in the Nyanga Mountains' },
      { id: 'tr-2', icon: 'Water', text: 'Overlooks a Private Trout Lake' },
      { id: 'tr-3', icon: 'Trees', text: 'Close to Nyanga National Park' },
      { id: 'tr-4', icon: 'Fire', text: 'Signature Log Fireplace in Lobby' },
      { id: 'tr-5', icon: 'Golf', text: 'On-site Golf Course & Tennis' },
      { id: 'tr-6', icon: 'PawPrint', text: 'Horseback Riding & Hiking Trails' },
      { id: 'tr-7', icon: 'Utensils', text: 'Beck Restaurant & Hare and Hound Bar' },
      { id: 'tr-8', icon: 'Waves', text: 'Outdoor Swimming Pool' },
      { id: 'tr-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'tr-10', icon: 'Fish', text: 'Trout Fishing on Site' },
      { id: 'tr-11', icon: 'BedDouble', text: '73 Total Guest Rooms' },
      { id: 'tr-12', icon: 'Car', text: 'Free On-Site Private Parking' },
    ],
    'amenities': [
      { id: 'tr-a1', icon: 'Waves', text: 'Outdoor Swimming Pool' },
      { id: 'tr-a2', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'tr-a3', icon: 'Utensils', text: 'Beck Restaurant & Hare and Hound Bar' },
      { id: 'tr-a4', icon: 'Golf', text: 'On-site Golf Course' },
      { id: 'tr-a5', icon: 'Scissors', text: 'Luxury Spa Treatments' },
      { id: 'tr-a6', icon: 'Car', text: 'Free Private Parking' },
    ],
    'accommodations': [
      { id: 'tr-r1', icon: 'BedSingle', text: 'Mountain View Rooms' },
      { id: 'tr-r2', icon: 'BedDouble', text: 'Lake View Suites' },
      { id: 'tr-r3', icon: 'BedDouble', text: '73 Total Guest Rooms' },
    ],
    'activities': [
      { id: 'tr-s1', icon: 'PawPrint', text: 'Horseback Riding' },
      { id: 'tr-s2', icon: 'Fish', text: 'Trout Fishing', fullSpan: true },
    ],
  },
};

export const elephantHillsResortData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'golf', label: 'GOLF & SPORTS' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'eh-1', icon: 'Bus', text: '4km to Victoria Falls Entrance' },
      { id: 'eh-2', icon: 'MapPin', text: 'Set on a Hill Overlooking the Zambezi' },
      { id: 'eh-3', icon: 'Bus', text: 'Complimentary Hourly Shuttle' },
      { id: 'eh-4', icon: 'Golf', text: '18-Hole Gary Player Golf Course' },
      { id: 'eh-5', icon: 'Utensils', text: '4 Restaurants & 3 Bars' },
      { id: 'eh-6', icon: 'Waves', text: 'Large Swimming Pool' },
      { id: 'eh-7', icon: 'Dumbbell', text: 'Gym, Squash & Tennis Courts' },
      { id: 'eh-8', icon: 'Briefcase', text: 'Conference Facilities for up to 500 Guests' },
      { id: 'eh-9', icon: 'MapPin', text: 'River or Golf Course Views' },
      { id: 'eh-10', icon: 'Scissors', text: 'On-site Spa & Beauty Salon' },
      { id: 'eh-11', icon: 'BedDouble', text: '276 Total Rooms & Suites' },
      { id: 'eh-12', icon: 'PawPrint', text: 'Wildlife Roaming the Fairways' },
    ],
    'amenities': [
      { id: 'eh-a1', icon: 'Waves', text: 'Large Swimming Pool' },
      { id: 'eh-a2', icon: 'Dumbbell', text: 'Gym, Squash & Tennis Courts' },
      { id: 'eh-a3', icon: 'Utensils', text: '4 Restaurants & 3 Bars' },
      { id: 'eh-a4', icon: 'Scissors', text: 'On-site Spa & Beauty Salon' },
      { id: 'eh-a5', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'eh-a6', icon: 'Briefcase', text: 'Conference Facilities' },
    ],
    'accommodations': [
      { id: 'eh-r1', icon: 'BedSingle', text: 'Luxury Rooms' },
      { id: 'eh-r2', icon: 'BedDouble', text: 'Suites & Villas' },
      { id: 'eh-r3', icon: 'BedDouble', text: '276 Total Rooms & Suites' },
    ],
    'golf': [
      { id: 'eh-g1', icon: 'Golf', text: '18-Hole Gary Player Course' },
      { id: 'eh-g2', icon: 'PawPrint', text: 'Wildlife on the Fairways', fullSpan: true },
    ],
  },
};

export const mbanoManorData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'experiences', label: 'EXPERIENCES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'mb-1', icon: 'Bus', text: '4.6km to Victoria Falls Entrance' },
      { id: 'mb-2', icon: 'Trees', text: '5-Star Eco-Luxury Retreat' },
      { id: 'mb-3', icon: 'Trees', text: 'Set in an Ancient Teak Forest' },
      { id: 'mb-4', icon: 'Scissors', text: 'Spa & Wellness Facilities' },
      { id: 'mb-5', icon: 'Utensils', text: 'On-site Restaurant & Bar' },
      { id: 'mb-6', icon: 'Bathtub', text: 'Classic Claw Baths & Outdoor Showers' },
      { id: 'mb-7', icon: 'Waves', text: 'Year-Round Outdoor Swimming Pool' },
      { id: 'mb-8', icon: 'Coffee', text: 'In-Suite Coffee Machine & Minibar' },
      { id: 'mb-9', icon: 'MapPin', text: 'Wraparound Terraces & Courtyards' },
      { id: 'mb-10', icon: 'Wifi', text: 'Complimentary In-Room Wi-Fi' },
      { id: 'mb-11', icon: 'BedDouble', text: '18 Luxury Suites & 1 Forest Villa' },
      { id: 'mb-12', icon: 'Map', text: 'Dedicated Tour & Ticket Desk' },
    ],
    'amenities': [
      { id: 'mb-a1', icon: 'Waves', text: 'Year-Round Outdoor Swimming Pool' },
      { id: 'mb-a2', icon: 'Scissors', text: 'Spa & Wellness Facilities' },
      { id: 'mb-a3', icon: 'Utensils', text: 'On-site Restaurant & Bar' },
      { id: 'mb-a4', icon: 'Wifi', text: 'Complimentary In-Room Wi-Fi' },
      { id: 'mb-a5', icon: 'Coffee', text: 'In-Suite Coffee Machine & Minibar' },
      { id: 'mb-a6', icon: 'Map', text: 'Dedicated Tour & Ticket Desk' },
    ],
    'accommodations': [
      { id: 'mb-r1', icon: 'BedSingle', text: 'Luxury Suites' },
      { id: 'mb-r2', icon: 'Home', text: 'Forest Villa' },
      { id: 'mb-r3', icon: 'BedDouble', text: '18 Luxury Suites & 1 Forest Villa' },
    ],
    'experiences': [
      { id: 'mb-e1', icon: 'PawPrint', text: 'Guided Nature Walks' },
      { id: 'mb-e2', icon: 'Trees', text: 'Forest Experiences', fullSpan: true },
    ],
  },
};

export const shearwaterExplorerVillageData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'adventure', label: 'ADVENTURE HUB' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'sev-1', icon: 'Footprints', text: '10-Minute Walk to Victoria Falls' },
      { id: 'sev-2', icon: 'Shopping', text: 'Adjacent to Elephant Walk Village' },
      { id: 'sev-3', icon: 'Map', text: 'On-Site Adventure Booking Desk' },
      { id: 'sev-4', icon: 'Flame', text: 'Nightly Campfire & Entertainment' },
      { id: 'sev-5', icon: 'Utensils', text: 'On-site Restaurant & Lively Bar' },
      { id: 'sev-6', icon: 'Waves', text: 'Large Swimming Pool & Sun Deck' },
      { id: 'sev-7', icon: 'Tent', text: 'Glamping Tents & Camping Options' },
      { id: 'sev-8', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'sev-9', icon: 'Wind', text: 'Air-Conditioned Rooms & Chalets' },
      { id: 'sev-10', icon: 'Car', text: 'Airport & Activity Transfers Available' },
      { id: 'sev-11', icon: 'BedDouble', text: '96 Standard & Deluxe Rooms' },
      { id: 'sev-12', icon: 'Users', text: 'Vibrant Family-Friendly Environment' },
    ],
    'amenities': [
      { id: 'sev-a1', icon: 'Waves', text: 'Large Swimming Pool & Sun Deck' },
      { id: 'sev-a2', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'sev-a3', icon: 'Utensils', text: 'On-site Restaurant & Bar' },
      { id: 'sev-a4', icon: 'Wind', text: 'Air-Conditioned Rooms & Chalets' },
      { id: 'sev-a5', icon: 'Tent', text: 'Glamping Tents & Camping' },
      { id: 'sev-a6', icon: 'Car', text: 'Airport & Activity Transfers' },
    ],
    'accommodations': [
      { id: 'sev-r1', icon: 'BedSingle', text: 'Standard Rooms' },
      { id: 'sev-r2', icon: 'BedDouble', text: 'Deluxe Rooms' },
      { id: 'sev-r3', icon: 'Tent', text: 'Glamping Tents' },
      { id: 'sev-r4', icon: 'BedDouble', text: '96 Total Rooms' },
    ],
    'adventure': [
      { id: 'sev-ad1', icon: 'Map', text: 'Adventure Booking Desk' },
      { id: 'sev-ad2', icon: 'PawPrint', text: 'Wildlife Excursions', fullSpan: true },
    ],
  },
};

export const dzimbahweGuestLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'dining', label: 'DINING' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'dz-1', icon: 'Bus', text: '3km to the mighty Victoria Falls' },
      { id: 'dz-2', icon: 'Trees', text: 'Located in a peaceful area near the game corridor' },
      { id: 'dz-3', icon: 'Car', text: 'Secure free parking & airport transfers' },
      { id: 'dz-4', icon: 'Waves', text: 'Two outdoor swimming pools' },
      { id: 'dz-5', icon: 'Utensils', text: 'Gazebo restaurant & bar/lounge' },
      { id: 'dz-6', icon: 'Coffee', text: 'Bed and breakfast & self-catering options' },
      { id: 'dz-7', icon: 'Users', text: 'Family suites & 2-bedroom apartments available' },
      { id: 'dz-8', icon: 'Flame', text: 'Garden terrace & BBQ facilities' },
      { id: 'dz-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'dz-10', icon: 'Map', text: 'Activity bookings & tour assistance' },
      { id: 'dz-11', icon: 'Wind', text: 'Air-conditioned rooms with private bathrooms' },
      { id: 'dz-12', icon: 'BedDouble', text: 'Range of double, twin, king & triple rooms' },
    ],
    'amenities': [
      { id: 'dz-a1', icon: 'Waves', text: 'Two outdoor swimming pools' },
      { id: 'dz-a2', icon: 'Car', text: 'Secure free parking' },
      { id: 'dz-a3', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'dz-a4', icon: 'Wind', text: 'Air-conditioned rooms' },
      { id: 'dz-a5', icon: 'Utensils', text: 'Gazebo restaurant & bar/lounge' },
      { id: 'dz-a6', icon: 'Map', text: 'Activity bookings & tour assistance' },
    ],
    'accommodations': [
      { id: 'dz-r1', icon: 'BedSingle', text: 'Double Rooms' },
      { id: 'dz-r2', icon: 'BedDouble', text: 'Twin, King & Triple Rooms' },
      { id: 'dz-r3', icon: 'Users', text: 'Family Suites' },
      { id: 'dz-r4', icon: 'Home', text: '2-Bedroom Apartments' },
    ],
    'dining': [
      { id: 'dz-d1', icon: 'Utensils', text: 'Gazebo Restaurant & Bar/Lounge' },
      { id: 'dz-d2', icon: 'Coffee', text: 'Bed & Breakfast & Self-Catering', fullSpan: true },
    ],
  },
};

export const chunduIslandData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'activities', label: 'ISLAND ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'ci-1', icon: 'Sailboat', text: 'Access via Scenic Boat Transfer' },
      { id: 'ci-2', icon: 'Trees', text: 'Private Island in the Zambezi River' },
      { id: 'ci-3', icon: 'Map', text: '21km Upstream from Victoria Falls' },
      { id: 'ci-4', icon: 'Car', text: 'Game Drives in Zambezi National Park' },
      { id: 'ci-5', icon: 'Utensils', text: 'Open-Air Dining & Evening Boma' },
      { id: 'ci-6', icon: 'Waves', text: 'Swimming Pool with River Views' },
      { id: 'ci-7', icon: 'Sailboat', text: 'River Canoeing & Sunset Cruises' },
      { id: 'ci-8', icon: 'Fish', text: 'Catch-and-Release Fishing' },
      { id: 'ci-9', icon: 'Tent', text: 'Luxury Safari Tents on Teak Decks' },
      { id: 'ci-10', icon: 'Bathtub', text: 'En-Suite Bathrooms & Outdoor Showers' },
      { id: 'ci-11', icon: 'Users', text: '2 Dedicated Family Suites' },
      { id: 'ci-12', icon: 'Utensils', text: 'Island Bar & Lounge Area' },
      { id: 'ci-13', icon: 'BedDouble', text: '6 River-View Suites' },
      { id: 'ci-14', icon: 'Leaf', text: 'Guided Bush Walks' },
    ],
    'amenities': [
      { id: 'ci-a1', icon: 'Waves', text: 'Swimming Pool with River Views' },
      { id: 'ci-a2', icon: 'Sailboat', text: 'River Canoeing & Sunset Cruises' },
      { id: 'ci-a3', icon: 'Fish', text: 'Catch-and-Release Fishing' },
      { id: 'ci-a4', icon: 'Utensils', text: 'Open-Air Dining' },
      { id: 'ci-a5', icon: 'Bathtub', text: 'En-Suite & Outdoor Showers' },
      { id: 'ci-a6', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
    ],
    'accommodations': [
      { id: 'ci-r1', icon: 'Tent', text: 'Luxury Safari Tents' },
      { id: 'ci-r2', icon: 'BedDouble', text: '6 River-View Suites' },
      { id: 'ci-r3', icon: 'Users', text: '2 Family Suites' },
    ],
    'activities': [
      { id: 'ci-s1', icon: 'Sailboat', text: 'River Canoeing' },
      { id: 'ci-s2', icon: 'Fish', text: 'Catch-and-Release Fishing', fullSpan: true },
    ],
  },
};

export const matetsiVictoriaFallsData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safari', label: 'SAFARI ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'mt-1', icon: 'Bus', text: '40km Upstream from Victoria Falls' },
      { id: 'mt-2', icon: 'Trees', text: '15km of Private Zambezi River Frontage' },
      { id: 'mt-3', icon: 'Car', text: 'Set in a 55,000-Hectare Private Reserve' },
      { id: 'mt-4', icon: 'PawPrint', text: 'Exclusive Land & Water-Based Safaris' },
      { id: 'mt-5', icon: 'Utensils', text: 'Interactive Kitchen & Boma Dining' },
      { id: 'mt-6', icon: 'Sailboat', text: 'River Cruises & Canoeing' },
      { id: 'mt-7', icon: 'Waves', text: '20m Lap Pool & Private Plunge Pools' },
      { id: 'mt-8', icon: 'Scissors', text: 'Massage Sala & Fitness Studio' },
      { id: 'mt-9', icon: 'Bathtub', text: 'Indoor & Outdoor Rain Showers' },
      { id: 'mt-10', icon: 'Wine', text: 'Private Wine Cellar' },
      { id: 'mt-11', icon: 'BedDouble', text: '18 Suites & 1 Private Villa' },
      { id: 'mt-12', icon: 'Users', text: '4-Bedroom Exclusive-Use River House' },
    ],
    'amenities': [
      { id: 'mt-a1', icon: 'Waves', text: '20m Lap Pool & Private Plunge Pools' },
      { id: 'mt-a2', icon: 'Scissors', text: 'Massage Sala & Fitness Studio' },
      { id: 'mt-a3', icon: 'Utensils', text: 'Interactive Kitchen & Boma Dining' },
      { id: 'mt-a4', icon: 'Sailboat', text: 'River Cruises & Canoeing' },
      { id: 'mt-a5', icon: 'Bathtub', text: 'Indoor & Outdoor Rain Showers' },
      { id: 'mt-a6', icon: 'Wine', text: 'Private Wine Cellar' },
    ],
    'accommodations': [
      { id: 'mt-r1', icon: 'BedSingle', text: 'Luxury Suites' },
      { id: 'mt-r2', icon: 'BedDouble', text: '18 Total Suites' },
      { id: 'mt-r3', icon: 'Home', text: 'Private Villa' },
    ],
    'safari': [
      { id: 'mt-s1', icon: 'PawPrint', text: 'Land-Based Safaris' },
      { id: 'mt-s2', icon: 'Sailboat', text: 'Water-Based Safaris', fullSpan: true },
    ],
  },
};

export const wallowLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'experiences', label: 'EXPERIENCES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'wl-1', icon: 'Car', text: '20 Minutes from Victoria Falls' },
      { id: 'wl-2', icon: 'Waves', text: 'Overlooks the Masuwe River' },
      { id: 'wl-3', icon: 'PawPrint', text: 'Set in the Wild Horizons Elephant Sanctuary' },
      { id: 'wl-4', icon: 'Map', text: 'Tour of the Falls & Elephant Encounter Included' },
      { id: 'wl-5', icon: 'Utensils', text: 'Elevated Open-Air Dining & Bar' },
      { id: 'wl-6', icon: 'Waves', text: 'Swimming Pool with River Views' },
      { id: 'wl-7', icon: 'Bathtub', text: 'En-Suite with Indoor & Outdoor Showers' },
      { id: 'wl-8', icon: 'Flame', text: 'Sunken Fire Pit for Evening Drinks' },
      { id: 'wl-9', icon: 'Tent', text: 'Luxury Canvas Tented Suites' },
      { id: 'wl-10', icon: 'MapPin', text: 'Private Viewing Decks' },
      { id: 'wl-11', icon: 'BedDouble', text: '16 Tented Suites' },
      { id: 'wl-12', icon: 'Wind', text: 'Air-Conditioned Accommodations' },
    ],
    'amenities': [
      { id: 'wl-a1', icon: 'Waves', text: 'Swimming Pool with River Views' },
      { id: 'wl-a2', icon: 'Flame', text: 'Sunken Fire Pit' },
      { id: 'wl-a3', icon: 'Utensils', text: 'Elevated Open-Air Dining & Bar' },
      { id: 'wl-a4', icon: 'Scissors', text: 'Spa Treatments' },
      { id: 'wl-a5', icon: 'Wind', text: 'Air-Conditioned Accommodations' },
      { id: 'wl-a6', icon: 'PawPrint', text: 'Elephant Sanctuary Access' },
    ],
    'accommodations': [
      { id: 'wl-r1', icon: 'Tent', text: 'Luxury Canvas Tented Suites' },
      { id: 'wl-r2', icon: 'BedDouble', text: '16 Total Suites' },
      { id: 'wl-r3', icon: 'Wind', text: 'Air-Conditioned Accommodations' },
    ],
    'experiences': [
      { id: 'wl-x1', icon: 'PawPrint', text: 'Elephant Encounter' },
      { id: 'wl-x2', icon: 'Map', text: 'Tour of the Falls', fullSpan: true },
    ],
  },
};

export const lokuthulaLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'boma', label: 'THE BOMA' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'lk-1', icon: 'Bus', text: '4km to Victoria Falls Entrance' },
      { id: 'lk-2', icon: 'Trees', text: 'Set in Tranquil Indigenous Gardens' },
      { id: 'lk-3', icon: 'Bus', text: 'Complimentary Town Shuttle' },
      { id: 'lk-4', icon: 'PawPrint', text: 'Warthogs & Bushbuck Roaming the Grounds' },
      { id: 'lk-5', icon: 'Home', text: 'Rustic Self-Catering Thatched Lodges' },
      { id: 'lk-6', icon: 'Utensils', text: 'Access to The Boma & Safari Lodge Dining' },
      { id: 'lk-7', icon: 'Users', text: 'Ideal for Families & Groups' },
      { id: 'lk-8', icon: 'Waves', text: 'Three-Tiered Swimming Pool & Children\'s Pool' },
      { id: 'lk-9', icon: 'Wind', text: 'Air-Conditioned Bedrooms' },
      { id: 'lk-10', icon: 'Flame', text: 'Private Patio with Braai/BBQ Facilities' },
      { id: 'lk-11', icon: 'BedDouble', text: '37 Two & Three-Bedroom Lodges' },
      { id: 'lk-12', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
    ],
    'amenities': [
      { id: 'lk-a1', icon: 'Waves', text: 'Three-Tiered Swimming Pool & Children\'s Pool' },
      { id: 'lk-a2', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'lk-a3', icon: 'Wind', text: 'Air-Conditioned Bedrooms' },
      { id: 'lk-a4', icon: 'Home', text: 'Self-Catering Lodges' },
      { id: 'lk-a5', icon: 'Flame', text: 'Braai/BBQ Facilities' },
      { id: 'lk-a6', icon: 'Users', text: 'Family & Group Friendly' },
    ],
    'accommodations': [
      { id: 'lk-r1', icon: 'BedSingle', text: 'Two-Bedroom Lodges' },
      { id: 'lk-r2', icon: 'BedDouble', text: 'Three-Bedroom Lodges' },
      { id: 'lk-r3', icon: 'BedDouble', text: '37 Total Lodges' },
    ],
    'boma': [
      { id: 'lk-b1', icon: 'Utensils', text: 'The Boma Restaurant Experience' },
      { id: 'lk-b2', icon: 'Flame', text: 'Traditional African Boma Dinner', fullSpan: true },
    ],
  },
};

export const rainbowHotelData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'conferences', label: 'CONFERENCES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'rh-1', icon: 'Bus', text: '2km to Victoria Falls' },
      { id: 'rh-2', icon: 'Camera', text: 'Panoramic Rooftop Viewing Deck' },
      { id: 'rh-3', icon: 'Footprints', text: '500m to Town Centre' },
      { id: 'rh-4', icon: 'Utensils', text: 'Swim-Up Pool Bar' },
      { id: 'rh-5', icon: 'Utensils', text: 'Simujinga Restaurant & The Kraal' },
      { id: 'rh-6', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'rh-7', icon: 'MapPin', text: 'Enclosed Balcony in Every Room' },
      { id: 'rh-8', icon: 'Map', text: 'Dedicated In-House Tour Desk' },
      { id: 'rh-9', icon: 'Wind', text: 'Air-Conditioned with Mosquito Nets' },
      { id: 'rh-10', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'rh-11', icon: 'BedDouble', text: '88 Total Rooms & Suites' },
      { id: 'rh-12', icon: 'Briefcase', text: 'Two Modern Conference Venues' },
    ],
    'amenities': [
      { id: 'rh-a1', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'rh-a2', icon: 'Utensils', text: 'Swim-Up Pool Bar' },
      { id: 'rh-a3', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'rh-a4', icon: 'Wind', text: 'Air-Conditioned Rooms' },
      { id: 'rh-a5', icon: 'Car', text: 'Secure Parking' },
      { id: 'rh-a6', icon: 'Camera', text: 'Panoramic Rooftop Viewing Deck' },
    ],
    'accommodations': [
      { id: 'rh-r1', icon: 'BedSingle', text: 'Standard Rooms' },
      { id: 'rh-r2', icon: 'BedDouble', text: 'Suites with Balconies' },
      { id: 'rh-r3', icon: 'BedDouble', text: '88 Total Rooms & Suites' },
    ],
    'conferences': [
      { id: 'rh-c1', icon: 'Briefcase', text: 'Two Modern Conference Venues' },
        { id: 'rh-c2', icon: 'Users', text: 'Up to 500 Guests Capacity', fullSpan: true },
    ],
  },
};

export const spurwingIslandData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'activities', label: 'ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'sp-1', icon: 'Sailboat', text: '40-Minute Boat Transfer from Kariba' },
      { id: 'sp-2', icon: 'Water', text: 'Set on an Island in Lake Kariba' },
      { id: 'sp-3', icon: 'Fish', text: 'Excellent Tiger & Bream Fishing' },
      { id: 'sp-4', icon: 'Trees', text: 'Borders Matusadona National Park' },
      { id: 'sp-5', icon: 'Utensils', text: 'Open-Air Dining & Scenic Bar' },
      { id: 'sp-6', icon: 'Waves', text: 'Swimming Pool Overlooking the Lake' },
      { id: 'sp-7', icon: 'Car', text: 'Game Drives, Walks & Boat Safaris' },
      { id: 'sp-8', icon: 'Bird', text: 'Prolific Birdlife & Sanyati Gorge Trips' },
      { id: 'sp-9', icon: 'Home', text: 'Mix of Chalets, Cabins & Safari Tents' },
      { id: 'sp-10', icon: 'Users', text: 'Relaxed, Family-Friendly Atmosphere' },
      { id: 'sp-11', icon: 'BedDouble', text: '20 Total En-Suite Units' },
      { id: 'sp-12', icon: 'Fan', text: 'Ceiling Fans & Mosquito Nets' },
    ],
    'amenities': [
      { id: 'sp-a1', icon: 'Waves', text: 'Swimming Pool Overlooking the Lake' },
      { id: 'sp-a2', icon: 'Fan', text: 'Ceiling Fans & Mosquito Nets' },
      { id: 'sp-a3', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'sp-a4', icon: 'Utensils', text: 'Open-Air Dining & Scenic Bar' },
      { id: 'sp-a5', icon: 'Users', text: 'Family-Friendly Atmosphere' },
      { id: 'sp-a6', icon: 'Fish', text: 'Fishing Excursions' },
    ],
    'accommodations': [
      { id: 'sp-r1', icon: 'BedSingle', text: 'Chalets & Cabins' },
      { id: 'sp-r2', icon: 'Tent', text: 'Safari Tents' },
      { id: 'sp-r3', icon: 'BedDouble', text: '20 Total En-Suite Units' },
    ],
    'activities': [
      { id: 'sp-s1', icon: 'Car', text: 'Game Drives & Walks' },
      { id: 'sp-s2', icon: 'Fish', text: 'Tiger & Bream Fishing', fullSpan: true },
    ],
  },
};

export const bumiHillsResortData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safari', label: 'SAFARI ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'bh-1', icon: 'Plane', text: 'Access via Private Airstrip or Boat' },
      { id: 'bh-2', icon: 'Water', text: 'Panoramic Views of Lake Kariba' },
      { id: 'bh-3', icon: 'Fish', text: 'Catch-and-Release Tiger Fishing' },
      { id: 'bh-4', icon: 'Sailboat', text: 'Boat Safaris & Sunset Cruises' },
      { id: 'bh-5', icon: 'Utensils', text: 'Dining Deck with Lake Views' },
      { id: 'bh-6', icon: 'Waves', text: 'Iconic Infinity Pool' },
      { id: 'bh-7', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'bh-8', icon: 'Scissors', text: 'Spa & Wellness Centre' },
      { id: 'bh-9', icon: 'MapPin', text: 'Private Viewing Decks' },
      { id: 'bh-10', icon: 'Car', text: 'Game Drives & Walking Safaris' },
      { id: 'bh-11', icon: 'BedSingle', text: '10 Premium Lakeview Suites' },
      { id: 'bh-12', icon: 'Home', text: '1 Private 2-Bedroom Baobab Villa' },
    ],
    'amenities': [
      { id: 'bh-a1', icon: 'Waves', text: 'Iconic Infinity Pool' },
      { id: 'bh-a2', icon: 'Scissors', text: 'Spa & Wellness Centre' },
      { id: 'bh-a3', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'bh-a4', icon: 'Utensils', text: 'Dining Deck with Lake Views' },
      { id: 'bh-a5', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'bh-a6', icon: 'Plane', text: 'Private Airstrip Access' },
    ],
    'accommodations': [
      { id: 'bh-r1', icon: 'BedSingle', text: 'Lakeview Suites' },
      { id: 'bh-r2', icon: 'Home', text: 'Baobab Villa' },
      { id: 'bh-r3', icon: 'BedSingle', text: '10 Premium Lakeview Suites' },
    ],
    'safari': [
      { id: 'bh-s1', icon: 'Car', text: 'Game Drives & Walking Safaris' },
      { id: 'bh-s2', icon: 'Sailboat', text: 'Boat Safaris & Sunset Cruises', fullSpan: true },
    ],
  },
};

export const caribbeanBayData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'activities', label: 'ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'cb-1', icon: 'Water', text: 'Set on the Shores of Lake Kariba' },
      { id: 'cb-2', icon: 'Bus', text: '3km from Kariba Dam Wall' },
      { id: 'cb-3', icon: 'Map', text: 'Mediterranean Sardinian Architecture' },
      { id: 'cb-4', icon: 'Sailboat', text: 'Sunset Cruises & Boat Safaris' },
      { id: 'cb-5', icon: 'Utensils', text: 'Open-Plan Terrace Restaurant & Bars' },
      { id: 'cb-6', icon: 'Waves', text: '3 Outdoor Pools & Waterslide' },
      { id: 'cb-7', icon: 'Users', text: 'Family-Friendly with Playground' },
      { id: 'cb-8', icon: 'Dumbbell', text: '24-Hour Fitness Centre' },
      { id: 'cb-9', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'cb-10', icon: 'Briefcase', text: 'Conference Venues for up to 340 Guests' },
      { id: 'cb-11', icon: 'BedDouble', text: '83 Total Rooms & Suites' },
      { id: 'cb-12', icon: 'Wind', text: 'Air-Conditioned with Private Balconies' },
    ],
    'amenities': [
      { id: 'cb-a1', icon: 'Waves', text: '3 Outdoor Pools & Waterslide' },
      { id: 'cb-a2', icon: 'Dumbbell', text: '24-Hour Fitness Centre' },
      { id: 'cb-a3', icon: 'Wifi', text: 'Complimentary Wi-Fi' },
      { id: 'cb-a4', icon: 'Utensils', text: 'Open-Plan Terrace Restaurant' },
      { id: 'cb-a5', icon: 'Users', text: 'Family-Friendly with Playground' },
      { id: 'cb-a6', icon: 'Car', text: 'Free Parking' },
    ],
    'accommodations': [
      { id: 'cb-r1', icon: 'BedSingle', text: 'Standard Rooms' },
      { id: 'cb-r2', icon: 'BedDouble', text: 'Suites with Balconies' },
      { id: 'cb-r3', icon: 'BedDouble', text: '83 Total Rooms & Suites' },
    ],
    'activities': [
      { id: 'cb-s1', icon: 'Sailboat', text: 'Sunset Cruises' },
      { id: 'cb-s2', icon: 'Fish', text: 'Boat Safaris', fullSpan: true },
    ],
  },
};

export const hwangeSafariLodgeData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safari', label: 'SAFARI ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'hw-1', icon: 'Car', text: '2-Hour Drive from Victoria Falls' },
      { id: 'hw-2', icon: 'Trees', text: 'Borders Hwange National Park' },
      { id: 'hw-3', icon: 'PawPrint', text: 'Floodlit Wildlife Waterhole' },
      { id: 'hw-4', icon: 'Binoculars', text: 'On-Site Game Viewing Deck' },
      { id: 'hw-5', icon: 'Utensils', text: 'Two Restaurants & Two Bars' },
      { id: 'hw-6', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'hw-7', icon: 'Car', text: 'Day & Night Game Drives' },
      { id: 'hw-8', icon: 'Briefcase', text: 'Conference Facilities' },
      { id: 'hw-9', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'hw-10', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'hw-11', icon: 'BedDouble', text: '100 Total Rooms & Suites' },
      { id: 'hw-12', icon: 'Flame', text: 'Bush Dinners & Bonfires' },
    ],
    'amenities': [
      { id: 'hw-a1', icon: 'Waves', text: 'Large Outdoor Swimming Pool' },
      { id: 'hw-a2', icon: 'Wind', text: 'Air-Conditioned En-Suite Rooms' },
      { id: 'hw-a3', icon: 'Wifi', text: 'Complimentary High-Speed Wi-Fi' },
      { id: 'hw-a4', icon: 'Utensils', text: 'Two Restaurants & Two Bars' },
      { id: 'hw-a5', icon: 'Briefcase', text: 'Conference Facilities' },
      { id: 'hw-a6', icon: 'Flame', text: 'Bush Dinners & Bonfires' },
    ],
    'accommodations': [
      { id: 'hw-r1', icon: 'BedSingle', text: 'Standard Rooms' },
      { id: 'hw-r2', icon: 'BedDouble', text: 'Deluxe Rooms & Suites' },
      { id: 'hw-r3', icon: 'BedDouble', text: '100 Total Rooms & Suites' },
    ],
    'safari': [
      { id: 'hw-s1', icon: 'Car', text: 'Day & Night Game Drives' },
      { id: 'hw-s2', icon: 'PawPrint', text: 'Floodlit Waterhole Viewing', fullSpan: true },
    ],
  },
};

export const fothergillIslandData: HotelData = {
  tabs: [
    { id: 'need-to-know', label: 'NEED TO KNOW' },
    { id: 'amenities', label: 'AMENITIES' },
    { id: 'accommodations', label: 'ACCOMMODATIONS' },
    { id: 'safari', label: 'SAFARI ACTIVITIES' },
  ],
  tabsData: {
    'need-to-know': [
      { id: 'fi-1', icon: 'Sailboat', text: '45-Minute Boat Transfer from Kariba' },
      { id: 'fi-2', icon: 'Water', text: 'Set on the Shores of Lake Kariba' },
      { id: 'fi-3', icon: 'Car', text: 'Game Drives in Matusadona National Park' },
      { id: 'fi-4', icon: 'Fish', text: 'Tiger Fishing and Fly Fishing' },
      { id: 'fi-5', icon: 'Utensils', text: 'Fully Inclusive Dining' },
      { id: 'fi-6', icon: 'Waves', text: 'Main Swimming Pool & Private Plunge Pools' },
      { id: 'fi-7', icon: 'Wifi', text: 'Wi-Fi in Communal Areas' },
      { id: 'fi-8', icon: 'Dumbbell', text: 'Lakeside Gym' },
      { id: 'fi-9', icon: 'Users', text: '2-Bedroom Family Suites Available' },
      { id: 'fi-10', icon: 'Map', text: 'Dedicated Private Safari Guide & Vehicle' },
      { id: 'fi-11', icon: 'BedDouble', text: '7 Lake Suites & 3 Island Suites' },
      { id: 'fi-12', icon: 'Trees', text: 'Conservation Partnership with African Parks' },
    ],
    'amenities': [
      { id: 'fi-a1', icon: 'Waves', text: 'Main Swimming Pool & Private Plunge Pools' },
      { id: 'fi-a2', icon: 'Dumbbell', text: 'Lakeside Gym' },
      { id: 'fi-a3', icon: 'Wifi', text: 'Wi-Fi in Communal Areas' },
      { id: 'fi-a4', icon: 'Utensils', text: 'Fully Inclusive Dining' },
      { id: 'fi-a5', icon: 'Fish', text: 'Tiger & Fly Fishing' },
      { id: 'fi-a6', icon: 'Users', text: 'Family Suites Available' },
    ],
    'accommodations': [
      { id: 'fi-r1', icon: 'BedSingle', text: 'Lake Suites' },
      { id: 'fi-r2', icon: 'BedDouble', text: 'Island Suites' },
      { id: 'fi-r3', icon: 'Users', text: 'Family Suites' },
    ],
    'safari': [
      { id: 'fi-s1', icon: 'Car', text: 'Game Drives in Matusadona' },
      { id: 'fi-s2', icon: 'Fish', text: 'Tiger Fishing Excursions', fullSpan: true },
    ],
  },
};

const hotelDataMap: Record<number, HotelData> = {
  1: palmRiverHotelData,
  2: victoriaFallsSafariLodgeData,
  3: ilalaLodgeData,
  4: pamushaLodgeData,
  5: victoriaFallsPioneerCampData,
  6: troutbeckResortData,
  7: elephantHillsResortData,
  8: mbanoManorData,
  9: shearwaterExplorerVillageData,
  10: dzimbahweGuestLodgeData,
  11: oldDriftLodgeData,
  12: chunduIslandData,
  13: matetsiVictoriaFallsData,
  14: victoriaFallsHotelData,
  15: batonkaHotelData,
  16: wallowLodgeData,
  17: lokuthulaLodgeData,
  18: rainbowHotelData,
  19: fothergillIslandData,
  20: spurwingIslandData,
  21: bumiHillsResortData,
  22: caribbeanBayData,
  23: hwangeSafariLodgeData,
};

export function getHotelData(id: number): HotelData {
  if (id in hotelDataMap) return hotelDataMap[id];
  return defaultHotelData;
}
