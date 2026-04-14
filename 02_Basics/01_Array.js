// ARRAY
// Arrays are a data structure that can hold multiple values at once. They are ordered, meaning that the elements in an array have a specific order and can be accessed using their index. Arrays can hold any type of data, including numbers, strings, objects, and even other arrays.

// - Arrays are ordered collections of values that can hold any type of data.

// - Elements in an array can be accessed using their index, which starts at 0.

// - Arrays have various methods for adding, removing, and manipulating elements, such as push, pop, unshift, shift, includes, indexOf, join, slice, and splice.

const arr = [0, 1, 2, 3, 4, 5];

// Accessing elements
// console.log(arr[0]); // Output: 1
// console.log(arr[2]); // Output: 3

// const talk = ['hello', 'Bhaiya!', 'How are you?'];
// console.log(talk[1]); // Output: 'Bhaiya!'

// // Array method 
// arr.push(6); 
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// arr.shift();
// console.log(arr);



// console.log(arr.includes(7));
// console.log(arr.indexOf(4));

// const newArr = arr.join();
// console.log(arr);
// console.log(newArr);


//*****************slice and splice*****************//
console.log("A", arr);
const myNew = arr.slice(1, 4);
console.log(myNew);
console.log("B", arr);

console.log("A", arr);
const myNew2 = arr.splice(1, 4);
console.log(myNew2);
console.log("C", arr);

/*sle vs splice
- slice does not modify the original array, while splice modifies the original array.
- slice returns a new array containing the extracted elements, while splice returns an array containing the removed elements.
- slice takes two arguments (start index and end index), while splice takes three arguments (start index, number of elements to remove, and optional elements to add).*/

