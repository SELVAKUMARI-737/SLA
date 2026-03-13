//  Basic Loop Tasks

// 1.Print numbers 1 to 10 using a for loop.

// 2.Print even numbers between 1 and 20.

// 3.Print the multiplication table of 5.

// 4.Sum all numbers from 1 to 100.

// 5.Count backward from 10 to 1 using a while loop.
console.log("1.Print numbers 1 to 10 using a for loop.");
let  n=10;
for(let i=1;i<=n;i++){
    console.log(i); 

}

console.log("2.Print even numbers between 1 and 20.");
for(let i =1; i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}


console.log("3.print the multiplication table of 5.");
for(let i =1; i<=10; i++){
    console.log(`5 X ${i} = ${5 * i}` );
}


console.log("4.sum all numbers from 1 to 100.");
let sum=0;
for(let i =1; i<=100; i++){    
    sum +=i;
};

console.log(sum);
console.log("5. Count backward from 10 to 1 using a while loop.");
let m =10;
while(m>=1){
    console.log(m);
    m--;
}; 
