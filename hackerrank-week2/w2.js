// A1 HackerRank Lonely Integer

function lonelyinteger(a) {
    const frequencyMap = a.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const uniqueArray = Array.from(new Set(a));

    return uniqueArray.filter(num => frequencyMap[num] === 1);
}