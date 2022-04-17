

// 050
const printHello = () => console.log('hello');
const printHello2 = () => 'hello2'; // 
const printMessage = message => console.log(message);

const plus = (a,b) => a+b;
const minus = (a,b) => a-b;

printHello();
console.log(printHello2());
printMessage('message');
console.log('plus : %d', plus(10,20));
console.log('minus : %d', minus(10,20));

// 051
// 화살표(arrow) 함수, {} 이용하기
const sumAndPrint = (a,b) => {
    const result = a+b;
    return `결과는 ${result}입니다`;
}

const result = sumAndPrint(10,20);
console.log(result);

const userList = [

    { name : 'gilsang', age : 31, score : 85},
    { name : 'gilsang2', age : 32, score : 86},
    { name : 'gilsang3', age : 33, score : 87}

];

userList.forEach(user => {
    console.log(`${user.name}은 ${user.score}살 이다.`);
});








