// 1. FACTORIAL
// without parameter
function factorial1() {
    let num = 5, fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    console.log("1) Factorial:", fact);
}
factorial1();

// with parameter
function factorial2(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    console.log("1) Factorial:", fact);
}
factorial2(5);

// return
function factorial3(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) fact *= i;
    return fact;
}
console.log("1) Factorial:", factorial3(5));


// 2. PRIME OR NOT
// without parameter
function prime1() {
    let n = 7, prime = true;
    for (let i = 2; i < n; i++) if (n % i === 0) prime = false;
    console.log("2) Prime:", prime);
}
prime1();

// with parameter
function prime2(n) {
    let prime = true;
    for (let i = 2; i < n; i++) if (n % i === 0) prime = false;
    console.log("2) Prime:", prime);
}
prime2(7);

// return
function prime3(n) {
    for (let i = 2; i < n; i++) if (n % i === 0) return false;
    return true;
}
console.log("2) Prime:", prime3(7));



// 3. PRIME SERIES
// without parameter
function primeSeries1() {
    for (let i = 2; i <= 20; i++) {
        let p = true;
        for (let j = 2; j < i; j++) if (i % j === 0) p = false;
        if (p) console.log("3)", i);
    }
}
primeSeries1();

// with parameter
function primeSeries2(limit) {
    for (let i = 2; i <= limit; i++) {
        let p = true;
        for (let j = 2; j < i; j++) if (i % j === 0) p = false;
        if (p) console.log("3)", i);
    }
}
primeSeries2(20);

// return
function primeSeries3(limit) {
    let res = "";
    for (let i = 2; i <= limit; i++) {
        let p = true;
        for (let j = 2; j < i; j++) if (i % j === 0) p = false;
        if (p) res += i + " ";
    }
    return res;
}
console.log("3)", primeSeries3(20));



// 4. ARMSTRONG OR NOT
// without parameter
function armstrong1() {
    let n = 153, temp = n, sum = 0;
    while (temp > 0) {
        let d = temp % 10;
        sum += d * d * d;
        temp = Math.floor(temp / 10);
    }
    console.log("4) Armstrong:", sum === n);
}
armstrong1();

// with parameter
function armstrong2(n) {
    let temp = n, sum = 0;
    while (temp > 0) {
        let d = temp % 10;
        sum += d * d * d;
        temp = Math.floor(temp / 10);
    }
    console.log("4) Armstrong:", sum === n);
}
armstrong2(153);

// return
function armstrong3(n) {
    let temp = n, sum = 0;
    while (temp > 0) {
        let d = temp % 10;
        sum += d * d * d;
        temp = Math.floor(temp / 10);
    }
    return sum === n;
}
console.log("4) Armstrong:", armstrong3(153));


// 5. ARMSTRONG SERIES
// without parameter
function armSeries1() {
    for (let i = 1; i <= 500; i++) {
        let t = i, s = 0;
        while (t > 0) {
            let d = t % 10;
            s += d * d * d;
            t = Math.floor(t / 10);
        }
        if (s === i) console.log("5)", i);
    }
}
armSeries1();

// with parameter
function armSeries2(limit) {
    for (let i = 1; i <= limit; i++) {
        let t = i, s = 0;
        while (t > 0) {
            let d = t % 10;
            s += d * d * d;
            t = Math.floor(t / 10);
        }
        if (s === i) console.log("5)", i);
    }
}
armSeries2(500);

// return
function armSeries3(limit) {
    let res = "";
    for (let i = 1; i <= limit; i++) {
        let t = i, s = 0;
        while (t > 0) {
            let d = t % 10;
            s += d * d * d;
            t = Math.floor(t / 10);
        }
        if (s === i) res += i + " ";
    }
    return res;
}
console.log("5)", armSeries3(500));

// 6. FIBONACCI
// without parameter
function fib1() {
    let a = 0, b = 1;
    for (let i = 1; i <= 7; i++) {
        console.log("6)", a);
        let c = a + b;
        a = b; b = c;
    }
}
fib1();

// with parameter
function fib2(n) {
    let a = 0, b = 1;
    for (let i = 1; i <= n; i++) {
        console.log("6)", a);
        let c = a + b;
        a = b; b = c;
    }
}
fib2(7);

// return
function fib3(n) {
    let a = 0, b = 1, res = "";
    for (let i = 1; i <= n; i++) {
        res += a + " ";
        let c = a + b;
        a = b; b = c;
    }
    return res;
}
console.log("6)", fib3(7));

// 7. TABLE OF 5
// without parameter
function table1() {
    for (let i = 1; i <= 10; i++) console.log("7)", i, "* 5 =", i * 5);
}
table1();

// with parameter
function table2(n) {
    for (let i = 1; i <= 10; i++) console.log("7)", i, "*", n, "=", i * n);
}
table2(5);

// return
function table3(n) {
    let res = "";
    for (let i = 1; i <= 10; i++) res += i + "*" + n + "=" + (i * n) + " ";
    return res;
}
console.log("7)", table3(5));


// 8. SUM OF DIGITS
// without parameter
function sumDigit1() {
    let n = 123, sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log("8) Sum:", sum);
}
sumDigit1();

// with parameter
function sumDigit2(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    console.log("8) Sum:", sum);
}
sumDigit2(123);

// return
function sumDigit3(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}
console.log("8) Sum:", sumDigit3(123));


// 9. PALINDROME
// without parameter
function palindrome1() {
    let str = "MALAYALAM", rev = "";
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    console.log("9) Palindrome:", str === rev);
}
palindrome1();

// with parameter
function palindrome2(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    console.log("9) Palindrome:", str === rev);
}
palindrome2("MALAYALAM");

// return
function palindrome3(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) rev += str[i];
    return str === rev;
}
console.log("9) Palindrome:", palindrome3("MALAYALAM"));
