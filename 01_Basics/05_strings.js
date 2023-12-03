// string is primitive value, so copy will be used to manimulation of string, original string remain same.
//Link-https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
const name = "amankunwar";
const gameName = new String('nayan-web-com'); // Another way to create string

const repoCount = 65;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(gameName[0]);
console.log(gameName.__proto__); //Output: {}


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));
const newString = gameName.substring(0, 4) // 0 1 2 3 index value 
console.log(newString);

const newStringOne = "   amankunwar    " 
console.log(newStringOne);
console.log(newStringOne.trim()); // Used when take input form user name.

const url = "https://aman.com/aman%20kunwar"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));


const str = "abcdefghijklmn opqrstuvwxyz";

console.log(str.slice(-3));        // 'xyz'
console.log(str.slice(-3, -1));    // 'xy'
console.log(str.slice(0, -1));     // 'abcdefghijklmn opqrstuvwxy'
console.log(str.slice(4, -1));      // 'efghijklmn opqrstuvwxy'
console.log(str.slice(2, -5));    // 'cdefghijklmn opqrst'
console.log(str.slice(-12, -7));  // 'mno op'
console.log(str.slice(1, -10));   // 'bcdefghij'
console.log(str.slice(-8, -1));   // 'pqrstuvwxy'
console.log(str.slice(0, -15));   // 'abcdefghijklm'
console.log(str.slice(5));        // 'fghijklmn opqrstuvwxyz'
console.log(str.slice(-14));      // 'l mn opqrstuvwxyz'