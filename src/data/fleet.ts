export type FleetCategory = "All" | "SUVs" | "Utes" | "Sedans" | "People movers";

export interface FleetCar {
  id: string;
  name: string;
  plate?: string;
  description: string;
  image: string;
  category: FleetCategory;
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
  },
  {
    id: "2",
    name: "Black Hilux 2021",
    plate: "Baz-333",
    description: "Proven reliability and tough performance for work or adventure.",
    image: `${CARS_DIR}/2.jpeg`,
    category: "Utes",
  },
  {
    id: "3",
    name: "Black Hilux Rococo 2023",
    plate: "BDB-650",
    description: "Refined ute with modern comfort and strong towing capacity.",
    image: `${CARS_DIR}/3.jpeg`,
    category: "Utes",
  },
  {
    id: "4",
    name: "Black Hilux 2022",
    plate: "ALS-3",
    description: "Durable and versatile for both city and outback driving.",
    image: `${CARS_DIR}/4.jpeg`,
    category: "Utes",
  },
  {
    id: "5",
    name: "Black Prado 2013 (facelifted to 2021)",
    plate: "BGX-518",
    description: "Family-friendly SUV with updated styling and dependable performance.",
    image: `${CARS_DIR}/5.jpeg`,
    category: "SUVs",
  },
  {
    id: "6",
    name: "Black JAC T9 Hunter 2025",
    plate: "BAE-364",
    description: "Latest dual-cab ute with advanced tech and bold design.",
    image: `${CARS_DIR}/6.jpeg`,
    category: "Utes",
  },
  {
    id: "7",
    name: "Black Grande 2023",
    plate: "ATU-948",
    description: "Spacious people mover with comfort for the whole group.",
    image: `${CARS_DIR}/7.jpg`,
    category: "People movers",
  },
  {
    id: "8",
    name: "White Honda Civic 2021",
    description: "Efficient and stylish sedan for everyday driving and longer trips.",
    image: `${CARS_DIR}/8.jpg`,
    category: "Sedans",
  },
];

export const FLEET_CATEGORIES: FleetCategory[] = ["All", "SUVs", "Utes", "Sedans", "People movers"];
