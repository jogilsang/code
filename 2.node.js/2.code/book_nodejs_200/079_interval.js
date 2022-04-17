


// 079
// setInterval (함수, 시간) : 실행주기
// 1초에 한번씩 데이터 수집, 모니터링, 업데이트 가능
setInterval(() => console.log('1sec'), 1000);

twoSec = () => console.log('2sec');



// 080 
// setTimeout : 특정시간 후에 실행 및 종료
setTimeout(() => console.log('3sec'), 3000);

// 081
// clearInterval : 정기적 실행 취소
const varTwoSec = setInterval(twoSec, 2000);
setTimeout(() => clearInterval(varTwoSec), 5000);

