/**
 * Categories constants
 * Defines the product categories used throughout the application
 */

/**
 * Category interface
 */
export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  parentId?: string;
  imageUrl?: string;
  featured?: boolean;
}

/**
 * Main product categories
 */
export const CATEGORIES: Record<string, Category> = {
  UPHOLSTERED_FURNITURE: {
    id: "cat_upholstered_furniture",
    slug: "upholstered-furniture",
    name: "Upholstered Furniture",
    description: "Complete furniture pieces with upholstery",
    featured: true,
    imageUrl: "/assets/images/categories/upholstered-furniture.jpg",
  },
  UPHOLSTERY_FABRICS: {
    id: "cat_upholstery_fabrics",
    slug: "upholstery-fabrics",
    name: "Upholstery Fabrics",
    description: "Fabrics specifically designed for upholstery projects",
    featured: true,
    imageUrl: "/assets/images/categories/upholstery-fabrics.jpg",
  },
  LEATHER: {
    id: "cat_leather",
    slug: "leather",
    name: "Leather",
    description: "Premium leather materials for upholstery",
    featured: true,
    imageUrl: "/assets/images/categories/leather.jpg",
  },
  FOAM_PADDING: {
    id: "cat_foam_padding",
    slug: "foam-padding",
    name: "Foam & Padding",
    description: "Foam, batting, and other padding materials",
    imageUrl: "/assets/images/categories/foam-padding.jpg",
  },
  TOOLS: {
    id: "cat_tools",
    slug: "tools",
    name: "Tools",
    description: "Specialized tools for upholstery work",
    imageUrl: "/assets/images/categories/tools.jpg",
  },
  ACCESSORIES: {
    id: "cat_accessories",
    slug: "accessories",
    name: "Accessories",
    description: "Decorative elements and finishing accessories",
    imageUrl: "/assets/images/categories/accessories.jpg",
  },
  SUPPLIES: {
    id: "cat_supplies",
    slug: "supplies",
    name: "Supplies",
    description: "Essential supplies for upholstery projects",
    imageUrl: "/assets/images/categories/supplies.jpg",
  },
  DIY_KITS: {
    id: "cat_diy_kits",
    slug: "diy-kits",
    name: "DIY Kits",
    description: "Complete kits for do-it-yourself projects",
    featured: true,
    imageUrl: "/assets/images/categories/diy-kits.jpg",
  },
};

/**
 * Sub-categories organized by parent category
 */
