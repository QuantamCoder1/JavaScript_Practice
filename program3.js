"use strict";
/*Promise with setTimeout*
- Create a function `getOrderStatus()`.
- Return "Order Delivered" after 3 seconds.
- Display "Checking Order..." immediately.
- Display the result after Promise resolution */
function getOrderStatus(isdelivered) {
    return new Promise((resolve, reject) => {
        console.log("Checking Order...");
        setTimeout(() => {
            if (isdelivered) {
                resolve("Order Delivered");
            }
            else {
                reject("Order not Delivered");
            }
        }, 3000);
    });
}
getOrderStatus(false)
    .then((message) => {
    console.log(message);
})
    .catch((error) => {
    console.log(error);
});
