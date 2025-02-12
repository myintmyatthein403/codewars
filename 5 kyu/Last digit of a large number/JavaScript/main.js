function lastDigit(n, m) {
  if (m === 0) return 1n; // Any number to the power of 0 is 1

  // Reduce the problem using modular arithmetic
  let base = BigInt(n) % 10n;
  let exponent = BigInt(m);
  let result = 1n;

  while (exponent > 0) {
    if (exponent % 2n === 1n) {
      result = (result * base) % 10n;
    }
    base = (base * base) % 10n;
    exponent = exponent / 2n;
  }

  return result; // Return the result as a BigInt
}
