/**
 * 동기(syncronous) VS 비동기(asyncronous)
 * 동기 : 코드가 순차적으로 실행되는 것
 * 비동기 : 코드가 순차적으로 실행되지 않는 것
 */

console.log(1)
console.log(2)
setTimeout(() => {
    console.log(3)
},1000)
console.log(4)

// -------------------------------------------------------

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", () => {
    console.log("버튼이 클릭되었습니다.")
})

console.log("Hello, World")


// -------------------------------------------------------

const a = (callback) => {
    setTimeout(() => {
        console.log(1);
        callback();
    }, 1000)
}

const b = (callback) => {
    setTimeout(() => {
        console.log(2);
        callback();
    }, 1000)
}
const c = (callback) => {
    setTimeout(() => {
        console.log(3);
        callback();
    }, 1000)
}

const d = () => console.log(4);
    
a(() => {
    b(() => {
        c(() => {
            d()
        })
    })
})