// A1 Picking Numbers

function pickingNumbers(a) {
  const frequency = new Map();

  a.forEach((num) => frequency.set(num, (frequency.get(num) || 0) + 1));

  let maxLength = 0;

  frequency.forEach((count, num) => {
    const lengthWithNext = count + (frequency.get(num + 1) || 0);
    maxLength = Math.max(maxLength, lengthWithNext);
  });

  return maxLength;
}

// A2 Left Rotation

function rotateLeft(d, arr) {
  const rotatedArray = arr.slice(d).concat(arr.slice(0, d));
  return rotatedArray;
}

// A3 Number Line Jumps

function kangaroo(x1, v1, x2, v2) {
  if (v1 !== v2) {
    if ((x2 - x1) % (v1 - v2) === 0 && (x2 - x1) / (v1 - v2) > 0) {
      return "YES";
    } else {
      return "NO";
    }
  } else {
    if (x1 === x2) {
      return "YES";
    } else {
      return "NO";
    }
  }
}

// A4 Separate The Numbers

function separateNumbers(s) {
  let combinedString;

  if (s.length === 1) {
    console.log("NO");
    return;
  }

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    const firstNumber = s.substring(0, i);
    let currentNumber = BigInt(firstNumber);
    let generatedString = firstNumber;

    while (generatedString.length < s.length) {
      currentNumber++;
      combinedString = generatedString += currentNumber.toString();
    }

    if (combinedString === s) {
      console.log(`YES ${firstNumber}`);
      return;
    }
  }

  console.log("NO");
}

// A5 Closest Numbers

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let minDifference = Infinity;
  let result = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const difference = arr[i + 1] - arr[i];

    if (difference < minDifference) {
      minDifference = difference;
      result = [arr[i], arr[i + 1]];
    } else if (difference === minDifference) {
      result.push(arr[i], arr[i + 1]);
    }
  }

  return result;
}

// A6 Tower Breakers

function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
}
