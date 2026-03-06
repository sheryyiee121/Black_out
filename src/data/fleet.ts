export type FleetCategory = "All" | "SUVs" | "Utes" | "Sedans" | "People movers";

export interface CarSpec {
  label: string;
  value: string;
}

export interface FleetCar {
  id: string;
  name: string;
  plate?: string;
  description: string;
  image: string;
  category: FleetCategory;
  /** Short tagline under the title */
  tagline?: string;
  /** Longer description for the detail page */
  longDescription?: string;
  /** Key specs for the detail page */
  specs?: CarSpec[];
  /** Feature pills/tags for Car Features section */
  features?: string[];
  /** Rental location shown in title (e.g. "Islamabad", "Brisbane") */
  location?: string;
}

// Images from public/cars/ - 1.jpeg–6.jpeg, 7.jpg, 8.jpg
const CARS_DIR = "/cars";

export const FLEET_CARS: FleetCar[] = [
  {
    id: "1",
    name: "Black Land Cruiser ZX G Frontier",
    plate: "Bay-100",
    description: "Premium SUV with commanding presence and rugged capability for any terrain.",
    image: `${CARS_DIR}/1.jpeg`,
    category: "SUVs",
    tagline: "Commanding presence with rugged capability.",
    longDescription: "Experience a full-size SUV built for any terrain. The Land Cruiser ZX G Frontier blends robust capability with premium comfort in Islamabad. Ideal for airport handovers, family trips and city or outback adventures.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "3.3L twin-turbo V6 diesel" },
      { label: "Transmission", value: "10-speed automatic" },
      { label: "Seats", value: "7" },
      { label: "Number of Doors", value: "5" },
    ],
    features: ["Premium audio", "Reversing camera", "Parking sensors", "Climate control", "Navigation system", "Apple CarPlay", "Android Auto", "Leather trim", "Sunroof"],
    location: "Islamabad",
  },
  {
    id: "2",
    name: "Black Hilux 2021",
    plate: "Baz-333",
    description: "Proven reliability and tough performance for work or adventure.",
    image: `${CARS_DIR}/2.jpeg`,
    category: "Utes",
    tagline: "Proven reliability and tough performance.",
    longDescription: "The Toyota Hilux 2021 delivers proven reliability and tough performance in Islamabad. Perfect for work sites, weekend getaways or outback trips. Available for airport handovers and city delivery.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.8L turbo-diesel 4-cylinder" },
      { label: "Transmission", value: "6-speed automatic" },
      { label: "Seats", value: "5" },
      { label: "Number of Doors", value: "4" },
    ],
    features: ["Dual-zone climate", "Reversing camera", "Apple CarPlay", "Android Auto", "Cruise control", "Towing package", "Alloy wheels"],
    location: "Islamabad",
  },
  {
    id: "3",
    name: "Black Hilux Rococo 2023",
    plate: "BDB-650",
    description: "Refined ute with modern comfort and strong towing capacity.",
    image: `${CARS_DIR}/3.jpeg`,
    category: "Utes",
    tagline: "Refined ute with modern comfort.",
    longDescription: "The Hilux Rococo 2023 brings refined comfort and strong towing capacity to Islamabad. Modern cabin tech and durable build make it ideal for both business and leisure.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.8L turbo-diesel 4-cylinder" },
      { label: "Transmission", value: "6-speed automatic" },
      { label: "Seats", value: "5" },
      { label: "Number of Doors", value: "4" },
    ],
    features: ["Leather trim", "Premium audio", "Reversing camera", "Parking sensors", "Apple CarPlay", "Dual-zone climate", "Towing package"],
    location: "Islamabad",
  },
  {
    id: "4",
    name: "Black Hilux 2022",
    plate: "ALS-3",
    description: "Durable and versatile for both city and outback driving.",
    image: `${CARS_DIR}/4.jpeg`,
    category: "Utes",
    tagline: "Durable and versatile for any journey.",
    longDescription: "Durable and versatile, the Hilux 2022 handles city commutes and outback driving in Islamabad. Reliable, capable and ready for work or adventure.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.8L turbo-diesel 4-cylinder" },
      { label: "Transmission", value: "6-speed automatic" },
      { label: "Seats", value: "5" },
      { label: "Number of Doors", value: "4" },
    ],
    features: ["Reversing camera", "Cruise control", "Apple CarPlay", "Climate control", "Towing package"],
    location: "Islamabad",
  },
  {
    id: "5",
    name: "Black Prado 2013 (facelifted to 2021)",
    plate: "BGX-518",
    description: "Family-friendly SUV with updated styling and dependable performance.",
    image: `${CARS_DIR}/5.jpeg`,
    category: "SUVs",
    tagline: "Family-friendly SUV with dependable performance.",
    longDescription: "The Prado with 2021 facelift offers family-friendly space and dependable performance in Islamabad. Updated styling and proven reliability for airport runs, school drop-offs and weekend trips.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.8L turbo-diesel 4-cylinder" },
      { label: "Transmission", value: "6-speed automatic" },
      { label: "Seats", value: "7" },
      { label: "Number of Doors", value: "5" },
    ],
    features: ["Third-row seating", "Reversing camera", "Dual-zone climate", "Navigation", "Apple CarPlay", "Leather trim", "Alloy wheels"],
    location: "Islamabad",
  },
  {
    id: "6",
    name: "Black JAC T9 Hunter 2025",
    plate: "BAE-364",
    description: "Latest dual-cab ute with advanced tech and bold design.",
    image: `${CARS_DIR}/6.jpeg`,
    category: "Utes",
    tagline: "Advanced tech and bold design.",
    longDescription: "The JAC T9 Hunter 2025 is the latest dual-cab ute with advanced tech and bold design in Islamabad. Modern features and strong capability for work and play.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.0L turbo-diesel 4-cylinder" },
      { label: "Transmission", value: "8-speed automatic" },
      { label: "Seats", value: "5" },
      { label: "Number of Doors", value: "4" },
    ],
    features: ["Touchscreen infotainment", "Apple CarPlay", "Android Auto", "Reversing camera", "Cruise control", "Climate control", "Alloy wheels"],
    location: "Islamabad",
  },
  {
    id: "7",
    name: "Black Grande 2023",
    plate: "ATU-948",
    description: "Spacious people mover with comfort for the whole group.",
    image: `${CARS_DIR}/7.jpg`,
    category: "People movers",
    tagline: "Spacious comfort for the whole group.",
    longDescription: "The Toyota Grande 2023 offers spacious people-moving comfort in Islamabad. Ideal for family trips, group travel and airport transfers with plenty of room for passengers and luggage.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Engine Type", value: "2.5L petrol hybrid" },
      { label: "Transmission", value: "CVT automatic" },
      { label: "Seats", value: "7" },
      { label: "Number of Doors", value: "5" },
    ],
    features: ["Premium leather", "Dual sunroofs", "Rear entertainment", "Tri-zone climate", "Reversing camera", "Premium audio", "Power sliding doors"],
    location: "Islamabad",
  },
  {
    id: "8",
    name: "White Honda Civic 2021",
    description: "Efficient and stylish sedan for everyday driving and longer trips.",
    image: `${CARS_DIR}/8.jpg`,
    category: "Sedans",
    tagline: "Efficient and stylish for every drive.",
    longDescription: "The Honda Civic 2021 combines efficiency and style in Islamabad. Perfect for city driving, airport pickups and longer trips with a comfortable cabin and proven reliability.",
    specs: [
      { label: "Color", value: "White" },
      { label: "Engine Type", value: "2.0L naturally aspirated 4-cylinder" },
      { label: "Transmission", value: "CVT automatic" },
      { label: "Seats", value: "5" },
      { label: "Number of Doors", value: "4" },
    ],
    features: ["Apple CarPlay", "Android Auto", "Honda Sensing", "Climate control", "Reversing camera", "Cruise control", "Alloy wheels"],
    location: "Islamabad",
  },
];

export const FLEET_CATEGORIES: FleetCategory[] = ["All", "SUVs", "Utes", "Sedans", "People movers"];
