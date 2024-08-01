// A1 Plus Minus

function plusMinus(arr) {
    let count = {
        positives: 0,
        negatives: 0,
        zeros: 0
    };

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { count.positives++; }
        else if (arr[i] < 0) { count.negatives++; }
        if (arr[i] === 0)  { count.zeros++; }
    }

    const negativeRatio = (count.negatives/arr.length).toFixed(6);
    const positiveRatio = (count.positives/arr.length).toFixed(6);
    const zeroRatio = (count.zeros/arr.length).toFixed(6);
    
    const newArray = [ positiveRatio, negativeRatio, zeroRatio ];
    console.log(newArray[0]);
    console.log(newArray[1]);
    console.log(newArray[2]);
}

// A2 Mini-Max Sum

function miniMaxSum(arr) {
    let minSum = 0;
    let maxSum = 0;
    const sortedArray = arr.sort((a, b) => a - b);
    const minArray = sortedArray.slice(0, -1);
    for (let i = 0; i < minArray.length; i++) {
        minSum += minArray[i];
    }

    const maxArray = sortedArray.slice(1);
    for (let i = 0; i < maxArray.length; i++) {
        maxSum += maxArray[i];
    }

    console.log(minSum + ' ' + maxSum);
}

// A3 Time Conversion

function timeConversion(s) {
    const hours = parseInt(s.slice(0, 2)); //Extract hours
    const timeOfDay = s[s.length - 2];
    let formattedHours;

    if (timeOfDay === 'P') {
        formattedHours = (hours === 12) ? 12 : hours + 12;
    } else {
        formattedHours = (hours === 12) ? 0 : hours;
    }

    const formattedHoursString = formattedHours.toString().padStart(2, '0');
    const minutesAndSeconds = s.slice(2, 8);
    return `${formattedHoursString}${minutesAndSeconds}`;
}

// A4 Breaking the Records

function breakingRecords(scores) {
    const startScore = scores[0];
    let minScore = startScore;
    let maxScore = startScore;
    let lowScore = 0;
    let highScore = 0;

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            highScore++;
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
            lowScore++;
        }
    }

    return [highScore, lowScore];
}

// A5 Camel Case 4

// function processData(input) {
//     const operation = input.charAt(0);
//     const construct = input.charAt(2);
//     let substring = input.substring(4).trim();

//     if (operation === 'S') {
//         substring = substring
//             .replace(/([a-z])([A-Z])/g, '$1 $2')
//             .toLowerCase()
//             .replace(/[^a-z\s]/g, '')
//             .trim();
//     } else if (operation === 'C') {
//         if (construct === 'V') {
//             substring = substring
//                 .replace(/\s(.)/g, (char) => char.toUpperCase())
//                 .replace(/\s+/g, '')
//                 .toLowerCase();
//         } else if (construct === 'M') {
//             substring = substring
//                 .replace(/\s(.)/g, (char) => char.toUpperCase())
//                 .replace(/\s+/g, '')
//                 .toLowerCase();
//             substring += '()';
//         } else if (construct === 'C') {
//             substring = substring
//                 .replace(/\s(.)/g, (char) => char.toUpperCase())
//                 .replace(/\s+/g, '')
//                 .replace(/^./, str => str.toUpperCase());
//         }
//     }

//     console.log(substring);
// }

function processData(input) {
    const operation = input.charAt(0);
    const construct = input.charAt(2);
    let substring = input.substring(4).trim();

    if (operation === 'S') {
        let splitString = substring[0];

            for (let i = 1; i < substring.length; i++) {
                if (substring[i] >= 'A' && substring[i] <= 'Z') {
                    splitString += ' ';
                }
                splitString += substring[i];
            }

            let result = splitString.toLowerCase().trim();

        if (construct === 'M') {
            console.log(result.slice(0, -2));
        } else {
            console.log(result);
        }

    } else if (operation === 'C') {
        let combinedString = substring.split(' ');

        let capitalisedWords = combinedString.map((word, index) => {
            if (index === 0) {
                return word;
            }
            return word[0].toUpperCase() + word.slice(1);
        });

        const result = capitalisedWords.join('').trim();

        if (construct === 'V') {
            console.log(result);
        } else if (construct === 'M') {
            console.log(result + '()');
        } else if (construct === 'C') {
            console.log(result.charAt(0).toUpperCase() + result.slice(1));
        }
    }
}

processData('S;M;plasticCup()');
processData('C;V;mobile phone');
processData('C;C;coffee machine');
processData('S;C;LargeSoftwareBook');
processData('C;M;white sheet of paper');
processData('S;V;pictureFrame');
processData('S;V;iPad');
processData('C;M;mouse pad');
processData('C;C;code swarm');
processData('S;C;OrangeHighlighter');

// A6 Divisible Sum Pairs

function divisibleSumPairs(n, k, ar) {
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                pairs ++;
            }
        }
    }

    return pairs;
}

// A7 Sparse Arrays

function matchingStrings(strings, queries) {
    const results = [];

    queries.forEach(query => {
        const count = strings.filter(string => string === query).length;

        results.push(count);
    });

    return results;
}

// Find median of odd-numbered array length

function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const medianIndex = (arr.length - 1) / 2;
    const median = arr[medianIndex];
    return median;
}

arr = [0, 1, 2, 4, 6, 5, 3]