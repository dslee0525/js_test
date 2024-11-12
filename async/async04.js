/**
 * resolve, reject 그리고 에러 핸들링
 */

const delayAdd = (index, callback, error) => {
    setTimeout(() => {
        if(index > 10){
            error(`${index}는 10보다 클 수 없습니다.`);
            return;
        }
        console.log("index :", index);
        callback(index + 1);
    }, 1000)
}

delayAdd(
    4, 
    (res) => console.log(res), 
    (err) => console.log(err)
);

delayAdd(
    13, 
    (res) => console.log(res), 
    (err) => console.log(err)
);

// -----------------------------------------------------------------
const newDelayAdd = (idx) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(idx > 10){
                error(`${idx}는 10보다 클 수 없습니다.`);
                return;
            }
            console.log("idx :", idx);
            resolve(index + 1);
        }, 1000)
    })
}

newDelayAdd(9)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("Done!"));

const wrap = async() => {
    
    try {
        const res = await newDelayAdd(9);
    } catch (error) {
        console.error(error)
    } finally {
        console.log("완료!")
    }
}
wrap();