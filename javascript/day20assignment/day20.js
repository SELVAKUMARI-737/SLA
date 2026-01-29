// first question 
console.log("1)factorial: ");
const factorial = (n) => {
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
    }
    console.log("Factorial is:", fact);
};

factorial(5);

// second question
console.log("2) prime or not : ");
const isPrime = (n) => {
    let count = 0;

    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            count++;
        }
    }

    if(count === 2){
        console.log("Prime number");
    } else {
        console.log("Not a prime number");
    }
};

isPrime(7);

// Third question
console.log("3)Armstrong or not: ");
const isArmstrong = (n) => {
    let temp = n;
    let sum = 0;

    while(temp > 0){
        let d = temp % 10;
        sum = sum + (d * d * d);
        temp = Math.floor(temp / 10);
    }

    if(sum === n){
        console.log("Armstrong number");
    } else {
        console.log("Not an Armstrong number");
    }
};

isArmstrong(153);

// Fourth question
console.log("4) print 5 table: ");
const table5 = () => {
    for(let i = 1; i <= 10; i++){
        console.log(i + " * 5 = " + (i * 5));
    }
};

table5();

// Fifth question 
console.log("5)sum of digits: ");
const sumOfDigits = (n) => {
    let sum = 0;

    while(n > 0){
        let d = n % 10;
        sum = sum + d;
        n = Math.floor(n / 10);
    }

    console.log("Sum of digits:", sum);
};

sumOfDigits(123);

// sixth question
console.log(" 6) Palindrome or not");
const isPalindrome = (word) => {
    let rev = "";
    
    for(let i = word.length - 1; i >= 0; i--){
        rev = rev + word[i];
    }

    if(rev === word){
        console.log("Palindrome");
    } else {
        console.log("Not a palindrome");
    }
};

isPalindrome("MALAYALAM");



