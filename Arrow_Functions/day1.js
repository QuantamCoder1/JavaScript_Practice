function learn() {
    const s = "Hello, I am learning JS";
    for (let i = 0; i < 3; i++) {
        console.log(s);
    }
}
learn();

function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Aman");
greet("Rahul");

function sum(a, b) {
    return a + b;
}
const result = sum(5, 3);
console.log(result);

console.log("**************")

function square(a) {
    return a * a;
}
const results = square(4);
console.log(results);
square();

function EvenoddCheck(n) {
    return n % 2 === 0;
}
const num = EvenoddCheck(7);
console.log(num);


function max(a, b) {

    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(max(2, 3));      // 3


//Arrow function
const sqr = (a) => a * a
console.log(sqr(6));

//Arrow function
const greett = (naam = "Guest") => `Hello ${naam}`
console.log(greett());
console.log(greett("Rahul"));

//Sum of Array Elements using Arrow function

const subArray = (arr) => {

    let summ = 0;
    for (i = 0; i < arr.length; i++) {
        summ = summ + arr[i];

    }
    return summ;
};
console.log(subArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));


//Call back function practice
// Repeat function
function fn1() {
    console.log("Hi");
}
function repeat(fn, times) {
    for (i = 0; i < times; i++) {
        fn();
    }

}
repeat(fn1,3);



