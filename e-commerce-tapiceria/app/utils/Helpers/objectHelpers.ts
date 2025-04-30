/**
 * Utility functions for working with objects in the application
 */

/**
 * Safely gets a nested value from an object using a path string
 * @param obj - The object to retrieve the value from
 * @param path - The path to the property, e.g. 'user.address.street'
 * @param defaultValue - Value to return if the path doesn't exist
 * @returns The value at the path or the default value
 */
export const getNestedValue = <T = any>(
  obj: Record<string, any>,
  path: string,
  defaultValue: T = null as unknown as T
): T => {
  if (!obj || !path) return defaultValue;

  const keys = path.split(".");
  let current = obj;

  for (const key of keys) {
    if (
      current === null ||
      current === undefined ||
      typeof current !== "object"
    ) {
      return defaultValue;
    }
    current = current[key];
  }

  return current !== undefined ? (current as T) : defaultValue;
};

/**
 * Deep clones an object
 * @param obj - The object to clone
 * @returns A new deep copy of the object
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone) as unknown as T;
  }

  const cloned = {} as T;

  Object.entries(obj as Record<string, any>).forEach(([key, value]) => {
    (cloned as any)[key] = deepClone(value);
  });

  return cloned;
};

/**
 * Removes undefined properties from an object
 * @param obj - The object to clean
 * @returns A new object without undefined values
 */
export const removeUndefined = <T extends Record<string, any>>(
  obj: T
): Partial<T> => {
  const result = {} as Partial<T>;

  Object.entries(obj).forEach(([key, value]) => {
    if (value !== undefined) {
      result[key as keyof T] = value;
    }
  });

  return result;
};

/**
 * Compares two objects for equality
 * @param obj1 - First object to compare
 * @param obj2 - Second object to compare
 * @returns Boolean indicating if the objects are equal
 */
export const isEqual = (obj1: any, obj2: any): boolean => {
  if (obj1 === obj2) return true;

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  return keys1.every(
    (key) =>
      Object.prototype.hasOwnProperty.call(obj2, key) &&
      isEqual(obj1[key], obj2[key])
  );
};

/**
 * Merges two objects deeply
 * @param target - The target object
 * @param source - The source object
 * @returns A new object with merged properties
 */
export const mergeDeep = (target: any, source: any): any => ({
  ...target,
  ...source,
  ...(Object.keys(source).length > 0
    ? Object.fromEntries(
        Object.entries(source).map(([key, value]) => [
          key,
          mergeDeep(target[key], value),
        ])
      )
    : {}),
});

/**
 * Picks specified properties from an object
 * @param obj - The source object
 * @param keys - Array of keys to pick
 * @returns A new object with only the specified properties
 */
export const pick = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  });

  return result;
};

/**
 * Omits specified properties from an object
 * @param obj - The source object
 * @param keys - Array of keys to omit
 * @returns A new object without the specified properties
 */
export const omit = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj } as Omit<T, K>;

  keys.forEach((key) => {
    delete result[key as unknown as keyof Omit<T, K>];
  });

  return result;
};

/**
 * Transforms an object by applying a function to each value
 * @param obj - The object to transform
 * @param fn - The function to apply to each value
 * @returns A new object with transformed values
 */
export const mapValues = <T extends Record<string, any>, R>(
  obj: T,
  fn: (value: T[keyof T], key: string, obj: T) => R
): Record<keyof T, R> => {
  const result = {} as Record<keyof T, R>;

  Object.entries(obj).forEach(([key, value]) => {
    result[key as keyof T] = fn(value, key, obj);
  });

  return result;
};

/**
 * Flattens a nested object structure
 * @param obj - The nested object
 * @param prefix - Optional prefix for keys
 * @returns A flattened object with dot notation keys
 */
export const flattenObject = (
  obj: Record<string, any>,
  prefix = ""
): Record<string, any> => {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (
      obj[key] &&
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      Object.keys(obj[key]).length > 0
    ) {
      Object.assign(acc, flattenObject(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = obj[key];
    }

    return acc;
  }, {} as Record<string, any>);
};

/**
 * Groups an array of objects by a specific key
 * @param array - Array of objects
 * @param key - The key to group by
 * @returns An object with groups
 */
export const groupBy = <T extends Record<string, any>, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    result[groupKey] = result[groupKey] || [];
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
};
