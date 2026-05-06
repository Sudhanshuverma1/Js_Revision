/*avaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a 
value that will be available in the future. It can be in one of three states

# Pending: The task is in the initial state.
# Fulfilled: The task was completed successfully, and the result is available.
# Rejected: The task failed, and an error is provided. */

const promiseOne = new Promise(function(resolve,Reject) {
    //do any asyn task
    // DB calls, cryptography, Network
    setTimeout(function(){
        console.log('Async Task is completed');
        resolve()
        
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

//Second Way-----

new Promise (function(resolve, Reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve()
        
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


// Third Promise

const promisethree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Hum", email:"sudhanshuuu01@gmail.com"})
    }, 1000)

})

promisethree.then(function(user){
    console.log(user);
    
})


// Fouth Promise


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: 'Sudhanshu', password: '12345'})
        } else {
            reject('ERROR: Something Went Wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The Promise Is Either Resolve Or Rejected")
)



// Fifth Promsie

const promiseFive = new Promise  (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({username: 'Dekh lo Kisne Roka Hai', password: '12345'})
        } else {
            reject('ERROR: Js Not Run!!! ')
        }
    }, 1000)
})

async function consumePromiseFive(){
    try{
        const repsonse = await promiseFive
        console.log(response);
    } catch(error) {
        console.log(error);
        
    };
    
    // const response = await promiseFive
    // console.log(response);
    
}
consumePromiseFive()
 


// async function getAllUsers(){
    
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
    
//     }


//     //   .then(response => response.json())
//     //   .then(json => console.log(json))
// }

// getAllUsers()


//-----------------
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))