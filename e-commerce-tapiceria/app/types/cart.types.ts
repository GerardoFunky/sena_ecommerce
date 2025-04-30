// cart.types.ts
// Type definitions for shopping cart functionality

import { ProductVariant } from "./product.types";

/**
 * Represents a single item in the shopping cart
 */
export interface CartItem {
  id: string;
  productId: string;
  variantId: string;
  name: string;
  imageUrl: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  maxQuantity: number;
  attributes: {
    material?: {
      id: string;
      name: string;
    };
    color?: {
      id: string;
      name: string;
      hexCode: string;
    };
    size?: {
      id: string;
      name: string;
      dimensions?: {
        width: number;
        height: number;
        depth?: number;
      };
    };
  };
  customization?: {
    notes?: string;
    additionalServices?: string[];
  };
}

/**
 * Represents a shipping method option
 */
export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
  estimatedDelivery: {
    min: number;
    max: number;
    unit: "hours" | "days" | "weeks";
  };
  available: boolean;
}

/**
 * Represents a promotional discount
 */
export interface CartDiscount {
  id: string;
  code: string;
  type: "percentage" | "fixed" | "free_shipping";
  value: number;
  description?: string;
  expiresAt?: string;
}

/**
 * Represents cart summary totals
 */
export interface CartSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
}

/**
 * Represents the complete shopping cart
 */
export interface Cart {
  id: string;
  userId?: string;
  sessionId?: string;
  items: CartItem[];
  itemCount: number;
  shippingAddress?: Address;
  billingAddress?: Address;
  shippingMethod?: ShippingMethod;
  selectedShippingMethodId?: string;
  availableShippingMethods?: ShippingMethod[];
  discount?: CartDiscount;
  summary: CartSummary;
  createdAt: string;
  updatedAt: string;
}

/**
 * Represents an address for shipping or billing
 */
export interface Address {
  id?: string;
  firstName: string;
  lastName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault?: boolean;
  label?: string;
}

/**
 * Represents an action to add an item to the cart
 */
export interface AddToCartPayload {
  productId: string;
  variantId: string;
  quantity: number;
  customization?: {
    notes?: string;
    additionalServices?: string[];
  };
}

/**
 * Represents an action to update an item in the cart
 */
export interface UpdateCartItemPayload {
  itemId: string;
  quantity?: number;
  customization?: {
    notes?: string;
    additionalServices?: string[];
  };
}

/**
 * Represents the cart state for the cart context
 */
export interface CartState {
  cart: Cart | null;
  loading: boolean;
  error: string | null;
  isCartOpen: boolean;
}

/**
 * Represents available cart action types
 */
export enum CartActionTypes {
  FETCH_CART_START = "FETCH_CART_START",
  FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
  FETCH_CART_FAILURE = "FETCH_CART_FAILURE",
  ADD_TO_CART_START = "ADD_TO_CART_START",
  ADD_TO_CART_SUCCESS = "ADD_TO_CART_SUCCESS",
  ADD_TO_CART_FAILURE = "ADD_TO_CART_FAILURE",
  UPDATE_CART_ITEM_START = "UPDATE_CART_ITEM_START",
  UPDATE_CART_ITEM_SUCCESS = "UPDATE_CART_ITEM_SUCCESS",
  UPDATE_CART_ITEM_FAILURE = "UPDATE_CART_ITEM_FAILURE",
  REMOVE_CART_ITEM_START = "REMOVE_CART_ITEM_START",
  REMOVE_CART_ITEM_SUCCESS = "REMOVE_CART_ITEM_SUCCESS",
  REMOVE_CART_ITEM_FAILURE = "REMOVE_CART_ITEM_FAILURE",
  CLEAR_CART_START = "CLEAR_CART_START",
  CLEAR_CART_SUCCESS = "CLEAR_CART_SUCCESS",
  CLEAR_CART_FAILURE = "CLEAR_CART_FAILURE",
  APPLY_DISCOUNT_START = "APPLY_DISCOUNT_START",
  APPLY_DISCOUNT_SUCCESS = "APPLY_DISCOUNT_SUCCESS",
  APPLY_DISCOUNT_FAILURE = "APPLY_DISCOUNT_FAILURE",
  REMOVE_DISCOUNT_START = "REMOVE_DISCOUNT_START",
  REMOVE_DISCOUNT_SUCCESS = "REMOVE_DISCOUNT_SUCCESS",
  REMOVE_DISCOUNT_FAILURE = "REMOVE_DISCOUNT_FAILURE",
  UPDATE_SHIPPING_METHOD_START = "UPDATE_SHIPPING_METHOD_START",
  UPDATE_SHIPPING_METHOD_SUCCESS = "UPDATE_SHIPPING_METHOD_SUCCESS",
  UPDATE_SHIPPING_METHOD_FAILURE = "UPDATE_SHIPPING_METHOD_FAILURE",
  SET_SHIPPING_ADDRESS_START = "SET_SHIPPING_ADDRESS_START",
  SET_SHIPPING_ADDRESS_SUCCESS = "SET_SHIPPING_ADDRESS_SUCCESS",
  SET_SHIPPING_ADDRESS_FAILURE = "SET_SHIPPING_ADDRESS_FAILURE",
  SET_BILLING_ADDRESS_START = "SET_BILLING_ADDRESS_START",
  SET_BILLING_ADDRESS_SUCCESS = "SET_BILLING_ADDRESS_SUCCESS",
  SET_BILLING_ADDRESS_FAILURE = "SET_BILLING_ADDRESS_FAILURE",
  TOGGLE_CART = "TOGGLE_CART",
}
