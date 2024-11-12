/** 
 * 재귀함수 : 함수 내부에서 자기 자신을 다시 호출하는 것
 * 재귀호출은 무한으로 반복 실행 되기 때문에, 멈출 수 있는 조건식을 반드시 작성해야 한다.
 */

let i = 0;
const a = () => {
    console.log("A");
    i += 1;
    
    if(i < 4){
        a();
    }
}

a();

const userA = {
    name: "A",
    parent: null,
}
const userB = {
    name: "B",
    parent: userA,
}
const userC = {
    name: "C",
    parent: userB,
}
const userD = {
    name: "D",
    parent: userC,
}

const getRootUSer = (user) => {
    if(user.parent){
        return getRootUSer(user.parent);
    }
    console.log(user)
    return user;
}

getRootUSer(userD)