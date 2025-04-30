/**
 * Date formatting utilities for the upholstery e-commerce application
 */

/**
 * Configuration options for formatDate
 */
interface FormatDateOptions {
  /** The locale to use for formatting (default: 'en-US') */
  locale?: string;
  /** Date format style (default: 'medium') */
  dateStyle?: "full" | "long" | "medium" | "short";
  /** Time format style (default: undefined - no time) */
  timeStyle?: "full" | "long" | "medium" | "short";
}

/**
 * Format a date using Intl.DateTimeFormat with configurable options
 */
export const formatDate = (
  date: Date | string | number,
  options: FormatDateOptions = {}
): string => {
  const { locale = "en-US", dateStyle = "medium", timeStyle } = options;

  try {
    const dateObject = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date");
    }

    const formatter = new Intl.DateTimeFormat(locale, {
      dateStyle,
      timeStyle,
    });

    return formatter.format(dateObject);
  } catch (error) {
    console.error("Error formatting date:", error);
    return String(date);
  }
};

/**
 * Format a date as a relative time string (e.g., "2 days ago")
 */
export const formatRelativeTime = (
  date: Date | string | number,
  locale: string = "en-US"
): string => {
  try {
    const dateObject = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date");
    }

    const now = new Date();
    const diffMs = now.getTime() - dateObject.getTime();

    // Convert to seconds
    const diffSecs = Math.floor(diffMs / 1000);

    // Less than a minute
    if (diffSecs < 60) {
      return "just now";
    }

    // Less than an hour
    if (diffSecs < 3600) {
      const mins = Math.floor(diffSecs / 60);
      return `${mins} minute${mins !== 1 ? "s" : ""} ago`;
    }

    // Less than a day
    if (diffSecs < 86400) {
      const hours = Math.floor(diffSecs / 3600);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    }

    // Less than a week
    if (diffSecs < 604800) {
      const days = Math.floor(diffSecs / 86400);
      return `${days} day${days !== 1 ? "s" : ""} ago`;
    }

    // Fall back to formatted date
    return formatDate(dateObject);
  } catch (error) {
    console.error("Error formatting relative time:", error);
    return String(date);
  }
};

/**
 * Format a date range between two dates
 */
export const formatDateRange = (
  startDate: Date | string | number,
  endDate: Date | string | number,
  options: FormatDateOptions = {}
): string => {
  try {
    return `${formatDate(startDate, options)} - ${formatDate(
      endDate,
      options
    )}`;
  } catch (error) {
    console.error("Error formatting date range:", error);
    return `${String(startDate)} - ${String(endDate)}`;
  }
};

/**
 * Format a date specifically for order history
 */
export const formatOrderDate = (
  date: Date | string | number,
  locale: string = "en-US"
): string => {
  try {
    const dateObject = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date");
    }

    // For orders we typically want a precise date with time
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(dateObject);
  } catch (error) {
    console.error("Error formatting order date:", error);
    return String(date);
  }
};

/**
 * Format a date for estimated delivery display
 */
export const formatDeliveryDate = (
  date: Date | string | number,
  locale: string = "en-US"
): string => {
  try {
    const dateObject = date instanceof Date ? date : new Date(date);

    if (isNaN(dateObject.getTime())) {
      throw new Error("Invalid date");
    }

    // For delivery estimates we typically don't need the time
    const formattedDate = new Intl.DateTimeFormat(locale, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }).format(dateObject);

    return `Estimated delivery: ${formattedDate}`;
  } catch (error) {
    console.error("Error formatting delivery date:", error);
    return String(date);
  }
};
