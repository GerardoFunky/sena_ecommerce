// common.types.ts
// Common type definitions used across the application

/**
 * Represents pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
}

/**
 * Represents a generic paginated response
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Represents sort options
 */
export type SortOrder = "asc" | "desc";

export interface SortParams {
  field: string;
  order: SortOrder;
}

/**
 * Represents geographic coordinates
 */
export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

/**
 * Represents an image with various sizes
 */
export interface ResponsiveImage {
  original: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  alt?: string;
}

/**
 * Represents breadcrumb navigation
 */
export interface Breadcrumb {
  id: string;
  name: string;
  url: string;
}

/**
 * Represents a notification displayed to the user
 */
export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  title?: string;
  autoClose?: boolean;
  duration?: number;
}

/**
 * Represents file upload metadata
 */
export interface FileUpload {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  thumbnailUrl?: string;
  uploadedAt: string;
}

/**
 * Represents metadata for SEO
 */
export interface SeoMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

/**
 * Represents a general UI modal configuration
 */
export interface ModalConfig {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  position?: "center" | "top" | "right" | "bottom" | "left";
  showClose?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  closeOnClickOutside?: boolean;
}

/**
 * Represents a toast notification configuration
 */
export interface ToastConfig {
  id?: string;
  type: "info" | "success" | "warning" | "error";
  message: string;
  title?: string;
  duration?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

/**
 * Represents a generic error response
 */
export interface ErrorResponse {
  message: string;
  code?: string;
  field?: string;
  details?: any;
}

/**
 * Represents available theme modes
 */
export type ThemeMode = "light" | "dark" | "system";

/**
 * Represents a generic filter state
 */
export interface FilterState {
  [key: string]: string[] | number[] | boolean | string | number | null;
}

/**
 * Represents a generic component status
 */
export type ComponentStatus = "idle" | "loading" | "success" | "error";

/**
 * Represents a key-value pair option
 */
export interface SelectOption<T = string> {
  label: string;
  value: T;
  disabled?: boolean;
  icon?: string;
  description?: string;
}

/**
 * Utility type for representing form field validation state
 */
export interface FieldValidation {
  valid: boolean;
  message?: string;
  touched?: boolean;
}

/**
 * Utility type for a form validation state
 */
export type FormValidationState<T> = {
  [K in keyof T]?: FieldValidation;
};

/**
 * Represents a custom event with date and description
 */
export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  allDay?: boolean;
  location?: string;
  type?: string;
  color?: string;
}
