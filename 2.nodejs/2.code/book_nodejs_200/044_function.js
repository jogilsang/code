


// 044. function
// 함수란 ?
// 프로그래밍에서 명령문을 묶은 단위

function printHello () {
    console.log('hello');
}
printHello();

// ES6
const printBye = () => {
    console.log('bye');
}
printBye();

// 결과
// hello
// bye

// 045. 매개변수(parameter), 인자(argument)
// 매개변수 ? : 값이 넘어오는 매개체
// 인자 ? : argument
function printMessage(pMessage) {

}

// 048. 함수 선언식(Function Declaration), 함수 표현식(Funtion Expression)

// 049. 함수의 성질

function plus(a,b) {
    return a+b;
}

function calculate(a,b, func) {
    return func(a,b);
}

console.log(calculate(3,5,plus));

// 결과
// 8

// 050. arrow 함수

const print

// 106_프리디케이트_predicate

const isApple = (fruit) => {
    if (fruit === 'apple') return true;
        return false;
}

console.log(`isApple('applie') = ${isApple('applie')}`);