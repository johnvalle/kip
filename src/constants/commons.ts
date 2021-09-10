import theme from "./theme";

export const PASS_STRENGTH_LIST = [
  {
    name: "Poor",
    colorValue: theme.colors.red,
  },
  {
    name: "Weak",
    colorValue: theme.colors.secondary,
  },
  {
    name: "Okay",
    colorValue: theme.colors.primaryLight,
  },
  {
    name: "Good",
    colorValue: theme.colors.primary,
  },
  {
    name: "Strong",
    colorValue: theme.colors.primaryDark,
  },
];

export const LOWERCASE_CHARS = "abcdefghijklmnopqrstuvwxyz";
export const UPPERCASE_CHARS = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
export const NUMBERS = "1234567890";
export const SPECIAL_CHARS = "@#$%&?!";
