
// 119 exports
// 모듈 등록하기
const printHello = () => console.log('hello');
const printMessage = (message) => {
    console.log(message);
    console.log('test');
};

exports.printHello = printHello;
exports.printMessage = printMessage;

// exports.printMessage('test');
// exports.printHello();


