// [ Parent object ] and [ Child class object ] cannot access static method.
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const a = new User("aman")
// console.log(a.createId()) // Parent object cannot access static method

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const t1 = new Teacher("iphone", "i@phone.com")
// console.log(t1.createId());  // Child class object cannot access static method.