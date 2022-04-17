



// 051_callback
// callback이 겹치면, 체이닝(chainning)
// callback ? () => {}
const sum = (a,b) => a+b;

const printResult = (result) => {
    console.log(`결과는 ${result} 입니다.`)
}

const calculationAndPrint = (calculateResult, callback) => {
    callback(calculateResult);
}

calculationAndPrint(sum(10,20),printResult);

// 결과
// 결과는 30 입니다
//
//------------------------------------------------------
// 실습
const callbackAddFunction = (a,b) => {
    console.log('callbackAddFunction ', a+b);
    var result = a+b;
    return result;
}

const callbackMultiFunction = (a,b) => {
    console.log('callbackAddFunction ', a*b);
    var result = a*b;
    return result;
}

const calFunction = (a,b,callback) => {
    console.log('before callback ', a, b);
    callback(a,b);
}

console.log(`4,5의 합은 ${calFunction(4,5,callbackAddFunction)}`);
console.log(`4,5의 곱은 ${calFunction(4,5,callbackMultiFunction)}`);
console.log(calFunction(4,5,callbackAddFunction));

// 결과
// 결과는 30 입니다.
// before callback  4 5
// callbackAddFunction  9
// 4,5의 합은 undefined
// before callback  4 5
// callbackAddFunction  20
// 4,5의 곱은 undefined
// before callback  4 5
// callbackAddFunction  9
// undefined