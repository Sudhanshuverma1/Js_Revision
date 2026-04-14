const marvelHeroes = ["IronMan", "thor", "hulk"];
const dcHeroes = ["superman", "batman", "flash"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][0]);
// note: When you push an array into another array, it becomes a nested array. In this case, dcHeroes is added as a single element at index 3 of marvelHeroes. Therefore, marvelHeroes[3] refers to the entire dcHeroes array, and marvelHeroes[3][0] accesses the first element of the dcHeroes array, which is "superman".

// marvelHeroes.push(...dcHeroes);
// console.log(marvelHeroes);
// note: When you use the spread operator (...), it spreads the elements of the dcHeroes array into individual elements and pushes them into marvelHeroes. As a result, each hero from dcHeroes is added as a separate element in marvelHeroes, rather than as a nested array.  

// marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);


const allHeroes = marvelHeroes.concat(dcHeroes);
console.log(allHeroes);
// note: The allHeroes variable is assigned the result of marvelHeroes.concat(dcHeroes), which creates a new array that combines the elements of both marvelHeroes and dcHeroes. When you log allHeroes, it will contain all the heroes from both arrays in a single array. 

 const allHeroes2 = [...marvelHeroes, ...dcHeroes];
console.log(allHeroes2);
// note: The allHeroes variable is assigned a new array created using the spread operator (...). This syntax allows you to spread the elements of both marvelHeroes and dcHeroes into a new array. As a result, allHeroes will contain all the heroes from both arrays in a single array, similar to the result of using concat.

// const allHeroes3 = [...marvelHeroes, "spiderman", ...dcHeroes];
// console.log(allHeroes3);

const newNumbers = [1, 2, 3,[4, 5,[7,2.5],8],9, 10,[11, 12]];
const flatNumbers = newNumbers.flat(2);
console.log(flatNumbers);
// note: The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. In this case, flat(2) will flatten the nested arrays up to 2 levels deep, resulting in a single-level array that contains all the numbers from the original nested structure.    

console.log(Array.isArray("Sudhanshu"));
/* Expression: Array.isArray("Sudhanshu")
Result: false
The Array.isArray() method checks if the provided value is an array. In this case, "Sudhanshu" is a string, not an array, so the method returns false. If you were to check an actual array, such as Array.isArray([1, 2, 3]), it would return true. */

console.log(Array.from("Sudhanshu"));
/* Expression: Array.from("Sudhanshu")
Result: ["S", "u", "d", "h", "a", "n", "s", "h", "u"]
The Array.from() method creates a new array instance from an array-like or iterable object. In this case, when you pass the string "Sudhanshu" to Array.from(), it treats the string as an iterable and creates an array where each character of the string becomes an individual element in the resulting array. Therefore, the output is an array of characters from the string. */   

console.log(Array.from({name: "sudhanshu"}));     //INTRESTING
/* Expression: Array.from({name: "sudhanshu"})
Result: []
The Array.from() method is designed to create an array from an array-like or iterable object. In this case, the object {name: "sudhanshu"} is not iterable and does not have a length property, so Array.from() cannot create an array from it. As a result, it returns an empty array []. If you want to convert the values of the object into an array, you could use Object.values({name: "sudhanshu"}) which would return ["sudhanshu"]. */ 

let score = 10
let score2 = 20
let score3 = 30
console.log(Array.of(score, score2, score3));
/* Expression: Array.of(score, score2, score3)
Result: [10, 20, 30]*/


















// // Accessing elements
// console.log(marvelHeroes[0]); // Output: IronMan
// console.log(dcHeroes[1]); // Output: batman

// // Array methods
// marvelHeroes.push("captain america");
// console.log(marvelHeroes); // Output: ["IronMan", "thor", "hulk", "captain america"]                                        
// marvelHeroes.pop();
// console.log(marvelHeroes); // Output: ["IronMan", "thor", "hulk"]       
// marvelHeroes.unshift("black widow");
// console.log(marvelHeroes); // Output: ["black widow", "IronMan", "thor", "hulk"]
// marvelHeroes.shift();
// console.log(marvelHeroes); // Output: ["IronMan", "thor", "hulk"]               |
// console.log(marvelHeroes.includes("hulk")); // Output: true
// console.log(marvelHeroes.indexOf("thor")); // Output: 1
// const joinedHeroes = marvelHeroes.join(", ");
// console.log(joinedHeroes); // Output: "IronMan, thor, hulk"
// console.log(typeof joinedHeroes);

