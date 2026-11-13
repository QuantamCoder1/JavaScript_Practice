/**Interface Inheritance
- Create an interface Person with name and age.
- Create an interface Tester extending Person.
- Add technology and experience.
- Create tester objects and display their details. */

interface Person{
    name : string,
    age : number
}

interface Tester extends Person{
    technology : string,
    experience : number
}

const t1 :Tester ={name:"Rohit", age: 29,technology:"RPA",experience:2};
const t2 :Tester ={name:"Raj",age:26,technology:"cloud",experience:2};

console.log(t1);
console.log(t2);