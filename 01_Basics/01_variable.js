const accountId = 1234567890;
let accountName = "Sudhanshu";
var accountBalance = 1000.50;
accountCity = "Noida";

// accountId = 6969696969; // This will throw an error because accountId is a constant
console.log(accountId);


accountName = "Sudhanshu Verma"; // This is allowed because accountName is declared with let
console.log(accountName);


accountBalance = 2000.75; // This is allowed because accountBalance is declared with var
console.log(accountBalance);


accountCity = "Delhi"; // This is allowed because accountCity is a global variable
console.log(accountCity);

/*
NOTES:
--- Prefer Not to use var as it has function scope and can lead to unexpected behavior due to hoisting.

--- Use const for variables that should not be reassigned and let for variables that can be reassigned.

--- Instead of using console.log again and again for all the variables, we can use template literals to print all the variables in one statement.

console.log(`Account ID: ${accountId}, Account Name: ${accountName}, Account Balance: ${accountBalance}, Account City: ${accountCity}`);
*/  

/*
OR
--- we use console.table to print all the variables in a tabular format.
*/


//console.table({ accountId, accountName, accountBalance, accountCity });


let accountType;
// Here We not define the variable, soo when we run its show undefined !!


console.table({ accountId, accountName, accountBalance, accountCity, accountType });