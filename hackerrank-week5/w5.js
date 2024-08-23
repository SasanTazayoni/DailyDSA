// A1 Max Min

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let minUnfairness = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let unfairness = arr[i + k - 1] - arr[i];
    minUnfairness = Math.min(minUnfairness, unfairness);
  }

  return minUnfairness;
}

// A2 Strong password

function minimumNumber(n, password) {
  const numbers = "0123456789";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialCharacters = "!@#$%^&*()-+";

  let hasNumber = false;
  let hasLower = false;
  let hasUpper = false;
  let hasSpecial = false;

  for (let char of password) {
    if (numbers.includes(char)) {
      hasNumber = true;
    } else if (lowerCase.includes(char)) {
      hasLower = true;
    } else if (upperCase.includes(char)) {
      hasUpper = true;
    } else if (specialCharacters.includes(char)) {
      hasSpecial = true;
    }

    if (hasNumber && hasLower && hasUpper && hasSpecial) {
      break;
    }
  }

  let required = 0;
  if (!hasNumber) required++;
  if (!hasLower) required++;
  if (!hasUpper) required++;
  if (!hasSpecial) required++;

  return Math.max(required, 6 - n);
}
