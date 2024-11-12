

/** 원시형 데이터 타입 */

const str1 = "Hello, World";
const str2 = "World";
const str3 = `Hello, ${str2}`;

console.log(str1)
console.log(str2)
console.log(str3)


const num1 = 123;
const num2 = -123;
const num3 = -123.4567;
const pi = 3.14;

/** clg */
console.log(num3 - undefined) // NaN
console.log(typeof(num3 + undefined)); // Number
console.log(typeof(pi));


const a = 0.1;
const b = 0.2;
console.log(a + b);
console.log(typeof(a + b).toFixed(1));
console.log(typeof Number((a + b).toFixed(1)));
console.log(Number((a + b).toFixed(1)));

const truthy = true;
const falsy = false;


if(truthy){
    console.log("조건식이 참");
} else{
    console.log("조건식이 거짓");
}

let value1 = null;
console.log(value1)
console.log(typeof value1)

setTimeout(() => {
    value1 = 30;
    console.log(value1)
}, 1000)

let value2;
console.log(value2)


const user = {
    name : "dada",
    age  : 30
}

console.log(user.name)
console.log(user.age)
console.log(user.email)