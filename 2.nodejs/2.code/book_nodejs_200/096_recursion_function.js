

// 096 _ 재귀함수 1~n까지 더하기
const sumN = (num, sum) => {
    if (sum === null | sum === undefined) {
        sum = num;
    } else {
        sum = sum + num;
    }
    console.log(`sumN(${num}) = ${sum}`);
    if (num === 0) return sum;
    else return sumN(num - 1, sum)

};

console.log(`result : ${sumN(10)}`);

// sumN(10) = 10
// sumN(9) = 19
// sumN(8) = 27
// sumN(7) = 34
// sumN(6) = 40
// sumN(5) = 45
// sumN(4) = 49
// sumN(3) = 52
// sumN(2) = 54
// sumN(1) = 55
// sumN(0) = 55
// result : 55

// 097 _ 재귀함수 factorial(팩토리얼)
const factorialN = (num, result) => {
    if (result === null || result === undefined) {
        result = num;
    } else {
        result = result * num;
    }
    console.log(`factorialN(${num}) = ${result}`);
    if (num === 1) return result ;
    else return factorialN(num - 1, result);
};

console.log(`result : ${factorialN(10)}`);


// print
// factorialN(10) = 10
// factorialN(9) = 90
// factorialN(8) = 720
// factorialN(7) = 5040
// factorialN(6) = 30240
// factorialN(5) = 151200
// factorialN(4) = 604800
// factorialN(3) = 1814400
// factorialN(2) = 3628800
// factorialN(1) = 3628800
// result : 3628800

const fibonaci = (num) => {
    if (num <= 1) return 1;
    return fibonaci(num -1) + fibonaci(num-2);
}

for(var i = 1 ; i < 10 ; i++) {
    console.log(`fibonaci(i) = ${fibonaci(i)}`);
}

// print
// fibonaci(i) = 1
// fibonaci(i) = 2
// fibonaci(i) = 3
// fibonaci(i) = 5
// fibonaci(i) = 8
// fibonaci(i) = 13
// fibonaci(i) = 21
// fibonaci(i) = 34
// fibonaci(i) = 55