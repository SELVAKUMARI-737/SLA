//  write a program to the given number is odd or even 
function checkEvenOdd(){
    let number = document.getElementById("numberInput").value;
    number = Number(number);
    if(number % 2 === 0){
        document.getElementById("result").innerHTML = `The number ${number} is even`;
    }else{
        document.getElementById("result").innerHTML = `The number ${number} is odd`;
    }
}
// print the number in range 1 to 20
function printNumbers(){
    let start = document.getElementById("start").value;
    let end = document.getElementById("end").value;
    start = Number(start);
    end = Number(end);
    let output = "";
    for(let i = start; i <= end; i++){
        output += i + " ";
    }
    document.getElementById("numberResult").innerHTML = output;
    start="";
    end="";
}