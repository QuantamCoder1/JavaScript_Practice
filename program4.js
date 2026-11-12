"use strict";
/**Promise.all()*
- Create three functions: `getUser()`, `getProducts()`, `getOrders()`.
- Each function should return a Promise.
- Execute all three using `Promise.all()`.
- Display all results together. */
function getUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rohit");
        }, 3000);
    });
}
function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Mango");
        }, 2000);
    });
}
function getOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dosa Sambar Idli Vada");
        }, 1000);
    });
}
Promise.all([getUser(), getProducts(), getOrders()])
    .then((message) => { console.log(message); })
    .catch((error) => {
    console.log(error);
});
