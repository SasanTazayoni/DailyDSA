// A1 Max Min

function maxMin(k, arr) {
  arr.sort((a, b) => a - b);
  let minUnfairness = Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let unfairness = arr[i + k - 1] - arr[i];
    minUnfairness = Math.min(minUnfairness, unfairness);
  }

  return minUnfairness;
}
