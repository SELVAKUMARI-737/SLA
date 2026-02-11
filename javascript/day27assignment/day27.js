// 1. Extract First & Last Element

let arr1 = [10, 20, 30, 40, 50];

let [first, , , , last] = arr1;

console.log("1)", first, last);



// 2. Skip Middle Value (take only first & third)

let arr2 = [100, 200, 300];

let [f, , t] = arr2;

console.log("2)", f, t);



// 3. Separate First Element & Remaining

let arr3 = [1, 2, 3, 4, 5];

let [a, ...rest] = arr3;

console.log("3)", a, rest);



// 4. Merge Two Arrays Using Spread

let a1 = [1, 2];
let b1 = [3, 4];

let merged = [...a1, ...b1];

console.log("4)", merged);



// 5. Clone an Array

let arr4 = [10, 20, 30];

let copy = [...arr4];

console.log("5)", copy);



// 6. Extract Properties from Object

let product = {
  id: 1,
  name: "Mobile",
  price: 15000
};

let { name, price } = product;

console.log("6)", name, price);



// 7. Rename Variables Using Destructuring

let user = { name: "Raj", age: 25 };

let { name: fullName } = user;

console.log("7)", fullName);



// 8. Nested Object Destructuring

let student = {
  marks: {
    math: 95,
    science: 90
  }
};

let { marks: { math, science } } = student;

console.log("8)", math, science);



// 9. Function Parameter Destructuring

function show({ name, age }) {
  console.log("9)", name, age);
}

show({ name: "Kumar", age: 22 });



// 10. Remove First Element and Add New Values

let arr5 = [10, 20, 30, 40];

let [, ...remaining] = arr5;
let updated = [100, 200, ...remaining];

console.log("10)", updated);
