/**
 * Filters constants
 * Defines the filtering options used in product listings
 */

/**
 * Filter option interface
 */
export interface FilterOption {
  id: string;
  value: string;
  label: string;
}

/**
 * Filter group interface
 */
export interface FilterGroup {
  id: string;
  name: string;
  type: "checkbox" | "radio" | "range" | "color";
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
}

/**
 * Material type filter options
 */
export const MATERIAL_FILTERS: FilterOption[] = [
  { id: "material_cotton", value: "cotton", label: "Cotton" },
  { id: "material_polyester", value: "polyester", label: "Polyester" },
  { id: "material_linen", value: "linen", label: "Linen" },
  { id: "material_velvet", value: "velvet", label: "Velvet" },
  { id: "material_leather", value: "leather", label: "Leather" },
  { id: "material_microfiber", value: "microfiber", label: "Microfiber" },
  { id: "material_wool", value: "wool", label: "Wool" },
  { id: "material_silk", value: "silk", label: "Silk" },
  { id: "material_nylon", value: "nylon", label: "Nylon" },
  { id: "material_acrylic", value: "acrylic", label: "Acrylic" },
];

/**
 * Pattern filter options
 */
export const PATTERN_FILTERS: FilterOption[] = [
  { id: "pattern_solid", value: "solid", label: "Solid" },
  { id: "pattern_striped", value: "striped", label: "Striped" },
  { id: "pattern_floral", value: "floral", label: "Floral" },
  { id: "pattern_geometric", value: "geometric", label: "Geometric" },
  { id: "pattern_abstract", value: "abstract", label: "Abstract" },
  { id: "pattern_plaid", value: "plaid", label: "Plaid" },
  { id: "pattern_animal", value: "animal", label: "Animal Print" },
];

/**
 * Color filter options with hex values
 */
export const COLOR_FILTERS: Array<FilterOption & { hex: string }> = [
  { id: "color_beige", value: "beige", label: "Beige", hex: "#F5F5DC" },
  { id: "color_black", value: "black", label: "Black", hex: "#000000" },
  { id: "color_blue", value: "blue", label: "Blue", hex: "#0000FF" },
  { id: "color_brown", value: "brown", label: "Brown", hex: "#A52A2A" },
  {
    id: "color_burgundy",
    value: "burgundy",
    label: "Burgundy",
    hex: "#800020",
  },
  { id: "color_cream", value: "cream", label: "Cream", hex: "#FFFDD0" },
  { id: "color_gold", value: "gold", label: "Gold", hex: "#FFD700" },
  { id: "color_gray", value: "gray", label: "Gray", hex: "#808080" },
  { id: "color_green", value: "green", label: "Green", hex: "#008000" },
  { id: "color_navy", value: "navy", label: "Navy", hex: "#000080" },
  { id: "color_orange", value: "orange", label: "Orange", hex: "#FFA500" },
  { id: "color_pink", value: "pink", label: "Pink", hex: "#FFC0CB" },
  { id: "color_purple", value: "purple", label: "Purple", hex: "#800080" },
  { id: "color_red", value: "red", label: "Red", hex: "#FF0000" },
  { id: "color_silver", value: "silver", label: "Silver", hex: "#C0C0C0" },
  { id: "color_tan", value: "tan", label: "Tan", hex: "#D2B48C" },
  { id: "color_teal", value: "teal", label: "Teal", hex: "#008080" },
  { id: "color_white", value: "white", label: "White", hex: "#FFFFFF" },
  { id: "color_yellow", value: "yellow", label: "Yellow", hex: "#FFFF00" },
];

/**
 * Usage type filter options
 */
export const USAGE_FILTERS: FilterOption[] = [
  { id: "usage_residential", value: "residential", label: "Residential" },
  { id: "usage_commercial", value: "commercial", label: "Commercial" },
  { id: "usage_outdoor", value: "outdoor", label: "Outdoor" },
  { id: "usage_indoor", value: "indoor", label: "Indoor" },
  { id: "usage_heavyDuty", value: "heavy-duty", label: "Heavy Duty" },
];

/**
 * Durability rating filter options
 */
export const DURABILITY_FILTERS: FilterOption[] = [
  { id: "durability_1", value: "1", label: "1 Star" },
  { id: "durability_2", value: "2", label: "2 Stars" },
  { id: "durability_3", value: "3", label: "3 Stars" },
  { id: "durability_4", value: "4", label: "4 Stars" },
  { id: "durability_5", value: "5", label: "5 Stars" },
];

/**
 * Price range constants
 */
export const PRICE_RANGE = {
  MIN: 0,
  MAX: 5000,
  STEP: 10,
};

/**
 * All available filter groups
 */
export const FILTER_GROUPS: FilterGroup[] = [
  {
    id: "material",
    name: "Material",
    type: "checkbox",
    options: MATERIAL_FILTERS,
  },
  {
    id: "color",
    name: "Color",
    type: "color",
    options: COLOR_FILTERS,
  },
  {
    id: "pattern",
    name: "Pattern",
    type: "checkbox",
    options: PATTERN_FILTERS,
  },
  {
    id: "usage",
    name: "Usage",
    type: "checkbox",
    options: USAGE_FILTERS,
  },
  {
    id: "durability",
    name: "Durability",
    type: "radio",
    options: DURABILITY_FILTERS,
  },
  {
    id: "price",
    name: "Price",
    type: "range",
    min: PRICE_RANGE.MIN,
    max: PRICE_RANGE.MAX,
    step: PRICE_RANGE.STEP,
  },
];

/**
 * Get a filter group by ID
 * @param id - Filter group ID
 * @returns Filter group or undefined
 */
export const getFilterGroupById = (id: string): FilterGroup | undefined => {
  return FILTER_GROUPS.find((group) => group.id === id);
};

/**
 * Default sorting options
 */
export const SORT_OPTIONS: FilterOption[] = [
  { id: "sort_featured", value: "featured", label: "Featured" },
  { id: "sort_newest", value: "newest", label: "Newest" },
  { id: "sort_price_low", value: "price_low", label: "Price: Low to High" },
  { id: "sort_price_high", value: "price_high", label: "Price: High to Low" },
  { id: "sort_rating", value: "rating", label: "Top Rated" },
  { id: "sort_popularity", value: "popularity", label: "Most Popular" },
];

/**
 * Default pagination options
 */
export const PAGINATION_OPTIONS = {
  DEFAULT_PAGE_SIZE: 12,
  PAGE_SIZE_OPTIONS: [12, 24, 36, 48],
};
