/**
 * Address validation utilities for the upholstery e-commerce application
 */

/**
 * Address field validation interface
 */
export interface AddressValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/**
 * Address data interface
 */
export interface AddressData {
  firstName?: string;
  lastName?: string;
  street?: string;
  apartment?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
  phone?: string;
}

/**
 * Validates a complete address object
 * @returns Object with validation result and field-specific error messages
 */
export const validateAddress = (
  address: AddressData
): AddressValidationResult => {
  const errors: Record<string, string> = {};

  // Required fields validation
  if (!address.firstName || address.firstName.trim().length < 1) {
    errors.firstName = "First name is required";
  }

  if (!address.lastName || address.lastName.trim().length < 1) {
    errors.lastName = "Last name is required";
  }

  if (!address.street || address.street.trim().length < 3) {
    errors.street = "Street address is required (minimum 3 characters)";
  }

  if (!address.city || address.city.trim().length < 2) {
    errors.city = "City is required";
  }

  if (!address.state || address.state.trim().length < 2) {
    errors.state = "State/Province is required";
  }

  // ZIP/Postal code validation
  if (!address.zipCode) {
    errors.zipCode = "ZIP/Postal code is required";
  } else if (!validateZipCode(address.zipCode, address.country)) {
    errors.zipCode = "Invalid ZIP/Postal code format";
  }

  // Country validation
  if (!address.country) {
    errors.country = "Country is required";
  }

  // Phone validation (if provided)
  if (address.phone && !validatePhoneNumber(address.phone)) {
    errors.phone = "Invalid phone number format";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Validates a ZIP/Postal code format based on the country
 */
export const validateZipCode = (zipCode: string, country?: string): boolean => {
  if (!zipCode) return false;

  // Trim and remove any excess spaces
  const trimmedZip = zipCode.trim();

  // Default to US format if no country specified
  const countryCode = country?.toUpperCase() || "US";

  // ZIP/Postal code regex patterns by country
  const zipRegexPatterns: Record<string, RegExp> = {
    US: /^\d{5}(-\d{4})?$/, // US: 12345 or 12345-6789
    CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/, // Canada: A1A 1A1 or A1A-1A1
    UK: /^[A-Za-z]{1,2}\d[A-Za-z\d]? ?\d[A-Za-z]{2}$/, // UK: AA1 1AA or AA11 1AA
    DE: /^\d{5}$/, // Germany: 12345
    FR: /^\d{5}$/, // France: 12345
    IT: /^\d{5}$/, // Italy: 12345
    ES: /^\d{5}$/, // Spain: 12345
    AU: /^\d{4}$/, // Australia: 1234
    MX: /^\d{5}$/, // Mexico: 12345
  };

  // If we have a specific regex for the country, use it
  if (countryCode in zipRegexPatterns) {
    return zipRegexPatterns[countryCode].test(trimmedZip);
  }

  // For countries not in our list, do a basic validation (allow alphanumeric, spaces, hyphens)
  return /^[A-Za-z0-9 -]{3,10}$/.test(trimmedZip);
};

/**
 * Validates a phone number format
 * Accepts various formats including international
 */
export const validatePhoneNumber = (phone: string): boolean => {
  if (!phone) return false;

  // Remove all non-alphanumeric characters for validation
  const cleanedPhone = phone.replace(/[^\d+]/g, "");

  // Basic phone validation - at least 7 digits, with optional + at start
  // This is deliberately lenient to accommodate international formats
  return /^(\+)?[\d]{7,15}$/.test(cleanedPhone);
};

/**
 * Validate a street address (basic validation)
 */
export const validateStreetAddress = (street: string): boolean => {
  if (!street || street.trim().length < 3) return false;

  // Street should have at least one number for a valid address
  // But we make this optional as some addresses might be "PO Box" etc.
  const hasNumber = /\d/.test(street);

  // More sophisticated validation could check for valid street types,
  // but that would require localized knowledge and complex logic

  return street.trim().length >= 3;
};

/**
 * Validate state/province format based on country
 */
export const validateState = (state: string, country?: string): boolean => {
  if (!state || state.trim().length < 1) return false;

  const countryCode = country?.toUpperCase() || "US";
  const trimmedState = state.trim();

  // US states should be 2-letter codes
  if (countryCode === "US") {
    return /^[A-Z]{2}$/.test(trimmedState.toUpperCase());
  }

  // Canadian provinces should be 2-letter codes
  if (countryCode === "CA") {
    return /^[A-Z]{2}$/.test(trimmedState.toUpperCase());
  }

  // Other countries might have different formats,
  // for now we'll just ensure it's not empty
  return trimmedState.length >= 1;
};

/**
 * Validates if an address might be a PO Box
 * (some shipping methods don't allow PO Boxes)
 */
export const isPOBox = (address: string): boolean => {
  if (!address) return false;

  // Various ways people might write a PO Box
  const poBoxPatterns = [
    /\bp\.?\s*o\.?\s*box\b/i,
    /\bpo\s*box\b/i,
    /\bpost\s*office\s*box\b/i,
    /\bp\.?\s*o\.?\s*b\.?\b/i,
    /\bpost\s*box\b/i,
  ];

  return poBoxPatterns.some((pattern) => pattern.test(address));
};
