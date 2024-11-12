

/** 산술 연산 */
console.log(10 + 20) 
console.log(20 - 10) 
console.log(10 * 20)  
console.log(20 / 10) 

console.log(20 % 3)  // 나머지 2


function isEven(num){
    return num % 2 === 0;
}

console.log(isEven(5))
console.log(isEven(10))


let a = 10;
a = a + 10;

let c = 30;
console.log(c++);
console.log(c);
let d = 30;
console.log(++d); // 먼저 증가
console.log(d);

let e = 30;
console.log(e--);
console.log(e);
let f = 30;
console.log(--f);
console.log(f);