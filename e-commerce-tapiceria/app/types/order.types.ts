// order.types.ts
// Type definitions for order-related data structures

import { Address, CartItem, ShippingMethod, CartDiscount } from "./cart.types";

/**
 * Represents the payment status of an order
 */
export type PaymentStatus =
  | "pending"
  | "processing"
  | "paid"
  | "refunded"
  | "partially_refunded"
  | "failed";

/**
 * Represents the fulfillment status of an order
 */
export type FulfillmentStatus =
  | "pending"
  | "processing"
  | "ready_for_pickup"
  | "partially_shipped"
  | "shipped"
  | "delivered"
  | "returned"
  | "cancelled";

/**
 * Represents a payment transaction for an order
 */
export interface OrderTransaction {
  id: string;
  type: "payment" | "refund" | "authorization";
  status: "pending" | "success" | "failed";
  amount: number;
  paymentMethod: string;
  paymentDetails?: {
    cardBrand?: string;
    last4?: string;
    expiryMonth?: number;
    expiryYear?: number;
  };
  transactionId?: string;
  gatewayResponse?: any;
  createdAt: string;
}

/**
 * Represents a shipping event in the order lifecycle
 */
export interface ShippingEvent {
  id: string;
  type:
    | "label_created"
    | "picked_up"
    | "in_transit"
    | "out_for_delivery"
    | "delivered"
    | "failed_attempt"
    | "exception";
  status: string;
  location?: string;
  description?: string;
  trackingNumber?: string;
  timestamp: string;
}

/**
 * Represents a shipment for an order
 */
export interface OrderShipment {
  id: string;
  items: {
    orderItemId: string;
    quantity: number;
  }[];
  carrier: string;
  trackingNumber: string;
  trackingUrl?: string;
  shippingMethod: string;
  events: ShippingEvent[];
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
  shippedAt: string;
}

/**
 * Represents an individual item in an order
 */
export interface OrderItem extends Omit<CartItem, "id" | "maxQuantity"> {
  id: string;
  orderItemStatus:
    | "pending"
    | "processing"
    | "shipped"
    | "delivered"
    | "returned"
    | "cancelled";
  price: number;
  totalPrice: number; // Price × quantity
  discountAmount: number;
  taxAmount: number;
  shipmentId?: string;
  estimatedShipDate?: string;
  actualShipDate?: string;
  returnReason?: string;
  customizations?: Record<string, any>;
}

/**
 * Represents a custom service added to an order
 */
export interface OrderService {
  id: string;
  name: string;
  description?: string;
  price: number;
}

/**
 * Represents an order total breakdown
 */
export interface OrderTotals {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  servicesTotal: number;
  total: number;
}

/**
 * Represents a note on an order
 */
export interface OrderNote {
  id: string;
  authorType: "customer" | "admin" | "system";
  message: string;
  isPublic: boolean;
  createdAt: string;
}

/**
 * Represents a complete order
 */
export interface Order {
  id: string;
  orderNumber: string;
  userId?: string;
  customerEmail: string;
  customerName: string;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  shippingMethod: ShippingMethod;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: FulfillmentStatus;
  transactions: OrderTransaction[];
  shipments: OrderShipment[];
  discount?: CartDiscount;
  services?: OrderService[];
  totals: OrderTotals;
  notes: OrderNote[];
  estimatedDeliveryDate?: string;
  customRequirements?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
  cancelledAt?: string;
  cancelReason?: string;
}

/**
 * Represents parameters for searching/filtering orders
 */
export interface OrderSearchParams {
  orderNumber?: string;
  customerEmail?: string;
  customerId?: string;
  status?: FulfillmentStatus | PaymentStatus;
  fromDate?: string;
  toDate?: string;
  minTotal?: number;
  maxTotal?: number;
  page?: number;
  limit?: number;
  sortBy?: "date_asc" | "date_desc" | "total_asc" | "total_desc" | "status";
}

/**
 * Represents a paginated order response
 */
export interface PaginatedOrders {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/**
 * Represents data for creating a new order
 */
export interface CreateOrderInput {
  cartId: string;
  userId?: string;
  email: string;
  shippingAddressId?: string;
  billingAddressId?: string;
  shippingAddress?: Address;
  billingAddress?: Address;
  shippingMethodId: string;
  paymentMethodId?: string;
  paymentMethod?: {
    type: string;
    [key: string]: any;
  };
  discountCode?: string;
  notes?: string;
  customRequirements?: string;
}

/**
 * Represents order update input
 */
export interface UpdateOrderInput {
  paymentStatus?: PaymentStatus;
  fulfillmentStatus?: FulfillmentStatus;
  shippingAddress?: Partial<Address>;
  billingAddress?: Partial<Address>;
  notes?: OrderNote[];
  customRequirements?: string;
}
