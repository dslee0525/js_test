/**
 * async & await
 */

const a = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(1);
            resolve();
        }, 1000)
    })
}

const b = () => console.log(2);

a().then(() => {
    b();
})

/** 
 * a() 함수는 promise 인스턴스를 반환하는 비동기 코드
 * resolve 실행까지 기다렸다가 다음 코드 진행
 * 
 * await 이라는 키워드는 뒤쪽에 있는 비동기 함수의 실행을 기다린다는 의미를 가지고 있다.
 * await 키워드를 사용하려면, async 사용하는 함수 안에서 작성되어야 한다.
 * async / await 세트로 사용
 * 
 * await는 console.log() 와 사용불가 : promise 인스턴스를 반환하지 않기 때문
 * async / await는 promise를 반환하는 함수에서만 사용!!!!
*/

const fn = async() => {
    await a(); // promise를 반환하므로 await 사용 가능
    b();
}

fn();