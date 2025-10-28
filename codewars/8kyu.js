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

// 7 - Convert a Number to a String!

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

// 91 - Grasshopper - Debug sayHello

function sayHello(name) {
  return `Hello, ${name}`;
}

// 92 - Grasshopper - Combine strings

function combineNames(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// 93 - Geometry Basics: Circle Area in 2D

function circleArea(circle) {
  return Math.PI * Math.pow(circle.radius, 2);
}

// 94 - Reversing Words in a String

function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

// 95 - validate code with simple regex

function validateCode(code) {
  return /^[123]/.test(code);
}

// 96 - Simple Fun #352: Reagent Formula

function isValid(formula) {
  return (
    !(formula.includes(1) && formula.includes(2)) &&
    !(formula.includes(3) && formula.includes(4)) &&
    formula.includes(5) === formula.includes(6) &&
    (formula.includes(7) || formula.includes(8))
  );
}

// 97 - noobCode 02: TRICKY QUESTIONS (primitives and operator precedence)

function greaterThanLessThan(a, b, c) {
  return a < b < c;
}

// 98 - Remove duplicates from list

function distinct(a) {
  return [...new Set(a)];
}

// 99 - Grasshopper - Terminal game combat function

function combat(health, damage) {
  return Math.max(0, health - damage);
}

// 100 - Grader

function grader(score) {
  return score > 1 || score < 0.6
    ? "F"
    : score >= 0.9
    ? "A"
    : score >= 0.8
    ? "B"
    : score >= 0.7
    ? "C"
    : "D";
}

// 101 - I love you, a little , a lot, passionately ... not at all

function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all",
  ];

  return phrases[(nbPetals - 1) % 6];
}

// 102 - Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string

function remove(string) {
  return string.replace(/!/g, "") + "!";
}

// 103 - Get Planet Name By ID

function getPlanetName(id) {
  return {
    1: "Mercury",
    2: "Venus",
    3: "Earth",
    4: "Mars",
    5: "Jupiter",
    6: "Saturn",
    7: "Uranus",
    8: "Neptune",
  }[id];
}

// 104 - Parse nice int from char problem

function getAge(inputString) {
  return parseInt(inputString);
}

// 105 - Correct the mistakes of the character recognition software

function correct(string) {
  const corrections = { 5: "S", 0: "O", 1: "I" };
  return [...string].map((char) => corrections[char] || char).join("");
}

// 106 - Switch it Up!

function switchItUp(number) {
  return {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  }[number];
}

// 107 - Cat years, Dog years

const humanYearsCatYearsDogYears = function (humanYears) {
  return [
    humanYears,
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4,
    humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5,
  ];
};

// 108 - Is it even?

function testEven(n) {
  return n % 2 === 0;
}

// 109 - Is it a palindrome?

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") === x.toLowerCase();
}

// 110 - Powers of 2

function powersOfTwo(n) {
  return [...Array(n + 1).keys()].map((i) => 2 ** i);
}

// 111 - What is between?

function between(a, b) {
  return [...Array(b - a + 1).keys()].map((i) => i + a);
}

// 112 - Sum The Strings

function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

// 113 - Count Odd Numbers below n

function oddCount(n) {
  return Math.floor(n / 2);
}

// 114 - Grasshopper - Messi goals function

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

// 115 - Difference of Volumes of Cuboids

function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, val) => acc * val) - b.reduce((acc, val) => acc * val)
  );
}

// 116 - Student's Final Grade

function finalGrade(exam, projects) {
  return exam > 90 || projects > 10
    ? 100
    : exam > 75 && projects > 4
    ? 90
    : exam > 50 && projects > 1
    ? 75
    : 0;
}

// 117 - Sort and Star

function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

// 118 - Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

// 119 - Function 2 - squaring an argument

function square(n) {
  return n ** 2;
}

// 120 - To square(root) or not to square(root)

function squareOrSquareRoot(array) {
  return array.map((item) => {
    return Number.isInteger(Math.sqrt(item)) ? Math.sqrt(item) : item ** 2;
  });
}

// 121 - Is the string uppercase?

