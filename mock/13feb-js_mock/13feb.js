// get unique values from the array 
console.log("1) get unique values from the array ");
function getUniqueValues(arr, key) {
    return [...new Set(arr.map(item => item[key]))];
}


let users = [
    {name: "Ram", dept: "IT"},
    {name: "John", dept: "HR"},
    {name: "Priya", dept: "IT"}
];

console.log(getUniqueValues(users, "dept"));

// Count each character 
console.log("2) count each character in a string");
function charFrequency(str){
    let result ={};
    for(let ch of str){
        result[ch] = (result[ch] || 0) +1;
    }
    return result;

}
console.log(charFrequency("hello"));
// Factorial without recursion
console.log("3) factorial without recursion");
function factorial (n){
    let fact = 1;
    for (let i = 1; i<=n; i++){
        fact *=i;

    }
    return fact;
}
console.log(factorial(5));
// Factorial without recursion
console.log("3) factorial with recursion");
function fact(n){
    if(n === 0) return 1;
    return n* fact(n-1);
}
console.log(fact(4));

// Flatten a deeply nested array 
console.log("4)Flatten a deeply nested array");
let arr = [1,[2,[3,4],5]];
let flatarr = arr.flat(Infinity);
console.log(flatarr);

// remove duplicate element from array 
console.log("5)remove duplicate element from array");
let num = [1,2,2,2,3,3,4,4,5];
let unique = [...new Set(num)];
console.log(unique);

// check if two arrays are equal
console.log("7)check if two arrays are equal")
function arraysEqual(a,b){
  return JSON.stringify(a) === JSON.stringify(b);
}

console.log(arraysEqual([1,2,[3,4]],[1,2,[3,4]]));

// get unique values from array
console.log("8) get unique values from the array");

function getUniqueValues(arr, key) {
    return [...new Set(arr.map(item => item[key]))];
}

let user = [
    {name: "Ram", dept: "IT"},
    {name: "John", dept: "HR"},
    {name: "Priya", dept: "IT"}
];

console.log(getUniqueValues(user, "dept"));
