// Q1 HackerRank Plus Minus

function plusMinus(arr) {
    let count = {
        positives: 0,
        negatives: 0,
        zeros: 0
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) { count.positives++ }
        else if (arr[i] < 0) { count.negatives++ }
        if (arr[i] === 0)  { count.zeros++ };
    }

    const negativeRatio = (count.negatives/arr.length).toFixed(6);
    const positiveRatio = (count.positives/arr.length).toFixed(6);
    const zeroRatio = (count.zeros/arr.length).toFixed(6);
    
    const newArray = [ positiveRatio, negativeRatio, zeroRatio ];
    console.log(newArray[0]);
    console.log(newArray[1]);
    console.log(newArray[2]);
}