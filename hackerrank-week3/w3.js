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

// A3 XOR Strings 3

function xoring(a, b, n) {
    let result = '';
    
    for (let i = 0; i < n; i++) {
        if (a[i] === b[i]) {
            result += '0';
        } else {
            result += '1';
        }
    }
    
    return result;
}