// async in js
// 1.callback
// 2. Async await
// 3.promise
// function orderFood(){
//     return new Promise ((res,rej)=>{
//         setTimeout(()=>{
//             res('food delivered');

//         },5000);

//     })
// }
// async function getFood (){
//     console.log("orderinng food ...");
//     let result = await orderFood()
//     console.log(result);
//     console.log("end");
// }
// console.log("waiting");
// getFood();
// // set interval means only particular time interval we want to execute the function
// let some = setInterval (()=>{
//     console.log("hello");

// },1000);
// clear interval means we want to stop the function after some time
// setTimeout(()=>{
//     clearInterval(some);
// },5000);

let count = 10;
let countDown = setInterval(() => {
    console.log(count);
    count --;
    if(count>0){
        clearInterval(countDown);

    }
}, 2000);