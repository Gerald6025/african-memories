export const portfolioData = [
  {
    id: "fothegirl-kariba",
    name: "Fothegirl Lodge",
    location: "Kariba",
    description: "An exceptional lakeside getaway offering breathtaking views and unparalleled hospitality in the heart of Kariba.",
    needToKnow: [
      { label: "Located in Kariba", icon: "MapPin" },
      { label: "Scenic Lake Views", icon: "Map" },
      { label: "Close to Kariba Dam", icon: "Clock" },
      { label: "Complimentary Wi-Fi", icon: "Wifi" }
    ],
    amenities: [
      "Swimming Pool",
      "Restaurant & Bar",
      "Conference Facilities",
      "Secure Parking",
      "Laundry Services"
    ],
    rooms: [
      {
        name: "Standard Room",
        description: "Comfortable and elegant rooms perfect for a relaxing stay.",
        isPremium: false,
        features: [
          "Air Conditioning",
          "En-suite Bathroom",
          "Tea & Coffee Station",
          "Mosquito Nets"
        ]
      },
      {
        name: "Executive Suite",
        description: "Premium luxury overlooking the lake.",
        isPremium: true,
        features: [
          "All Standard Features",
          "Private Balcony",
          "Mini Bar",
          "Flat Screen TV"
        ]
      }
    ]
  }
];
