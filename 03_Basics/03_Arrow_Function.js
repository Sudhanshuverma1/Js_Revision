const user = {
    username: 'SUdhanshu',
    salary: 69000,

    welcomeMessage: function() {
        console.log(`${this.username} , Welcome to website`);
        // console.log(this);
    }
    
    
}
// user.welcomeMessage()
// user.username = 'deepanshu',
// user.welcomeMessage()

// console.log(this);

// function abc (){
//     let username = 'Sudhanshu'
//     console.log(this.username);
    
// }
// abc()

// const abc = function (){
//     let username = 'Sudhanshu'
//     console.log(this.username);
    
// }
// abc()

const abc = () => {
    let username = 'Sudhanshu'
    console.log(this.username);
    
}
// abc()

// const addTwo = (num1, num2) => {
//     return num1 + num2

// }
// console.log(addTwo(5,4));

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(5,4));