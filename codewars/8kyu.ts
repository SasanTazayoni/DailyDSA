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
