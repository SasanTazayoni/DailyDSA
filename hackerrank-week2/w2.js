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