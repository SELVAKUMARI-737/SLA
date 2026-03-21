// 1. Factorial
const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
};
console.log("Factorial:", factorial(5));

// 2. Prime Number
const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
console.log("Is Prime:", isPrime(7));

// 3. Armstrong Number
const isArmstrong = (n) => {
  let sum = 0;
  let temp = n;
  let digits = n.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === n;
};
console.log("Is Armstrong:", isArmstrong(153));

// 4. Table of 5
const printTable = () => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} * 5 = ${i * 5}`);
  }
};
printTable();

// 5. Sum of Digits
const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};
console.log("Sum of digits:", sumOfDigits(123));

// 6. Palindrome
const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log("Is Palindrome:", isPalindrome("MALAYALAM"));