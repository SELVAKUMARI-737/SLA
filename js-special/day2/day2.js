// create a function that uses a loop to find sum of all odd numbers from 1 to 20.
function sumofOdd(){
    let sum = 0;
for(let i=1; i<=20; i++){
    if(i%2==1){
        sum +=i;
    }
}
console.log(`sum of odd number ${sum}`);
}
sumofOdd();
// check the number is +ve or -ve
function checknumber(){
    let num = 10;
    if(num >0){
        console.log(`${num} is positive`)
    }
    else{
        console.log(`${num} the number is negative`);
    }
}
checknumber();

// check if person is eligible for vote or not 
function checkVote(){
    let age = 18;
    if(age>=18){
        console.log("you are eligible for vote");
    }
    else{
        console.log(" you are not eligible for vote");
    }
}
checkVote();

//  check num is devisible by 5 
function checkDevisible(){
    let num = 40;
    if(num%5==0){
        console.log(`${num} number is divisible by 5`);
    }
    else{
        console.log(`${num} number is not divisible by 5`); 
    }
}
checkDevisible();
//  check num devisible by 5 & 3
function checkDevisibleBy5And3(){
    let num = 15;
    if(num%5==0 && num%3==0){
        console.log(`${num} number is divisible by 5 and 3`);
    }
    else{
        console.log(`${num} number is not divisible by 5 and 3`); 
    }
}
checkDevisibleBy5And3();

