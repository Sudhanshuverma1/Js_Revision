/*
********Data Types*********
JavaScript supports various datatypes, which can be broadly categorized into primitive and non-primitive types.

---- Primitive Datatypes (Call by Value) ----
Primitive datatypes represent single values and are immutable.

# 1. Number: Represents numeric values (integers and decimals).*/

let n = 42;
let pi = 3.14;

/*
# 2. String: Represents text enclosed in single or double quotes.*/

let s = "Hello, World!";

/*
# 3. Boolean: Represents a logical value (true or false). */

let bool= true;
/*
# 4. Undefined: A variable that has been declared but not assigned a value.    */

let notAssigned;
console.log(notAssigned);

/*
# 5. Null: Represents an intentional absence of any value.*/

let empty = null;
/*

# 6. Symbol: Represents unique and immutable values, often used as object keys.
*/
let sym = Symbol('unique');
/*
# 7. BigInt: Represents integers larger than Number.MAX_SAFE_INTEGER.*/

let bigNumber = 123456789012345678901234567890n;

/*
--- Non-Primitive Datatypes (Call by Reference) ---
Non-primitive types are objects and can store collections of data or more complex entities.

# 1. Object: Represents key-value pairs. */

let obj = {
    name: "Amit",
    age: 25
};


/*
# 2. Array: Represents an ordered list of values.*/

let a = ["red", "green", "blue"];

/*
# 3. Function: Represents reusable blocks of code.
*/
function fun() {
    console.log("Blackadam");
}



/* Stack [Primitives] vs Heap [Non-Primitives]


Primitive values are stored in the stack, which is a simple, last-in-first-out data structure. When you assign a primitive value to a variable, the value is stored directly in that variable. For example:

let x = 10; // The value 10 is stored in the stack, and x holds that value.




On the other hand, non-primitive values (objects, arrays, functions) are stored in the heap, which is a more complex memory structure that allows for dynamic memory allocation. When you assign a non-primitive value to a variable, the variable holds a reference (or pointer) to the location in the heap where the actual data is stored. For example:

let arr = [1, 2, 3]; // The array [1, 2, 3] is stored in the heap, and arr holds a reference to that location.

---  This distinction is important because when you copy a primitive value, you get a new copy of that value. However, when you copy a non-primitive value, you get a new reference to the same underlying data in the heap. This means that changes to the non-primitive value through one reference will affect all references to that value. For example:
let arr1 = [1, 2, 3];
let arr2 = arr1;    // arr2 holds a reference to the same array in the heap as arr1
arr2.push(4);      // Modifying the array through arr2 also modifies the array that arr1 references     
console.log(arr1); // Output: [1, 2, 3, 4]
In this example, both arr1 and arr2 reference the same array in the heap. When we push a new element to arr2, it modifies the same array that arr1 references, which is why both arr1 and arr2 show the updated array with the new element. */      
