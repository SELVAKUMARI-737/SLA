
// 12. Factorial of a number


let num = 5;
let fact = 1;

// FOR LOOP
for (let i = 1; i <= num; i++) {
    fact = fact * i;
}
console.log("12) Factorial:", fact);

// WHILE LOOP
/*
let i = 1;
fact = 1;
while (i <= num) {
    fact = fact * i;
    i++;
}
console.log("12) Factorial:", fact);
*/

// DO WHILE LOOP
/*
let i = 1;
fact = 1;
do {
    fact = fact * i;
    i++;
} while (i <= num);
console.log("12) Factorial:", fact);
*/



// 13. Prime number or not


let n = 7;
let isPrime = true;

// FOR LOOP
for (let i = 2; i < n; i++) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
}
console.log("13) Prime or Not:", isPrime);

// WHILE LOOP
/*
let i = 2;
isPrime = true;
while (i < n) {
    if (n % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
console.log("13) Prime or Not:", isPrime);
*/

// DO WHILE LOOP
/*
let i = 2;
isPrime = true;
do {
    if (n % i === 0 && n !== 2) {
        isPrime = false;
        break;
    }
    i++;
} while (i < n);
console.log("13) Prime or Not:", isPrime);
*/




// 14. Prime number series


let limit = 20;

// FOR LOOP
for (let i = 2; i <= limit; i++) {
    let prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) console.log("14) Prime:", i);
}

// WHILE LOOP
/*
let i = 2;
while (i <= limit) {
    let j = 2, prime = true;
    while (j < i) {
        if (i % j === 0) {
            prime = false;
            break;
        }
        j++;
    }
    if (prime) console.log("14) Prime:", i);
    i++;
}
*/

// DO WHILE LOOP
/*
let i = 2;
do {
    let j = 2, prime = true;
    do {
        if (i % j === 0 && i !== j) {
            prime = false;
            break;
        }
        j++;
    } while (j < i);
    if (prime) console.log("14) Prime:", i);
    i++;
} while (i <= limit);
*/




// 15. Armstrong number or not


let arm = 153;
let temp = arm;
let sum = 0;

// FOR LOOP
for (; temp > 0; temp = Math.floor(temp / 10)) {
    let d = temp % 10;
    sum += d * d * d;
}
console.log("15) Armstrong:", sum === arm);

// WHILE LOOP
/*
temp = arm;
sum = 0;
while (temp > 0) {
    let d = temp % 10;
    sum += d * d * d;
    temp = Math.floor(temp / 10);
}
console.log("15) Armstrong:", sum === arm);
*/

// DO WHILE LOOP
/*
temp = arm;
sum = 0;
do {
    let d = temp % 10;
    sum += d * d * d;
    temp = Math.floor(temp / 10);
} while (temp > 0);
console.log("15) Armstrong:", sum === arm);
*/




// 16. Armstrong number series


// FOR LOOP
for (let i = 1; i <= 500; i++) {
    let t = i, s = 0;
    for (; t > 0; t = Math.floor(t / 10)) {
        let d = t % 10;
        s += d * d * d;
    }
    if (s === i) console.log("16) Armstrong:", i);
}

// WHILE LOOP
/*
let i = 1;
while (i <= 500) {
    let t = i, s = 0;
    while (t > 0) {
        let d = t % 10;
        s += d * d * d;
        t = Math.floor(t / 10);
    }
    if (s === i) console.log("16) Armstrong:", i);
    i++;
}
*/

// DO WHILE LOOP
/*
let i = 1;
do {
    let t = i, s = 0;
    do {
        let d = t % 10;
        s += d * d * d;
        t = Math.floor(t / 10);
    } while (t > 0);
    if (s === i) console.log("16) Armstrong:", i);
    i++;
} while (i <= 500);
*/




// 17. Fibonacci series


let a = 0, b = 1;

// FOR LOOP
for (let i = 1; i <= 7; i++) {
    console.log("17)", a);
    let c = a + b;
    a = b;
    b = c;
}

// WHILE LOOP
/*
a = 0; b = 1;
let i = 1;
while (i <= 7) {
    console.log("17)", a);
    let c = a + b;
    a = b;
    b = c;
    i++;
}
*/

// DO WHILE LOOP
/*
a = 0; b = 1;
let i = 1;
do {
    console.log("17)", a);
    let c = a + b;
    a = b;
    b = c;
    i++;
} while (i <= 7);
*/




// 18. Print 5 table


// FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log("18)", i, "* 5 =", i * 5);
}

// WHILE LOOP
/*
let i = 1;
while (i <= 10) {
    console.log("18)", i, "* 5 =", i * 5);
    i++;
}
*/

// DO WHILE LOOP
/*
let i = 1;
do {
    console.log("18)", i, "* 5 =", i * 5);
    i++;
} while (i <= 10);
*/



// 19. Sum of digits


let val = 123;
let total = 0;

// FOR LOOP
for (; val > 0; val = Math.floor(val / 10)) {
    total += val % 10;
}
console.log("19) Sum of digits:", total);

// WHILE LOOP
/*
val = 123;
total = 0;
while (val > 0) {
    total += val % 10;
    val = Math.floor(val / 10);
}
console.log("19) Sum of digits:", total);
*/

// DO WHILE LOOP
/*
val = 123;
total = 0;
do {
    total += val % 10;
    val = Math.floor(val / 10);
} while (val > 0);
console.log("19) Sum of digits:", total);
*/




// 20. Palindrome or not


let word = "MALAYALAM";
let rev = "";

// FOR LOOP
for (let i = word.length - 1; i >= 0; i--) {
    rev += word[i];
}
console.log("20) Palindrome:", word === rev);

// WHILE LOOP
/*
rev = "";
let i = word.length - 1;
while (i >= 0) {
    rev += word[i];
    i--;
}
console.log("20) Palindrome:", word === rev);
*/

// DO WHILE LOOP
/*
rev = "";
let i = word.length - 1;
do {
    rev += word[i];
    i--;
} while (i >= 0);
console.log("20) Palindrome:", word === rev);
*/
