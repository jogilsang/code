

// 082
const userList = [

    { name: 'gilsang', age: 31, score: 10 },
    { name: 'gilsang2', age: 32, score: 98 },
    { name: 'gilsang3', age: 33, score: 30 },
    { name: 'gilsang4', age: 40, score: 90 },
    { name: 'gilsang5', age: 55, score: 50 },
    { name: 'gilsang6', age: 70, score: 60 },
    { name: 'gilsang7', age: 70, score: 50 },
    { name: 'gilsang8', age: 70, score: 40 }

];

// sort함수는 2가지 인자를 전달
// 1 : 앞으로, -1 : 뒤로
// 오름차순 : before > next : 1, before < next : -1
// 내림차순 : before > next : -1, before < next : 1
userList.sort((beforeStudent, nextStudent) => {
    if (beforeStudent.age > nextStudent.age) return 1;
    else if (beforeStudent.age < nextStudent.age) return -1;
    else if (beforeStudent.math > nextStudent.math) return -1;
    else if (beforeStudent.math < nextStudent.math) return 1;
    return 0;
});

console.log(userList);

// print
// [ { name: 'gilsang', age: 31, score: 10 },
//   { name: 'gilsang2', age: 32, score: 98 },
//   { name: 'gilsang3', age: 33, score: 30 },
//   { name: 'gilsang4', age: 40, score: 90 },
//   { name: 'gilsang5', age: 55, score: 50 },
//   { name: 'gilsang6', age: 70, score: 60 },
//   { name: 'gilsang7', age: 70, score: 50 },
//   { name: 'gilsang8', age: 70, score: 40 } ]

// 086 : JSON 오브젝트 정렬
const studentList = [
    { name: 'gilsang', age: 31, math: 10 },
    { name: 'gilsang2', age: 32, math: 98 },
    { name: 'gilsang3', age: 33, math: 30 },
    { name: 'gilsang4', age: 40, math: 90 },
    { name: 'gilsang5', age: 55, math: 50 },
    { name: 'gilsang6', age: 70, math: 60 },
    { name: 'gilsang7', age: 70, math: 50 },
    { name: 'gilsang8', age: 70, math: 40 }

];

// 수학점수 기준 정렬
studentList.sort((now,next) => now.math - next.math);
console.log('studentList:',studentList);

const compare = (now, next) => {
    console.log('----------');
    console.log('now:', now);
    console.log('next:', next);
}
studentList.sort(compare);

// print
// 수학점수 기준 정렬
// studentList: [ { name: 'gilsang', age: 31, math: 10 },
//   { name: 'gilsang3', age: 33, math: 30 },
//   { name: 'gilsang8', age: 70, math: 40 },
//   { name: 'gilsang5', age: 55, math: 50 },
//   { name: 'gilsang7', age: 70, math: 50 },
//   { name: 'gilsang6', age: 70, math: 60 },
//   { name: 'gilsang4', age: 40, math: 90 },
//   { name: 'gilsang2', age: 32, math: 98 } ]
// ----------
// now: { name: 'gilsang', age: 31, math: 10 }
// next: { name: 'gilsang3', age: 33, math: 30 }
// ----------
// now: { name: 'gilsang3', age: 33, math: 30 }
// next: { name: 'gilsang8', age: 70, math: 40 }
// ----------
// now: { name: 'gilsang8', age: 70, math: 40 }
// next: { name: 'gilsang5', age: 55, math: 50 }
// ----------
// now: { name: 'gilsang5', age: 55, math: 50 }
// next: { name: 'gilsang7', age: 70, math: 50 }
// ----------
// now: { name: 'gilsang7', age: 70, math: 50 }
// next: { name: 'gilsang6', age: 70, math: 60 }
// ----------
// now: { name: 'gilsang6', age: 70, math: 60 }
// next: { name: 'gilsang4', age: 40, math: 90 }
// ----------
// now: { name: 'gilsang4', age: 40, math: 90 }
// next: { name: 'gilsang2', age: 32, math: 98 }

const numbers = [1,2,19,38,4,98,25];

// predicate
const isFirstBiggerThenSecond = (first, second) => {
    if (first > second) return true;
        return false;
}

console.log(`numbers sorted : ${numbers.sort(isFirstBiggerThenSecond)}`);

// print
// numbers sorted : 1,2,4,19,25,38,98