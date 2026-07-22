// Part B
// 1. Even or Odd
const evenodd = (n) =>{
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("odd");
    }
}
evenodd(10);
// 2. Sum 1 to N
const sumN = (n) =>{
    let sum = 0;
    for(let i=1; i <= n; i++){
        sum +=i;
    }
    console.log(sum);
};
console.log("sum 1 to N:", sumN(5));
// 3. Factorial
const factorial = (n) =>{
    let fact = 1;
    for(let i = 1; i <= n; i++){
        fact = fact * i;
               
    }
    console.log(fact); 
};
console.log(factorial(5));
// 4. Array sum
const arraysum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length ; i++){
        sum += arr[i];

    }
    console.log(sum);
};
arraysum([1,2,3,4,5]);
// 5.Largest of Three Numbers 
const largest = (a,b,c) =>{
    if(a>b && a>c){
        console.log("a is big ");
            }
    else if (b>c && b >a){
        console.log("b is big")
    }
    else{
        console.log("c is big");
    }
}
largest(2,5,7);
// 6.Count even numbers 
const even = (arr) =>{
    let count = 0;
    for (let i = 1 ; i< arr.length ; i ++){
            if (arr[i]%2==0){
                count ++;
    }
    console.log(count);
    }
}
even([2,4,5,6,7,7,8]);
// 7. Reverse String Function
const reverse = (str)=>{
 let rev ="";
 for(let i = str.length-1 ; i>=0; i--){
    rev+=str[i];
     }
 console.log(rev);
}
console.log(reverse("hello"));
//  8. Multiplication Table Function 
const table = (n) => {
    let val=1;
    for (let i = 1; i <= 10; i ++){
        val = i *n;
        console.log(`${i} X ${n} = ${val}`);       
    }
    
}
table(5);
// 9. check prime or not 
const isprime = (n) =>{
    if(n<2){
        return false;
    }
    for (let i = 2; i <n ; i++){
        if(n%i==0){
             return false;
        }
    }
    return true;
}
console.log(isprime(7));
//11. sum of odd numbers 
const odd = (n) =>{
    sum = 0;
    for(let i = 1 ;i<=20 ; i ++){
        
        if (i%2!=0){
           sum +=i;
        }}
        
console.log(sum);
}
odd();
// 12. Temperature Converter
const CtoF = (n) => {
    return (n * 9/5 )+32;

}
console.log(CtoF(5));
// 13. Array average Function 
const avg = (arr)=> {
    let average = 0;
    let sum = 0;
    for(let i =0 ; i<=arr.length - 1 ; i ++){
        sum += arr[i];
        
    }
    average = sum / arr.length;    
    console.log(average);

};
console.log(avg([1,2,3,5,4]));
// 14.pattern printing 
const pattern = () => {
    for(let i = 1; i<=4; i++){
        str = "";
        for(let j = 1; j<=i ; j++){
            str +="*";
        }
        console.log(str);
    }
};
pattern();
// vowel or not 
const checkVowel = (ch) => {
  let vowels = "aeiouAEIOU";

  if (vowels.includes(ch)) {
    console.log("Vowel");
  } else {
    console.log("Consonant");
  }
};

checkVowel("a"); // Vowel
checkVowel("b"); // Consonant