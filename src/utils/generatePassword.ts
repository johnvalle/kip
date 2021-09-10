import { LOWERCASE_CHARS, NUMBERS, PasswordFormData, SPECIAL_CHARS, UPPERCASE_CHARS } from "../constants";
import { getRandomNumber } from "./number";

export default function generatePassword({
  hasLowercaseChars,
  hasNumbers,
  hasSpecialChars,
  hasUppercaseChars,
  length,
}: PasswordFormData) {
  let charList = LOWERCASE_CHARS;

  charList =
    charList +
    (hasUppercaseChars ? UPPERCASE_CHARS : "") +
    (hasNumbers ? NUMBERS : "") +
    (hasSpecialChars ? SPECIAL_CHARS : "");

  // shuffle charList
  let charsToUse = charList
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  let password = "";
  for (let idx = 0; idx < length; idx++) {
    password += charsToUse.split("")[getRandomNumber(0, charList.split("").length - 1)];
  }
  return password;
}
