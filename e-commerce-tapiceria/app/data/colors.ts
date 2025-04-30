import { Color } from "../types/common.types";

// Define the color data structure with hex codes and names
export const colors: Color[] = [
  {
    id: "beige",
    name: "Beige",
    hexCode: "#F5F5DC",
    displayOrder: 1,
    isNeutral: true,
    description:
      "A versatile neutral that pairs well with almost any color scheme.",
    popular: true,
  },
  {
    id: "ivory",
    name: "Ivory",
    hexCode: "#FFFFF0",
    displayOrder: 2,
    isNeutral: true,
    description: "A soft, warm off-white with a subtle yellow undertone.",
    popular: true,
  },
  {
    id: "grey",
    name: "Grey",
    hexCode: "#808080",
    displayOrder: 3,
    isNeutral: true,
    description:
      "A versatile medium grey that works in both modern and traditional spaces.",
    popular: true,
  },
  {
    id: "charcoal",
    name: "Charcoal",
    hexCode: "#36454F",
    displayOrder: 4,
    isNeutral: true,
    description:
      "A deep, sophisticated dark grey - perfect for creating contrast.",
    popular: true,
  },
  {
    id: "navy",
    name: "Navy",
    hexCode: "#000080",
    displayOrder: 5,
    isNeutral: false,
    description: "A timeless dark blue that adds depth and elegance.",
    popular: true,
  },
  {
    id: "forest-green",
    name: "Forest Green",
    hexCode: "#228B22",
    displayOrder: 6,
    isNeutral: false,
    description: "A rich, natural green inspired by dense woodland.",
    popular: false,
  },
  {
    id: "emerald",
    name: "Emerald",
    hexCode: "#50C878",
    displayOrder: 7,
    isNeutral: false,
    description: "A vibrant jewel-tone green with a slight blue undertone.",
    popular: true,
  },
  {
    id: "sage",
    name: "Sage",
    hexCode: "#BCB88A",
    displayOrder: 8,
    isNeutral: false,
    description: "A muted, earthy green with gray undertones.",
    popular: true,
  },
  {
    id: "burgundy",
    name: "Burgundy",
    hexCode: "#800020",
    displayOrder: 9,
    isNeutral: false,
    description:
      "A deep, rich red with purple undertones for a touch of luxury.",
    popular: true,
  },
  {
    id: "rust",
    name: "Rust",
    hexCode: "#B7410E",
    displayOrder: 10,
    isNeutral: false,
    description: "A warm, earthy orange-red reminiscent of autumn leaves.",
    popular: false,
  },
  {
    id: "terracotta",
    name: "Terracotta",
    hexCode: "#E2725B",
    displayOrder: 11,
    isNeutral: false,
    description: "A warm, earthy orange-brown inspired by clay pottery.",
    popular: true,
  },
  {
    id: "mustard",
    name: "Mustard",
    hexCode: "#FFDB58",
    displayOrder: 12,
    isNeutral: false,
    description:
      "A rich yellow with earthy undertones that adds warmth to any space.",
    popular: true,
  },
  {
    id: "teal",
    name: "Teal",
    hexCode: "#008080",
    displayOrder: 13,
    isNeutral: false,
    description: "A balanced blue-green that creates a calming atmosphere.",
    popular: true,
  },
  {
    id: "blush",
    name: "Blush Pink",
    hexCode: "#DE6FA1",
    displayOrder: 14,
    isNeutral: false,
    description:
      "A soft, muted pink that adds subtle warmth without overwhelming.",
    popular: true,
  },
  {
    id: "lavender",
    name: "Lavender",
    hexCode: "#B57EDC",
    displayOrder: 15,
    isNeutral: false,
    description: "A gentle purple with a calming, soothing presence.",
    popular: false,
  },
  {
    id: "sky-blue",
    name: "Sky Blue",
    hexCode: "#87CEEB",
    displayOrder: 16,
    isNeutral: false,
    description: "A bright, airy blue reminiscent of clear skies.",
    popular: false,
  },
  {
    id: "black",
    name: "Black",
    hexCode: "#000000",
    displayOrder: 17,
    isNeutral: true,
    description:
      "A timeless, bold choice for dramatic contrast and modern elegance.",
    popular: true,
  },
  {
    id: "cream",
    name: "Cream",
    hexCode: "#FFFDD0",
    displayOrder: 18,
    isNeutral: true,
    description:
      "A warm off-white with yellow undertones for a soft, inviting feel.",
    popular: true,
  },
  {
    id: "chocolate",
    name: "Chocolate Brown",
    hexCode: "#7B3F00",
    displayOrder: 19,
    isNeutral: true,
    description: "A rich, deep brown that adds warmth and coziness.",
    popular: false,
  },
  {
    id: "coral",
    name: "Coral",
    hexCode: "#FF7F50",
    displayOrder: 20,
    isNeutral: false,
    description: "A vibrant pinkish-orange that adds energy and warmth.",
    popular: true,
  },
];

// Helper functions for working with colors
export const getPopularColors = (): Color[] => {
  return colors.filter((color) => color.popular);
};

export const getNeutralColors = (): Color[] => {
  return colors.filter((color) => color.isNeutral);
};

export const getColorById = (id: string): Color | undefined => {
  return colors.find((color) => color.id === id);
};

export const getColorsByIds = (ids: string[]): Color[] => {
  return colors.filter((color) => ids.includes(color.id));
};

export default colors;
