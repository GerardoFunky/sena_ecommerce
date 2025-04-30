import { Category } from "../types/category.types";

// Define the category data structure
export const categories: Category[] = [
  {
    id: "upholstery-fabrics",
    name: "Upholstery Fabrics",
    slug: "upholstery-fabrics",
    description:
      "Premium fabrics designed specifically for furniture upholstery with superior durability and stain-resistance.",
    image: "/assets/images/categories/upholstery-fabrics.jpg",
    subcategories: [
      {
        id: "velvet",
        name: "Velvet",
        slug: "velvet",
        description:
          "Luxurious velvet fabrics with a soft, plush texture perfect for statement pieces.",
        image: "/assets/images/categories/velvet.jpg",
      },
      {
        id: "leather",
        name: "Leather",
        slug: "leather",
        description:
          "Genuine and faux leather options for classic, durable furniture.",
        image: "/assets/images/categories/leather.jpg",
      },
      {
        id: "linen",
        name: "Linen",
        slug: "linen",
        description:
          "Breathable, natural linen fabrics for a casual, relaxed look.",
        image: "/assets/images/categories/linen.jpg",
      },
      {
        id: "microfiber",
        name: "Microfiber",
        slug: "microfiber",
        description:
          "Stain-resistant synthetic fabrics ideal for households with children and pets.",
        image: "/assets/images/categories/microfiber.jpg",
      },
    ],
    featured: true,
  },
  {
    id: "curtain-fabrics",
    name: "Curtain Fabrics",
    slug: "curtain-fabrics",
    description:
      "Elegant and functional fabrics for window treatments in various opacities and styles.",
    image: "/assets/images/categories/curtain-fabrics.jpg",
    subcategories: [
      {
        id: "blackout",
        name: "Blackout",
        slug: "blackout",
        description: "Light-blocking fabrics for bedrooms and media rooms.",
        image: "/assets/images/categories/blackout.jpg",
      },
      {
        id: "sheer",
        name: "Sheer",
        slug: "sheer",
        description:
          "Lightweight, translucent fabrics that filter light beautifully.",
        image: "/assets/images/categories/sheer.jpg",
      },
      {
        id: "printed",
        name: "Printed",
        slug: "printed",
        description: "Decorative patterns to add visual interest to any room.",
        image: "/assets/images/categories/printed.jpg",
      },
    ],
    featured: true,
  },
  {
    id: "decorative-trims",
    name: "Decorative Trims",
    slug: "decorative-trims",
    description:
      "Finishing touches that elevate your upholstery and soft furnishing projects.",
    image: "/assets/images/categories/decorative-trims.jpg",
    subcategories: [
      {
        id: "tassels",
        name: "Tassels",
        slug: "tassels",
        description: "Elegant hanging ornaments for curtains and cushions.",
        image: "/assets/images/categories/tassels.jpg",
      },
      {
        id: "fringes",
        name: "Fringes",
        slug: "fringes",
        description: "Decorative edging for a classic, sophisticated look.",
        image: "/assets/images/categories/fringes.jpg",
      },
      {
        id: "cords",
        name: "Cords & Piping",
        slug: "cords-piping",
        description: "Define edges and seams with these versatile trims.",
        image: "/assets/images/categories/cords.jpg",
      },
    ],
    featured: false,
  },
  {
    id: "cushions-pillows",
    name: "Cushions & Pillows",
    slug: "cushions-pillows",
    description:
      "Ready-made and customizable cushions and pillows to accent your home.",
    image: "/assets/images/categories/cushions-pillows.jpg",
    subcategories: [
      {
        id: "throw-pillows",
        name: "Throw Pillows",
        slug: "throw-pillows",
        description: "Decorative pillows in various shapes and sizes.",
        image: "/assets/images/categories/throw-pillows.jpg",
      },
      {
        id: "floor-cushions",
        name: "Floor Cushions",
        slug: "floor-cushions",
        description: "Large, comfortable cushions for casual seating.",
        image: "/assets/images/categories/floor-cushions.jpg",
      },
      {
        id: "outdoor-cushions",
        name: "Outdoor Cushions",
        slug: "outdoor-cushions",
        description: "Weather-resistant cushions for patio furniture.",
        image: "/assets/images/categories/outdoor-cushions.jpg",
      },
    ],
    featured: true,
  },
  {
    id: "upholstery-tools",
    name: "Upholstery Tools",
    slug: "upholstery-tools",
    description: "Professional tools for DIY and expert upholstery projects.",
    image: "/assets/images/categories/upholstery-tools.jpg",
    subcategories: [
      {
        id: "staplers",
        name: "Staplers & Staples",
        slug: "staplers-staples",
        description: "Essential tools for securing fabric to frames.",
        image: "/assets/images/categories/staplers.jpg",
      },
      {
        id: "hammers-mallets",
        name: "Hammers & Mallets",
        slug: "hammers-mallets",
        description: "Specialized tools for upholstery work.",
        image: "/assets/images/categories/hammers.jpg",
      },
      {
        id: "scissors-cutters",
        name: "Scissors & Cutters",
        slug: "scissors-cutters",
        description: "Precision cutting tools for various materials.",
        image: "/assets/images/categories/scissors.jpg",
      },
      {
        id: "measuring-tools",
        name: "Measuring Tools",
        slug: "measuring-tools",
        description: "Accurate measurement tools for professional results.",
        image: "/assets/images/categories/measuring.jpg",
      },
    ],
    featured: false,
  },
  {
    id: "furniture-care",
    name: "Furniture Care",
    slug: "furniture-care",
    description: "Products to maintain and protect your upholstered furniture.",
    image: "/assets/images/categories/furniture-care.jpg",
    subcategories: [
      {
        id: "cleaners",
        name: "Cleaners",
        slug: "cleaners",
        description: "Specialized cleaning solutions for different fabrics.",
        image: "/assets/images/categories/cleaners.jpg",
      },
      {
        id: "protectors",
        name: "Stain Protectors",
        slug: "stain-protectors",
        description: "Preventative treatments to repel stains and spills.",
        image: "/assets/images/categories/protectors.jpg",
      },
      {
        id: "repair-kits",
        name: "Repair Kits",
        slug: "repair-kits",
        description: "Tools and materials for fixing minor damage.",
        image: "/assets/images/categories/repair-kits.jpg",
      },
    ],
    featured: false,
  },
  {
    id: "diy-kits",
    name: "DIY Kits",
    slug: "diy-kits",
    description:
      "Complete project kits for upholstery beginners and enthusiasts.",
    image: "/assets/images/categories/diy-kits.jpg",
    subcategories: [
      {
        id: "dining-chair-kits",
        name: "Dining Chair Kits",
        slug: "dining-chair-kits",
        description: "Everything needed to reupholster dining chairs.",
        image: "/assets/images/categories/dining-chair-kits.jpg",
      },
      {
        id: "footstool-kits",
        name: "Footstool Kits",
        slug: "footstool-kits",
        description: "Complete kits for creating or recovering footstools.",
        image: "/assets/images/categories/footstool-kits.jpg",
      },
      {
        id: "cushion-making-kits",
        name: "Cushion Making Kits",
        slug: "cushion-making-kits",
        description: "Materials and instructions for custom cushions.",
        image: "/assets/images/categories/cushion-making-kits.jpg",
      },
    ],
    featured: true,
  },
];

// Helper functions to work with categories
export const getFeaturedCategories = (): Category[] => {
  return categories.filter((category) => category.featured);
};

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((category) => category.slug === slug);
};

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find((category) => category.id === id);
};

export const getAllSubcategories = (): any[] => {
  return categories.flatMap((category) =>
    category.subcategories ? category.subcategories : []
  );
};

export default categories;
