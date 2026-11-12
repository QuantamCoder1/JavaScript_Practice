/*2: Promise Success and Failure*
- Create a function `checkLogin(status: boolean)`.
- If true, resolve with "Login Successful".
- If false, reject with "Invalid Credentials".
- Handle using `.then()` and `.catch()`.*/ 

function checkLogin(status:boolean){
    return new Promise((resolve,reject) =>{
       const user = {
        userId : 1, 
        password : "Test@123"

       }  
        if (status && user.userId ==1){
            resolve("login successful");
         
        } else{
            reject("invalid credentials");
        }

    })
}
    checkLogin(true)
    .then((message) =>  {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
    
