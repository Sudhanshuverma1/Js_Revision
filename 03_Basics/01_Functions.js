function sayMyName() {
console.log('S')
console.log('u')
console.log('d')
console.log('h')
console.log('a')
console.log('n')
console.log('s')
console.log('h')
console.log('u')
}

// sayMyName();

function addTwoNumbers(num1, num2){
    // console.log(num1 + num2);
return num1 + num2;
}
// addTwoNumbers(3, 4); // Output: 7
// addTwoNumbers(3, 'X'); // Output: 3X
// addTwoNumbers(3, null); // Output: 3
// addTwoNumbers(3, undefined); // Output: NaN
// addTwoNumbers(3); // Output: NaN
// addTwoNumbers(); // Output: NaN 


// addTwoNumbers(3, 4, 5); // Output: 7 (the third argument is ignored)
//return num1 + num2;
const result = addTwoNumbers(3, 10);
// console.log(result); // Output: undefined (the function does not return a value)

console.log('result: ', result); // Output: result: 13

function loginUserMessage(username) {
    if (username === undefined || username === null || username === '') {
        return 'Please provide a valid username.';
    }
    return `You are logged in as ${username} just now.`;
}
//console.log(loginUserMessage(''))

function calculateCartPrice(...num1){
    return num1
}

//console.log(calculateCartPrice(100, 200, 300));

const user = {
    name: 'Sudhanshu',
    age: 30,
    email: 'xxx@gmail.com',    
}

function handleObject(anyobj) {
    console.log(`Username is ${anyobj.name} and email is ${anyobj.email}`);
}
//handleObject(user)

/* Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.


Understanding Functions
In functions, parameters are placeholders defined in the function, while arguments are the actual values you pass when calling the function.

Example:
function greet(name) {   // 'name' is a parameter
  console.log("Hello " + name);
}
​
greet("Alice");  // "Alice" is the argument
--- Parameter: name (placeholder inside the function).
--- Argument: "Alice" (real value given at call time).

## Default Parameters
Default parameters are used when no argument is provided during the function call.
If no value is passed, the function automatically uses the default value.

function greet(name = "Guest") {
  console.log("Hello, " + name);
}
​
greet();
greet("Aman");

## Return Statement
The return statement is used to send a result back from a function.
When return executes, the function stops running at that point.
The returned value can be stored in a variable or used directly.

function add(a, b) {
  return a + b; // returns the sum
}
​
let result = add(5, 10);
console.log(result);*/