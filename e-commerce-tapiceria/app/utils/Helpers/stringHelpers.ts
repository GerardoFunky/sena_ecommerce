/**
 * String utility helpers for the upholstery e-commerce application
 */

/**
 * Capitalizes the first letter of a string
 */
export const capitalize = (str: string): string => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Capitalizes the first letter of each word in a string
 */
export const capitalizeWords = (str: string): string => {
  if (!str) return "";
  return str
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
};

/**
 * Converts a string to camelCase
 */
export const toCamelCase = (str: string): string => {
  if (!str) return "";

  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => (c ? c.toUpperCase() : ""))
    .replace(/^(.)/, (c) => c.toLowerCase());
};

/**
 * Converts a string to snake_case
 */
export const toSnakeCase = (str: string): string => {
  if (!str) return "";

  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
};

/**
 * Converts a string to kebab-case
 */
export const toKebabCase = (str: string): string => {
  if (!str) return "";

  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
};

/**
 * Truncates a string to a specified length and adds an ellipsis
 */
export const truncate = (
  str: string,
  length: number,
  ellipsis: string = "..."
): string => {
  if (!str) return "";
  if (str.length <= length) return str;

  return str.slice(0, length) + ellipsis;
};

/**
 * Formats a string by replacing placeholders with values
 * Example: format("Hello, {name}!", { name: "John" }) => "Hello, John!"
 */
export const format = (
  template: string,
  values: Record<string, string | number | boolean>
): string => {
  if (!template) return "";

  return template.replace(/{([^{}]*)}/g, (match, key) => {
    const value = values[key.trim()];
    return value !== undefined ? String(value) : match;
  });
};

/**
 * Removes specified characters from a string
 */
export const removeChars = (str: string, chars: string): string => {
  if (!str) return "";

  const regex = new RegExp(
    `[${chars.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")}]`,
    "g"
  );
  return str.replace(regex, "");
};

/**
 * Removes all HTML tags from a string
 */
export const stripHtml = (html: string): string => {
  if (!html) return "";

  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
};

/**
 * Escapes HTML special characters in a string
 */
export const escapeHtml = (str: string): string => {
  if (!str) return "";

  const htmlEntities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };

  return str.replace(/[&<>"']/g, (match) => htmlEntities[match]);
};

/**
 * Reverses a string
 */
export const reverse = (str: string): string => {
  if (!str) return "";
  return str.split("").reverse().join("");
};

/**
 * Counts the occurrences of a substring in a string
 */
export const countOccurrences = (str: string, search: string): number => {
  if (!str || !search) return 0;

  let count = 0;
  let pos = str.indexOf(search);

  while (pos !== -1) {
    count++;
    pos = str.indexOf(search, pos + search.length);
  }

  return count;
};

/**
 * Checks if a string is a palindrome (reads the same backward as forward)
 */
export const isPalindrome = (str: string): boolean => {
  if (!str) return false;

  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = reverse(normalized);
  return normalized === reversed;
};

/**
 * Generates a random string of specified length
 */
export const randomString = (
  length: number = 10,
  charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
): string => {
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    result += charset.charAt(randomIndex);
  }

  return result;
};

/**
 * Masks a portion of a string (useful for credit cards, phones, etc.)
 */
export const maskString = (
  str: string,
  startChars: number = 0,
  endChars: number = 0,
  maskChar: string = "*"
): string => {
  if (!str) return "";

  const start = str.slice(0, startChars);
  const end = str.slice(-endChars);
  const masked = maskChar.repeat(
    Math.max(0, str.length - startChars - endChars)
  );

  return start + masked + end;
};

/**
 * Extracts a substring between two delimiter strings
 */
export const extractBetween = (
  str: string,
  startDelimiter: string,
  endDelimiter: string
): string => {
  if (!str) return "";

  const startIndex = str.indexOf(startDelimiter);
  if (startIndex === -1) return "";

  const endIndex = str.indexOf(
    endDelimiter,
    startIndex + startDelimiter.length
  );
  if (endIndex === -1) return "";

  return str.substring(startIndex + startDelimiter.length, endIndex);
};

/**
 * Normalizes whitespace in a string (removes extra spaces)
 */
export const normalizeWhitespace = (str: string): string => {
  if (!str) return "";

  return str.replace(/\s+/g, " ").trim();
};

export function cn(
  arg0: string,
  className: string | undefined
): string | undefined {
  throw new Error("Function not implemented.");
}
