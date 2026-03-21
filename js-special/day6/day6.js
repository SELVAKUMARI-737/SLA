arr = [1, 2, 3, 4, 5];
const arraysumfunction =(arr)=> {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
arraysumfunction(arr);
// Mark Result Function
// write a function that takes a students mark and prints "pass" if>=35, otherwise "fail

const mark = (result) => {
    if(result >35){
        console.log("pass");

    }
    else{
        console.log("fail");
    }
}
mark(90);

const primeornot = (num) =>{
    let count = 0;
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            count++;
        }
    }
    if(count === 2){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }

}
primeornot(7);