// getter/ setter

class User{
    constructor(firstName, lastName) {
        this.firstName =firstName
        this.lastName= lastName
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const user1 = new User("dada", "lee");
console.log(user1)

user1.firstName = "frog";
console.log("frog >",user1)
/** fullName 수정되지 않는다.
*/

console.log(user1.getFullName())


/**
 * 생성자 함수로 해당 클래스가 호출될 때, 최초로만 만들어진다. 이후 firstName/ lastName이 변경되어도 반영되지 않음
 * 
 * 이걸 보완하기 위해 메서드를 활용하게 됨
*/ 
class NewUser{
    constructor(firstName, lastName) {
        this.firstName =firstName
        this.lastName= lastName
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName (value){
        console.log(value)
        this.firstName = value.split(" ")[0];
        this.lastName= value.split(" ")[1];

        console.log(value.split(" "));
        [this.firstName, this.lastName] = value.split(" ")
    }
}

const user2 = new NewUser("dada", "lee");
console.log(user2.fullName)

user2.firstName = "froggg"
console.log(user2.fullName);

user2.fullName = "Neo Kim"