/** 함수의 반환 및 종료 */

function sum(a, b){
        return a + b;
}

console.log(sum(1, 2))
console.log(sum(7))

function sum1(a, b = 1){
    return a + b;
}

console.log(sum1(1, 2))
console.log(sum1(7))

/** 구조 분해 할당 */
const user = {
    name: "dada",
    age:30
}

function getName(user){
    const {name} = user;
    return name;
}

function getName2({name}){
    return name;
}

function getEmail({email = "이메일을 입력해주세요."}){
    return email;
}


const fruits = ["Apple", "Banana", "Cherry"]
const numbers = [1,2,3,4,5]

function getSecondItem(a, b, c){
    console.log("a :", a);
    console.log("b :", b);
    console.log("c :", c);
}

console.log(getSecondItem(fruits));

function add(...rest){
    console.log(rest);
    console.log(arguments);

    
}
