// A1 HackerRank Lonely Integer

function lonelyinteger(a) {
    let result = 0;

    for (const num of a) {
        result ^= num;
    }

    return result;
}