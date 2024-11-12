/** 화살표 함수 */

function sum(a, b){
    return a + b;
}

console.log(sum(1, 2));
console.log(sum(10, 20));

// 화살표 함수는 function 키워드를 생략할 수 있다.
const sum1 = (a, b) => {
    return a + b;
}
console.log(sum1(1, 2));


// 화살표 함수는 return 키워드로 시작하는 로직의 경우, return 키워드와 중괄호를 생략할 수 있다.
const sum2 = (a, b) =>  a + b;
console.log(sum2(3, 4));

const a = x => {
    console.log("x :", x);
    return x + x;
}

const b = () => {
    return {value : 1};
}

const c = () => {
    value: 1; // 중괄호로 사용된 부분이 마치 함수의 블록처럼 보이기 때문에, 자바스크립트가 이해할 수 없다
}

const d = () => { {value: 1} };