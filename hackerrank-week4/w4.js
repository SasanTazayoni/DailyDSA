// A1 Picking Numbers

function pickingNumbers(a) {
    const frequency = {};
    for (let num of a) {
        frequency[num] = (frequency[num] || 0) + 1;
    }

    let maxLength = 0;

    for (let num in frequency) {
        num = Number(num);
        const lengthWithNext = frequency[num] + (frequency[num + 1] || 0);
        maxLength = Math.max(maxLength, lengthWithNext);
    }

    return maxLength;
}
