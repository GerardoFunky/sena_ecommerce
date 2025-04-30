/**
 * Error constants
 * Centralized error messages and codes used throughout the application
 */

/**
 * Error code enum
 */
export enum ErrorCode {
  // API related errors
  API_ERROR = "API_ERROR",
  NETWORK_ERROR = "NETWORK_ERROR",
  TIMEOUT_ERROR = "TIMEOUT_ERROR",
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  SERVER_ERROR = "SERVER_ERROR",

  // Authentication errors
  AUTH_INVALID_CREDENTIALS = "AUTH_INVALID_CREDENTIALS",
  AUTH_EMAIL_IN_USE = "AUTH_EMAIL_IN_USE",
  AUTH_WEAK_PASSWORD = "AUTH_WEAK_PASSWORD",
  AUTH_EXPIRED_TOKEN = "AUTH_EXPIRED_TOKEN",
  AUTH_INVALID_TOKEN = "AUTH_INVALID_TOKEN",
  AUTH_REQUIRED = "AUTH_REQUIRED",

  // Cart errors
  CART_ITEM_NOT_FOUND = "CART_ITEM_NOT_FOUND",
  CART_ADD_FAILED = "CART_ADD_FAILED",
  CART_UPDATE_FAILED = "CART_UPDATE_FAILED",
  CART_REMOVE_FAILED = "CART_REMOVE_FAILED",
  CART_STOCK_UNAVAILABLE = "CART_STOCK_UNAVAILABLE",

  // Checkout errors
  CHECKOUT_PAYMENT_FAILED = "CHECKOUT_PAYMENT_FAILED",
  CHECKOUT_SHIPPING_UNAVAILABLE = "CHECKOUT_SHIPPING_UNAVAILABLE",
  CHECKOUT_ADDRESS_INVALID = "CHECKOUT_ADDRESS_INVALID",
  CHECKOUT_CART_EMPTY = "CHECKOUT_CART_EMPTY",

  // Product errors
  PRODUCT_NOT_FOUND = "PRODUCT_NOT_FOUND",
  PRODUCT_UNAVAILABLE = "PRODUCT_UNAVAILABLE",
  PRODUCT_INVALID_OPTION = "PRODUCT_INVALID_OPTION",

  // Form validation errors
  FORM_INVALID_EMAIL = "FORM_INVALID_EMAIL",
  FORM_INVALID_PASSWORD = "FORM_INVALID_PASSWORD",
  FORM_REQUIRED_FIELD = "FORM_REQUIRED_FIELD",
  FORM_INVALID_PHONE = "FORM_INVALID_PHONE",
  FORM_INVALID_ZIP = "FORM_INVALID_ZIP",

  // General errors
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  OPERATION_CANCELED = "OPERATION_CANCELED",
  FEATURE_UNAVAILABLE = "FEATURE_UNAVAILABLE",
}

/**
 * Error message interface
 */
export interface ErrorMessage {
  code: ErrorCode;
  message: string;
  userFriendlyMessage?: string;
  severity: "error" | "warning" | "info";
}

/**
 * Error messages map
 */
