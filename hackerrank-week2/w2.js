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