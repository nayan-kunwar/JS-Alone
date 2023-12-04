// Object created through constructor method
// Object.create -> singleton object made

// ----Creating an object using object literal syntax-----
const user = {}; // empty object

//add symbol to object keys
const mySymbol1 = Symbol("key1");
const mySymbol2 = Symbol("key2");
//behind the key store as string
const JsUser = {
    name: "aman",
    "full name": "aman kunwar", //cannot acces through dot notation thats why we have to access through square bracket,[]
    mySymbol1: "mykey1",
    [mySymbol2]: "mykey1", //Use square bracket to sue symbol | Access: JsUser[mySymbol2] use this  [mySymbol2]
    age: 18,
    location: "uk",
    email: "aman@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// //-----------Accessing value------------
// console.log(JsUser.email) // Using dot notaion
// console.log(JsUser["email"]) // Using square bracket
// console.log(JsUser["full name"]) // We have to use [] notation as key is in string.
console.log(JsUser["mySymbol1"])
console.log(JsUser[mySymbol2])

console.log( typeof JsUser["mySymbol1"])
console.log( typeof JsUser.mySymbol1)
console.log( typeof JsUser[mySymbol2])


JsUser.email = "aman@chatgpt.com"; //Modified email key
// Object.freeze(JsUser) if we freez object no further modification will happen
//JsUser.email = "hitesh@microsoft.com" -->this modification will not happen as object is freez
console.log(JsUser); // If we print object then we can see that [Symbol(key2)]: 'mykey1' | It means that mySymbol is Symbol key


//Adding new key to object-> using . notation and [] bracket
JsUser.salary = 62000;
JsUser["favSubject"] = "maths";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}


JsUser.greeting2 = function(){
    console.log(`${this.name}`); //Refering same object | when we write like this [  this.  ] then we get all the property inside that object
}
console.log(JsUser);
console.log(JsUser.greeting); // Output: [Function (Anonymous)] we get function reference means this refer to function
console.log(JsUser.greeting()); //function will be called
console.log(JsUser);