const score = 900

const balance = new Number(1000)
console.log(score)
console.log(balance)

console.log(score.toString());
console.log(balance.toString());

// console.log(score.toExponential());
console.log(score.toFixed(2));
console.log(score.toPrecision(3));


// example of toPrecision
const newOneNumber = 6969.12345
console.log(newOneNumber.toPrecision(5));

const hundred = 10000000000
console.log(hundred.toLocaleString());



// *********************** Math ********************


console.log(Math);

console.log(Math.abs(-5));

console.log(Math.round(4.2));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.1));   

console.log(Math.PI);
console.log(Math.pow(2, 3)); // 2^3
console.log(Math.sqrt(16));
console.log(Math.min(4, 5, 5,6,7,8,8));
console.log(Math.max(4, 5, 5,6,7,8,8));

console.log(Math.random()*10 + 1);

// Note: Math.random() generates a random number between 0 and 1, so multiplying it by 10 gives us a number between 0 and 10. Adding 1 shifts the range to be between 1 and 11. If you want a random integer between 1 and 10, you can use:
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);


const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min +1)) + min);
/*note: The formula Math.floor(Math.random() * (max - min + 1)) + min generates a random integer between the specified minimum (min) and maximum (max) values, inclusive. Here's how it works:
1. Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
2. Multiplying Math.random() by (max - min + 1) scales the random number to the range of possible values, which is (max - min + 1). This gives us a random decimal number between 0 and (max - min + 1).
3. Adding min shifts the range to start from the minimum value, resulting in a random decimal number between min and max + 1.
4. Finally, Math.floor() rounds down the result to the nearest whole number, giving us a random integer between min and max, inclusive.     

For example, if min is 10 and max is 20, the formula will generate a random integer between 10 and 20, including both 10 and 20. */
