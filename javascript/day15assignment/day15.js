// Task 1
console.log("task 1")
let a = 20, b = 10;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Task 2
console.log("task 2")
let num = 10;
num += 5;
num -= 3;
num *= 2;
num /= 4;
console.log(num);

// Task 3
console.log("task 3")
let x = 15, y = 20;
console.log(x == y);
console.log(x === y);
console.log(x > y);
console.log(x <= y);

// Task 4
console.log("task 4")
let one = true, two = false;
console.log(one && two);
console.log(one || two);
console.log(!one);

// Task 5
console.log("task 5")
let n = 7;
console.log(n % 2 === 0 ? "Even" : "Odd");

// Task 6
console.log("task 6")
let salary = 20000;
salary += salary * 0.20;
salary += salary * 0.10;
salary -= salary * 0.08;
console.log(salary);

// Task 7
console.log("task 7")
let marks = 82;
if (marks >= 0 && marks <= 100) {
    if (marks >= 90) console.log("A");
    else if (marks >= 75) console.log("B");
    else if (marks >= 50) console.log("C");
    else console.log("Fail");
} else {
    console.log("Invalid");
}

// Task 8
console.log("Task 8");

let user = "admin";
let pass = "1234";

let inUser = prompt("Enter username:");
let inPass = prompt("Enter password:");

console.log(
    user === inUser && pass === inPass
        ? "Login Success"
        : "Login Failed"
);


// Task 9
console.log("task 9")
let units = 180;
let bill = units <= 100 ? units * 5 : units <= 200 ? units * 7 : units * 10;
console.log(bill);

// Task 10
console.log("task 10")
let amount = 6000, premium = true;
console.log(amount > 5000 && premium ? "Discount Applied" : "No Discount");
