
// 108 필터(filter)
// .filter(item => 조건)
// .filter(age => age > 12 && age)
const ages = [11 ,12, 13, 16, 21 ,31];

const upper16 = ages.filter(age => age > 16);
const under13 = ages.filter(age => age < 13);

const between12And21 = ages.filter( age => age > 12 && age < 21);

console.log('upper16:', upper16);
console.log('under13:', under13);
console.log('between12And21:', between12And21);

// print
// upper16: [ 21, 31 ]
// under13: [ 11, 12 ]
// between12And21: [ 13, 16 ]

// 109
const students = [
    { name: 'gilsang', english: 31, math: 10 },
    { name: 'gilsang2', english: 32, math: 98 },
    { name: 'gilsang3', english: 33, math: 30 },
    { name: 'gilsang4', english: 80, math: 90 },
    { name: 'gilsang5', english: 55, math: 50 },
    { name: 'gilsang6', english: 70, math: 60 },
    { name: 'gilsang7', english: 75, math: 50 },
    { name: 'gilsang8', english: 70, math: 40 }
];

const mathUpper80 = students.filter(student => student.math > 80);
const mathUpper80AndEnglishUpper70 = students.filter(student => student.math > 80 && student.english > 70);

console.log('mathUpper80 : ', mathUpper80);
console.log('mathUpper80AndEnglishUpper70 : ', mathUpper80AndEnglishUpper70);

// // print
// mathUpper80 :  [ { name: 'gilsang2', english: 32, math: 98 },
//   { name: 'gilsang4', english: 80, math: 90 } ]
// mathUpper80AndEnglishUpper70 :  [ { name: 'gilsang4', english: 80, math: 90 } ]