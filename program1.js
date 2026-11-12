"use strict";
/*1: Fetch User Details*
- Create a function `getUser()`.
- Return user details using a Promise.
- Resolve after 2 seconds.
- Display details using `.then()`*/
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ userId: 1, password: "Test@123" });
        }, 2000);
    });
}
getUser().then((user) => console.log(user));
