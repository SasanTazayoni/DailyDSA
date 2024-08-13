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
