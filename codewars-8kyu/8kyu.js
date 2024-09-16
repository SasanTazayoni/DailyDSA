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

// 41 - Calculate BMI

function bmi(weight, height) {
  const bmiValue = weight / (height * height);
  return bmiValue <= 18.5
    ? "Underweight"
    : bmiValue <= 25.0
    ? "Normal"
    : bmiValue <= 30.0
    ? "Overweight"
    : "Obese";
}

// 42 - Sentence Smash

function smash(words) {
  return words.join(" ");
}

// 43 - Beginner - Reduce but Grow

function grow(x) {
  return x.reduce((a, b) => a * b, 1);
}

// 44 - Reversed sequence

const reverseSeq = (n) => {
  let result = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};

// 45 - Is he gonna survive?

function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}

// 46 - DNA to RNA Conversion

function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}

// 47 - Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump;
};

// 48 - Count by X

function countBy(x, n) {
  let z = [];

  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }

  return z;
}

// 49 - You Can't Code Under Pressure #1

function doubleInteger(i) {
  return i * 2;
}

// 50 - If you can't sleep, just count sheep!!

function countSheep(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `${i} sheep...`;
  }
  return result;
}

// 51 - Convert a string to an array

function stringToArray(string) {
  return string.split(" ");
}

// 52 - Find Maximum and Minimum Values of a List

const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
};

// 53 - Jenny's secret message

function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// 54 - Reversed Words

function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

// 55 - Total amount of points

function points(games) {
  return games.reduce((acc, cur) => {
    return acc + cur[0] > cur[2] ? 3 : current[0] === current[2] ? 1 : 0;
  }, 0);
}

// 56 - Array plus array

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0);
}

// 57 - Grasshopper - Grade book

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;
  return average >= 90
    ? "A"
    : average >= 80
    ? "B"
    : average >= 70
    ? "C"
    : average >= 60
    ? "D"
    : "F";
}

// 58 - Sum without highest and lowest number

function sumArray(array) {
  return array
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, cur) => acc + cur, 0)
    : 0;
}

// 59 - Area or Perimeter

const areaOrPerimeter = function (l, w) {
  return l === w ? l * l : 2 * l + 2 * w;
};

// 60 - Grasshopper - Personalized Message

function greet(name, owner) {
  return "Hello " + (name === owner ? "boss" : "guest");
}

// 61 - Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);
}

// 62 - Sum Mixed Array

function sumMix(x) {
  return x.reduce((acc, cur) => acc + parseInt(cur), 0);
}

// 63 - Transportation on vacation

function rentalCarCost(d) {
  return 40 * d + (d >= 7 ? -50 : d >= 3 ? -20 : 0);
}

// 64 - Remove exclamation marks

function removeExclamationMarks(s) {
  return s.split("!").join("");
}

// 65 - The Feast of Many Beasts

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

// 66 - Quarter of the year

const quarterOf = (month) => {
  return Math.ceil(month / 3);
};

// 67 - Double Char

function doubleChar(str) {
  return str
    .split("")
    .map((char) => char + char)
    .join("");
}

// 68 - Count the Monkeys!

const monkeyCount = (n) => [...Array(n).keys()].map((i) => i + 1);

// 69 - Thinkful - Logic Drills: Traffic light

const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);

// 70 - L1: Set Alarm

function setAlarm(employed, vacation) {
  return employed && !vacation;
}

// 71 - Do I get a bonus?

function bonusTime(salary, bonus) {
  return "£" + salary * (bonus ? 10 : 1);
}

// 72 - Removing Elements

function removeEveryOther(arr) {
  return arr.filter((item, index) => index % 2 === 0);
}

// 73 - Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - a - b;
}

// 74 - Will there be enough space?

function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0);
}

// 75 - Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  return Math.floor((s * 100000) / 3600);
}

// 76 - Keep up the hoop

function hoopCount(n) {
  return n >= 10
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}

// 77 - Grasshopper - Check for factor

function checkForFactor(base, factor) {
  return base % factor === 0;
}

// 78 - All Star Code Challenge #18

function strCount(str, letter) {
  return str.split(letter).length - 1;
}

// 79 - Twice as old

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// 80 - Find the first non-consecutive number

function firstNonConsecutive(arr) {
  const result = arr.find(
    (value, index) => index > 0 && value !== arr[index - 1] + 1
  );
  return result === undefined ? null : result;
}

// 81 - altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      }
      return char.toLowerCase();
    })
    .join("");
};

// 82 - Find numbers which are divisible by given number

function divisibleBy(numbers, divisor) {
  return numbers.filter((number) => number % divisor === 0);
}

// 83 - Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

// 84 - Price of Mangoes

function mango(quantity, price) {
  return quantity * price - Math.floor(quantity / 3) * price;
}

// 85 - Find Nearest square number

function nearestSq(n) {
  return Math.round(Math.sqrt(n)) ** 2;
}

// 86 - Convert to Binary

function toBinary(n) {
  return parseInt(n.toString(2), 10);
}

// 87 - Printing Array elements with Comma delimiters

function printArray(array) {
  return array.join();
}

// 88 - Welcome!

function greet(language) {
  const greetings = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  const normalizedLanguage = language.toLowerCase();

  return greetings[normalizedLanguage] || greetings.english;
}

// 89 - Grasshopper - Terminal game move function

function move(position, roll) {
  return position + roll * 2;
}

// 90 - Exclusive "or" (xor) Logical Operator

function xor(a, b) {
  return (a || b) && !(a && b);
}
