/**
 * Text formatting utilities for the upholstery e-commerce application
 */

/**
 * Convert a string to title case (capitalize first letter of each word)
 */
export const toTitleCase = (text: string): string => {
  if (!text) return "";

  return text
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Truncate text to a specified length with ellipsis
 */
export const truncateText = (
  text: string,
  maxLength: number = 100,
  ellipsis: string = "..."
): string => {
  if (!text || text.length <= maxLength) return text || "";

  return text.slice(0, maxLength) + ellipsis;
};

/**
 * Format product name for display (handles special characters and formatting)
 */
export const formatProductName = (name: string): string => {
  if (!name) return "";

  // Convert to title case
  let formattedName = toTitleCase(name);

  // Handle special characters and formatting for product names
  // For example, ensure correct capitalization for specific terms in upholstery domain
  const upholsteryTerms: Record<string, string> = {
    Pu: "PU",
    Pvc: "PVC",
    Uv: "UV",
    Faux: "Faux",
    Eco: "Eco",
    Microfiber: "Microfiber",
  };

  Object.entries(upholsteryTerms).forEach(([term, replacement]) => {
    const regex = new RegExp(`\\b${term}\\b`, "gi");
    formattedName = formattedName.replace(regex, replacement);
  });

  return formattedName;
};

/**
 * Format a SKU (Stock Keeping Unit) code consistently
 */
export const formatSKU = (sku: string): string => {
  if (!sku) return "";

  // Convert to uppercase and ensure consistent formatting
  return sku.toUpperCase().trim();
};

/**
 * Format a product description for HTML display
 * Converts newlines to <br> tags and adds paragraph tags
 */
export const formatDescription = (description: string): string => {
  if (!description) return "";

  // Split by double newlines for paragraphs
  const paragraphs = description
    .split(/\n\n+/)
    .filter(Boolean)
    .map((p) => `<p>${p.replace(/\n/g, "<br>")}</p>`);

  return paragraphs.join("");
};

/**
 * Generate a URL-friendly slug from text
 */
export const slugify = (text: string): string => {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

/**
 * Format a phone number consistently
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  if (!phoneNumber) return "";

  // Remove all non-numeric characters
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Format as (XXX) XXX-XXXX for US numbers
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6
    )}`;
  }

  // Format as +X (XXX) XXX-XXXX for international
  if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(
      4,
      7
    )}-${cleaned.slice(7)}`;
  }

  // Return original if we can't format it
  return phoneNumber;
};

/**
 * Format an address for display
 */
export const formatAddress = (address: {
  street: string;
  city: string;
  state: string;
  zip: string;
  country?: string;
}): string => {
  const { street, city, state, zip, country } = address;
  let formatted = `${street}, ${city}, ${state} ${zip}`;

  if (country) {
    formatted += `, ${country}`;
  }

  return formatted;
};

/**
 * Format dimensions (for product specifications)
 */
export const formatDimensions = (
  width?: number,
  height?: number,
  depth?: number,
  unit: string = "in"
): string => {
  const dimensions = [];

  if (width !== undefined) dimensions.push(`W: ${width}${unit}`);
  if (height !== undefined) dimensions.push(`H: ${height}${unit}`);
  if (depth !== undefined) dimensions.push(`D: ${depth}${unit}`);

  return dimensions.length ? dimensions.join(" × ") : "";
};
