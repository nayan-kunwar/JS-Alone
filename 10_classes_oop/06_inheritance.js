class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) // Without using call and this -> canlook out | 04_call.js
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.logMe()
chai.addCourse()

const masalaChai = new User("masalaChai")
masalaChai.logMe()
// masalaChai.addCourse() cannot access child class method and properties
console.log(chai === User); // false
console.log(chai === Teacher); // false
console.log(chai instanceof Teacher); // true | chai is object of User
console.log(chai instanceof User); // true | chai is object of User