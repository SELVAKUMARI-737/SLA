// -------- Task 1: Person Class --------
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const p1 = new Person("Alex", 25);
p1.greet();


// -------- Task 2: Student Grade System --------
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getGrade() {
    if (this.marks >= 90) return "A";
    else if (this.marks >= 75) return "B";
    else if (this.marks >= 50) return "C";
    else return "Fail";
  }
}

const s1 = new Student("John", 85);
const s2 = new Student("Sara", 45);
console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());


// -------- Task 3: Bank Account --------
class BankAccount {
  constructor(accountHolder, balance) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: ${amount}`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance");
    } else {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    }
  }

  checkBalance() {
    console.log(`Balance: ${this.balance}`);
  }
}

const acc = new BankAccount("Alex", 1000);
acc.deposit(500);
acc.withdraw(300);
acc.checkBalance();


// -------- Task 4: Car Rental --------
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.isAvailable = true;
  }

  rentCar() {
    this.isAvailable = false;
    console.log(`${this.model} rented`);
  }

  returnCar() {
    this.isAvailable = true;
    console.log(`${this.model} returned`);
  }
}

const car1 = new Car("Toyota", "Innova");
const car2 = new Car("Honda", "City");

car1.rentCar();
car1.returnCar();


// -------- Task 5: Shopping Cart --------
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(name) {
    this.items = this.items.filter(i => i.name !== name);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Book", price: 100 });
cart.addItem({ name: "Pen", price: 20 });
console.log("Total:", cart.getTotalPrice());


// -------- Inheritance Tasks --------

// Task 1: Animal → Dog
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} says: Woof!`);
  }
}

const dog = new Dog("Buddy");
dog.speak();


// Task 2: Employee → Manager
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    return `${this.name} earns ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  getDetails() {
    return super.getDetails() + ` in ${this.department}`;
  }
}

const m = new Manager("Ravi", 50000, "IT");
console.log(m.getDetails());


// Task 3: Shape → Rectangle
class Shape {
  getArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }
}

const shape = new Shape();
const rect = new Rectangle(10, 5);
console.log("Shape Area:", shape.getArea());
console.log("Rectangle Area:", rect.getArea());


// Task 4: Vehicle → ElectricCar
class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  accelerate(value) {
    this.speed += value;
    console.log(`Speed: ${this.speed}`);
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, batteryLevel) {
    super(brand, speed);
    this.batteryLevel = batteryLevel;
  }

  chargeBattery() {
    this.batteryLevel = 100;
    console.log("Battery charged");
  }
}

const ecar = new ElectricCar("Tesla", 60, 50);
ecar.accelerate(20);
ecar.chargeBattery();


// Task 5: User → Admin
class User {
  constructor(username) {
    this.username = username;
  }

  login() {
    console.log(`${this.username} logged in`);
  }
}

class Admin extends User {
  login() {
    console.log(`Admin ${this.username} logged in`);
  }

  deleteUser(username) {
    console.log(`User ${username} deleted`);
  }
}

const admin = new Admin("Admin1");
admin.login();
admin.deleteUser("User1");
