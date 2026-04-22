/* ## JavaScript Higher Order Functions

A higher-order function is a function that does one of the following:
Takes another function as an argument.
Returns another function as its result. */

function fun() {
    console.log("Hello, World!");
}
function fun2(action) {
    action();
    action();
}

fun2(fun);

/* # fun2 is a higher-order function because it takes another function (action) as an argument.
It calls the action function twice 

----- Popular Higher Order Functions in JavaScript

--# 1. map
The map function is used to transform an array by applying a callback function to each element. It returns a new array.*/

const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even);

/* map applies the callback (num) => num * num to each element of numbers.
A new array is returned where each element is the square of the original

--# 2. filter
The filter function is used to create a new array containing elements that satisfy a given condition.*/

const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 2 === 0);
console.log(even);
/* The callback (num) => num % 2 === 0 filters out elements not divisible by 2.
The resulting array contains only even numbers.

--# 3. reduce
The reduce function accumulates array elements into a single value based on a callback function.*/

const n = [1, 2, 3, 4, 5];
const sum = n.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
/* The callback (acc, curr) => acc + curr adds all elements.
0 is the initial value of the acc.