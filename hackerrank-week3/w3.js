// A1 Permuting Two Arrays

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return "NO";
        }
    }

    return "YES";
}

// A2 Subarray Division 2

function birthday(s, d, m) {
    let chocolates = 0;

    const sum = (array) => array.reduce((acc, item) => acc + item, 0);

    for (let i = 0; i < s.length - m + 1; i++) {
        if (sum(s.slice(i, i + m)) === d) chocolates++;
    }

    return chocolates;
}

// A3 XOR Strings 3

function xoring(a, b, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        if (a[i] === b[i]) {
            result += "0";
        } else {
            result += "1";
        }
    }

    return result;
}

// A4 Sales By Match

function sockMerchant(n, ar) {
    let sockCounts = new Map();
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        let color = ar[i];
        if (sockCounts.has(color)) {
            sockCounts.set(color, sockCounts.get(color) + 1);
        } else {
            sockCounts.set(color, 1);
        }
    }

    sockCounts.forEach((count) => {
        pairs += Math.floor(count / 2);
    });

    return pairs;
}

// A5 Migratory Birds

function migratoryBirds(arr) {
    let birdTypes = new Map();

    for (let i = 0; i < arr.length; i++) {
        let type = arr[i];
        if (birdTypes.has(type)) {
            birdTypes.set(type, birdTypes.get(type) + 1);
        } else {
            birdTypes.set(type, 1);
        }
    }

    const maxValue = Math.max(...Array.from(birdTypes.values()));

    let keysWithMaxValue = [];
    for (let [key, value] of birdTypes) {
        if (value === maxValue) {
            keysWithMaxValue.push(key);
        }
    }

    return Math.min(...keysWithMaxValue);
}

// A6 Maximum Perimeter Triangle

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);

    let maxPerimeter = -1;
    let bestTriangle = [-1];

    for (let i = sticks.length - 3; i >= 0; i--) {
        const a = sticks[i];
        const b = sticks[i + 1];
        const c = sticks[i + 2];

        if (a + b > c) {
            const perimeter = a + b + c;

            if (perimeter > maxPerimeter) {
                maxPerimeter = perimeter;
                bestTriangle = [a, b, c];
            }
        }
    }

    return bestTriangle;
}