export const ERROR_MESSAGES: Record<ErrorCode, ErrorMessage> = {
  // API related errors
  [ErrorCode.API_ERROR]: {
    code: ErrorCode.API_ERROR,
    message: "An API error occurred.",
    userFriendlyMessage: "Something went wrong. Please try again later.",
    severity: "error",
  },
  [ErrorCode.NETWORK_ERROR]: {
    code: ErrorCode.NETWORK_ERROR,
    message: "A network error occurred.",
    userFriendlyMessage: "Please check your internet connection and try again.",
    severity: "error",
  },
  [ErrorCode.TIMEOUT_ERROR]: {
    code: ErrorCode.TIMEOUT_ERROR,
    message: "The request timed out.",
    userFriendlyMessage:
      "The server is taking too long to respond. Please try again later.",
    severity: "error",
  },
  [ErrorCode.UNAUTHORIZED]: {
    code: ErrorCode.UNAUTHORIZED,
    message: "Unauthorized access.",
    userFriendlyMessage: "Please log in to continue.",
    severity: "warning",
  },
  [ErrorCode.FORBIDDEN]: {
    code: ErrorCode.FORBIDDEN,
    message: "Access forbidden.",
    userFriendlyMessage: "You don't have permission to access this resource.",
    severity: "error",
  },
  [ErrorCode.NOT_FOUND]: {
    code: ErrorCode.NOT_FOUND,
    message: "Resource not found.",
    userFriendlyMessage: "The requested resource could not be found.",
    severity: "error",
  },
  [ErrorCode.VALIDATION_ERROR]: {
    code: ErrorCode.VALIDATION_ERROR,
    message: "Validation error.",
    userFriendlyMessage: "Please check the form for errors.",
    severity: "warning",
  },
  [ErrorCode.SERVER_ERROR]: {
    code: ErrorCode.SERVER_ERROR,
    message: "Server error.",
    userFriendlyMessage:
      "Something went wrong on our end. Please try again later.",
    severity: "error",
  },

  // Authentication errors
  [ErrorCode.AUTH_INVALID_CREDENTIALS]: {
    code: ErrorCode.AUTH_INVALID_CREDENTIALS,
    message: "Invalid email or password.",
    userFriendlyMessage: "The email or password you entered is incorrect.",
    severity: "error",
  },
  [ErrorCode.AUTH_EMAIL_IN_USE]: {
    code: ErrorCode.AUTH_EMAIL_IN_USE,
    message: "Email already in use.",
    userFriendlyMessage:
      "This email is already registered. Please try logging in or use a different email.",
    severity: "warning",
  },
  [ErrorCode.AUTH_WEAK_PASSWORD]: {
    code: ErrorCode.AUTH_WEAK_PASSWORD,
    message: "Password is too weak.",
    userFriendlyMessage:
      "Please use a stronger password with at least 8 characters, including numbers and symbols.",
    severity: "warning",
  },
  [ErrorCode.AUTH_EXPIRED_TOKEN]: {
    code: ErrorCode.AUTH_EXPIRED_TOKEN,
    message: "Authentication token expired.",
    userFriendlyMessage: "Your session has expired. Please log in again.",
    severity: "warning",
  },
  [ErrorCode.AUTH_INVALID_TOKEN]: {
    code: ErrorCode.AUTH_INVALID_TOKEN,
    message: "Invalid authentication token.",
    userFriendlyMessage: "Please log in again to continue.",
    severity: "warning",
  },
  [ErrorCode.AUTH_REQUIRED]: {
    code: ErrorCode.AUTH_REQUIRED,
    message: "Authentication required.",
    userFriendlyMessage: "Please log in to access this feature.",
    severity: "info",
  },

  // Cart errors
  [ErrorCode.CART_ITEM_NOT_FOUND]: {
    code: ErrorCode.CART_ITEM_NOT_FOUND,
    message: "Cart item not found.",
    userFriendlyMessage:
      "The item you're trying to update is no longer in your cart.",
    severity: "warning",
  },
  [ErrorCode.CART_ADD_FAILED]: {
    code: ErrorCode.CART_ADD_FAILED,
    message: "Failed to add item to cart.",
    userFriendlyMessage:
      "There was a problem adding this item to your cart. Please try again.",
    severity: "error",
  },
  [ErrorCode.CART_UPDATE_FAILED]: {
    code: ErrorCode.CART_UPDATE_FAILED,
    message: "Failed to update cart.",
    userFriendlyMessage:
      "There was a problem updating your cart. Please try again.",
    severity: "error",
  },
  [ErrorCode.CART_REMOVE_FAILED]: {
    code: ErrorCode.CART_REMOVE_FAILED,
    message: "Failed to remove item from cart.",
    userFriendlyMessage:
      "There was a problem removing this item from your cart. Please try again.",
    severity: "error",
  },
  [ErrorCode.CART_STOCK_UNAVAILABLE]: {
    code: ErrorCode.CART_STOCK_UNAVAILABLE,
    message: "Item out of stock or insufficient quantity.",
    userFriendlyMessage:
      "Some items in your cart are no longer available in the requested quantity.",
    severity: "warning",
  },

  // Checkout errors
  [ErrorCode.CHECKOUT_PAYMENT_FAILED]: {
    code: ErrorCode.CHECKOUT_PAYMENT_FAILED,
    message: "Payment processing failed.",
    userFriendlyMessage:
      "We couldn't process your payment. Please try again or use a different payment method.",
    severity: "error",
  },
  [ErrorCode.CHECKOUT_SHIPPING_UNAVAILABLE]: {
    code: ErrorCode.CHECKOUT_SHIPPING_UNAVAILABLE,
    message: "Shipping method unavailable.",
    userFriendlyMessage:
      "The selected shipping method is not available for your address. Please choose another option.",
    severity: "warning",
  },
  [ErrorCode.CHECKOUT_ADDRESS_INVALID]: {
    code: ErrorCode.CHECKOUT_ADDRESS_INVALID,
    message: "Invalid shipping address.",
    userFriendlyMessage: "Please provide a valid shipping address.",
    severity: "warning",
  },
  [ErrorCode.CHECKOUT_CART_EMPTY]: {
    code: ErrorCode.CHECKOUT_CART_EMPTY,
    message: "Cart is empty.",
    userFriendlyMessage:
      "Your cart is empty. Add items before proceeding to checkout.",
    severity: "info",
  },

  // Product errors
  [ErrorCode.PRODUCT_NOT_FOUND]: {
    code: ErrorCode.PRODUCT_NOT_FOUND,
    message: "Product not found.",
    userFriendlyMessage:
      "The product you're looking for is not available or has been removed.",
    severity: "error",
  },
  [ErrorCode.PRODUCT_UNAVAILABLE]: {
    code: ErrorCode.PRODUCT_UNAVAILABLE,
    message: "Product is currently unavailable.",
    userFriendlyMessage:
      "This product is currently out of stock or unavailable.",
    severity: "warning",
  },
  [ErrorCode.PRODUCT_INVALID_OPTION]: {
    code: ErrorCode.PRODUCT_INVALID_OPTION,
    message: "Invalid product option selected.",
    userFriendlyMessage: "Please select valid options for this product.",
    severity: "warning",
  },

  // Form validation errors
  [ErrorCode.FORM_INVALID_EMAIL]: {
    code: ErrorCode.FORM_INVALID_EMAIL,
    message: "Invalid email format.",
    userFriendlyMessage: "Please enter a valid email address.",
    severity: "warning",
  },
  [ErrorCode.FORM_INVALID_PASSWORD]: {
    code: ErrorCode.FORM_INVALID_PASSWORD,
    message: "Invalid password format.",
    userFriendlyMessage:
      "Password must be at least 8 characters long and include at least one number and one symbol.",
    severity: "warning",
  },
  [ErrorCode.FORM_REQUIRED_FIELD]: {
    code: ErrorCode.FORM_REQUIRED_FIELD,
    message: "Required field missing.",
    userFriendlyMessage: "Please fill in all required fields.",
    severity: "warning",
  },
  [ErrorCode.FORM_INVALID_PHONE]: {
    code: ErrorCode.FORM_INVALID_PHONE,
    message: "Invalid phone number format.",
    userFriendlyMessage: "Please enter a valid phone number.",
    severity: "warning",
  },
  [ErrorCode.FORM_INVALID_ZIP]: {
    code: ErrorCode.FORM_INVALID_ZIP,
    message: "Invalid ZIP/postal code.",
    userFriendlyMessage: "Please enter a valid ZIP or postal code.",
    severity: "warning",
  },

  // General errors
  [ErrorCode.UNKNOWN_ERROR]: {
    code: ErrorCode.UNKNOWN_ERROR,
    message: "An unknown error occurred.",
    userFriendlyMessage:
      "Something unexpected happened. Please try again later.",
    severity: "error",
  },
  [ErrorCode.OPERATION_CANCELED]: {
    code: ErrorCode.OPERATION_CANCELED,
    message: "Operation was canceled.",
    userFriendlyMessage: "The operation was canceled.",
    severity: "info",
  },
  [ErrorCode.FEATURE_UNAVAILABLE]: {
    code: ErrorCode.FEATURE_UNAVAILABLE,
    message: "Feature is currently unavailable.",
    userFriendlyMessage:
      "This feature is currently unavailable. Please try again later.",
    severity: "info",
  },
};