String.prototype.isUpperCase = function () {
  return (
    this.length === 0 ||
    this.split("").every((char) => char === char.toUpperCase())
  );
};

// 122 - Unfinished Loop - Bug Fixing #1

function createArray(number) {
  let newArray = [];

  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

// 123 - Expressions Matter

function expressionMatter(a, b, c) {
  return Math.max(
    ...[a + b + c, a * b * c, a * (b + c), (a + b) * c, a + b * c]
  );
}

// 124 - Find Multiples of a Number

function findMultiples(integer, limit) {
  return [...Array(Math.floor(limit / integer)).keys()].map(
    (i) => (i + 1) * integer
  );
}

// 125 - Filter out the geese

function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  return birds.filter((bird) => !geese.includes(bird));
}

// 126 - Grasshopper - If/else syntax debug

function checkAlive(health) {
  return health > 0;
}

// 127 - Stringy Strings

function stringy(size) {
  return "10".repeat(size).slice(0, size);
}

// 128 - My head is at the wrong end!

function fixTheMeerkat(arr) {
  return arr.reverse();
}

// 129 - Short Long Short

function solution(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

// 130 - Super Duper Easy

function problem(x) {
  return typeof x === "number" ? x * 50 + 6 : "Error";
}

// 131 - Reverse List Order

function reverseList(list) {
  return list.reverse();
}

// 132 - Well of Ideas - Easy Version

function well(x) {
  const goodCount = x.filter((item) => item === "good").length;

  return goodCount === 0
    ? "Fail"
    : goodCount > 2
    ? "I smell a series!"
    : "Publish!";
}

// 133 - 5 without numbers !!

function unusualFive() {
  return "hello".length;
}

// 134 - Lario and Muigi Pipe Problem

function pipeFix(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return [...Array(max - min + 1).keys()].map((i) => i + min);
}

// 135 - Vowel remover

function shortcut(str) {
  return str.replace(/[aeiou]/g, "");
}

// 136 - Training JS #1: create your first JS function and print "Hello World!"

function helloWorld() {
  const str = "Hello World!";
  console.log(str);
}

// 137 - What's the real floor?

function getRealFloor(n) {
  return n > 0 && n < 13 ? n - 1 : n > 12 ? n - 2 : n;
}

// 138 - Basic variable assignment

var a = "code";
var b = "wa.rs";
var name = a + b;

// 139 - Name Shuffler

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

// 140 - Get Nth Even Number

function nthEven(n) {
  return (n - 1) * 2;
}

// 141 - Drink about

function peopleWithAgeDrink(old) {
  return old > 20
    ? "drink whisky"
    : old > 17
    ? "drink beer"
    : old > 13
    ? "drink coke"
    : "drink toddy";
}

// 142 - get character from ASCII Value

function getChar(c) {
  return String.fromCharCode(c);
}

// 143 - Exclamation marks series #1: Remove an exclamation mark from the end of string

function remove(string) {
  return string.endsWith("!") ? string.slice(0, -1) : string;
}

// 144 - Find the position!

function position(letter) {
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`;
}

// 145 - No zeros for heros

function noBoringZeros(n) {
  return n === 0 ? 0 : n.toString().replace(/0+$/, "") * 1;
}

// 146 - Merge two sorted arrays into one

function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].sort((a, b) => a - b);
}

// 147 - A wolf in sheep's clothing

function warnTheSheep(queue) {
  const position = queue.length - queue.indexOf("wolf") - 1;
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

// 148 - The Wide-Mouthed frog!

function mouthSize(animal) {
  return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

// 149 - Capitalization and Mutability

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// 150 - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
  return s.replace(/[aeiouAEIOU]/g, "!");
}

// 152 - Add Length

function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}

// 153 - Grasshopper - Basic Function Fixer

function addFive(num) {
  return num + 5;
}

// 154 - Bin to Decimal

function binToDec(bin) {
  return parseInt(bin, 2);
}

// 155 - Triple Trouble

function tripleTrouble(one, two, three) {
  return [...one].reduce(
    (acc, char, index) => acc + char + two[index] + three[index],
    ""
  );
}

// 156 - Plural

function plural(n) {
  return n !== 1;
}

// 157 - Is this my tail?

function correctTail(body, tail) {
  return body.slice(-1) === tail;
}

// 158 - Hex to Decimal

function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

// 159 - Generate range of integers

function generateRange(start, stop, step) {
  const range = [];

  for (let i = start; i <= stop; i += step) {
    range.push(i);
  }

  return range;
}

// 160 - Training JS #2: Basic data types--Number

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3, //set number value to a
    b = v1; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v2, //set number value to a
    b = v4; //set number value to b
  return a % b;
}

// 162 - Hello, Name or World!

function hello(name) {
  return name
    ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    : "Hello, World!";
}

// 163 - 101 Dalmatians - squash the bugs, not the dogs!

function howManyDalmatians(number) {
  return number <= 10
    ? "Hardly any"
    : number <= 50
    ? "More than a handful!"
    : number === 101
    ? "101 DALMATIANS!!!"
    : "Woah that's a lot of dogs!";
}

// 164 - Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  return arr.slice(0, n);
}

// 165 - FIXME: Replace all dots

const replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

// 166 - Multiplication table for number

function multiTable(number) {
  return [...Array(10).keys()]
    .map((i) => `${i + 1} * ${number} = ${number * (i + 1)}`)
    .join("\n");
}

// 167 - Determine offspring sex based on genes XX and XY chromosomes

function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm[1] === "Y" ? "son" : "daughter"
  }.`;
}

// 168 - Gravity Flip

const flip = (d, a) => {
  return a.sort((a, b) => (d === "R" ? a - b : b - a));
};

// 169 - Grasshopper - Debug

function weatherInfo(temp) {
  const celsius = (temp - 32) * (5 / 9);
  return celsius <= 0
    ? `${celsius} is freezing temperature`
    : `${celsius} is above freezing temperature`;
}

// 170 - Grasshopper - Function syntax debugging

function main(verb, noun) {
  return verb + noun;
}

// 171 - String Templates - Bug Fixing #5

function buildString(...template) {
  return `I like ${template.join(", ")}!`;
}

// 172 - Welcome to the City

function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// 173 - Training JS #4: Basic data types--Array

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  return arr[0];
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function pushElement(arr) {
  const el = 1;
  arr.push(el);

  return arr;
}
function popElement(arr) {
  arr.pop();
  return arr;
}

// 174 - Fix your code before the garden dies!

function rainAmount(mm) {
  if (mm >= 40) {
    return "Your plant has had more than enough water for today!";
  } else {
    return `You need to give your plant ${40 - mm}mm of water`;
  }
}

// 175 - Grasshopper - Array Mean

const findAverage = function (nums) {
  return nums.reduce((acc, num) => acc + num, 0) / nums.length;
};

// 176 - Simple Fun #1: Seats in Theater

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

// 177 - Multiple of index

function multipleOfIndex(array) {
  return array.filter((item, index) =>
    index === 0 ? item === 0 : item % index === 0
  );
}

// 178 - String cleaning

function stringClean(s) {
  return s.replace(/\d/g, "");
}

// 179 - Holiday VIII - Duty Free

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)));
}

