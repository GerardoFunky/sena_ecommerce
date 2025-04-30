/**
 * URL utility helpers for the upholstery e-commerce application
 */

/**
 * Parse URL query parameters into an object
 */
export const parseQueryParams = (url: string): Record<string, string> => {
  const params: Record<string, string> = {};

  try {
    const urlObj = new URL(url);
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
  } catch (e) {
    // Handle relative URLs by creating a dummy base
    try {
      const fullUrl = new URL(url, "http://example.com");
      fullUrl.searchParams.forEach((value, key) => {
        params[key] = value;
      });
    } catch {
      // If both attempts fail, try manual parsing
      const queryString = url.split("?")[1] || "";
      if (queryString) {
        queryString.split("&").forEach((pair) => {
          const [key, value] = pair.split("=");
          if (key) {
            params[decodeURIComponent(key)] = value
              ? decodeURIComponent(value)
              : "";
          }
        });
      }
    }
  }

  return params;
};

/**
 * Build a URL with query parameters
 */
export const buildUrl = (
  baseUrl: string,
  params: Record<string, string | number | boolean | undefined | null>
): string => {
  try {
    const url = new URL(baseUrl);

    // Add each parameter if it has a value
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.append(key, String(value));
      }
    });

    return url.toString();
  } catch (e) {
    // Handle relative URLs
    const queryParts = Object.entries(params)
      .filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      );

    if (queryParts.length === 0) {
      return baseUrl;
    }

    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}${queryParts.join("&")}`;
  }
};

/**
 * Extract path parameters from a URL template
 * Example: extractPathParams('/products/:category/:id', '/products/furniture/123')
 * Returns: { category: 'furniture', id: '123' }
 */
export const extractPathParams = (
  template: string,
  url: string
): Record<string, string> => {
  const params: Record<string, string> = {};

  // Convert template to regex pattern
  const pattern = template
    .replace(/\//g, "\\/") // Escape forward slashes
    .replace(/:([^/]+)/g, "([^/]+)"); // Replace :param with capture groups

  // Extract parameter names from the template
  const paramNames =
    template.match(/:([^/]+)/g)?.map((param) => param.substring(1)) || [];

  // Create regex with the pattern
  const regex = new RegExp(`^${pattern}$`);

  // Extract values from the URL
  const matches = url.match(regex);

  if (matches && matches.length > 1) {
    // Map captured values to parameter names
    paramNames.forEach((name, index) => {
      params[name] = matches[index + 1];
    });
  }

  return params;
};

/**
 * Check if a URL is external (from a different origin)
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false;

  try {
    // For absolute URLs, compare origins
    if (url.startsWith("http://") || url.startsWith("https://")) {
      const currentOrigin = window.location.origin;
      const urlOrigin = new URL(url).origin;
      return urlOrigin !== currentOrigin;
    }

    // For protocol-relative URLs (//example.com)
    if (url.startsWith("//")) {
      return true;
    }

    // URLs starting with these are always external
    return (
      url.startsWith("mailto:") ||
      url.startsWith("tel:") ||
      url.startsWith("sms:")
    );
  } catch (e) {
    // If parsing fails, consider it internal
    return false;
  }
};

/**
 * Gets a specific parameter from the URL
 */
export const getQueryParam = (
  paramName: string,
  url?: string
): string | null => {
  try {
    const urlToUse =
      url || (typeof window !== "undefined" ? window.location.href : "");
    const urlObj = new URL(urlToUse);
    return urlObj.searchParams.get(paramName);
  } catch (e) {
    // Fallback for server-side or if URL parsing fails
    const params = parseQueryParams(url || "");
    return params[paramName] || null;
  }
};

/**
 * Updates or adds a query parameter to the current URL without page refresh
 */
export const updateQueryParam = (
  paramName: string,
  value: string | number | boolean | null | undefined,
  options?: {
    replace?: boolean; // Whether to replace current history entry
    url?: string; // Optional URL to modify instead of current
  }
): string => {
  const { replace = false, url } = options || {};

  try {
    const urlToUse =
      url || (typeof window !== "undefined" ? window.location.href : "");
    const urlObj = new URL(urlToUse);

    // Remove the parameter if value is null/undefined, otherwise set it
    if (value === null || value === undefined) {
      urlObj.searchParams.delete(paramName);
    } else {
      urlObj.searchParams.set(paramName, String(value));
    }

    const newUrl = urlObj.toString();

    // Update browser URL if in browser environment and no custom URL provided
    if (typeof window !== "undefined" && !url) {
      if (replace) {
        window.history.replaceState({}, "", newUrl);
      } else {
        window.history.pushState({}, "", newUrl);
      }
    }

    return newUrl;
  } catch (e) {
    // Return original URL on error
    return url || (typeof window !== "undefined" ? window.location.href : "");
  }
};

/**
 * Removes a query parameter from a URL
 */
export const removeQueryParam = (paramName: string, url?: string): string => {
  try {
    const urlToUse =
      url || (typeof window !== "undefined" ? window.location.href : "");
    const urlObj = new URL(urlToUse);

    urlObj.searchParams.delete(paramName);

    return urlObj.toString();
  } catch (e) {
    // Return original URL on error
    return url || (typeof window !== "undefined" ? window.location.href : "");
  }
};

/**
 * Creates a URL slug from a string (for SEO-friendly URLs)
 */
export const createSlug = (text: string): string => {
  if (!text) return "";

  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special chars except whitespace and hyphens
    .replace(/\s+/g, "-") // Replace whitespace with hyphens
    .replace(/-+/g, "-") // Remove consecutive hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/**
 * Join URL path segments correctly handling slashes
 */
export const joinPaths = (...paths: string[]): string => {
  return paths
    .filter(Boolean)
    .map((path) => path.replace(/^\/+|\/+$/g, ""))
    .filter(Boolean)
    .join("/");
};

/**
 * Get the base URL (protocol + host) from a URL
 */
export const getBaseUrl = (url: string): string => {
  try {
    return new URL(url).origin;
  } catch (e) {
    return "";
  }
};
