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
