

// 055_난수생성

const randomNumber = Math.random(); 

console.log(randomNumber);

// 실습
// zeroToNine
const zeroToNine = Math.floor(Math.random() * 10, 10)
// oneToTen
const oneToTen = Math.floor(Math.random() * 10, 10) + 1;

// twentyToThirty
// 20 ~ 30
// 0 ~ 10 : 총 11가지의 숫자
const twentyToThirty = Math.floor(Math.random() * (30-20)+1, 10) + 20 ; 

console.log(`zeroToNine 는 ${zeroToNine}입니다.`);
console.log(`oneToTen 는 ${oneToTen}입니다.`);
console.log(`twentyToThirty 는 ${twentyToThirty}입니다.`);

// 최대, 최소
const maxResult = Math.max(10,20,30);
const minResult = Math.min(10,20,30);

console.log(`maxResult는 ${maxResult}입니다.`);
console.log(`minResult는 ${minResult}입니다.`);

// 절대값 : abs
// 거듭제곱 : pow
// floor : 더 낮게 올림
// ceil : 더 높게 올림

// Nan ??? : 숫자가 아닌값
console.log(`Math.sign(NaN), ${Math.sign(NaN)}`);
console.log(`Math.sign('foo'), ${Math.sign('foo')}`);
console.log(`Math.sign(), ${Math.sign()}`);
console.log(`Math.sign(0), ${Math.sign(0)}`);

// 결과
// 0.9190309410914779
// zeroToNine 는 9입니다.
// oneToTen 는 8입니다.
// twentyToThirty 는 25입니다.
// maxResult는 30입니다.
// minResult는 10입니다.
// Math.sign(NaN), NaN
// Math.sign('foo'), NaN
// Math.sign(), NaN
// Math.sign(0), 0
