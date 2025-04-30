/**
 * Password validation utilities for the upholstery e-commerce application
 */

/**
 * Password validation options
 */
export interface PasswordValidationOptions {
  /** Minimum length requirement (default: 8) */
  minLength?: number;
  /** Maximum length allowed (default: 128) */
  maxLength?: number;
  /** Require at least one uppercase letter (default: true) */
  requireUppercase?: boolean;
  /** Require at least one lowercase letter (default: true) */
  requireLowercase?: boolean;
  /** Require at least one number (default: true) */
  requireNumbers?: boolean;
  /** Require at least one special character (default: true) */
  requireSpecialChars?: boolean;
  /** Disallow common passwords (default: true) */
  disallowCommonPasswords?: boolean;
  /** Check for sequential characters like '123' or 'abc' (default: true) */
  checkSequential?: boolean;
}

/**
 * Result of password validation
 */
export interface PasswordValidationResult {
  /** Whether the password is valid */
  valid: boolean;
  /** Validation error message if invalid */
  message?: string;
  /** Password strength score (0-100) */
  strength: number;
  /** Specific validation issues */
  issues: string[];
}

/**
 * Validate a password against security requirements
 */
export const validatePassword = (
  password: string,
  options: PasswordValidationOptions = {}
): PasswordValidationResult => {
  const {
    minLength = 8,
    maxLength = 128,
    requireUppercase = true,
    requireLowercase = true,
    requireNumbers = true,
    requireSpecialChars = true,
    disallowCommonPasswords = true,
    checkSequential = true,
  } = options;

  // Start with empty issues array
  const issues: string[] = [];

  // Check length
  if (!password) {
    issues.push("Password is required");
  } else if (password.length < minLength) {
    issues.push(`Password must be at least ${minLength} characters long`);
  } else if (password.length > maxLength) {
    issues.push(`Password exceeds maximum length of ${maxLength} characters`);
  }

  // Check for required character types
  if (requireUppercase && !/[A-Z]/.test(password)) {
    issues.push("Password must contain at least one uppercase letter");
  }

  if (requireLowercase && !/[a-z]/.test(password)) {
    issues.push("Password must contain at least one lowercase letter");
  }

  if (requireNumbers && !/\d/.test(password)) {
    issues.push("Password must contain at least one number");
  }

  if (
    requireSpecialChars &&
    !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  ) {
    issues.push("Password must contain at least one special character");
  }

  // Check for sequential characters
  if (checkSequential && containsSequentialChars(password)) {
    issues.push(
      "Password should not contain sequential characters (like 123 or abc)"
    );
  }

  // Check against common passwords
  if (disallowCommonPasswords && isCommonPassword(password)) {
    issues.push("This is a commonly used password and is not secure");
  }

  // Calculate strength score
  const strength = calculatePasswordStrength(password);

  return {
    valid: issues.length === 0,
    message: issues.length > 0 ? issues[0] : undefined,
    strength,
    issues,
  };
};

/**
 * Check if a password contains sequential characters
 */
const containsSequentialChars = (password: string): boolean => {
  if (!password || password.length < 3) return false;

  // Common sequential strings
  const sequentialPatterns = [
    // Numbers
    "012",
    "123",
    "234",
    "345",
    "456",
    "567",
    "678",
    "789",
    "987",
    "876",
    "765",
    "654",
    "543",
    "432",
    "321",
    "210",
    // Letters
    "abc",
    "bcd",
    "cde",
    "def",
    "efg",
    "fgh",
    "ghi",
    "hij",
    "ijk",
    "jkl",
    "klm",
    "lmn",
    "mno",
    "nop",
    "opq",
    "pqr",
    "qrs",
    "rst",
    "stu",
    "tuv",
    "uvw",
    "vwx",
    "wxy",
    "xyz",
    "zyx",
    "yxw",
    "xwv",
    "wvu",
    "vut",
    "uts",
    "tsr",
    "srq",
    "rqp",
    "qpo",
    "pon",
    "onm",
    "nml",
    "mlk",
    "lkj",
    "kji",
    "jih",
    "ihg",
    "hgf",
    "gfe",
    "fed",
    "edc",
    "dcb",
    "cba",
    // Keyboard patterns
    "qwe",
    "wer",
    "ert",
    "rty",
    "tyu",
    "yui",
    "uio",
    "iop",
    "asd",
    "sdf",
    "dfg",
    "fgh",
    "ghj",
    "hjk",
    "jkl",
    "zxc",
    "xcv",
    "cvb",
    "vbn",
    "bnm",
  ];

  const lowerPassword = password.toLowerCase();

  // Check for any of the patterns in the password
  return sequentialPatterns.some((pattern) => lowerPassword.includes(pattern));
};

