/**
 * Currency formatting utilities for the upholstery e-commerce application
 */

/**
 * Configuration options for formatCurrency
 */
interface FormatCurrencyOptions {
  /** The currency code (default: 'USD') */
  currency?: string;
  /** The locale to use for formatting (default: 'en-US') */
  locale?: string;
  /** Whether to show currency symbol (default: true) */
  showSymbol?: boolean;
  /** Number of decimal places (default: 2) */
  decimals?: number;
}

/**
 * Format a number as currency with various options
 */
export const formatCurrency = (
  amount: number,
  options: FormatCurrencyOptions = {}
): string => {
  const {
    currency = "USD",
    locale = "en-US",
    showSymbol = true,
    decimals = 2,
  } = options;

  try {
    return new Intl.NumberFormat(locale, {
      style: showSymbol ? "currency" : "decimal",
      currency: showSymbol ? currency : undefined,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(amount);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return `${amount}`;
  }
};

/**
 * Format a price range with consistent styling
 */
export const formatPriceRange = (
  minPrice: number,
  maxPrice: number,
  options: FormatCurrencyOptions = {}
): string => {
  return `${formatCurrency(minPrice, options)} - ${formatCurrency(
    maxPrice,
    options
  )}`;
};

/**
 * Calculate and format discount percentage
 */
export const formatDiscount = (
  originalPrice: number,
  salePrice: number
): string => {
  if (originalPrice <= 0 || salePrice >= originalPrice) {
    return "";
  }

  const discountPercent = Math.round(
    ((originalPrice - salePrice) / originalPrice) * 100
  );
  return `${discountPercent}% off`;
};

/**
 * Format a price with tax information
 */
export const formatPriceWithTax = (
  price: number,
  taxRate: number = 0.21,
  options: FormatCurrencyOptions = {}
): string => {
  const taxAmount = price * taxRate;
  const totalPrice = price + taxAmount;

  return `${formatCurrency(totalPrice, options)} (includes ${formatCurrency(
    taxAmount,
    options
  )} tax)`;
};

/**
 * Format a list of prices for product variants
 */
export const formatVariantPrices = (
  prices: number[],
  options: FormatCurrencyOptions = {}
): string => {
  if (!prices.length) return "";

  if (prices.length === 1) {
    return formatCurrency(prices[0], options);
  }

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  if (minPrice === maxPrice) {
    return formatCurrency(minPrice, options);
  }

  return formatPriceRange(minPrice, maxPrice, options);
};
