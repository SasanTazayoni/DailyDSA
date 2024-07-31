// A1 HackerRank Lonely Integer

function lonelyinteger(a) {
    const frequencyMap = a.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const uniqueArray = Array.from(new Set(a));

    return uniqueArray.filter(num => frequencyMap[num] === 1);
}

// A2 HackerRank Grading Students

function gradingStudents(grades) {
    const roundedGrades = [];

    grades.forEach(grade => {
        if (grade < 38) {
            roundedGrades.push(grade);
        } else if (grade % 5 > 2) {
            grade = grade + 5 - (grade % 5);
            roundedGrades.push(grade);
        } else {
            roundedGrades.push(grade);
        }
    });

    return roundedGrades;
}

// A3 HackerRank Flipping bits

function flippingBits(n) {
    return (~n >>> 0);
}

// A4 HackerRank Diagonal Difference

function diagonalDifference(arr) {
    let primaryDiagonal = 0
    let secondaryDiagonal = 0

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                primaryDiagonal += arr[i][j];
            }

            if (i + j === arr.length - 1) {
                secondaryDiagonal += arr[i][j];
            }
        }
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

// A5 HackerRank Counting Sort 1

function countingSort(arr) {
    const frequencyArray = new Array(100).fill(0);

    arr.forEach(num => {
        if (num >= 0 && num < 100) {
            frequencyArray[num]++;
        }
    });

    return frequencyArray;
}

// A6 Counting Valleys

function countingValleys(steps, path) {
    let startAltitude = 0;
    let endAltitude = 0;
    let valleys = 0;

    for (let i = 0; i < steps; i++) {
        startAltitude = endAltitude;
        path[i] === 'U' ? endAltitude++ : endAltitude--;
        if (startAltitude === 0 && endAltitude === -1) valleys++;
    }

    return valleys;
}