// category.types.ts
// Type definitions for category-related data structures

/**
 * Represents a filtering option available for a category
 */
export interface CategoryFilterOption {
  id: string;
  name: string;
  type: "material" | "color" | "size" | "price" | "tag";
  values: {
    id: string;
    name: string;
    value: string | number;
    count?: number; // Number of products with this value
  }[];
}

/**
 * Represents a subcategory
 */
export interface SubCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  parentCategoryId: string;
  featuredProductIds?: string[];
  productCount: number;
  isActive: boolean;
  order?: number;
  seoTitle?: string;
  seoDescription?: string;
  filterOptions?: CategoryFilterOption[];
}

/**
 * Represents a top-level category
 */
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl: string;
  bannerUrl?: string;
  subcategories: SubCategory[];
  featuredProductIds?: string[];
  productCount: number;
  isActive: boolean;
  order?: number;
  seoTitle?: string;
  seoDescription?: string;
  filterOptions?: CategoryFilterOption[];
  createdAt: string;
  updatedAt: string;
}

/**
 * Represents the breadcrumb path for navigation
 */
export interface CategoryBreadcrumb {
  id: string;
  name: string;
  slug: string;
  type: "category" | "subcategory";
}

/**
 * Represents a category with essential information (used for listings)
 */
export interface CategorySummary {
  id: string;
  name: string;
  slug: string;
  imageUrl: string;
  productCount: number;
  subcategoryCount: number;
}

/**
 * Represents parameters for fetching categories
 */
export interface CategoryQueryParams {
  includeInactive?: boolean;
  includeSubcategories?: boolean;
  includeFilterOptions?: boolean;
  includeProductCount?: boolean;
  sort?:
    | "name_asc"
    | "name_desc"
    | "order_asc"
    | "order_desc"
    | "product_count";
}

/**
 * Represents category tree structure for navigation
 */
export interface CategoryNavigationItem {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  children?: CategoryNavigationItem[];
}
