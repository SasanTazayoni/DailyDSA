// A1 Permuting Two Arrays

function twoArrays(k, A, B) {
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);

    for (let i = 0; i < A.length; i++) {
        if (A[i] + B[i] < k) {
            return 'NO';
        }
    }

    return 'YES';
}

// A2 Subarray Division 2

function birthday(s, d, m) {
    let chocolates = 0;

    const sum = array => array.reduce((acc, item) => acc + item, 0);

    for (let i = 0; i < s.length - m + 1; i++) {
        if (sum(s.slice(i, i + m)) === d)
            chocolates++;
    }

    return chocolates;
}