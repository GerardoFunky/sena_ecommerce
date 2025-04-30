/**
 * API endpoint paths organized by resource/domain
 */

export const endpoints = {
  // Auth endpoints
  auth: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
    refreshToken: "/auth/refresh",
    forgotPassword: "/auth/forgot-password",
    resetPassword: "/auth/reset-password",
    verifyEmail: "/auth/verify-email",
  },

  // Product endpoints
  products: {
    getAll: "/products",
    get: (id: string) => `/products/${id}`,
    getByCategory: (categoryId: string) => `/products/category/${categoryId}`,
    create: "/products",
    update: (id: string) => `/products/${id}`,
    delete: (id: string) => `/products/${id}`,
    getFeatured: "/products/featured",
    getTrending: "/products/trending",
    search: "/products/search",
    reviews: {
      getAll: (productId: string) => `/products/${productId}/reviews`,
      create: (productId: string) => `/products/${productId}/reviews`,
      update: (productId: string, reviewId: string) =>
        `/products/${productId}/reviews/${reviewId}`,
      delete: (productId: string, reviewId: string) =>
        `/products/${productId}/reviews/${reviewId}`,
    },
  },

  // Category endpoints
  categories: {
    getAll: "/categories",
    get: (id: string) => `/categories/${id}`,
    create: "/categories",
    update: (id: string) => `/categories/${id}`,
    delete: (id: string) => `/categories/${id}`,
  },

  // User endpoints
  users: {
    me: "/users/me",
    updateProfile: "/users/me",
    addresses: {
      getAll: "/users/me/addresses",
      get: (id: string) => `/users/me/addresses/${id}`,
      create: "/users/me/addresses",
      update: (id: string) => `/users/me/addresses/${id}`,
      delete: (id: string) => `/users/me/addresses/${id}`,
      setDefault: (id: string) => `/users/me/addresses/${id}/default`,
    },
    favorites: {
      getAll: "/users/me/favorites",
      add: (productId: string) => `/users/me/favorites/${productId}`,
      remove: (productId: string) => `/users/me/favorites/${productId}`,
    },
  },

  // Cart endpoints
  cart: {
    get: "/cart",
    addItem: "/cart/items",
    updateItem: (itemId: string) => `/cart/items/${itemId}`,
    removeItem: (itemId: string) => `/cart/items/${itemId}`,
    clear: "/cart/clear",
    applyCoupon: "/cart/coupon",
    removeCoupon: "/cart/coupon",
  },

  // Order endpoints
  orders: {
    getAll: "/orders",
    get: (id: string) => `/orders/${id}`,
    create: "/orders",
    cancel: (id: string) => `/orders/${id}/cancel`,
    track: (id: string) => `/orders/${id}/tracking`,
  },

  // Payment endpoints
  payments: {
    methods: "/payments/methods",
    process: "/payments/process",
    webhook: "/payments/webhook",
  },

  // Blog endpoints
  blog: {
    getPosts: "/blog",
    getPost: (slug: string) => `/blog/${slug}`,
    getCategories: "/blog/categories",
    getComments: (postId: string) => `/blog/${postId}/comments`,
    addComment: (postId: string) => `/blog/${postId}/comments`,
  },

  // Contact endpoints
  contact: {
    send: "/contact",
  },

  // Material endpoints
  materials: {
    getAll: "/materials",
    get: (id: string) => `/materials/${id}`,
  },

  // Color endpoints
  colors: {
    getAll: "/colors",
  },
};

export default endpoints;
