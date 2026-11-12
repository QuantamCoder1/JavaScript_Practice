/**1: Simple Callback*
- Create a function `greetUser()`.
- Accept username and callback function.
- Display username.
- Execute callback to display "Welcome to QA Career Pro". */

function greetUser(username :string, callback:()=>void):void{
console.log(username);
callback();

}
function welcomeMessage(){
    console.log("Welcome to qa career pro")
}
greetUser("Rohit",welcomeMessage);