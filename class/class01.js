// prototype

const fruits = new Array("사과", "바나나", "체리");

console.log(fruits);
console.log(fruits.length);
console.log(fruits.includes("바나나"));
console.log(fruits.includes("오렌지"));

Array.prototype.getName = function(){
    console.log(this)
}
fruits.getName();

const newArr = [];
newArr.getName();

const user = {
    firstName: "dada",
    lastName: "lee",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const user2 = {
    firstName: "frog",
    lastName: "lee",
}

console.log(user.getFullName())