// 180 - Training JS #5: Basic data types--Object

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// 181 - SpeedCode #2 - Array Madness

function arrayMadness(a, b) {
  return (
    a.reduce((acc, num) => acc + num ** 2, 0) >
    b.reduce((acc, num) => acc + num ** 3, 0)
  );
}

// 182 - Return the day

function whatday(num) {
  return (
    {
      1: "Sunday",
      2: "Monday",
      3: "Tuesday",
      4: "Wednesday",
      5: "Thursday",
      6: "Friday",
      7: "Saturday",
    }[num] || "Wrong, please enter a number between 1 and 7"
  );
}

// 183 - Take the Derivative

function derive(coefficient, exponent) {
  return coefficient * exponent + "x^" + (exponent - 1);
}

// 184 - Find out whether the shape is a cube

function cubeChecker(volume, side) {
  return volume > 0 && side > 0 && side ** 3 === volume;
}

// 185 - Enumerable Magic - Does My List Include This?

function include(arr, item) {
  return arr.includes(item);
}

// 186 - How old will I be in 2099?

function calculateAge(yearOfBirth, year) {
  const age = year - yearOfBirth;

  if (age > 0) {
    return `You are ${age} year${age > 1 ? "s" : ""} old.`;
  } else if (age < 0) {
    return `You will be born in ${-age} year${-age > 1 ? "s" : ""}.`;
  } else {
    return "You were born this very year!";
  }
}

