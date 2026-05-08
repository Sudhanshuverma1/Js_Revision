const user = {
    username: "Sudhanshu",
    loginCount: 8,
    signedIn: true,



    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
        
    }


}

//console.log(user.username);
//console.log(user.getUserDetails);
//console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}
// construction function 
const userOne =new User("Sudhanshu", 12, true)
const userTwo =new User("Verma", 11, false)
console.log(userOne);
console.log(userTwo);


/* A constructor in JavaScript is a special function used to create and initialize objects. It sets up object properties and is typically invoked using the new keyword. Constructors allow for the creation of multiple instances with similar properties and methods. */