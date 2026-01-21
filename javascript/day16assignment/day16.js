// first question
console.log("first task : print 1 to 20 ");
let i=1;
while(i<=20){
    console.log(i);
    i++;
}
// Second Question
console.log("second Task : print odd number btw 1 to 20");
let n=20;
for(let i=1; i<=n; i++){
    if(i%2==1){
        console.log(i)
    }

}
//Third Question
console.log("Third task : print even number");
let a=20;
for(let i=0; i<=a; i++){
    if(i%2==0){
        console.log(i)
    }

}
// Fourth Question
console.log("Fourth task : print 5 series");
let m = 25;
for(let i=0; i<=25; i++ ){
    if(i%5==0){
        console.log(i);
    }
}
// Fifth Question
console.log("Fifth Task : print number series");

let output = "";

for (let i = 1; i <= 5; i++) {
    output = output + i + " + ";
}

console.log(output);

// Sixth Question
console.log("Sixth Task : 0 + 2 + 4 + 6 + ...");

let out = "";
for (let i = 0; i <= 10; i += 2) {
    out = out + i + " + ";
}
console.log(out);

// Seventh Question
console.log("Seventh Task : 1 + 3 + 5 + 7 + 9 + ...");

let result = "";
for (let i = 1; i <= 10; i += 2) {
    result = result + i + " + ";
}
console.log(result);

// Eighth Question
console.log("Eighth Task : 0 + 5 + 10 + 15 + 20 + ...");

let c = "";
for (let i = 0; i <= 25; i += 5) {
    c = c+ i + " + ";
}
console.log(c);

// Ninth Question
console.log("Ninth Task : 1/1! + 2/2! + 3/3! + 4/4! + ...");

let d = "";
let fact = 1;

for (let i = 1; i <= 4; i++) {
    fact = fact * i;
    d = d + i + "/" + i + "! + ";
}
console.log(d);

// Tenth Question
console.log("Tenth Task : 0 + 2/2! + 4/4! + 6/6! + ...");

let e = "0 + ";
let f= 1;

for (let i = 2; i <= 6; i += 2) {
    f= 1;
    for (let j = 1; j <= i; j++) {
        f= f * j;
    }
    e = e + i + "/" + i + "! + ";
}
console.log(e);

// Eleventh Question
console.log("Eleventh Task : 1/1! + 3/3! + 5/5! + ...");

let g= "";
let h = 1;

for (let i = 1; i <= 5; i += 2) {
    fact11 = 1;
    for (let j = 1; j <= i; j++) {
        h = h * j;
    }
    g = g + i + "/" + i + "! + ";
}
console.log(g);
