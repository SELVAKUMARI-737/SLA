
// level 1 
// 1. Create array 
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; 
console.log("1:", fruits); 
 
// 2. First & Last element 
console.log("2:", fruits[0], fruits[fruits.length - 1]); 
 
// 3. Length 
console.log("3:", fruits.length); 
 
// 4. push() 
fruits.push("Pineapple"); 
console.log("4:", fruits); 
 
// 5. pop() 
fruits.pop(); 
console.log("5:", fruits); 
 
// 6. unshift() 
fruits.unshift("Strawberry"); 
console.log("6:", fruits); 
 
// 7. shift() 
fruits.shift(); 
console.log("7:", fruits); 
 
// 9. Combine arrays 
let arr1 = [1, 2]; 
let arr2 = [3, 4]; 
let combined = [...arr1, ...arr2]; 
console.log("9:", combined); 
 
// 10. includes() 
console.log("10:", fruits.includes("Mango")); 
 
// level2 
 
let numbers = [10, 20, 30, 40, 50]; 
 
// 11. for loop 
console.log("11:"); 
for (let i = 0; i < numbers.length; i++) { 
    console.log(numbers[i]); 
} 
 
// 12. for...of 
console.log("12:"); 
for (let num of numbers) { 
    console.log(num); 
} 
 
// 13. forEach() 
console.log("13:"); 
numbers.forEach((val, index) => { 
    console.log(index, val); 
}); 
 
// 14. Sum 
let sum1 = 0; 
for (let num of numbers) { 
    sum += num; 
} 
console.log("14:", sum); 
 
// 15. Max 
let max = numbers[0]; 

// 16. Count even 
let evenCount = 0; 
for (let num of numbers) { 
    if (num % 2 === 0) evenCount++; 
} 
console.log("16:", evenCount); 
 
// 17. Pass/Fail 
let markss = [30, 40, 80, 20]; 
console.log("17:"); 
marks.forEach(m => { 
    console.log(m, m >= 35 ? "Pass" : "Fail"); 
}); 
 
// 18. Names starting with A 
let names1 = ["Arun", "Bala", "Anu", "Kumar"]; 
console.log("18:"); 
names.forEach(n => { 
    if (n.startsWith("A")) console.log(n); 
}); 
 
// 19. Reverse 
let rev = [...numbers].reverse(); 
console.log("19:", rev); 
 
// 20. Sort ascending 
let sorted = [...numbers].sort((a, b) => a - b); 
console.log("20:", sorted); 
//  Level 3 
// Base array
let nums = [10, 25, 60, 80, 120];

// 21. Double each element
let doubled = nums.map(n => n * 2);
console.log("21:", doubled);

// 22. Only even numbers
let even = nums.filter(n => n % 2 === 0);
console.log("22:", even);

// 23. Total sum
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log("23:", sum);

// 24. First number > 50
let firstBig = nums.find(n => n > 50);
console.log("24:", firstBig);

// 25. Any number > 100
let check100 = nums.some(n => n > 100);
console.log("25:", check100);

// 26. All numbers positive
let allPositive = nums.every(n => n > 0);
console.log("26:", allPositive);

// 27. Names to uppercase
let names = ["selin", "john", "arun"];
let upperNames = names.map(n => n.toUpperCase());
console.log("27:", upperNames);

// 28. Marks >= 50
let marks = [40, 55, 70, 30, 90];
let pass = marks.filter(m => m >= 50);
console.log("28:", pass);

// 29. Multiply all by 10
let times10 = nums.map(n => n * 10);
console.log("29:", times10);

// 30. Average using reduce
let avg = nums.reduce((acc, n) => acc + n, 0) / nums.length;
console.log("30:", avg);