/**
 * Helper function to get an error message object by code
 * @param code - Error code
 * @returns ErrorMessage object
 */
export const getErrorMessage = (code: ErrorCode): ErrorMessage => {
  return ERROR_MESSAGES[code] || ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR];
};

/**
 * Helper function to handle API errors
 * @param error - Error from API
 * @returns ErrorMessage object
 */
export const handleApiError = (error: any): ErrorMessage => {
  if (!error) {
    return ERROR_MESSAGES[ErrorCode.UNKNOWN_ERROR];
  }

  // Check for network errors
  if (!error.response) {
    return ERROR_MESSAGES[ErrorCode.NETWORK_ERROR];
  }

  // Handle based on status code
  const status = error.response.status;

  switch (status) {
    case 401:
      return ERROR_MESSAGES[ErrorCode.UNAUTHORIZED];
    case 403:
      return ERROR_MESSAGES[ErrorCode.FORBIDDEN];
    case 404:
      return ERROR_MESSAGES[ErrorCode.NOT_FOUND];
    case 422:
      return ERROR_MESSAGES[ErrorCode.VALIDATION_ERROR];
    case 500:
    case 502:
    case 503:
    case 504:
      return ERROR_MESSAGES[ErrorCode.SERVER_ERROR];
    default:
      return ERROR_MESSAGES[ErrorCode.API_ERROR];
  }
};

/**
 * Custom error class for application errors
 */
export class AppError extends Error {
  code: ErrorCode;
  userFriendlyMessage: string;
  severity: "error" | "warning" | "info";

  constructor(errorCode: ErrorCode, additionalInfo?: string) {
    const errorMessage = getErrorMessage(errorCode);
    super(
      additionalInfo
        ? `${errorMessage.message} ${additionalInfo}`
        : errorMessage.message
    );

    this.name = "AppError";
    this.code = errorCode;
    this.userFriendlyMessage =
      errorMessage.userFriendlyMessage || errorMessage.message;
    this.severity = errorMessage.severity;

    // Ensures proper stack trace in modern JS engines
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

/**
 * Create an instance of AppError
 * @param code - Error code
 * @param additionalInfo - Optional additional information
 * @returns AppError instance
 */
export const createError = (
  code: ErrorCode,
  additionalInfo?: string
): AppError => {
  return new AppError(code, additionalInfo);
};
