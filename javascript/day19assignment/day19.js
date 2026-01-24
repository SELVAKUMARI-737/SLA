console.log("1) factorial");
const factorial = () => {
  let n = 5;
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  console.log("Factorial:", fact);
};

factorial();

console.log("2)Prime or not");
const primeCheck = () => {
  let n = 7;
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  console.log(count === 2 ? "Prime" : "Not Prime");
};

primeCheck();

console.log("3) Armstrong or not");
const armstrongCheck = () => {
  let n = 153;
  let temp = n;
  let sum = 0;

  while (temp > 0) {
    let d = temp % 10;
    sum = sum + d * d * d;
    temp = (temp - d) / 10;
  }

  console.log(sum === n ? "Armstrong" : "Not Armstrong");
};

armstrongCheck();

console.log("4) print 5 table");
const tableFive = () => {
  let n = 5;

  for (let i = 1; i <= 10; i++) {
    console.log(i + " * " + n + " = " + (i * n));
  }
};

tableFive();

console.log("5) sum of digits");
const sumOfDigits = () => {
  let n = 123;
  let sum = 0;

  while (n > 0) {
    let d = n % 10;
    sum = sum + d;
    n = (n - d) / 10;
  }

  console.log("Sum:", sum);
};

sumOfDigits();

console.log("6) palindrome or not");
const palindromeCheck = () => {
  let str = "MALAYALAM";
  let rev = "";
  let i = str.length - 1;

  while (i >= 0) {
    rev = rev + str[i];
    i--;
  }

  console.log(str === rev ? "Palindrome" : "Not Palindrome");
};

palindromeCheck();
