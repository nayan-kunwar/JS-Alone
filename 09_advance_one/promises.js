// //Create Promises
// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 1 is completed.");
//         resolve(); // Resolve the promise when the asynchronous task is completed
//     }, 1000);
// });

// //resoloved()--> The term "resolved" refers to the successful completion of an asynchronous operation. 
// //When a promise is resolved, it means that the operation it represents has been successfully completed, 
// //and any associated data (or the result of the operation) is available.
// //This is a function that is passed as the first argument to the executor function provided to the Promise constructor.
// // When called, it indicates that the asynchronous operation represented by the promise has been successfully completed.

// //Consume Promise 
// //After resolve executed then() function will be called.
// promiseOne.then(function(){
//     console.log("Promise 1 consumed. Async task 1 resolved");
// });


// //No need to store promise in variable
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2 is completed.");
//         resolve(); // Resolve the promise when the asynchronous task is completed
//     }, 1000);
// }).then(function(){ // Use .then() as we did not store promise in the variable.
//     console.log("Promise 2 consumed. Async task 2 resolved");
// });


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 1 is completed.");
//         resolve({name: "aman", age: 22}); // Resolve the promise when the asynchronous task is completed
//     }, 1000);
// });

// promiseThree.then(function(userData){ //resolve parameter will come here.
//     console.log(userData);
// });


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false; // Set error to true to see reject() execution
//         if(!error){
//             resolve({name: "aman", age: 22}); // Resolve the promise when the asynchronous task is completed
//         }
//         else{
//             reject("ERROR: Something went wrong.");
//         }
      
//     }, 1000);
// });

// promiseFour
// .then((userData) => { // then() connected to resolve()
//     console.log(userData);
//     return userData.name
// })
// .then((userName) => { // return data of above then will come here
//     console.log(userName);
// })
// .catch((error)=>{ // catch() connected to reject()
//     console.log(error);
// })
// .finally(() => console.log("The promise is either resolved or rejected.")) // finally() will execute whethere promise resolved or not.


// // Use of async and await instead of then() and catch()
// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true; // Set error to true to see reject() execution
//         if(!error){
//             resolve({name: "aman", age: 22}); // Resolve the promise when the asynchronous task is completed
//         }
//         else{
//             reject("ERROR: Something went wrong.");
//         }
      
//     }, 1000);
// });

// async function consumePromiseFive(){ // await keyword is used with that line which takes some time to complete.
//      try{
//         const response = await promiseFive;  // If error is false then response will contain the resolve data -> {name: "aman", age: 22}
//         console.log(response);
//     }
//     catch(error){ // If we dont use try catch then , when error is true then we will not receive the reeject data insted we will get not readable error
//         console.log(error); // If error is true then this wil catch the reject data -> ERROR: Something went wrong.
//     }
// }
// consumePromiseFive();

// async function getUserData(){
//     try{
//        const response = await fetch('https://api.github.com/users/nayan-kunwar');  
//        //console.log("Res: ",response); //response is in string
//        const data = await response.json(); // Convert to jason so that you can see actual data. And need to use await keyword as this line will take some time
//        //console.log("D: ",data);
//    }
//    catch(error){ 
//        console.log("Error: ", error); 
//    }
// }
// getUserData();

//Use then() and catch() approach. In this approach we do not need to sue try catch and async await. then() and catch() do it automatically
fetch('https://api.github.com/users/nayan-kunwar')
.then((response)=> { // response will come here
   // console.log(response);
    return response.json();
}) // when then() will execute then below will execute
.then((data) => { // above return data will come here
    console.log(data);
})
.catch((error) => console.log(error))

// The above will execute first then other will execute as fetch has high priority then others then() and catch().
// Read about fetch more -source: https://developer.mozilla.org/en-US/docs/Web/API/fetch