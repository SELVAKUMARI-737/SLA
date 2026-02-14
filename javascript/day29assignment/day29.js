// //  DAY 29 Async & Await Tasks 
// // Task 1: Basic Async Function

// async function getMessage() {
//     let result = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello from async function");
//         }, 2000);
//     });
//     console.log("1)", result);
// }
// getMessage();




// // Task 2: Fetch User Data (API Simulation)

// async function getUser() {
//     return await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Rahul", email: "rahul@gmail.com" });
//         }, 1500);
//     });
// }

// async function showUser() {
//     let user = await getUser();
//     console.log("2) User Name:", user.name);
//     console.log("2) Email:", user.email);
// }
// showUser();




// // Task 3: Error Handling with Try–Catch

// async function loginUser(isLoggedIn) {
//     if (isLoggedIn) {
//         return "Login successful";
//     } else {
//         throw "Invalid credentials";
//     }
// }

// async function checkLogin() {
//     try {
//         let res = await loginUser(false);
//         console.log("3)", res);
//     } catch (err) {
//         console.log("3)", err);
//     }
// }
// checkLogin();




// // Task 4: Sequential Async Operations

// async function getOrder() {
//     return await new Promise(resolve =>
//         setTimeout(() => resolve("Order received"), 1000)
//     );
// }

// async function processOrder() {
//     return await new Promise(resolve =>
//         setTimeout(() => resolve("Order processed"), 1000)
//     );
// }

// async function deliverOrder() {
//     return await new Promise(resolve =>
//         setTimeout(() => resolve("Order delivered"), 1000)
//     );
// }

// async function runOrders() {
//     console.log("4)", await getOrder());
//     console.log("4)", await processOrder());
//     console.log("4)", await deliverOrder());
// }
// runOrders();




// Task 5: Real-Time Example (Fetch + Delay)

async function loadProducts() {
    console.log("5) Loading products...");

    await new Promise(resolve => setTimeout(resolve, 2000));

    let products = ["Laptop", "Mobile", "Tablet"];

    console.log("5) Products:");
    products.forEach(p => console.log(p));
}

loadProducts();
