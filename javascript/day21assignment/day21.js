// first question
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log("1)", arr);

// second question
let a = [10, 20, 30, 40];
console.log("2)");
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// third question
let nums = [1, 2, 3, 4];
let d = nums.map(n => n * 2);
console.log("3)", d);

// fourth question
let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(n => n % 2 === 0);
console.log("4)", even);

//fifth question
let values = [10, 20, 30];
let sum = values.reduce((total, n) => total + n, 0);
console.log("5)", sum);

//sixth question
let data = [5, 8, 12, 3, 20];
let firstGreater = data.find(n => n > 10);
console.log("6)", firstGreater);

//seventh question
let fruits = ["apple", "banana", "orange"];
console.log("7)", fruits.includes("banana"));
