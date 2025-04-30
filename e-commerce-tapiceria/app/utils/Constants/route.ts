/**
 * Application route constants
 * Used for navigation and link creation throughout the application
 */

export const ROUTES = {
  // Main pages
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",

  // Product related
  PRODUCTS: "/products",
  PRODUCT_DETAIL: "/products/:id",
  CATEGORY: "/category/:slug",
  SEARCH: "/search",

  // Cart and checkout
  CART: "/cart",
  CHECKOUT: "/checkout",
  CHECKOUT_SUCCESS: "/checkout/success",

  // User related
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  ORDERS: "/profile/orders",
  ORDER_DETAIL: "/profile/orders/:id",
  ADDRESSES: "/profile/addresses",
  SETTINGS: "/profile/settings",
  FAVORITES: "/favorites",

  // Tools
  SIZE_CALCULATOR: "/tools/size-calculator",
  MATERIAL_GUIDE: "/tools/material-guide",
  ROOM_VISUALIZER: "/tools/room-visualizer",

  // Blog
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",

  // Policies
  PRIVACY_POLICY: "/policy/privacy",
  TERMS_OF_SERVICE: "/policy/terms",
  RETURN_POLICY: "/policy/returns",

  // Error
  NOT_FOUND: "/404",
};

/**
 * Creates a URL for a specific product
 * @param id - Product ID
 * @returns The product detail URL
 */
export const getProductUrl = (id: string): string => {
  return ROUTES.PRODUCT_DETAIL.replace(":id", id);
};

/**
 * Creates a URL for a specific category
 * @param slug - Category slug
 * @returns The category URL
 */
export const getCategoryUrl = (slug: string): string => {
  return ROUTES.CATEGORY.replace(":slug", slug);
};

/**
 * Creates a URL for a specific blog post
 * @param slug - Blog post slug
 * @returns The blog post URL
 */
export const getBlogPostUrl = (slug: string): string => {
  return ROUTES.BLOG_POST.replace(":slug", slug);
};

/**
 * Creates a URL for a specific order
 * @param id - Order ID
 * @returns The order detail URL
 */
export const getOrderUrl = (id: string): string => {
  return ROUTES.ORDER_DETAIL.replace(":id", id);
};

/**
 * Creates a search URL with query parameters
 * @param query - Search query
 * @returns The search URL with query
 */
export const getSearchUrl = (query: string): string => {
  return `${ROUTES.SEARCH}?q=${encodeURIComponent(query)}`;
};
