// A constructor function in JavaScript is a special function used to create new objects.
function User(username, isLoggedIn, logginCount){
    this.username = username;
    this.isLoggedIn = isLoggedIn;
    this.logginCount = logginCount;
    this.sayHello = function(){
        console.log(`Hello ${this.username}`);
    }
    //return this; If we dont write this we will get our value as usual.
}

// If we dont use the new keyword and try to print user1, then all thing user2, user3..... related to User() has same copy of variable 
//and they will overwrite there value.
// So we have to use new keyword so that each instances has there copy of variable and they can work separately on there value.

//New objects are created using the new keyword followed by the constructor function name:
const objUser1 = new User("Aman", true, 4000);
// console.log(objUser1.isLoggedIn);
// console.log(objUser1); 
const objUser2 = new User("Chaman", true, 8000);
console.log(objUser2); 
console.log(objUser2.sayHello()); // If we write only reference [objUser2.sayHello], then we will get -> [Function (anonymous)]

console.log(objUser2.constructor); // this will give the name of the constructor function
//What new keyword does
// Step1- Create empty object(instance)
// step2 - Constructor is called
// step3 - this keyword inject arguments in the empty object