import { LOWERCASE_CHARS, NUMBERS, PasswordTestResult, SPECIAL_CHARS, UPPERCASE_CHARS } from "../constants";

export default function testPassword(passwordToTest: string): PasswordTestResult {
  if (passwordToTest === "") throw Error("Password to test cannot be empty.");
  if (typeof passwordToTest !== "string") throw Error("Password to test must be of type string.");

  let password = passwordToTest.split("");

  const charsInPass = (chars: string) => chars.split("").filter((char) => password.includes(char));

  const isLengthShort = password.length < 8;
  const isLengthAve = password.length >= 8 && password.length <= 12;
  const isLengthLong = password.length >= 12;
  const hasUppercaseChars = charsInPass(UPPERCASE_CHARS).length > 0;
  const hasLowercaseChars = charsInPass(LOWERCASE_CHARS).length > 0;
  const hasNumbers = charsInPass(NUMBERS).length > 0;
  const hasSpecialChars = charsInPass(SPECIAL_CHARS).length > 0;
  const hasMixedChars = hasUppercaseChars && hasLowercaseChars && hasNumbers && hasSpecialChars;

  let totalScore = 0;

  if (isLengthLong) {
    totalScore += 20;
  } else {
    if (isLengthShort) totalScore += 5;
    if (isLengthAve) totalScore += 15;
  }

  if (hasMixedChars) {
    totalScore += 80;
  } else {
    if (hasSpecialChars) totalScore += 30;
    if (hasNumbers) totalScore += 15;
    if (hasUppercaseChars) totalScore += 20;
    if (hasLowercaseChars) totalScore += 15;
  }

  return {
    score: totalScore,
    strength: Math.round(totalScore / 20) - 1,
    criteria: {
      isLengthShort,
      isLengthAve,
      isLengthLong,
      hasUppercaseChars,
      hasLowercaseChars,
      hasNumbers,
      hasSpecialChars,
      hasMixedChars,
    },
  };
}
