



// 041_trycatch
// Error가 난다는 것은?
// 프로그램이 메모리에서 내려오는 것
// try catch ? 프로그램이 끝까지 실행되도록 하는 것
try {
    printMessage('hello');
} catch (e) { 
    console.log('error : ', e);
}

console.log('program finished');


// response
// error :  [ReferenceError: printMessage is not defined]
// program finished

const printHello = () => console.log('hello');

try {
    printHello();
} catch (e) {
    console.error(e);
} finally {
    console.log('finally1');
}

try {
    printBye();
}catch (e){
    console.error(e);
} finally {
    console.log('finally2');
}

// response
// hello
// finally1
// [ReferenceError: printBye is not defined]
// finally2