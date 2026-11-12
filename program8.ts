/**Login Callback
- Create a function loginUser().
- Accept username, password and callback.
- Validate credentials.
- Call callback with success or failure message. */

function loginUser(
    username:string,
    password:string,
    callback:(message :string) => void): void
    {

        if(username==="admin" && password==="admin@123"){
             callback("login success")
        }
             else{
        callback("invalid credentials")
    }    

    }
    loginUser("ram","asw@13",(message)=>{
        console.log(message);
    });

    loginUser("admin","admin@123",(message)=>{
        console.log(message);
    });
   
    