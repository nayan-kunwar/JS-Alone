// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this); // Output: {} emppty object in node environment, in browser console we get window object

//this cannot refer to current context inside function
function chai1(){
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); // in node environment we get some value
}
chai1()

const chai2 = function () {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); // in node environment we get some value
}
chai2()

const chai3 =  () => {
    let username = "hitesh"
    console.log(this.username); //undefined
    console.log(this); // this wiil give output: {} same as ==>  console.log(this); 
}
chai3()


//Explicit return: when curly braces is used | need to write return keyword
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//When use (), prentheses | there is no need to write return keyword ===> this use while learning react
// const addTwo = (num1, num2) => ( num1 + num2 ) // num1 + num2 return
// const addTwo = (num1, num2) => ({username: "hitesh"})//object return

//Implicit return: remove -->  {} and return
// const addTwo = (num1, num2) =>  num1 + num2 //  num1 + num2 will be returned, dont need to write written

// console.log(addTwo(3, 4))
