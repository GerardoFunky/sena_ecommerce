import { Material } from "../types/product.types";

export const materials: Material[] = [
  {
    id: "velvet",
    name: "Velvet",
    description:
      "A soft, plush fabric with a dense pile that creates a luxurious look and feel.",
    careInstructions:
      "Vacuum regularly with a soft brush attachment. For spills, blot immediately with a clean cloth. Professional cleaning recommended for tough stains.",
    durability: "Medium",
    suitable: ["Living room", "Bedroom", "Formal spaces"],
    properties: [
      "Luxurious appearance",
      "Soft to touch",
      "Good for colder climates",
    ],
    image: "/assets/images/materials/velvet.jpg",
    samples: [
      {
        name: "Royal Blue",
        colorHex: "#2E5090",
        image: "/assets/images/materials/velvet-royal-blue.jpg",
      },
      {
        name: "Emerald Green",
        colorHex: "#0B6623",
        image: "/assets/images/materials/velvet-emerald-green.jpg",
      },
      {
        name: "Burgundy",
        colorHex: "#800020",
        image: "/assets/images/materials/velvet-burgundy.jpg",
      },
      {
        name: "Blush Pink",
        colorHex: "#FFB6C1",
        image: "/assets/images/materials/velvet-blush-pink.jpg",
      },
      {
        name: "Sapphire Blue",
        colorHex: "#0F52BA",
        image: "/assets/images/materials/velvet-sapphire-blue.jpg",
      },
    ],
  },
  {
    id: "leather",
    name: "Leather",
    description:
      "A durable natural material made from animal hide, known for its longevity and classic appeal.",
    careInstructions:
      "Dust regularly with a soft cloth. Clean with leather conditioner every 3-6 months. Keep away from direct sunlight to prevent fading.",
    durability: "High",
    suitable: ["Living room", "Office", "High-traffic areas"],
    properties: [
      "Durable",
      "Ages beautifully",
      "Easy to clean",
      "Hypoallergenic",
    ],
    image: "/assets/images/materials/leather.jpg",
    samples: [
      {
        name: "Black",
        colorHex: "#000000",
        image: "/assets/images/materials/leather-black.jpg",
      },
      {
        name: "Brown",
        colorHex: "#6B4226",
        image: "/assets/images/materials/leather-brown.jpg",
      },
      {
        name: "White",
        colorHex: "#FFFFFF",
        image: "/assets/images/materials/leather-white.jpg",
      },
      {
        name: "Tan",
        colorHex: "#D2B48C",
        image: "/assets/images/materials/leather-tan.jpg",
      },
      {
        name: "Cognac",
        colorHex: "#A52A2A",
        image: "/assets/images/materials/leather-cognac.jpg",
      },
      {
        name: "Chocolate",
        colorHex: "#7B3F00",
        image: "/assets/images/materials/leather-chocolate.jpg",
      },
    ],
  },
  {
    id: "linen",
    name: "Linen",
    description:
      "A lightweight natural fabric made from flax fibers, known for its breathability and casual elegance.",
    careInstructions:
      "Machine washable in cold water. Air dry or tumble dry on low. Iron while slightly damp for best results.",
    durability: "Medium",
    suitable: ["Casual spaces", "Beach homes", "Warm climates"],
    properties: [
      "Breathable",
      "Natural texture",
      "Eco-friendly",
      "Gets softer with washing",
    ],
    image: "/assets/images/materials/linen.jpg",
    samples: [
      {
        name: "Dark Grey",
        colorHex: "#5A5A5A",
        image: "/assets/images/materials/linen-dark-grey.jpg",
      },
      {
        name: "Navy Blue",
        colorHex: "#000080",
        image: "/assets/images/materials/linen-navy-blue.jpg",
      },
      {
        name: "Cream",
        colorHex: "#FFFDD0",
        image: "/assets/images/materials/linen-cream.jpg",
      },
      {
        name: "Sage Green",
        colorHex: "#9CAF88",
        image: "/assets/images/materials/linen-sage-green.jpg",
      },
    ],
  },
  {
    id: "polyester",
    name: "Polyester",
    description:
      "A durable synthetic fabric that resists wrinkles, shrinking, and staining.",
    careInstructions:
      "Machine washable in warm water. Tumble dry on low heat. Resistant to most stains and easy to clean.",
    durability: "High",
    suitable: ["Family rooms", "Kids spaces", "High-traffic areas"],
    properties: ["Affordable", "Durable", "Stain resistant", "Colorfast"],
    image: "/assets/images/materials/polyester.jpg",
    samples: [
      {
        name: "Light Grey",
        colorHex: "#D3D3D3",
        image: "/assets/images/materials/polyester-light-grey.jpg",
      },
      {
        name: "Beige",
        colorHex: "#F5F5DC",
        image: "/assets/images/materials/polyester-beige.jpg",
      },
      {
        name: "Dusty Blue",
        colorHex: "#8A9DB5",
        image: "/assets/images/materials/polyester-dusty-blue.jpg",
      },
    ],
  },
  {
    id: "microfiber",
    name: "Microfiber",
    description:
      "A soft, fine synthetic fabric known for its durability and stain resistance.",
    careInstructions:
      "Vacuum regularly. Spot clean with mild soap and water. Machine washable covers should be washed in cold water and air dried.",
    durability: "High",
    suitable: ["Family rooms", "Kids spaces", "High-traffic areas"],
    properties: [
      "Very durable",
      "Stain resistant",
      "Pet-friendly",
      "Hypoallergenic",
    ],
    image: "/assets/images/materials/microfiber.jpg",
    samples: [
      {
        name: "Dark Grey",
        colorHex: "#5A5A5A",
        image: "/assets/images/materials/microfiber-dark-grey.jpg",
      },
      {
        name: "Light Grey",
        colorHex: "#D3D3D3",
        image: "/assets/images/materials/microfiber-light-grey.jpg",
      },
      {
        name: "Navy Blue",
        colorHex: "#000080",
        image: "/assets/images/materials/microfiber-navy-blue.jpg",
      },
      {
        name: "Chocolate",
        colorHex: "#7B3F00",
        image: "/assets/images/materials/microfiber-chocolate.jpg",
      },
    ],
  },
  {
    id: "cotton",
    name: "Cotton",
    description:
      "A soft, natural fabric that breathes well and offers comfort for everyday use.",
    careInstructions:
      "Machine washable in warm water. Tumble dry on low. May shrink slightly when washed.",
    durability: "Medium",
    suitable: ["Casual spaces", "Slipcovers", "Warm climates"],
    properties: ["Breathable", "Natural fiber", "Comfortable", "Easy to clean"],
    image: "/assets/images/materials/cotton.jpg",
    samples: [
      {
        name: "White",
        colorHex: "#FFFFFF",
        image: "/assets/images/materials/cotton-white.jpg",
      },
      {
        name: "Ivory",
        colorHex: "#FFFFF0",
        image: "/assets/images/materials/cotton-ivory.jpg",
      },
      {
        name: "Navy",
        colorHex: "#000080",
        image: "/assets/images/materials/cotton-navy.jpg",
      },
      {
        name: "Stone",
        colorHex: "#D3D0CB",
        image: "/assets/images/materials/cotton-stone.jpg",
      },
    ],
  },
  {
    id: "chenille",
    name: "Chenille",
    description:
      "A soft fabric with a distinctive fuzzy pile that creates a plush texture.",
    careInstructions:
      "Vacuum regularly with a soft brush attachment. Professional cleaning recommended for stains.",
    durability: "Medium-High",
    suitable: ["Living room", "Family room", "Cozy spaces"],
    properties: ["Soft texture", "Warm", "Durable", "Luxurious feel"],
    image: "/assets/images/materials/chenille.jpg",
    samples: [
      {
        name: "Cream",
        colorHex: "#FFFDD0",
        image: "/assets/images/materials/chenille-cream.jpg",
      },
      {
        name: "Taupe",
        colorHex: "#483C32",
        image: "/assets/images/materials/chenille-taupe.jpg",
      },
      {
        name: "Slate Blue",
        colorHex: "#6A92D4",
        image: "/assets/images/materials/chenille-slate-blue.jpg",
      },
    ],
  },
  {
    id: "wool",
    name: "Wool",
    description:
      "A natural fabric known for its warmth, durability and natural fire resistance.",
    careInstructions:
      "Vacuum regularly. Spot clean with mild soap and water. Professional cleaning recommended.",
    durability: "High",
    suitable: ["Living room", "Office", "Cooler climates"],
    properties: ["Naturally fire resistant", "Durable", "Warm", "Repels dirt"],
    image: "/assets/images/materials/wool.jpg",
    samples: [
      {
        name: "Charcoal",
        colorHex: "#36454F",
        image: "/assets/images/materials/wool-charcoal.jpg",
      },
      {
        name: "Oatmeal",
        colorHex: "#E3DAC9",
        image: "/assets/images/materials/wool-oatmeal.jpg",
      },
      {
        name: "Navy",
        colorHex: "#000080",
        image: "/assets/images/materials/wool-navy.jpg",
      },
    ],
  },
  {
    id: "rattan",
    name: "Rattan",
    description:
      "A natural material made from palm stems, known for its lightweight and tropical appeal.",
    careInstructions:
      "Dust regularly. Clean with damp cloth. Keep away from high humidity and direct sunlight.",
    durability: "Medium",
    suitable: ["Sunrooms", "Beach homes", "Casual spaces"],
    properties: [
      "Lightweight",
      "Natural texture",
      "Eco-friendly",
      "Tropical aesthetic",
    ],
    image: "/assets/images/materials/rattan.jpg",
    samples: [
      {
        name: "Natural",
        colorHex: "#E0C8A8",
        image: "/assets/images/materials/rattan-natural.jpg",
      },
      {
        name: "Whitewash",
        colorHex: "#F5F5F5",
        image: "/assets/images/materials/rattan-whitewash.jpg",
      },
      {
        name: "Brown",
        colorHex: "#6B4226",
        image: "/assets/images/materials/rattan-brown.jpg",
      },
    ],
  },
  {
    id: "outdoor-fabric",
    name: "Outdoor Fabric",
    description:
      "Weather-resistant fabrics designed to withstand sun, rain, and outdoor elements.",
    careInstructions:
      "Hose off or clean with mild soap and water. Allow to air dry completely before storing.",
    durability: "Very High",
    suitable: ["Patios", "Poolside", "Outdoor spaces"],
    properties: [
      "UV resistant",
      "Water repellent",
      "Mildew resistant",
      "Fade resistant",
    ],
    image: "/assets/images/materials/outdoor-fabric.jpg",
    samples: [
      {
        name: "Nautical Blue",
        colorHex: "#001F3F",
        image: "/assets/images/materials/outdoor-nautical-blue.jpg",
      },
      {
        name: "Terracotta",
        colorHex: "#E2725B",
        image: "/assets/images/materials/outdoor-terracotta.jpg",
      },
      {
        name: "Forest Green",
        colorHex: "#228B22",
        image: "/assets/images/materials/outdoor-forest-green.jpg",
      },
      {
        name: "Taupe",
        colorHex: "#483C32",
        image: "/assets/images/materials/outdoor-taupe.jpg",
      },
    ],
  },
];

export default materials;
