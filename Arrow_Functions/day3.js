//Arrow function practice
/*let nums = [1, 2, 3];
let result = [];
for (let i = 0; i < nums.length; i++) {
  result.push(nums[i] * 10);
}
console.log(result); */  // [10, 20, 30]

//writing the above code in the arrow function
/*
let nums =[1,2,3];
//let result= nums.map((n)=> n *10);
let b = nums.forEach((n) => n * 2);
//console.log(result);
console.log(b);*/

let names = ["Amit", "Riya"];
let result = names.map((n) => "Hi " + n);
console.log(result);

console.log(add(2, 3));
const add = (a, b) => a + b;




  
   

