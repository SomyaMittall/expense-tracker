/**
 * Validates if the given string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if valid, otherwise false.
 */
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Extracts initials from a full name (used for profile avatars).
 * @param {string} name - The full name of the user.
 * @returns {string} The initials (e.g., "John Doe" → "JD").
 */
export const getInitials = (name) => {
  if (!name || typeof name !== "string") return "U";
  const parts = name.trim().split(" ");
  return parts.length === 1
    ? parts[0][0].toUpperCase()
    : `${parts[0][0]}${parts[1][0]}`.toUpperCase();
};

/**
 * Adds thousands separators to a number (e.g., 12000 → "12,000").
 * @param {number|string} num - The number to format.
 * @returns {string} The formatted number as a string.
 */
export const addThousandsSeparator = (num) => {
  if (num == null || isNaN(num)) return "";
  const [integer, fraction] = num.toString().split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return fraction ? `${formattedInteger}.${fraction}` : formattedInteger;
};
