function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
} // When this method complete its excution it move out from call stack but hold the execution context for username of createUser().

function createUser(username, email, password){
    SetUsername.call(this, username) // By using this we are telling above method to use the this keyword of createUser() function 
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// New modern syntax to use above like things we have inheritance.