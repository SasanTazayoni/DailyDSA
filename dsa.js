// A1 HackerRank Plus Minus

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

// A2 HackerRank Mini-Max Sum

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

// A3 HackerRank Time Conversion

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