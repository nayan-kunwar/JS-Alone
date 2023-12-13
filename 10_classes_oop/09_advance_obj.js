//Important for interview
//We can set that which property of object should not overwrite.
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    enumerable: true, // the 'name' property will not iterate, we can not change the 'name' property value
})

/* console.log( Object.entries(chai)) -> 
  [
    [ 'name', 'ginger chai' ],
    [ 'price', 250 ],
    [ 'isAvailable', true ],
    [ 'orderChai', [Function: orderChai] ]
  ] 
*/
for (let [key, value] of Object.entries(chai)) { 
    if (typeof value !== 'function') { // If property value === to function then do not print it.
        console.log(`${key} : ${value}`);
    }
}

// Output: 
// name : ginger chai // this will not overwrite
// price : 250
// isAvailable : true