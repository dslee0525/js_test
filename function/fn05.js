/** 
 * 함수는 하나의 데이터로쏘, 소괄호를 열고 닫지 않으면 하나의 데이터,
 * 소괄호를 열고 닫아야지만, 함수가 실행된다
 */

const a = () => {
    console.log("A");
}

const b = () => {
    console.log("B");
}

a(b); // b:콜백 함수 : 함수가 실행될 때, 인수/인자로 들어가는 또 다른 함수. 


const c = (callback) => {
    console.log("C");
    callback(); // 함수 실행
}

const d = () => {
    console.log("D");
}

c(d);


const sum = (a, b) => {
    return setTimeout(() => {
        return a + b;
    }, 1000)
}

console.log(sum(1,2))
console.log(sum(3,7))

const sum2 = (a, b, c) => {
    setTimeout(() => {
        c( a + b );
    }, 1000)
}

sum2(1, 2, (value) => {
    console.log(value)
})