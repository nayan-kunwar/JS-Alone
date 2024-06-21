//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  
}
// console.log(a);
// console.log(b);
// console.log(c);
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// Function Hoisting
console.log(addone(5))
function addone(num){
    return num + 1
}



//addTwo(5) //Cannot access addtwo before initialization
const addTwo = function(num){
    return num + 2
}

//-----------------------------READ BELOW----------------------------------------------------
// Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
  
  greet("John");
  
  // Function Expression
  let sayGoodbye = function(name) {
    console.log("Goodbye, " + name + "!");
  };
  
  sayGoodbye("Alice");
  
  // Arrow Function
  let add = (a, b) => a + b;
  
  console.log("Sum:", add(5, 3));
  
  // Higher-Order Function
  function operate(a, b, operation) {
    return operation(a, b);
  }
  
  let multiply = (a, b) => a * b;
  
  console.log("Product:", operate(2, 4, multiply));
  
  // Closure
  function outerFunction(x) {
    return function(y) {
      console.log(x + y);
    };
  }
  
  let innerFunction = outerFunction(10);
  innerFunction(5); // Outputs 15
  
  // Default Parameters
  function greetWithMessage(name, message = "Hello") {
    console.log(message + ", " + name + "!");
  }
  
  greetWithMessage("Bob");
  
  // Rest Parameters
  function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log("Sum:", sum(1, 2, 3, 4, 5));
   
  // Function Hoisting
  hoistedFunction(); // Outputs "I am hoisted!"
  
  function hoistedFunction() {
    console.log("I am hoisted!");
  }
  
  // Anonymous Function
  let anonymousFunction = function() {
    console.log("I am anonymous!");
  };
  
  anonymousFunction();
  
  // Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log("I am an IIFE!");
  })();
  