/**
 * Check if a password is in the list of common passwords
 */
const isCommonPassword = (password: string): boolean => {
  // List of the most common passwords
  const commonPasswords = [
    "password",
    "password1",
    "Password",
    "Password1",
    "123456",
    "12345678",
    "123456789",
    "12345",
    "qwerty",
    "qwerty123",
    "abc123",
    "welcome",
    "welcome1",
    "admin",
    "admin123",
    "login",
    "master",
    "passw0rd",
    "p@ssw0rd",
    "football",
    "baseball",
    "dragon",
    "sunshine",
    "princess",
    "letmein",
    "monkey",
    "111111",
    "123123",
    "654321",
    "987654321",
    "qwertyuiop",
    "1234567890",
    "superman",
    "iloveyou",
    "trustno1",
    "hello123",
    "whatever",
    "nothing",
  ];

  return commonPasswords.includes(password.toLowerCase());
};

/**
 * Calculate a strength score for a password (0-100)
 */
export const calculatePasswordStrength = (password: string): number => {
  if (!password) return 0;

  let score = 0;

  // Base score is the length
  score += Math.min(password.length * 4, 40); // Max 40 points for length

  // Reward for different character types
  const patterns = [
    /[a-z]/, // lowercase
    /[A-Z]/, // uppercase
    /\d/, // numbers
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, // special chars
  ];

  // Count different character types
  const typesCount = patterns.reduce(
    (count, pattern) => count + (pattern.test(password) ? 1 : 0),
    0
  );

  // Add points for character type variety
  score += typesCount * 10; // Up to 40 points for all types

  // Bonuses for good mixing of characters
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasLetterNumber = /[a-zA-Z]/.test(password) && /\d/.test(password);
  const hasLetterNumberSpecial =
    hasLetterNumber && /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

  if (hasUpperLower) score += 5;
  if (hasLetterNumber) score += 5;
  if (hasLetterNumberSpecial) score += 5;

  // Penalties
  if (containsSequentialChars(password)) score -= 10;
  if (isCommonPassword(password)) score -= 20;

  // Only letters or only numbers is weak
  if (/^[a-zA-Z]+$/.test(password) || /^\d+$/.test(password)) {
    score -= 10;
  }

  // Repeated characters penalty
  const repeats = password.match(/(.)\1{2,}/g);
  if (repeats) {
    score -= repeats.length * 5;
  }

  // Ensure score is between 0 and 100
  return Math.max(0, Math.min(100, score));
};

/**
 * Check if passwords match (for confirmation)
 */
export const doPasswordsMatch = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

/**
 * Get a descriptive label for password strength
 */
export const getPasswordStrengthLabel = (strength: number): string => {
  if (strength < 20) return "Very Weak";
  if (strength < 40) return "Weak";
  if (strength < 60) return "Moderate";
  if (strength < 80) return "Strong";
  return "Very Strong";
};

/**
 * Generate a secure random password
 */
export const generateSecurePassword = (length: number = 12): string => {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specials = "!@#$%^&*()-_=+";

  const allChars = lowercase + uppercase + numbers + specials;

  // Ensure at least one of each character type
  let password =
    lowercase[Math.floor(Math.random() * lowercase.length)] +
    uppercase[Math.floor(Math.random() * uppercase.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    specials[Math.floor(Math.random() * specials.length)];

  // Fill the rest randomly
  for (let i = 4; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  // Shuffle the password
  return password
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
};
