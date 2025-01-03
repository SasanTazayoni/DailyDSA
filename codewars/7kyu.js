// 1 - Vowel Count

function getCount(str) {
  return [...str].filter((char) => "aeiou".includes(char)).length;
}

// 2 - Disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// 3 - Square Every Digit

function squareDigits(num) {
  return Number([...num.toString()].map((digit) => digit * digit).join(""));
}

// 4 - Descending Order

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// 5 - List Filtering

function filter_list(l) {
  return l.filter((item) => typeof item === "number");
}

// 6 - Get the Middle Character

function getMiddle(s) {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[middle - 1] + s[middle] : s[middle];
}

// 7 - You're a square!

const isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

// 8 - Mumbling

function accum(s) {
  return s
    .split("")
    .map(
      (letter, index) =>
        letter.toUpperCase() + letter.toLowerCase().repeat(index)
    )
    .join("-");
}

// 9 - Isograms

function isIsogram(str) {
  return new Set(str.toLowerCase()).size === str.length;
}

// 10 - Exes and Ohs

function XO(str) {
  const counts = str
    .toLowerCase()
    .split("")
    .reduce(
      (acc, char) => {
        if (char === "x") acc.x++;
        if (char === "o") acc.o++;
        return acc;
      },
      { x: 0, o: 0 }
    );

  return counts.x === counts.o;
}

// 11 - Jaden Casing Strings

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

// 12 - Shortest Word

function findShort(s) {
  return Math.min(...s.split(" ").map((s) => s.length));
}

// 13 - Complementary DNA

function dnaStrand(dna) {
  return dna
    .split("")
    .map((char) => ({ A: "T", T: "A", C: "G", G: "C" }[char]))
    .join("");
}

// 14 - Credit Card Mask

function maskify(cc) {
  return cc.length <= 4 ? cc : "#".repeat(cc.length - 4) + cc.slice(-4);
}

// 15 - Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b), numbers[0] + numbers[1];
}

// 16 - Beginner Series #3 Sum of Numbers

function getSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

// 17 - Friend or Foe?

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

// 18 - Two to One

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

// 19 - Categorize New Member

function openOrSenior(data) {
  return data.map((item) => (item[0] > 54 && item[1] > 7 ? "Senior" : "Open"));
}

// 20 - Find the next perfect square!

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1) ** 2 : -1;
}

// 21 - Printer Errors

function printerError(s) {
  return `${s.split("").filter((char) => char > "m").length}/${s.length}`;
}

// 22 - String ends with?

function solution(str, ending) {
  return str.endsWith(ending);
}

// 23 - Binary Addition

function addBinary(a, b) {
  return (a + b).toString(2);
}

// 24 - Is this a triangle?

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

// 25 - Sum of odd numbers

function rowSumOddNumbers(n) {
  return n ** 3;
}

// 26 - Ones and Zeros

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

// 27 - Number of People in the Bus

const number = function (busStops) {
  return busStops.reduce((total, stop) => total + stop[0] - stop[1], 0);
};

// 28 - Odd or Even?

function oddOrEven(array) {
  return array.reduce((acc, item) => acc + item, 0) % 2 === 0 ? "even" : "odd";
}

// 29 - Reverse words

function reverseWords(str) {
  return str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}

// 30 - Find the divisors!

function divisors(integer) {
  const potentialDivisors = [...Array(integer - 1).keys()].slice(2);
  const divisors = potentialDivisors.filter((i) => integer % i === 0);
  return divisors.length > 0 ? divisors : `${integer} is prime`;
}

// 31 - Sum of the first nth term of Series

function SeriesSum(n) {
  return [...Array(n).keys()]
    .map((i) => 1 / (1 + i * 3))
    .reduce((sum, value) => sum + value, 0)
    .toFixed(2);
}

// 32 - Remove the minimum

function removeSmallest(numbers) {
  const index = numbers.indexOf(Math.min(...numbers));
  return numbers.slice(0, index).concat(numbers.slice(index + 1));
}

// 33 - Testing 1-2-3

const num = function (array) {
  return array.map((item, index) => `${index + 1}: ${item}`);
};

// 34 - The highest profit wins!

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// 35 - Find the stray number

function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

// 36 Don't give me five!

function dontGiveMeFive(start, end) {
  const newArray = [...Array(end - start + 1).keys()]
    .map((i) => i + start)
    .filter((num) => !num.toString().includes("5"));

  return newArray.length;
}
