/*  Scope determines where a variable can be accessed or used within a JavaScript program. It helps control the visibility and lifetime of variables in different parts of the code. */



// Declaring a global variable
let x = 10;

function func() {
    
    // Declaring a local variable
    let y = 20;

    // Accessing Local and Global
    // variables
    console.log(x,",", y);
}

func();




/* -------------Global Scope
A global variable refers to a variable that is declared outside any function or block, so it can be used anywhere in the program, both inside functions and in the main code.  */



// Global Variable accessed from within a function 
const x = 10;

function fun1() {
    console.log(x);
}

​fun1();

/*Explanation: In the program, the variables outside the function and now we can access those variables from anywhere in the JavaScript program. 

------------ Local Scope
A local variable is a variable declared inside a function, making it accessible only within that function. It cannot be used outside the function.

Functions are objects and can be assigned to variables.*/



function fun2(){
    
    // This variable is local to fun2() and 
    // cannot be accessed outside this function
    let x = 10;
    console.log(x);
}
​
fun2();
// Here, the code defines a function fun2 with a local variable x, which is accessible only inside the function, and prints its value when the function is called.



/* ----------Block Scope
In JavaScript, block scope refers to variables declared with let or const inside a { } block. These variables are accessible only within that block and not outside it. */

{
    
    // Var can Accessible inside & outside the block scope 
    var x = 10;
    
    // let , const Accessible only inside the block scope
    const y = 20;
    let z = 30;
    
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);

//N O T E :  we have successfully accessed the variable with the var keyword because var does not have a block scope.

/*------Lexical Scope
The variable is declared inside the function and can only be accessed inside that block or nested block is called lexical scope. */

function func1() {
    const x = 10;

    function func2() {
        const y = 20;
        console.log(`${x} ${y}`);
    }

    func2();
}

func1();

// ------------------------------------------
function one (){
    const username = "SUdhanshu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log (website);
    two()
}

one()