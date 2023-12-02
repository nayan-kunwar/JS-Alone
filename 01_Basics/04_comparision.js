// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// Avoid below practices
//comaparision convert null to number
console.log(null > 0); // false
console.log(null == 0); // false equality check work differently in coparision.
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// === strict check=> check data type to

console.log("2" === 2);