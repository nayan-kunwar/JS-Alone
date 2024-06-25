const myPromise = new Promise(function(resolve, reject){
    // Asynchronous operation
    let error = false; // Change this to true to simulate a failure
    
    if (!error ) {
      resolve("Operation was successful!"); // Resolve the promise with a value
    } else {
      reject("Operation failed!"); // Reject the promise with a reason
    }
  });
console.log(myPromise); // Promise {<fulfilled>: 'Operation was successful!'}