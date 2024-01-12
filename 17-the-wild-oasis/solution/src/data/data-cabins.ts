import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    id: "9ce3a467-8136-4e69-91dd-ccc9c34c588d",
    name: "001",
    max_capacity: 2,
    regular_price: 250,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
  },
  {
    id: "91e5548c-b6ed-435c-b276-25eb2a5d6833",
    name: "002",
    max_capacity: 2,
    regular_price: 350,
    discount: 25,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
  },
  {
    id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    name: "003",
    max_capacity: 4,
    regular_price: 300,
    discount: 0,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    id: "6a82b667-17dd-4201-bca7-ec12bb69e5c0",
    name: "004",
    max_capacity: 4,
    regular_price: 500,
    discount: 50,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    id: "c7c3fef1-dde5-4a15-a54c-d72d76bdef06",
    name: "005",
    max_capacity: 6,
    regular_price: 350,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    id: "e74b92f5-3e58-4e94-8a1a-924ef0a96ae6",
    name: "006",
    max_capacity: 6,
    regular_price: 800,
    discount: 100,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
  },
  {
    id: "1d555983-009f-414c-a6fd-23b0aa494bd9",
    name: "007",
    max_capacity: 8,
    regular_price: 600,
    discount: 100,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
  },
  {
    id: "ba9cbec5-3db3-4e51-ad3e-5b2d57d48dab",
    name: "008",
    max_capacity: 10,
    regular_price: 1400,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
  },
];
