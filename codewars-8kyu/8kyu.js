// 1 - Basic Mathematical Operations

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "Invalid operation";
  }
}

// 2 - Even or Odd

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

// 3 - Multiply

function multiply(a, b) {
  return a * b;
}

// 4 - Return Negative

function makeNegative(num) {
  return num > 0 ? -num : num;
}

// 5 - Sum of positive

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// 6 - Reversed Strings

function solution(str) {
  return str.split("").reverse().join("");
}

// 7 - Converta Number to a String!

function numberToString(num) {
  return num.toString();
}

// 8 - Convert boolean values to strings 'Yes' or 'No'.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// 9 - Opposite number

function opposite(number) {
  return -number;
}

// 10 - Remove First and Last Character

function removeChar(str) {
  return str.slice(1, -1);
}

// 11 - Square(n) Sum

function squareSum(numbers) {
  return numbers.reduce((acc, number) => {
    return number * number + acc;
  }, 0);
}

// 12 - String repeat

function repeatStr(n, s) {
  return s.repeat(n);
}

// 13 - Grasshopper - Summation

const summation = (n) => (n * (n + 1)) / 2; // <-- Clever trick

// 14 - Find the smallest integer in the array

function findSmallestInt(arr) {
  return Math.min(...arr);
}

// 15 - Remove String Spaces

function noSpace(x) {
  return x.split(" ").join("");
}

// 16 - Counting sheep...

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

// 17 - Convert a String to a Number!

const stringToNumber = function (str) {
  return parseInt(str);
};

// 18 - Abbreviate a Two Word Name

function abbrevName(name) {
  return name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join(".");
}

// 19 - Century From Year

function century(year) {
  return Math.ceil(year / 100);
}

// 20 - Keep Hydrated!

function litres(time) {
  return Math.floor(time / 2);
}
