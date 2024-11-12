// prototype

// 파스칼 케이스로 생성자 함수를 만들어 준다.

function User(firstName, lastName) {
    this.firstName =firstName
    this.lastName= lastName
}

User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}
const user = new User("dada", "lee");
const user2 = new User("frog", "lee");

class NewUser{
    constructor(firstName, lastName) {
        this.firstName =firstName
        this.lastName= lastName
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const user3 = new NewUser("dada", "lee");
const user4 = new NewUser("frog", "lee");