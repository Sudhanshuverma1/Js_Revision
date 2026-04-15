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
console.log(loginUserMessage(''))