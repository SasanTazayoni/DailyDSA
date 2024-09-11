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

// 21 - Convert number to reversed array of digits

function digitize(n) {
  return Array.from(String(n), Number).reverse();
}

// 22 - Returning Strings

function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// 23 - Function 1 - hello world

function greet() {
  return "hello world!";
}

// 24 - Opposites Attract

function lovefunc(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}

// 25 - A Needle in the Haystack

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

// 26 - Is n divisible by x and y?

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0;
}

// 27 - Beginner - Lost Without a Map

function maps(x) {
  return x.map((item) => item * 2);
}

// 28 - Beginner Series #1 School Paperwork

function paperwork(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

// 29 - Convert a Boolean to a String

function booleanToString(b) {
  return b.toString();
}

// 30 - Are You Playing Banjo?

function areYouPlayingBanjo(name) {
  return `${name} ${
    name[0].toLowerCase() === "r" ? "plays" : "does not play"
  } banjo`;
}

// 31 - Sum Arrays

function sum(numbers) {
  return numbers.length === 0 ? 0 : numbers.reduce((acc, num) => acc + num, 0);
}

// 32 - Beginner Series #2 Clock

function past(h, m, s) {
  return 1000 * (h * 3600 + m * 60 + s);
}

// 33 - Calculate average

function calculateAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, num) => acc + num, 0) / array.length;
}

// 34 - How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((acc, num) => acc + num, 0) / classPoints.length
  );
}

// 35 - Invert values

function invert(array) {
  return array.map((item) => -item);
}

// 36 - Simple multiplication

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// 37 - Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let positiveCount = 0;
  let negativeSum = 0;

  input.forEach((item) => {
    if (item > 0) {
      positiveCount++;
    } else if (item < 0) {
      negativeSum += item;
    }
  });

  return [positiveCount, negativeSum];
}

// 38 - Fake Binary

function fakeBin(x) {
  return x
    .split("")
    .map((digit) => (digit < 5 ? "0" : "1"))
    .join("");
}

// 39 - MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

// 40 - You only need one - Beginner

function check(a, x) {
  return a.includes(x);
}
