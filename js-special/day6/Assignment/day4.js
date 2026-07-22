
// // 1. student object + print all values
// let student = { name: "Selin", age: 21, grade: "A" };
// console.log("1:", Object.values(student));

// // 2. car → print brand
// let car = { brand: "BMW", model: "X5", year: 2022 };
// console.log("2:", car.brand);

// // 3. mobile → add new property
// let mobile = { brand: "OnePlus", model: "Nord", price: 20000 };
// mobile.color = "Black";
// console.log("3:", mobile);

// // 4. book → change price
// let book = { name: "JS Basics", price: 500 };
// book.price = 650;
// console.log("4:", book);

// // 5. employee → check salary exists
// let employee = { name: "Arun", age: 25 };
// console.log("5:", "salary" in employee);

// // 6. product → delete discount
// let product = { name: "Laptop", price: 50000, discount: 10 };
// delete product.discount;
// console.log("6:", product);

// // 7. user → print keys
// let user = { name: "John", email: "john@gmail.com" };
// console.log("7:");
// for (let key in user) {
//   console.log(key);
// }

// // 8. dog → check age
// let dog = { breed: "Labrador", age: 1 };
// console.log("8:", dog.age < 2 ? "Puppy" : "Dog");

// // 9. calculator → sum
// let calculator = { a: 10, b: 20 };
// console.log("9:", calculator.a + calculator.b);

// // 10. person → full name
// let person = { firstName: "Selin", lastName: "Mari" };
// console.log("10:", person.firstName + " " + person.lastName);

// // 11. marks → total using loop
// let marks = { tamil: 80, eng: 85, maths: 90, sci: 88, social: 75 };
// let total = 0;
// for (let m in marks) {
//   total += marks[m];
// }
// console.log("11:", total);

// // 12. bike → check color exists
// let bike = { brand: "Yamaha", model: "R15" };
// console.log("12:", "color" in bike);

// // 13. movie → rating check
// let movie = { title: "Leo", rating: 9 };
// console.log("13:", movie.rating > 8 ? "Hit" : "Flop");

// // 14. account → add 500
// let account = { balance: 1000 };
// account.balance += 500;
// console.log("14:", account.balance);

// // 15. player → highest stat
// let player = { speed: 80, strength: 75, stamina: 90 };
// let highest = 0;
// for (let stat in player) {
//   if (player[stat] > highest) {
//     highest = player[stat];
//   }
// }
// console.log("15:", highest);

// // 16. game → count keys
// let game = { name: "BGMI", players: 100, mode: "online" };
// console.log("16:", Object.keys(game).length);

// // 17. course → update duration
// let course = { name: "MERN", duration: "3 months" };
// course.duration = "6 months";
// console.log("17:", course);

// // 18. teacher → sentence
// let teacher = { name: "Ravi", subject: "Maths" };
// console.log("18:", teacher.name + " teaches " + teacher.subject);

// // 19. settings → change theme
// let settings = { theme: "light", fontSize: 14 };
// settings.theme = "dark";
// console.log("19:", settings);

// // 20. shopItem → price check
// let shopItem = { name: "Bag", price: 120 };
// console.log("20:", shopItem.price > 100 ? "Expensive" : "Cheap");
//  level 2 intermediate task 

// 1. Increase salary by 10%
let employee = { name: "Selin", age: 21, salary: 20000 };

employee.salary = employee.salary + (employee.salary * 10 / 100);

console.log("1:", employee);


// 2. Calculate final price after discount
let product = { name: "Laptop", price: 50000, discount: 10 };

product.finalPrice = product.price - (product.price * product.discount / 100);

console.log("2:", product);


// 3. Total + average marks
let marks = { tamil: 80, eng: 85, maths: 90, sci: 88, social: 75 };

let total = 0;
let count = 0;

for (let sub in marks) {
  total += marks[sub];
  count++;
}

let avg = total / count;

console.log("3: Total =", total);
console.log("3: Average =", avg);


// 4. Check "city" key exists
let user = { name: "Arun", city: "Chennai", age: 24 };

if ("city" in user) {
  console.log("4:", user.city);
} else {
  console.log("4: Not Found");
}