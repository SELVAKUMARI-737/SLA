// 1. Remove duplicate elements from an array
let arr1 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < arr1.length; i++) {
    if (!unique.includes(arr1[i])) {
        unique.push(arr1[i]);
    }
}
console.log("1)", unique);


// 2. Find the second largest number in an array
let arr2 = [10, 45, 20, 8, 30];
let sorted = [...arr2].sort((a, b) => b - a);
console.log("2)", sorted[1]);


// 3. Check if two strings are anagrams
let s1 = "listen";
let s2 = "silent";

let isAnagram =
  s1.split("").sort().join("") === s2.split("").sort().join("");

console.log("3)", isAnagram);


// 4. Count occurrences of each element in an array
let arr3 = ["apple", "banana", "apple", "orange", "banana"];
let count = {};

for (let i = 0; i < arr3.length; i++) {
    count[arr3[i]] = (count[arr3[i]] || 0) + 1;
}
console.log("4)", count);


// 5. Find factorial using recursion (arrow function)
let factorial = (n) => {
    if (n === 1) return 1;
    return n * factorial(n - 1);
};
console.log("5)", factorial(5));


// 6. Student marks – calculate average
let marks = [80, 75, 90, 85];
let total = marks.reduce((sum, m) => sum + m, 0);
let average = total / marks.length;
console.log("6)", average);


// 7. Find missing number in an array (1 to n)
let arr4 = [1, 2, 4, 5];
let n = 5;
let expectedSum = (n * (n + 1)) / 2;
let actualSum = arr4.reduce((s, num) => s + num, 0);
console.log("7)", expectedSum - actualSum);


// 8. Find the longest word in a sentence
let sentence = "JavaScript is a powerful language";
let words = sentence.split(" ");
let longestWord = words.reduce((longest, word) =>
    word.length > longest.length ? word : longest
, "");

console.log("8)", longestWord);
