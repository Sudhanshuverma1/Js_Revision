/* Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope. */

(function sudhz(){
    //NAME iife
    console.log('DB CONNECTED');
})();
// sudhz()
(function sudhz(){
    console.log('DB CONNECTED');
})();

// another exxample
let me = (function(){

    let a = 10;
    let b = 20;
    return a + b;
})();
console.log(me);

// exampel::: Arrow function
 (() => {
    console.log(`DATABASE 2 CONNECTED !`);
    
} )();



// ( (name) =>{
//     console.log(`DATABASE 2 CONNECTED ! ${name}`);
    
// } )('sudhanshu')



let val1 = 10
let val2 = 5
function addNum( num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum (10,3)

// ---- anonymous function

setTimeout(function () {
  console.log("Hi");
}, 1000);

