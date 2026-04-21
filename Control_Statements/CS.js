/*  JavaScript control statement is used to control the execution of a program based on a specific condition. 
If the condition meets then a particular block of action will be executed otherwise it will execute another block of action that satisfies that particular condition. 

--- Types of Control Statements in JavaScript
## Conditional Statement: These statements are used for decision-making, a decision
n is made by the conditional statement based on an expression that is passed. Either YES or NO.

## Iterative Statement: This is a statement that iterates repeatedly until a condition is met. 
Simply said, if we have an expression, the statement will keep repeating itself until and unless it is satisfied.
--------------------------------------------------------
## 1: If Statement
In this approach, we are using an if statement to check a specific condition, the code block gets executed when the given condition is satisfied.

## Syntax

if ( condition_is_given_here ) {
    // If the condition is met, 
    //the code  will get executed.
}
Now let's understand this with the help of example: */

const num = 5;
if (num > 0) {
    console.log("The number is positive.");
};


/* 
## 2: Using If-Else Statement
# Syntax

if (condition1) {
    // Executes when condition1 is true
    if (condition2) {
        // Executes when condition2 is true

} */

let n = -10;

if (n > 0)
    console.log("The number is positive.");
else
    console.log("The number is negative");

/*
## 3: Using Switch Statement
# Syntax

switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    .
    .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
} */

let m = 5;

switch (m) {
    case 0:
        console.log("Number is zero.");
        break;
    case 1:
        console.log("Nuber is one.");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
};


/*
## 4: Using the Ternary Operator (Conditional Operator
The conditional operator, also referred to as the ternary operator (?:), is a shortcut for expressing conditional statements in JavaScript.

#Syntax
condition ? value if true : value if false*/

let q = 10;
let result = q >= 0 ? "Positive" : "Negative";
console.log(`The number is ${result}.`);


/*
## 5: Using For loop
In this approach, we are using for loop in which the execution of a set of instructions repeatedly until some condition evaluates and becomes false

# Syntax

for (statement 1; statement 2; statement 3) {
    // Code here . . .
}*/

for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
};

/*
## 6: Using While loop
The while loop repeats a block of code as long as a specified condition is true.

Syntax

while (condition) {
    // code block
} */

    let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}