const marvel_heros = ["loki", "thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman", "peacemaker"]

// marvel_heros.push(dc_heros) // dc_heros goes to marvel_heros ==> marvel_heros =[ , , [dc_heros] ] 

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // Concate max 2 arrays and return new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // concate more than 2 array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //depth is 2 

const real_another_array = another_array.flat(Infinity) // spread another_array or flat(2)
console.log(real_another_array);



console.log(Array.isArray("Aman")) // is Aman array-> false
console.log(Array.from("Aman")) // convert Aman to array. [create an array from iterable object]

// cannot convert object into array because we have to tell what array we want to make from that object like array of key or value, 
//so wwhen it dont know it will create an empty array. 
console.log(Array.from({name: "Nayan"})) 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //Output: [100, 200, 300]

console.log(Array.of(1, 2, 3));     