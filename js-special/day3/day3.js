let arr = [1,2,3,4,5,6,7];
for(let i=0; i < arr.length; i++){
    console.log(arr[i]);
}
for( i in arr){
    console.log(arr[i]);
}
for ( i of arr){
    console.log(i);
}
let fruits =["apple", "orange", "Kiwi",];
let kiwiIndex =fruits.indexOf("Kiwi");
console.log(`INDEX OF KIWI IS ${kiwiIndex}`);
//[3,6,9,12,15] find the nums >6 and add 5 to each
let nums = [3,6,9,12,15];
let result = nums.filter(n => n > 6).map(n => n + 5);
console.log(result);
// study forEach, map, filter, reduce, find, includes
// find

 let a = [1,2,3,4,5];
 let output = a.find(n=> n>1)
console.log(output); // output is single element 


// reduce 
let b = [1,2,3,4,5,"hi"];
let sum = b.reduce((total, n) => total + n,);
console.log(sum); // output is single value
//   product of arr = [45,34,89,100]
let product = [45,34,89,100];
let solution = product.reduce ((n,m) => n*m);
console.log(solution);
// find the avg using reducer 
let mark =[90,85,25,20];
let totoal = mark.reduce ((sum, m ) => sum + m,);
let avg = totoal / mark.length;
console.log(avg);
