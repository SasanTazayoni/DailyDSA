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

// A3 Dynamic Array

function dynamicArray(n, queries) {
  let array = [];
  let lastAnswer = 0;
  let answers = [];

  for (let i = 0; i < n; i++) {
    array[i] = [];
  }

  const getIndex = (x) => {
    return (x ^ lastAnswer) % n;
  };

  const queryOne = (x, y) => {
    let i = getIndex(x);
    array[i].push(y);
  };

  const queryTwo = (x, y) => {
    let i = getIndex(x);
    let l = array[i].length;
    let z = y % l;
    lastAnswer = array[i][z];
    answers.push(lastAnswer);
  };

  for (let q of queries) {
    if (q[0] === 1) {
      queryOne(q[1], q[2]);
    } else if (q[0] === 2) {
      queryTwo(q[1], q[2]);
    }
  }

  return answers;
}

// A4 Smart Number 2

function processData(input) {
  let factorCount = 0;

  for (let i = 1; i <= input; i++) {
    if (input % i === 0) {
      factorCount++;
    }
  }

  return factorCount % 2 === 1 ? "YES" : "NO";
}

// A5 Missing Numbers

function missingNumbers(arr, brr) {
  const arrCount = {};
  for (let num of arr) {
    arrCount[num] = (arrCount[num] || 0) + 1;
  }

  const brrCount = {};
  for (let num of brr) {
    brrCount[num] = (brrCount[num] || 0) + 1;
  }

  const missingNumbers = [];
  for (let num in brrCount) {
    if (!arrCount[num] || brrCount[num] > arrCount[num]) {
      missingNumbers.push(parseInt(num));
    }
  }

  return missingNumbers.sort((a, b) => a - b);
}

// A6 The Full Counting Sort

function countSort(arr) {
  const n = arr.length;
  const maxVal = Math.max(...arr.map((item) => parseInt(item[0])));
  const buckets = Array.from({ length: maxVal + 1 }, () => []);

  for (let i = 0; i < n; i++) {
    const index = parseInt(arr[i][0]);
    const value = i < n / 2 ? "-" : arr[i][1];
    buckets[index].push(value);
  }

  const result = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  console.log(result.join(" "));
}
