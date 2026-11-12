/**2: Calculator Using Callback*
- Create a function `calculate()`.
- Accept two numbers and a callback.
- Perform addition, subtraction, multiplication and division 
    using separate callback functions.
*/

function calculate(
    num1 : number,
    num2 : number, 
    callback :(a :number, b:number) => number):number{

        return callback(num1,num2);
}

function add(a:number,b:number):number{
    return a + b;
}

function subtract(a:number,b:number):number{
    return a-b;
}

function multiply(a:number,b:number):number{
    return a*b;
}

function divide(a:number,b:number):number{
    return a/b;
}

console.log("Addition :", calculate(1,29,add));
console.log("Substraction :",calculate(2,1,subtract));
console.log("Multiplication :",calculate(10,29,multiply));
console.log("Division :",calculate(4,2,divide));