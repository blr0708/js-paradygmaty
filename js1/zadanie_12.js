const climbStairs = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev1 = 1;
  let prev2 = 2;
  let currentWays = 0;

  for (let i = 3; i <= n; i++) {
    currentWays = prev1 + prev2;
    prev1 = prev2;
    prev2 = currentWays;
  }

  return currentWays;
};

console.log(`n = 2: ${climbStairs(2)} sposoby`);
console.log(`n = 3: ${climbStairs(3)} sposoby`);
console.log(`n = 4: ${climbStairs(4)} sposoby`);
console.log(`n = 5: ${climbStairs(5)} sposobów`);
console.log(`n = 45: ${climbStairs(45)} sposobów`);
