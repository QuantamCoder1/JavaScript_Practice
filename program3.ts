/*Promise with setTimeout*
- Create a function `getOrderStatus()`.
- Return "Order Delivered" after 3 seconds.
- Display "Checking Order..." immediately.
- Display the result after Promise resolution */

function getOrderStatus(isdelivered: boolean) {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
            if (isdelivered) {
                resolve("Order Delivered");
            }
            else{
                reject("Order not Delivered");
            }

        }, 3000);


    })
}
console.log("Checking Order...");


getOrderStatus(true)

    .then((message) => {
        console.log(message)
    })

    .catch((error) => {
        console.log(error)
    });

