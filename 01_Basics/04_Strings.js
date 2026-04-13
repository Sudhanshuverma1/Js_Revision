const name = "Sudhanshu";
const age = 22
const repoCount = 25


console.log(name + " has " + repoCount + " repositories.");

/* Expression: name + " has " + repoCount + " repositories."
Result: "Sudhanshu has 25 repositories." 

----Note: not a professional way to concatenate string, so we use template literals to make it more readable and concise. `*/


console.log(`Hello, My Name is ${name} and I have ${repoCount} repositories.`);

/* Expression: `Hello, My Name is ${name} and I have ${repoCount} repositories.`
Result: "Hello, My Name is Sudhanshu and I have 25 repositories."
In this expression, we are using template literals (enclosed in backticks) to create a string that includes embedded expressions. The ${name} and ${repoCount} syntax allows us to insert the values of the name and repoCount variables directly into the string. This results in a more readable and concise way to construct the final string. */        

const gameName = new String('Call of Duty');

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.includes('Duty'));
console.log(gameName.startsWith('Call'));
console.log(gameName.endsWith('of Duty'));


console.log(gameName.charAt(4));
console.log(gameName.indexOf('o'));
console.log(gameName.lastIndexOf('D'));



const newString = gameName.substring(0, 4);
console.log(newString);


const anotherString = gameName.slice(5, 10);
console.log(anotherString);

const newStringOne = "   sudhanshu    ";
console.log(newStringOne.trim());



const url = "https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA";
console.log(url.replace('PBA', 'Channel'));

console.log(gameName.split(' '));
