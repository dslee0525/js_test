/** 함수의 반환 및 종료 */

function hello(){
    return "Hello, World";
    // return 키워드 이후에 작성된 코드는 동작하지 않는다.
}

function plusOne(num){
    if(typeof num === "number"){
        return num + 1;
    } else {
        console.log("숫자를 입력해주세요")
        return 0;
    }
}

console.log(plusOne(10))
console.log(plusOne())