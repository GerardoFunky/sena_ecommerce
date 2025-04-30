/**
 * Email validation utilities for the upholstery e-commerce application
 */

/**
 * Result interface for email validation
 */
export interface EmailValidationResult {
  valid: boolean;
  message: string;
}

/**
 * Simple validation that checks if an email format is correct
 * @returns Boolean indicating if email format is valid
 */
export const isValidEmailFormat = (email: string): boolean => {
  if (!email) return false;

  // Basic regex that covers most valid email formats
  // This checks for:
  // - Local part: letters, numbers, dots, underscores, plus signs, hyphens
  // - @ symbol
  // - Domain part: letters, numbers, dots, hyphens
  // - TLD: 2 or more letters, numbers only allowed in some new TLDs
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(email.trim());
};

/**
 * More comprehensive email validation with specific checks
 * @returns Validation result with valid flag and error message
 */
export const validateEmail = (email: string): EmailValidationResult => {
  if (!email || email.trim() === "") {
    return {
      valid: false,
      message: "Email address is required",
    };
  }

  const trimmedEmail = email.trim();

  // Check for minimum length
  if (trimmedEmail.length < 5) {
    // a@b.c is the shortest valid email
    return {
      valid: false,
      message: "Email address is too short",
    };
  }

  // Check for maximum length to prevent DOS attacks
  if (trimmedEmail.length > 254) {
    return {
      valid: false,
      message: "Email address is too long",
    };
  }

  // Check if the @ symbol exists and is not at the beginning or end
  if (
    !trimmedEmail.includes("@") ||
    trimmedEmail.startsWith("@") ||
    trimmedEmail.endsWith("@")
  ) {
    return {
      valid: false,
      message: "Email address must contain a valid @ symbol",
    };
  }

  // Split the email into local and domain parts
  const [localPart, domainPart] = trimmedEmail.split("@");

  // Local part validation
  if (!localPart || localPart.length > 64) {
    return {
      valid: false,
      message: "Invalid username part in email address",
    };
  }

  // Domain part validation
  if (!domainPart || !domainPart.includes(".")) {
    return {
      valid: false,
      message: "Invalid domain part in email address",
    };
  }

  // Check for valid TLD
  const tld = domainPart.split(".").pop();
  if (!tld || tld.length < 2) {
    return {
      valid: false,
      message: "Email address must have a valid domain extension",
    };
  }

  // Final check using the regex for overall format
  if (!isValidEmailFormat(trimmedEmail)) {
    return {
      valid: false,
      message: "Invalid email address format",
    };
  }

  // If we passed all checks, the email is valid
  return {
    valid: true,
    message: "Email address is valid",
  };
};

/**
 * Check if an email address might be disposable (temporary)
 * Basic check against common disposable email domains
 */
export const isDisposableEmail = (email: string): boolean => {
  if (!email || !email.includes("@")) return false;

  const domain = email.split("@")[1].toLowerCase();

  // List of common disposable email domains
  const disposableDomains = [
    "tempmail.com",
    "temp-mail.org",
    "guerrillamail.com",
    "guerrillamail.net",
    "guerrillamail.org",
    "sharklasers.com",
    "mailinator.com",
    "yopmail.com",
    "yopmail.fr",
    "yopmail.net",
    "cool.fr.nf",
    "jetable.fr.nf",
    "nospam.ze.tc",
    "nomail.xl.cx",
    "mega.zik.dj",
    "speed.1s.fr",
    "courriel.fr.nf",
    "mailtothis.com",
    "throwamail.com",
    "10minutemail.com",
    "mailcatch.com",
    "trashmail.net",
    "getairmail.com",
    "tempinbox.com",
    "fake-box.com",
    "disposableinbox.com",
  ];

  return disposableDomains.some(
    (disposableDomain) =>
      domain === disposableDomain || domain.endsWith(`.${disposableDomain}`)
  );
};

/**
 * Check for common typos in email domains
 * @returns Corrected email suggestion if a typo is detected, or null if no typo found
 */
export const checkCommonEmailTypos = (email: string): string | null => {
  if (!email || !email.includes("@")) return null;

  const [localPart, domainPart] = email.split("@");
  const lowerDomain = domainPart.toLowerCase();

  // Common email domain typos
  const commonTypos: Record<string, string> = {
    "gamil.com": "gmail.com",
    "gmial.com": "gmail.com",
    "gmai.com": "gmail.com",
    "gmail.co": "gmail.com",
    "gmail.cm": "gmail.com",
    "gmal.com": "gmail.com",
    "gmil.com": "gmail.com",
    "gmailc.om": "gmail.com",
    "hotmail.co": "hotmail.com",
    "hotmail.cm": "hotmail.com",
    "hotmail.con": "hotmail.com",
    "hotmial.com": "hotmail.com",
    "hotmali.com": "hotmail.com",
    "hotmale.com": "hotmail.com",
    "hotmai.com": "hotmail.com",
    "yaho.com": "yahoo.com",
    "yahooo.com": "yahoo.com",
    "yahhoo.com": "yahoo.com",
    "yaoho.com": "yahoo.com",
    "yahoo.co": "yahoo.com",
    "yahoo.cm": "yahoo.com",
    "outlook.co": "outlook.com",
    "outlok.com": "outlook.com",
    "outloo.com": "outlook.com",
    "outlook.con": "outlook.com",
  };

  // Check if the domain matches any known typo
  if (lowerDomain in commonTypos) {
    return `${localPart}@${commonTypos[lowerDomain]}`;
  }

  return null;
};

/**
 * Check if two email addresses are similar (might be typo or duplicate)
 */
export const areEmailsSimilar = (email1: string, email2: string): boolean => {
  if (!email1 || !email2) return false;

  const normalizedEmail1 = email1.trim().toLowerCase();
  const normalizedEmail2 = email2.trim().toLowerCase();

  // If they're identical, they're obviously similar
  if (normalizedEmail1 === normalizedEmail2) return true;

  // Remove dots from the local part for comparison (for Gmail-like services where dots don't matter)
  const removeDots = (email: string): string => {
    const [localPart, domainPart] = email.split("@");
    if (!domainPart) return email;
    return localPart.replace(/\./g, "") + "@" + domainPart;
  };

  const noDots1 = removeDots(normalizedEmail1);
  const noDots2 = removeDots(normalizedEmail2);

  if (noDots1 === noDots2) return true;

  // Check for simple one-character difference
  const calculateLevenshteinDistance = (a: string, b: string): number => {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = Array(a.length + 1)
      .fill(null)
      .map(() => Array(b.length + 1).fill(null));

    for (let i = 0; i <= a.length; i++) matrix[i][0] = i;
    for (let j = 0; j <= b.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // deletion
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j - 1] + cost // substitution
        );
      }
    }

    return matrix[a.length][b.length];
  };

  // If emails are very similar (1-2 character difference)
  const distance = calculateLevenshteinDistance(
    normalizedEmail1,
    normalizedEmail2
  );

  return distance <= 2;
};
