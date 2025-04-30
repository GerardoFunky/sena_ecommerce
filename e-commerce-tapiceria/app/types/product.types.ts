// product.types.ts
// Type definitions for product-related data structures

/**
 * Represents a product material option
 */
export interface Material {
  id: string;
  name: string;
  description?: string;
  additionalCost: number;
  inStock: boolean;
  imageUrl?: string;
}

/**
 * Represents a product color option
 */
export interface Color {
  id: string;
  name: string;
  hexCode: string;
  additionalCost: number;
  inStock: boolean;
  imageUrl?: string;
}

/**
 * Represents a size option for a product
 */
export interface Size {
  id: string;
  name: string;
  dimensions: {
    width: number;
    height: number;
    depth?: number;
  };
  additionalCost: number;
  inStock: boolean;
}

/**
 * Represents a product variant (combination of options)
 */
export interface ProductVariant {
  id: string;
  sku: string;
  materialId: string;
  colorId: string;
  sizeId: string;
  price: number;
  salePrice?: number;
  inventory: number;
  images: string[];
}

/**
 * Represents a customer review for a product
 */
export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title?: string;
  comment: string;
  date: string;
  verified: boolean;
  images?: string[];
  helpful: number;
  response?: {
    text: string;
    date: string;
  };
}

/**
 * Represents product specifications
 */
export interface ProductSpecifications {
  weight?: number;
  weightUnit?: string;
  careInstructions?: string[];
  warranty?: string;
  assembly?: string;
  features?: string[];
  materials?: {
    frame?: string;
    filling?: string;
    cover?: string;
    legs?: string;
  };
}

/**
 * Represents complete product information
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription?: string;
  categoryId: string;
  subCategoryId?: string;
  brand?: string;
  basePrice: number;
  averageRating: number;
  reviewCount: number;
  isNew: boolean;
  isFeatured: boolean;
  isOnSale: boolean;
  tags: string[];
  defaultImageUrl: string;
  images: string[];
  materials: Material[];
  colors: Color[];
  sizes: Size[];
  variants: ProductVariant[];
  specifications?: ProductSpecifications;
  relatedProductIds?: string[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Represents product search/listing parameters
 */
export interface ProductSearchParams {
  query?: string;
  categoryId?: string;
  subCategoryId?: string;
  tags?: string[];
  materialIds?: string[];
  colorIds?: string[];
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  sortBy?: "price_asc" | "price_desc" | "newest" | "rating" | "popularity";
  page?: number;
  limit?: number;
}

/**
 * Represents a paginated product response
 */
export interface PaginatedProducts {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
