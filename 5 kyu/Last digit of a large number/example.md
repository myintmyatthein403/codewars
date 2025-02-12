Here are two real-world examples of how the `lastDigit` function can be used:

### Example 1: Cryptography
In cryptography, large numbers are often used in encryption algorithms. For example, RSA encryption involves exponentiation of large numbers. The `lastDigit` function can be used to quickly determine the last digit of a large exponentiation, which can be useful in certain cryptographic calculations.

```javascript
// Example usage in cryptography
const base = 123456789;
const exponent = 987654321;
const lastDigitOfLargeExponentiation = lastDigit(base, exponent);
console.log(`The last digit of ${base}^${exponent} is ${lastDigitOfLargeExponentiation}`);
// Expected output: The last digit of 123456789^987654321 is 9n
```

### Example 2: Large-Scale Simulations
In scientific simulations, large numbers are often used to model complex systems. For example, in computational physics, you might need to calculate the last digit of a large number to determine certain properties of a system.

```javascript
// Example usage in scientific simulations
const particles = 987654321;
const iterations = 123456789;
const lastDigitOfSimulation = lastDigit(particles, iterations);
console.log(`The last digit of the simulation result is ${lastDigitOfSimulation}`);
// Expected output: The last digit of the simulation result is 9n
```

In both examples, the `lastDigit` function helps to efficiently compute the last digit of a large exponentiation, which can be useful in various real-world applications involving large numbers.
