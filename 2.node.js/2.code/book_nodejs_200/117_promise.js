
// 117 Promise
// 함수형 프로그래밍은 return값이 없는 프로그래밍 방식
// callback(콜백)함수를 써서 다음에 실행할 함수를 파라미터로 넘겨주는 방식
// WHY 

// promise 사용 시, resolve에 값을 넣는 것이 return
// resolve(value) 다음 실행 되는 것이, then
const promiseFirst = new Promise(resolve => resolve(1))
    .then(result => `${result+10}`);
const promiseSecond = new Promise(resolve => resolve(1))
    .then(result => `${result+20}`);

// Promise.all
// 모든 처리작업 종료 시, 뒤에 처리할 작업실행
Promise.all([promiseFirst,promiseSecond]).then(result => {
    console.log('result : ', result);
    console.log('sum : ', Number(result[0]) + Number(result[1]));
});



