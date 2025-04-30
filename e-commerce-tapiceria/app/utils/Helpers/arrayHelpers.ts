/**
 * Array utility helpers for the upholstery e-commerce application
 */

/**
 * Chunks an array into smaller arrays of specified size
 */
export const chunk = <T>(array: T[], size: number): T[][] => {
  if (!array.length || size < 1) return [];

  const chunks: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
};

/**
 * Removes duplicate items from an array
 */
export const removeDuplicates = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

/**
 * Removes duplicate objects from an array based on a specified key
 */
export const removeDuplicatesByKey = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
};

/**
 * Sorts an array of objects by a specified property
 */
export const sortByProperty = <T>(
  array: T[],
  property: keyof T,
  direction: "asc" | "desc" = "asc"
): T[] => {
  const sortedArray = [...array];

  sortedArray.sort((a, b) => {
    const valueA = a[property];
    const valueB = b[property];

    if (valueA === valueB) return 0;

    // Handle string comparison
    if (typeof valueA === "string" && typeof valueB === "string") {
      return direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    // Handle number comparison
    if (typeof valueA === "number" && typeof valueB === "number") {
      return direction === "asc" ? valueA - valueB : valueB - valueA;
    }

    // Handle date comparison
    if (valueA instanceof Date && valueB instanceof Date) {
      return direction === "asc"
        ? valueA.getTime() - valueB.getTime()
        : valueB.getTime() - valueA.getTime();
    }

    // Fallback for other types
    return direction === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });

  return sortedArray;
};

/**
 * Shuffles an array randomly
 */
export const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

/**
 * Returns the first n items from an array
 */
export const take = <T>(array: T[], n: number): T[] => {
  return array.slice(0, n);
};

/**
 * Returns the last n items from an array
 */
export const takeLast = <T>(array: T[], n: number): T[] => {
  return array.slice(Math.max(0, array.length - n));
};

/**
 * Finds the intersection of two arrays (items that exist in both)
 */
export const intersection = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter((item) => array2.includes(item));
};

/**
 * Finds the difference between two arrays (items in first that aren't in second)
 */
export const difference = <T>(array1: T[], array2: T[]): T[] => {
  return array1.filter((item) => !array2.includes(item));
};

/**
 * Groups an array of objects by a specified property
 */
export const groupBy = <T>(array: T[], key: keyof T): Record<string, T[]> => {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
};

/**
 * Flattens a nested array by one level
 */
export const flatten = <T>(array: T[][]): T[] => {
  return array.flat(1);
};

/**
 * Splits an array into two parts based on a predicate function
 * @returns A tuple with matching and non-matching items
 */
export const partition = <T>(
  array: T[],
  predicate: (item: T) => boolean
): [T[], T[]] => {
  const matches: T[] = [];
  const nonMatches: T[] = [];

  array.forEach((item) => {
    if (predicate(item)) {
      matches.push(item);
    } else {
      nonMatches.push(item);
    }
  });

  return [matches, nonMatches];
};

/**
 * Creates a sequence of numbers from start to end
 */
export const range = (
  start: number,
  end: number,
  step: number = 1
): number[] => {
  if (step === 0) throw new Error("Step cannot be zero");

  const length = Math.max(Math.ceil((end - start) / step), 0);
  const result = Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = start + i * step;
  }

  return result;
};

/**
 * Moves an item from one index to another in an array
 */
export const moveItem = <T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] => {
  if (
    fromIndex < 0 ||
    fromIndex >= array.length ||
    toIndex < 0 ||
    toIndex >= array.length
  ) {
    return [...array]; // Return copy if indices are invalid
  }

  const result = [...array];
  const [removed] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, removed);

  return result;
};
