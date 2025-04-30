// api.types.ts
// Type definitions for API communication

/**
 * Represents available HTTP methods
 */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Represents HTTP request headers
 */
export interface RequestHeaders {
  [key: string]: string;
}

/**
 * Represents HTTP request parameters
 */
export interface RequestParams {
  [key: string]: string | number | boolean | string[] | undefined;
}

/**
 * Represents a generic API request configuration
 */
export interface ApiRequestConfig<T = any> {
  method: HttpMethod;
  url: string;
  data?: T;
  params?: RequestParams;
  headers?: RequestHeaders;
  withCredentials?: boolean;
  timeout?: number;
  responseType?: "json" | "text" | "blob" | "arraybuffer";
  signal?: AbortSignal;
}

/**
 * Represents a generic API response
 */
export interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
}

/**
 * Represents an API error response
 */
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
  data?: any;
  errors?: {
    field: string;
    message: string;
  }[];
}

/**
 * Represents the state for API requests
 */
export interface ApiState<T = any> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  lastFetched?: string;
}

/**
 * Represents pagination links in API responses
 */
export interface PaginationLinks {
  first?: string;
  last?: string;
  prev?: string;
  next?: string;
}

/**
 * Represents a paginated API response
 */
export interface PaginatedApiResponse<T = any> {
  data: T[];
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    from: number;
    to: number;
  };
  links: PaginationLinks;
}

/**
 * Represents API authentication tokens
 */
export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

/**
 * Interface for the API client methods
 */
export interface ApiClient {
  get<T = any>(
    url: string,
    params?: RequestParams,
    config?: Partial<ApiRequestConfig>
  ): Promise<ApiResponse<T>>;
  post<T = any, D = any>(
    url: string,
    data?: D,
    config?: Partial<ApiRequestConfig>
  ): Promise<ApiResponse<T>>;
  put<T = any, D = any>(
    url: string,
    data?: D,
    config?: Partial<ApiRequestConfig>
  ): Promise<ApiResponse<T>>;
  patch<T = any, D = any>(
    url: string,
    data?: D,
    config?: Partial<ApiRequestConfig>
  ): Promise<ApiResponse<T>>;
  delete<T = any>(
    url: string,
    config?: Partial<ApiRequestConfig>
  ): Promise<ApiResponse<T>>;
  request<T = any>(config: ApiRequestConfig): Promise<ApiResponse<T>>;
}

/**
 * Types for API endpoints
 */
export interface ApiEndpoints {
  auth: {
    login: string;
    register: string;
    logout: string;
    refreshToken: string;
    forgotPassword: string;
    resetPassword: string;
    verifyEmail: string;
  };
  products: {
    list: string;
    detail: (id: string) => string;
    categories: string;
    search: string;
    reviews: (id: string) => string;
  };
  cart: {
    get: string;
    add: string;
    update: string;
    remove: string;
    clear: string;
    discount: string;
  };
  orders: {
    list: string;
    detail: (id: string) => string;
    create: string;
    update: (id: string) => string;
    cancel: (id: string) => string;
  };
  user: {
    profile: string;
    addresses: string;
    address: (id: string) => string;
    favorites: string;
    favorite: (id: string) => string;
    paymentMethods: string;
    paymentMethod: (id: string) => string;
    measurements: string;
    measurement: (id: string) => string;
  };
  [key: string]: any;
}

/**
 * Represents webhook event types from the API
 */
export enum WebhookEventType {
  ORDER_CREATED = "order.created",
  ORDER_UPDATED = "order.updated",
  ORDER_CANCELLED = "order.cancelled",
  ORDER_PAID = "order.paid",
  ORDER_SHIPPED = "order.shipped",
  ORDER_DELIVERED = "order.delivered",
  PRODUCT_CREATED = "product.created",
  PRODUCT_UPDATED = "product.updated",
  PRODUCT_DELETED = "product.deleted",
  INVENTORY_UPDATED = "inventory.updated",
  USER_CREATED = "user.created",
  USER_UPDATED = "user.updated",
  PAYMENT_SUCCEEDED = "payment.succeeded",
  PAYMENT_FAILED = "payment.failed",
}

/**
 * Represents a webhook payload from the API
 */
export interface WebhookPayload<T = any> {
  id: string;
  type: WebhookEventType;
  created: string;
  data: T;
}

/**
 * Represents cache configuration for API requests
 */
export interface ApiCacheConfig {
  enabled: boolean;
  ttl: number; // time to live in seconds
  excludePaths?: string[];
  includeOnlyPaths?: string[];
}
