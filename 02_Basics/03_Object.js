
//Object liternal

const mySymbol = Symbol('sym');
const person = {
    name: 'Sudhanshu',
    'Full Name': 'Sudhanshu Verma',
    age :23,
    city:'Noida',
    email: 'sudhanshu@example.com',
    [mySymbol]: 'Hello, world!',

    isLoggedIn: true,
    lastLoginDays: ['Monday', 'Tuesday', 'Wednesday'],
};
//console.log(person.isLoggedIn);
console.log(person.email);
console.log(person['Full Name']);

// so here one question arise  in my mind that if interviwer ask me to use Symbol as a key in object then how can i do that ?
// so the answer is that we can use Symbol as a key in object by using square bracket notation like this
// const mySymbol1 = Symbol('sym');
// const obj = {
//     [mySymbol1]: 'mama mia',
// };
// console.log(obj[mySymbol1]);
// console.log(typeof obj[mySymbol1]);

console.log(person[mySymbol]);
console.log(typeof person[mySymbol]);

person.email = 'sudhanshu@chatgpt.com';
// Object.freeze(person); // This will make the object immutable, so we cannot change any property of the object after this line
person.age = 24;
console.log(person);


person.greet = function() {
    console.log('Hello, Mmamia');
    
    console.log(`my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(person.greet());