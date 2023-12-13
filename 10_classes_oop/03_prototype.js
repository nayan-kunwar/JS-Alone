// let myHeros = ["thor", "spiderman"]
// let heroPower = {
//     thor: "hammer",
//     spiderman: "sling",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }

// Object.prototype.hitesh = function(){
//     console.log(`hitesh is present in all objects`);
// }

// //Object properties and methods are available to -> fuction, array, string
// // heroPower.hitesh()
// // myHeros.hitesh()

// //Array properties and method are not accessible to object.
// Array.prototype.heyHitesh = function(){
//     console.log(`Hitesh says hello`);
// }

// myHeros.heyHitesh() // Array can access heyHitesh()
// heroPower.heyHitesh() //heroPower.heyHitesh is not a function

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){ // Now String has trueLength method 
    console.log(`${this}`); // This will print the string value, the string which is calling trueLength()
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength() // Can acccess trueLength method 
"hitesh".trueLength() // console.log(`${this}`); -> O/P: hitesh | True length is: 6
"iceTea".trueLength() // console.log(`${this}`); -> O/P: iceTea | True length is: 6