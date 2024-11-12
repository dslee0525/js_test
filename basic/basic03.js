

/** 참조형 데이터 타입 */

const fruits = new Array("사과", "바나나", "체리", "멜론", "수박", "딸기");

console.log(fruits);

const animals = ["호랑이", "사자", "코끼리", "원숭이", "악어"]
console.log(animals)
console.log(animals.length)
console.log(animals[1])
console.log(animals[animals.length - 1] ) // 배열 길이에서 -1 하면, 배열의 마지막 요소 참조
console.log(animals[0])


const user = new Object();
user.name = "dada";
user.age = "30";
user.job = "programmer";

console.log(user)
console.log(user.name)
console.log(user["job"])

const userA = {
    name : "유저 A",
    age : 17,
    job: "student"
}

const userB = {
    name : "유저 B",
    age : 17,
    brothder: userA
}

console.log(userB.brothder)
console.log(userB.brothder.name)
console.log(userB.brothder["job"])

const family = [userA, userB]

console.log(family)
console.log(family[0].name)
console.log(family[1]["name"])
