// 1 - Even or Odd

export function evenOrOdd(n: number): string {
  return n % 2 === 0 ? "Even" : "Odd";
}

// 2 - Multiply

export function multiply(a: number, b: number) {
  return a * b;
}

// 3 - Return Negative

export const makeNegative = (num: number) => {
  return num > 0 ? -num : num;
};

// 4 - Sum of positive

export function positiveSum(arr: number[]) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

// 5 - Reversed Strings

export function solution(str: string): string {
  return str.split("").reverse().join("");
}

// 6 - Convert a Number to a String!

export function numberToString(num: number): string {
  return num.toString();
}

// 7 - Convert boolean values to strings 'Yes' or 'No'.

export const boolToWord = (bool: boolean): string => {
  return bool ? "Yes" : "No";
};

// 8 - Opposite number

export class Kata {
  static opposite(n: number) {
    return -n;
  }
}

// 9 - Remove First and Last Character

export function removeChar(str: string) {
  return str.slice(1, -1);
}

// 10 - Square(n) Sum

export function squareSum(numbers: number[]): number {
  return numbers.reduce((acc, number) => {
    return number * number + acc;
  }, 0);
}