// 187 - Find the Remainder

function remainder(n, m) {
  return n > m ? n % m : m % n;
}

// 188 - Dollars and Cents

function formatMoney(amount) {
  return `$${amount.toFixed(2)}`;
}

// 189 - Surface Area and Volume of a Box

function getSize(width, height, depth) {
  return [
    2 * (width * height + width * depth + height * depth),
    width * height * depth,
  ];
}

// 190 - L1: Bartender, drinks!

function getDrinkByProfession(param) {
  return (
    {
      jabroni: "Patron Tequila",
      "school counselor": "Anything with Alcohol",
      programmer: "Hipster Craft Beer",
      "bike gang member": "Moonshine",
      politician: "Your tax dollars",
      rapper: "Cristal",
    }[param.toLowerCase()] || "Beer"
  );
}

// 191 - How many lightsabers do you own?

function howManyLightsabersDoYouOwn(name) {
  return name === "Zach" ? 18 : 0;
}

// 192 - Alan Partridge II - Apple Turnover

function apple(x) {
  return x ** 2 > 1000
    ? "It's hotter than the sun!!"
    : "Help yourself to a honeycomb Yorkie for the glovebox.";
}

// 193 - Sum of differences in array

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

// 194 - Do you speak "English"?

function spEng(sentence) {
  return /english/i.test(sentence);
}

// 195 - Sum of Multiples

function sumMul(n, m) {
  let sum = 0;

  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum || "INVALID";
}

// 196 - Regular Ball Super Ball

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

// 197 - Training JS #3: Basic data types--String

var a1 = "A",
  a2 = "a",
  b1 = "B",
  b2 = "b",
  c1 = "C",
  c2 = "c",
  d1 = "D",
  d2 = "d",
  e1 = "E",
  e2 = "e",
  n1 = "N",
  n2 = "n";
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer2() {
  //the answer should be "yes" or "no"
  return "no";
}
function answer3() {
  //the answer should be "yes" or "no"
  return "yes";
}

// 198 - Fundamentals: Return

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// 199 - No Loops 2 - You only need one

function check(a, x) {
  return a.includes(x);
}

// 200 - Remove First and Last Character Part Two

function array(string) {
  const elements = string.split(",");
  return elements.length <= 2 ? null : elements.slice(1, -1).join(" ");
}

// 201 - Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
  const sortedAges = ages.sort((a, b) => a - b);
  const difference = sortedAges[sortedAges.length - 1] - sortedAges[0];
  return [sortedAges[0], sortedAges[sortedAges.length - 1], difference];
}

// 202 - USD => CNY

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}

// 203 - Closest elevator

function elevator(left, right, call) {
  return Math.abs(call - right) <= Math.abs(call - left) ? "right" : "left";
}

// 204 Formatting decimal places #0

function twoDecimalPlaces(n) {
  return Math.round(n * 100) / 100;
}

// 205 Exclamation marks series #2: Remove all exclamation marks from the end of sentence

function remove(string) {
  return string.replace(/[!\.]+$/, "");
}

// 206 How many stairs will Suzuki climb in 20 years?

function stairsIn20(s) {
  const total = s
    .map((day) => day.reduce((sum, steps) => sum + steps, 0))
    .reduce((sum, dayTotal) => sum + dayTotal, 0);

  return total * 20;
}

// 207 Define a card suit

function defineSuit(card) {
  const suits = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades",
  };

  return suits[card.slice(-1)];
}

// 208 Multiply the number

function multiply(number) {
  return number * 5 ** Math.abs(number).toString().length;
}
