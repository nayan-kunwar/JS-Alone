// Two way to create array
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
// [Array methods]

myArr.push(6)
myArr.push(7)
myArr.pop() // delete last element
myArr.unshift(9)// add 9 to star
myArr.shift() // delete first element
console.log(myArr.includes(9)); // give true or false
console.log(myArr.indexOf(3));

const newArr = myArr.join() // add elements of myArr in newArr in string
console.log(myArr);
console.log( newArr);

// slice, splice

console.log("myArr: ", myArr);

//Slice: return new array
const myn1 = myArr.slice(1, 3) // slice index 1 t0 2
console.log(myn1);
console.log("myArr: ", myArr); // No change in myArr

//splice: change in original array and return deleted element
const myn2 = myArr.splice(1, 3)// splice take element of index 1, 2, 3=> total 3 element
console.log("myArr: ", myArr);
console.log(myn2);// return deleted element

// Creating an array
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Searching and Sorting
let indexOfOrange = fruits.indexOf("Orange");
console.log("Index of Orange:", indexOfOrange);

let sortedFruits = fruits.slice().sort(); // Creating a copy, sorting, and leaving the original array unchanged
console.log("Sorted Fruits:", sortedFruits);
console.log("Original Fruits (Unmodified):", fruits);