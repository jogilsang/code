
// 071_split
const dateString = '2017-08-24 11:00:00';

// split
const date = dateString.split(' ')[0]; // 2017-08-24
const time = dateString.split(' ')[1]; // 11:00:00

// print
console.log('date : %s', date);
console.log('time : %s', time);

const result = 'abc'.split('b');
console.log('result : ', result);

// 실습
// 2017-08-24
const date_0 = date.split('-')[0]
const date_1 = date.split('-')[1]
const date_2 = date.split('-')[2]

console.log('date_0 : %s', date_0);
console.log('date_1 : %s', date_1);
console.log('date_2 : %s', date_2);

// print
// date : 2017-08-24
// time : 11:00:00
// result :  [ 'a', 'c' ]
// date_0 : 2017
// date_1 : 08
// date_2 : 24