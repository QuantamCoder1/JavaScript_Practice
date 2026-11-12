/** Array Processing Callback
- Create an array of employee salaries.
- Create a function processSalary().
- Accept an array and callback.
- Use callback to calculate 10% bonus for every employee. */

const salaries :number[] = [30000,20000,50000,70000,100000];

 function calculateBonus(salary:number){
    return salary * 10/100;
    
 }
function processSalary(arr : number[], 
    callback :(salary:number)=>number):void
{   for(let i = 0; i < arr.length; i++){
    const bonus = callback(arr[i]);
    console.log("salary :"+arr[i] + ", Bonus :"+bonus);
}
    
}
processSalary(salaries,calculateBonus);

