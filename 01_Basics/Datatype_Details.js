/*
JavaScript is considered a dynamically typed language. 
This means that the data types of variables are determined at runtime, 
and you don't need to explicitly declare the data type of a variable when you define it. 
Variables in JavaScript can hold values of any data type, and their types can change during the execution of a program.

| Data Type     | Example            | typeof Example       |
|---------------|--------------------|----------------------|
| Undefined     | let x;              | "undefined"          |
| Null          | let y = null;       | "object"             | ====> imp
| Boolean       | let b = true;       | "boolean"            |
| Number        | let num = 42;       | "number"             |
| String        | let str = "Hello";  | "string"             |
| Symbol        | let sym = Symbol(); | "symbol"             |
| Object        | let obj = {};       | "object"             |
| Function      | function foo() {}   | "function"           |

 */
let x = 5; // x is initially a number
console.log(x); // Output: 5

x = "Hello, World!"; // x is now a string
console.log(x); // Output: Hello, World!


const score = 67n;
console.log(typeof score); // bigint
const scoreValue = 23.8 // number

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 8956543576344356831n // n make a number bigint
console.log(typeof bigNumber);

// Reference (Non primitive) - return type/type is always [object]

// Array, Objects, Functions
const heros = ["Shaktiman", "Spiderman", "Minal Murali"];
let myObj = {
    name: "Ram",
    age: 24,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction); // Output: function but called as function object 

//Link- https://felixgerschau.com/javascript-memory-management/
{
    //primitive values (strings, numbers, booleans, undefined, and null) and references, which point to objects and functions.
    //Primitive values are immutable, which means that instead of changing the original value, JavaScript creates a new one.
    // Stack Memory[saved Primitive type] - primitive values goes to stack, we get a copy of primitive type, so original is not changing.
    let a = 10;
    let b = a;
    b = 5;
    console.log(a);
    console.log(b);

    let name = 'John'; // allocates memory for a string
    const age = 24; // allocates memory for a number

    name = 'John Doe'; // allocates memory for a new string
    const firstName = name.slice(0,4); // allocates memory for a new string
}

//Remember that JavaScript stores [objects] and [functions] in the heap. [Primitive values] and [references] are stored in the stack.
//References in JavaScript:
//All variables first point to the stack. In case it's a non-primitive value, the stack contains a reference to the object in the heap.

//The heap is a different space for storing data where JavaScript stores objects and functions.
//Heap Memory[used to save Non-Primitive data type] - heap mai joh object hote hai woh refer hote hai. heap mai joh changes hote hai wahi original value hoti hai.
// any update is happening in original value.
let obj1 = { // obj1 variable declare in stack and refer to {name: "Ram", age: 23} | obj1 refer to ==> object,{} which is in heap. 
    name: "Ram",
    age: 23
};

let obj2 = obj1; // obj2 variable declare in stack | obj2 refer to  which obj1 refering which is {name: "Ram", age: 23} in heap memory.

