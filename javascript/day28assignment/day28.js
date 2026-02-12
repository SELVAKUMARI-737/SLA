// setTimeout tasks
console.log("setTimeout tasks");

// 1. Print "Hello World" after 3 seconds
setTimeout(() => {
    console.log("1) Hello World");
}, 3000);



// 2. Countdown from 5 to 1 using multiple setTimeout
setTimeout(() => console.log("2) 5"), 1000);
setTimeout(() => console.log("2) 4"), 2000);
setTimeout(() => console.log("2) 3"), 3000);
setTimeout(() => console.log("2) 2"), 4000);
setTimeout(() => console.log("2) 1"), 5000);



// 3. Loading → Loaded
function loadData() {
    console.log("3) Loading...");
    setTimeout(() => {
        console.log("3) Loaded");
    }, 2000);
}
loadData();



// 4. setTimeout inside loop (unexpected behavior)

console.log("4) Wrong version");
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log("4) Fixed version");
for (let j = 1; j <= 3; j++) {
    setTimeout(() => {
        console.log(j);
    }, 1000);
}



// 5. Cancel setTimeout using clearTimeout

let timer = setTimeout(() => {
    console.log("5) This will not run");
}, 2000);
debugger
clearTimeout(timer);
console.log("5) Timeout cancelled");





// setInterval tasks
console.log("setInterval Tasks");

// 1. Print "Hello" every 1 second
let helloInterval = setInterval(() => {
    console.log("1) Hello");
}, 1000);

setTimeout(() => clearInterval(helloInterval), 5000); 



// 2. Digital clock every second
let clock = setInterval(() => {
    let now = new Date();
    console.log("2) Time:", now.toLocaleTimeString());
}, 1000);

setTimeout(() => clearInterval(clock), 5000);



// 3. Print numbers 1 to 5 using setInterval then stop
let num = 1;
let numInterval = setInterval(() => {
    console.log("3)", num);
    num++;
    if (num > 5) {
        clearInterval(numInterval);
    }
}, 1000);



// 4. Counter increases every second till 10
let count = 1;
let counter = setInterval(() => {
    console.log("4) Counter:", count);
    count++;
    if (count > 10) {
        clearInterval(counter);
    }
}, 1000);



// 5. Start interval and stop after 5 seconds
let interval = setInterval(() => {
    console.log("5) Running...");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("5) Interval stopped after 5 seconds");
}, 5000);