export const SUBCATEGORIES: Category[] = [
  // Upholstered Furniture subcategories
  {
    id: "cat_sofas",
    slug: "sofas",
    name: "Sofas & Couches",
    description: "Upholstered sofas and couches",
    parentId: CATEGORIES.UPHOLSTERED_FURNITURE.id,
    imageUrl: "/assets/images/categories/sofas.jpg",
  },
  {
    id: "cat_chairs",
    slug: "chairs",
    name: "Chairs & Armchairs",
    description: "Upholstered chairs and armchairs",
    parentId: CATEGORIES.UPHOLSTERED_FURNITURE.id,
    imageUrl: "/assets/images/categories/chairs.jpg",
  },
  {
    id: "cat_ottomans",
    slug: "ottomans",
    name: "Ottomans & Footstools",
    description: "Upholstered ottomans and footstools",
    parentId: CATEGORIES.UPHOLSTERED_FURNITURE.id,
    imageUrl: "/assets/images/categories/ottomans.jpg",
  },
  {
    id: "cat_headboards",
    slug: "headboards",
    name: "Headboards",
    description: "Upholstered bed headboards",
    parentId: CATEGORIES.UPHOLSTERED_FURNITURE.id,
    imageUrl: "/assets/images/categories/headboards.jpg",
  },

  // Upholstery Fabrics subcategories
  {
    id: "cat_cotton_fabrics",
    slug: "cotton-fabrics",
    name: "Cotton Fabrics",
    description: "Cotton-based upholstery fabrics",
    parentId: CATEGORIES.UPHOLSTERY_FABRICS.id,
    imageUrl: "/assets/images/categories/cotton-fabrics.jpg",
  },
  {
    id: "cat_velvet_fabrics",
    slug: "velvet-fabrics",
    name: "Velvet Fabrics",
    description: "Velvet upholstery fabrics",
    parentId: CATEGORIES.UPHOLSTERY_FABRICS.id,
    imageUrl: "/assets/images/categories/velvet-fabrics.jpg",
  },
  {
    id: "cat_linen_fabrics",
    slug: "linen-fabrics",
    name: "Linen Fabrics",
    description: "Linen-based upholstery fabrics",
    parentId: CATEGORIES.UPHOLSTERY_FABRICS.id,
    imageUrl: "/assets/images/categories/linen-fabrics.jpg",
  },
  {
    id: "cat_synthetic_fabrics",
    slug: "synthetic-fabrics",
    name: "Synthetic Fabrics",
    description: "Synthetic upholstery fabrics",
    parentId: CATEGORIES.UPHOLSTERY_FABRICS.id,
    imageUrl: "/assets/images/categories/synthetic-fabrics.jpg",
  },

  // Leather subcategories
  {
    id: "cat_full_grain_leather",
    slug: "full-grain-leather",
    name: "Full Grain Leather",
    description: "Premium full grain leather",
    parentId: CATEGORIES.LEATHER.id,
    imageUrl: "/assets/images/categories/full-grain-leather.jpg",
  },
  {
    id: "cat_top_grain_leather",
    slug: "top-grain-leather",
    name: "Top Grain Leather",
    description: "High quality top grain leather",
    parentId: CATEGORIES.LEATHER.id,
    imageUrl: "/assets/images/categories/top-grain-leather.jpg",
  },
  {
    id: "cat_bonded_leather",
    slug: "bonded-leather",
    name: "Bonded Leather",
    description: "Affordable bonded leather options",
    parentId: CATEGORIES.LEATHER.id,
    imageUrl: "/assets/images/categories/bonded-leather.jpg",
  },

  // Tools subcategories
  {
    id: "cat_staple_guns",
    slug: "staple-guns",
    name: "Staple Guns",
    description: "Professional upholstery staple guns",
    parentId: CATEGORIES.TOOLS.id,
    imageUrl: "/assets/images/categories/staple-guns.jpg",
  },
  {
    id: "cat_cutting_tools",
    slug: "cutting-tools",
    name: "Cutting Tools",
    description: "Scissors, cutters, and other cutting tools",
    parentId: CATEGORIES.TOOLS.id,
    imageUrl: "/assets/images/categories/cutting-tools.jpg",
  },
  {
    id: "cat_measuring_tools",
    slug: "measuring-tools",
    name: "Measuring Tools",
    description: "Measuring tapes and rulers",
    parentId: CATEGORIES.TOOLS.id,
    imageUrl: "/assets/images/categories/measuring-tools.jpg",
  },
];

/**
 * Get all categories including subcategories
 * @returns An array of all categories and subcategories
 */
export const getAllCategories = (): Category[] => {
  return [...Object.values(CATEGORIES), ...SUBCATEGORIES];
};

/**
 * Get subcategories for a specific parent category
 * @param parentId - Parent category ID
 * @returns Array of subcategories
 */
export const getSubcategories = (parentId: string): Category[] => {
  return SUBCATEGORIES.filter((category) => category.parentId === parentId);
};

/**
 * Get a category by its ID
 * @param id - Category ID
 * @returns Category object or undefined
 */
export const getCategoryById = (id: string): Category | undefined => {
  const allCategories = getAllCategories();
  return allCategories.find((category) => category.id === id);
};

/**
 * Get a category by its slug
 * @param slug - Category slug
 * @returns Category object or undefined
 */
export const getCategoryBySlug = (slug: string): Category | undefined => {
  const allCategories = getAllCategories();
  return allCategories.find((category) => category.slug === slug);
};

/**
 * Featured categories for homepage display
 */
export const FEATURED_CATEGORIES = Object.values(CATEGORIES).filter(
  (category) => category.featured
);
