import Pokhara from "../assets/destinations/Pokhara.jpg";
import Kathmandu from "../assets/destinations/Kathmandu.jpg";
import Mustang from "../assets/destinations/Mustang.jpg";
import Everest from "../assets/destinations/Everest.jpg";
import Chitwan from "../assets/destinations/Chitwan.jpg";
import Annapurna from "../assets/destinations/Annapurna.jpg";
import Lumbini from "../assets/destinations/Lumbini.jpg";

export const booking = [
  {
    id: 1,
    name: "Pokhara",
    title: "Explore the Beautiful City of Pokhara",
    location: "Gandaki, Nepal",
    region: "Gandaki",
    image: Pokhara,
    category: "Nature",
    rating: 4.9,
    reviews: 1200,
    price: 4999,
    duration: "3 Days / 2 Nights",
    groupSize: 12,
    bestTime: "September - November",
    activities: ["Sightseeing", "Boating", "Hiking", "Paragliding"],

    description: [
      "Pokhara is one of Nepal's most beautiful destinations, surrounded by stunning mountains, peaceful lakes and lush green hills.",
      "Enjoy breathtaking views of the Annapurna range, explore the beautiful Phewa Lake and discover the peaceful atmosphere of this lakeside city.",
      "This tour is perfect for travelers looking for a combination of nature, adventure, relaxation and beautiful Himalayan scenery.",
    ],

    highlights: [
      "Phewa Lake",
      "Sarangkot",
      "World Peace Pagoda",
      "Davis Falls",
      "Gupteshwor Cave",
    ],

    includes: [
      "Hotel accommodation",
      "Daily breakfast",
      "Local transportation",
      "Experienced guide",
      "Sightseeing assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Lakeside Exploration",
        description:
          "Arrive in Pokhara, check into your hotel and explore the beautiful Lakeside area and Phewa Lake.",
      },
      {
        day: "Day 2",
        title: "Pokhara Sightseeing",
        description:
          "Visit Davis Falls, Gupteshwor Cave, World Peace Pagoda and enjoy beautiful views of the surrounding mountains.",
      },
      {
        day: "Day 3",
        title: "Sarangkot and Departure",
        description:
          "Enjoy the sunrise from Sarangkot before returning to Pokhara and continuing your journey.",
      },
    ],
  },

  {
    id: 2,
    name: "Kathmandu",
    title: "Discover the Cultural Heart of Nepal",
    location: "Bagmati, Nepal",
    region: "Bagmati",
    image: Kathmandu,
    category: "Culture",
    rating: 4.8,
    reviews: 950,
    price: 3200,
    duration: "2 Days / 1 Night",
    groupSize: 10,
    bestTime: "September - November",
    activities: ["Sightseeing", "Culture", "Heritage"],

    description: [
      "Kathmandu is the cultural and historical heart of Nepal, filled with ancient temples, historic monuments and vibrant local traditions.",
      "Explore UNESCO World Heritage Sites, experience the unique Newari culture and discover the spiritual side of the Kathmandu Valley.",
      "This short tour is perfect for travelers who want to experience Nepal's history, architecture and culture in a limited amount of time.",
    ],

    highlights: [
      "Swayambhunath",
      "Pashupatinath Temple",
      "Boudhanath Stupa",
      "Kathmandu Durbar Square",
    ],

    includes: [
      "Hotel accommodation",
      "Breakfast",
      "Local transportation",
      "Experienced guide",
      "Basic travel assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Kathmandu Heritage Tour",
        description:
          "Explore Swayambhunath, Kathmandu Durbar Square and Boudhanath while experiencing the cultural heritage of Kathmandu.",
      },
      {
        day: "Day 2",
        title: "Pashupatinath and Departure",
        description:
          "Visit the sacred Pashupatinath Temple and enjoy some free time before continuing your journey.",
      },
    ],
  },

  {
    id: 3,
    name: "Mustang",
    title: "Discover the Mystical Landscapes of Mustang",
    location: "Gandaki, Nepal",
    region: "Gandaki",
    image: Mustang,
    category: "Adventure",
    rating: 4.9,
    reviews: 850,
    price: 8900,
    duration: "4 Days / 3 Nights",
    groupSize: 10,
    bestTime: "March - May",
    activities: ["Trekking", "Adventure", "Sightseeing", "Photography"],

    description: [
      "Mustang is a fascinating Himalayan destination known for its dramatic landscapes, ancient villages, caves and unique Tibetan-influenced culture.",
      "Travel through the beautiful Kali Gandaki region and experience the contrast between dry mountain landscapes and snow-covered Himalayan peaks.",
      "This adventure is ideal for travelers who want to explore remote villages, ancient monasteries and the unique natural beauty of Nepal's Himalayan region.",
    ],

    highlights: [
      "Jomsom",
      "Kagbeni",
      "Marpha",
      "Muktinath",
      "Kali Gandaki Valley",
    ],

    includes: [
      "Hotel and guesthouse accommodation",
      "Breakfast",
      "Private transportation",
      "Experienced driver",
      "Local travel assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Pokhara to Jomsom",
        description:
          "Travel from Pokhara towards Jomsom while enjoying spectacular views of the Annapurna and Dhaulagiri ranges.",
      },
      {
        day: "Day 2",
        title: "Jomsom to Kagbeni",
        description:
          "Explore Jomsom and travel towards the ancient village of Kagbeni, surrounded by dramatic Himalayan landscapes.",
      },
      {
        day: "Day 3",
        title: "Kagbeni to Muktinath",
        description:
          "Visit the sacred Muktinath region and explore the unique landscapes and cultural heritage of Mustang.",
      },
      {
        day: "Day 4",
        title: "Return Journey",
        description:
          "Enjoy the scenic journey back through the Kali Gandaki Valley and return towards Pokhara.",
      },
    ],
  },

  {
    id: 4,
    name: "Everest Region",
    title: "Experience the Legendary Everest Region",
    location: "Solukhumbu, Nepal",
    region: "Solukhumbu",
    image: Everest,
    category: "Trekking",
    rating: 5.0,
    reviews: 2100,
    price: 12500,
    duration: "7 Days / 6 Nights",
    groupSize: 12,
    bestTime: "March - May",
    activities: ["Trekking", "Hiking", "Mountain Views", "Photography"],

    description: [
      "The Everest region is home to Mount Everest, the world's highest mountain, and some of the most spectacular Himalayan landscapes.",
      "Experience traditional Sherpa villages, mountain monasteries and breathtaking views of the world's highest peaks.",
      "This adventure is designed for travelers who want to experience the beauty and culture of the Everest region while enjoying an unforgettable Himalayan journey.",
    ],

    highlights: [
      "Mount Everest",
      "Namche Bazaar",
      "Tengboche Monastery",
      "Himalayan Mountain Views",
      "Sherpa Culture",
    ],

    includes: [
      "Accommodation",
      "Breakfast",
      "Experienced trekking guide",
      "Transportation",
      "Basic trekking assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in the Everest Region",
        description:
          "Begin your Himalayan adventure and travel towards the Everest region while enjoying breathtaking mountain scenery.",
      },
      {
        day: "Day 2",
        title: "Trek to Namche Bazaar",
        description:
          "Walk through beautiful mountain trails and reach Namche Bazaar, the famous gateway to Mount Everest.",
      },
      {
        day: "Day 3",
        title: "Namche Exploration",
        description:
          "Explore Namche Bazaar, experience Sherpa culture and enjoy panoramic views of the surrounding Himalayan peaks.",
      },
      {
        day: "Day 4",
        title: "Tengboche Monastery",
        description:
          "Continue through scenic Himalayan trails and visit the famous Tengboche Monastery.",
      },
      {
        day: "Day 5",
        title: "Mountain Experience",
        description:
          "Enjoy spectacular views of Everest and surrounding peaks while exploring the beautiful Himalayan landscape.",
      },
      {
        day: "Day 6",
        title: "Return Journey",
        description:
          "Begin your return journey through the scenic mountain trails.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Complete your journey and continue towards your next destination.",
      },
    ],
  },

  {
    id: 5,
    name: "Chitwan",
    title: "Wildlife Adventure in Chitwan",
    location: "Bagmati, Nepal",
    region: "Bagmati",
    image: Chitwan,
    category: "Wildlife",
    rating: 4.7,
    reviews: 780,
    price: 4250,
    duration: "3 Days / 2 Nights",
    groupSize: 10,
    bestTime: "October - March",
    activities: ["Wildlife", "Safari", "Jungle Walk", "Canoeing"],

    description: [
      "Chitwan is one of Nepal's most popular wildlife destinations, offering an exciting combination of jungle adventures, wildlife encounters and peaceful natural landscapes.",
      "Explore the national park through jungle safaris, canoe rides and guided walks while experiencing the unique biodiversity of southern Nepal.",
      "The destination is ideal for families, nature lovers and adventure seekers looking for a different experience beyond the mountains.",
    ],

    highlights: [
      "Chitwan National Park",
      "Jungle Safari",
      "Canoeing",
      "Jungle Walk",
      "Tharu Culture",
    ],

    includes: [
      "Hotel accommodation",
      "Breakfast",
      "Jungle safari",
      "Experienced local guide",
      "Transportation assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival and Jungle Experience",
        description:
          "Arrive in Chitwan, check into your accommodation and enjoy your first jungle activity.",
      },
      {
        day: "Day 2",
        title: "Wildlife Safari",
        description:
          "Enjoy a full day of jungle activities including wildlife safari, canoeing and guided jungle walks.",
      },
      {
        day: "Day 3",
        title: "Tharu Culture and Departure",
        description:
          "Experience local Tharu culture before completing the tour and continuing your journey.",
      },
    ],
  },

  {
    id: 6,
    name: "Annapurna",
    title: "Adventure Through the Annapurna Himalayas",
    location: "Gandaki, Nepal",
    region: "Gandaki",
    image: Annapurna,
    category: "Trekking",
    rating: 4.9,
    reviews: 1500,
    price: 6500,
    duration: "5 Days / 4 Nights",
    groupSize: 12,
    bestTime: "March - May",
    activities: ["Trekking", "Hiking", "Mountain Views", "Photography"],

    description: [
      "The Annapurna region offers some of the most beautiful trekking landscapes in Nepal, combining spectacular mountains with traditional villages and peaceful trails.",
      "Walk through lush forests, mountain villages and dramatic Himalayan landscapes while experiencing the natural beauty of the Annapurna range.",
      "This adventure is perfect for travelers who want to experience Himalayan trekking without committing to a very long expedition.",
    ],

    highlights: [
      "Annapurna Mountain Range",
      "Mountain Villages",
      "Himalayan Sunrise",
      "Scenic Trekking Trails",
      "Traditional Culture",
    ],

    includes: [
      "Accommodation",
      "Breakfast",
      "Trekking guide",
      "Transportation",
      "Travel assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Journey to the Annapurna Region",
        description:
          "Travel towards the Annapurna region and begin your Himalayan adventure.",
      },
      {
        day: "Day 2",
        title: "Mountain Village Trek",
        description:
          "Walk through beautiful trails surrounded by forests, traditional villages and spectacular mountain views.",
      },
      {
        day: "Day 3",
        title: "Himalayan Exploration",
        description:
          "Continue exploring the Annapurna landscape and enjoy panoramic views of the surrounding mountains.",
      },
      {
        day: "Day 4",
        title: "Sunrise and Return",
        description:
          "Enjoy an unforgettable Himalayan sunrise before beginning the return journey.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Complete the journey and return towards your next destination.",
      },
    ],
  },

  {
    id: 7,
    name: "Lumbini",
    title: "Journey to the Birthplace of Buddha",
    location: "Rupandehi, Nepal",
    region: "Rupandehi",
    image: Lumbini,
    category: "Culture",
    rating: 4.8,
    reviews: 620,
    price: 3500,
    duration: "2 Days / 1 Night",
    groupSize: 10,
    bestTime: "October - March",
    activities: ["Culture", "Sightseeing", "Heritage", "Spiritual Journey"],

    description: [
      "Lumbini is the birthplace of Gautama Buddha and one of the most important spiritual and historical destinations in Nepal.",
      "Explore peaceful monasteries, sacred gardens and important archaeological sites while learning about the history and teachings associated with Buddha.",
      "This journey offers a peaceful cultural experience for travelers interested in history, spirituality and Buddhist heritage.",
    ],

    highlights: [
      "Maya Devi Temple",
      "Sacred Garden",
      "Ashoka Pillar",
      "World Peace Pagoda",
      "International Monasteries",
    ],

    includes: [
      "Hotel accommodation",
      "Breakfast",
      "Local transportation",
      "Experienced guide",
      "Sightseeing assistance",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Lumbini Heritage Exploration",
        description:
          "Visit the Maya Devi Temple, Sacred Garden, Ashoka Pillar and several international monasteries.",
      },
      {
        day: "Day 2",
        title: "Spiritual Exploration and Departure",
        description:
          "Continue exploring the peaceful surroundings of Lumbini before completing your journey.",
      },
    ],
  },
];
