function generateTable(){
    let number = Number(document.getElementById("num").value);
    let result = document.getElementById("result");
    result.innerHTML="";
    //validation
    if(number==""|| number<=0){
        result.innerHTML="Please enter a valid numbr";
        return;        
    }
    else{
        for(let i=1; i<=20; i++){
            result.innerHTML += `${number} x ${i} = ${number * i}<br>`;
        }
    }

}
function findFactorial(){

let number = Number(document.getElementById("numb").value);
let result = document.getElementById("results");

result.innerHTML = "";

// validation
if(number === "" || number < 0){
    result.innerHTML = "Please enter a valid number";
    return;
}

let fact = 1;

for(let i = 1; i <= number; i++){
    fact = fact * i;
}

result.innerHTML = "Factorial = " + fact;

}
function checkPrime(){
    let number = Number(document.getElementById("prime").value);
    let result = document.getElementById("resu");
    result.innerHTML = "";
    //validation
    if(number<=1){
        result.innerHTML = "not a prime number";
        return;

    }
    else if(number ==""){
        result.innerHTML = "please enter a valid number";
        return;

    }
    else{
        let isPrime = true;
        for(let i=2;i<number;i++){
            if(number %i==0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            result.innerHTML = "It is a prime number";
        }
        else{
            result.innerHTML = "It is not a prime number";
        }
    }
}

// class Student{
//     constructor(name,age,regno){
//         this.name = name;
//         this.age = age;
//         this.regno = regno;
//     }
//     displayInfo(){
//         return `Name: ${this.name}, Age: ${this.age}, RegNo: ${this.regno}`;
//     }
//     getData(){
//         this.name = prompt("Enter name:");
//         this.age = Number(prompt("Enter age:"));
//         this.regno = Number(prompt("Enter regno:"));
//     }
// }
// let s1 = new Student();
// s1.getData();
// console.log(s1.displayInfo());


//Single Inheritance 
class College{
    constructor (cname,location){
        this.cname = cname;
        this.location = location;

    }
    displayCollege(){
        return `College Name: ${this.cname}, Location: ${this.location}`;
    }
}


class Dept extends College{
    constructor(cname,location,dname){
        super(cname,location);
        this.dname = dname;
    }
    displayDept(){
        return `${this.displayCollege()}, Department: ${this.dname}`;
    }
}
class Staff extends Dept{
    constructor(cname,location,dname,sname,salary){
        super(cname,location,dname);
        this.sname = sname;
        this.salary = salary;
    }
    displayStaff(){
        return `${this.displayDept()}, staff Name: ${this.sname}, salary: ${this.salary}`;
    }
} 
let col = new College("GCT College","Tenkasi");
console.log(col.displayCollege());

let dept = new Dept("GCT College","Tenkasi","Computer Science");
console.log(dept.displayDept());

let staff = new Staff("GCT College","Tenkasi","Computer Science","JD",50000);
console.log(staff.displayStaff());

// ------------------Overloading default parameter------------------
function sum(a=10, b=20, c=30){
    let sum = a+b+c;
    console.log(`sum of ${a},${b},${c} is ${sum}`);
}
sum();
sum(1);
sum(1,2);
sum(1,2,3);
// -----------------Overloading args parameter-------------------
function ADD(...args){
    let tot = 0;
    for(let n of args){
        tot+=n;
       
    }
     console.log(`Total: ${tot}`);
}
ADD(1,2,3);

// ------------------Over Riding------------------
class Shape{
    area(){
        console.log("calculating area....");

    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius = radius;

    }
    // overriding method applied for child class
    area(){
        let area = Math.PI * this.radius*this.radius;
        console.log(`Area of circle with radius ${this.radius} is ${area.toFixed(2)}`);
    }
}
let c = new Circle(5);  
console.log(c.area());