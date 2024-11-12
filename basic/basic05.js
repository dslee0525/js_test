

/** 형 변환 */

const A = 1;
const B = "1";

console.log(A == B) // true
console.log(A === B)  //false


const C = 0;  // 숫자 0은 거짓에 해당한다.
const D = false;
const E = true;

console.log(C == D) // true
console.log(C == E)  //false

const fruits = ["사과", "바나나", "체리", "멜론", "수박", "딸기"];
const  emptyArr = [];

if(fruits){
    console.log("배열 안에 아이템들이 있습니다.")
}

if(emptyArr.length){
    console.log("배열 안에 아이템들이 있습니다.")
} else{
    console.log("배열의 길이가 0이므로 거짓이 실행된다.")
}

const num = 100;
console.log(typeof num);

console.log(typeof "string"); // string
console.log(typeof "Hello" === "string"); // true
console.log(typeof false === "boolean"); // 
console.log(typeof undefined === "undefined"); // 
console.log(typeof undefined)
console.log(typeof null === "null"); // 

console.log(typeof null)
console.log(typeof [])
console.log(typeof {})

console.log([].constructor)
console.log({}.constructor === Array) // true
console.log([].constructor === Object) // true

console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(null).slice(8,-1));


function checkType(data){
    return Object.prototype.toString.call(data).slice(8,-1)
}
console.log(checkType(null))