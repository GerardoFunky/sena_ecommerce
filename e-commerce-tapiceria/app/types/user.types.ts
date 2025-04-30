// user.types.ts
// Type definitions for user-related data structures

import { Address } from "./cart.types";

/**
 * Represents user authentication credentials
 */
export interface UserCredentials {
  email: string;
  password: string;
}

/**
 * Represents user registration data
 */
export interface UserRegistrationData extends UserCredentials {
  firstName: string;
  lastName: string;
  phone?: string;
  acceptsMarketing?: boolean;
}

/**
 * Represents a user notification preference
 */
export interface NotificationPreference {
  type: "email" | "sms" | "push";
  enabled: boolean;
  categories: {
    marketing: boolean;
    orderUpdates: boolean;
    promotions: boolean;
    productAlerts: boolean;
    reminders: boolean;
  };
}

/**
 * Represents a user payment method
 */
export interface PaymentMethod {
  id: string;
  type: "credit_card" | "paypal" | "other";
  isDefault: boolean;
  cardInfo?: {
    brand: string;
    last4: string;
    expiryMonth: number;
    expiryYear: number;
  };
  paypalInfo?: {
    email: string;
  };
  billingAddressId?: string;
}

/**
 * Represents a user's favorite product
 */
export interface FavoriteItem {
  id: string;
  productId: string;
  variantId?: string;
  dateAdded: string;
  name: string;
  imageUrl: string;
  price: number;
  inStock: boolean;
}

/**
 * Represents a user's viewed product history
 */
export interface ViewedProductItem {
  productId: string;
  name: string;
  imageUrl: string;
  price: number;
  lastViewed: string;
  viewCount: number;
}

/**
 * Represents a user's measurement profile for better product recommendations
 */
export interface MeasurementProfile {
  id: string;
  name: string;
  roomType: "living_room" | "bedroom" | "dining_room" | "office" | "other";
  dimensions: {
    width: number;
    length: number;
    height?: number;
  };
  notes?: string;
}

/**
 * Represents a user account
 */
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  profileImageUrl?: string;
  addresses: Address[];
  defaultAddressId?: string;
  paymentMethods: PaymentMethod[];
  favorites: FavoriteItem[];
  recentlyViewed: ViewedProductItem[];
  measurementProfiles?: MeasurementProfile[];
  notificationPreferences: NotificationPreference;
  acceptsMarketing: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

/**
 * Represents user state for the user context
 */
export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
}

/**
 * Represents available user action types
 */
export enum UserActionTypes {
  LOGIN_START = "LOGIN_START",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  REGISTER_START = "REGISTER_START",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAILURE = "REGISTER_FAILURE",
  LOGOUT = "LOGOUT",
  FETCH_USER_START = "FETCH_USER_START",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
  UPDATE_USER_START = "UPDATE_USER_START",
  UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE",
  ADD_ADDRESS_START = "ADD_ADDRESS_START",
  ADD_ADDRESS_SUCCESS = "ADD_ADDRESS_SUCCESS",
  ADD_ADDRESS_FAILURE = "ADD_ADDRESS_FAILURE",
  UPDATE_ADDRESS_START = "UPDATE_ADDRESS_START",
  UPDATE_ADDRESS_SUCCESS = "UPDATE_ADDRESS_SUCCESS",
  UPDATE_ADDRESS_FAILURE = "UPDATE_ADDRESS_FAILURE",
  REMOVE_ADDRESS_START = "REMOVE_ADDRESS_START",
  REMOVE_ADDRESS_SUCCESS = "REMOVE_ADDRESS_SUCCESS",
  REMOVE_ADDRESS_FAILURE = "REMOVE_ADDRESS_FAILURE",
  ADD_PAYMENT_METHOD_START = "ADD_PAYMENT_METHOD_START",
  ADD_PAYMENT_METHOD_SUCCESS = "ADD_PAYMENT_METHOD_SUCCESS",
  ADD_PAYMENT_METHOD_FAILURE = "ADD_PAYMENT_METHOD_FAILURE",
  UPDATE_PAYMENT_METHOD_START = "UPDATE_PAYMENT_METHOD_START",
  UPDATE_PAYMENT_METHOD_SUCCESS = "UPDATE_PAYMENT_METHOD_SUCCESS",
  UPDATE_PAYMENT_METHOD_FAILURE = "UPDATE_PAYMENT_METHOD_FAILURE",
  REMOVE_PAYMENT_METHOD_START = "REMOVE_PAYMENT_METHOD_START",
  REMOVE_PAYMENT_METHOD_SUCCESS = "REMOVE_PAYMENT_METHOD_SUCCESS",
  REMOVE_PAYMENT_METHOD_FAILURE = "REMOVE_PAYMENT_METHOD_FAILURE",
  TOGGLE_FAVORITE_START = "TOGGLE_FAVORITE_START",
  TOGGLE_FAVORITE_SUCCESS = "TOGGLE_FAVORITE_SUCCESS",
  TOGGLE_FAVORITE_FAILURE = "TOGGLE_FAVORITE_FAILURE",
  ADD_MEASUREMENT_PROFILE_START = "ADD_MEASUREMENT_PROFILE_START",
  ADD_MEASUREMENT_PROFILE_SUCCESS = "ADD_MEASUREMENT_PROFILE_SUCCESS",
  ADD_MEASUREMENT_PROFILE_FAILURE = "ADD_MEASUREMENT_PROFILE_FAILURE",
  UPDATE_MEASUREMENT_PROFILE_START = "UPDATE_MEASUREMENT_PROFILE_START",
  UPDATE_MEASUREMENT_PROFILE_SUCCESS = "UPDATE_MEASUREMENT_PROFILE_SUCCESS",
  UPDATE_MEASUREMENT_PROFILE_FAILURE = "UPDATE_MEASUREMENT_PROFILE_FAILURE",
  REMOVE_MEASUREMENT_PROFILE_START = "REMOVE_MEASUREMENT_PROFILE_START",
  REMOVE_MEASUREMENT_PROFILE_SUCCESS = "REMOVE_MEASUREMENT_PROFILE_SUCCESS",
  REMOVE_MEASUREMENT_PROFILE_FAILURE = "REMOVE_MEASUREMENT_PROFILE_FAILURE",
  UPDATE_NOTIFICATION_PREFERENCES_START = "UPDATE_NOTIFICATION_PREFERENCES_START",
  UPDATE_NOTIFICATION_PREFERENCES_SUCCESS = "UPDATE_NOTIFICATION_PREFERENCES_SUCCESS",
  UPDATE_NOTIFICATION_PREFERENCES_FAILURE = "UPDATE_NOTIFICATION_PREFERENCES_FAILURE",
}
