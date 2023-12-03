const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(1));
console.log(otherNumber.toPrecision(2));
console.log(otherNumber.toPrecision(3)); //124
console.log(otherNumber.toPrecision(4)); //123.9
//Because the hundredths place was rounded up from 9 to 10, the hundredths place becomes 0 and the tenths place is increased by 1. 
//When a 9 is rounded up to 10, that place value becomes 0 and we add 1 to the previous place value.
console.log(otherNumber.toPrecision(5)); //123.90

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1); // Generate random number from 0 to 1, both included
console.log(Math.floor(Math.random()*10) + 1); // Generate random number but with exact value not in point.

//[10, 20] included 10 and 20 too.
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Generalized formula for genrating random number from 10 t0 20, ie [10, 20]

//[1, 5]
const min2 = 1
const max2 = 5
console.log(Math.floor(Math.random() * (max2 - min2 + 1)) + min2)