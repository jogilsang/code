//087 꼭 필요한 부분만 뽑기
const arNumbers = [];

arNumbers.push(3);
arNumbers.push(5);
arNumbers.push(1);
arNumbers.push(6);
arNumbers.push(8);
arNumbers.push(9);
arNumbers.push(20);

// print
// sliced :  [ 5, 1 ]

// slice (시작 index, 실제 주소(해당index -1))
const sliced = arNumbers.slice(1,3);
console.log('sliced : ', sliced);

// 실습
// 오름차순 정렬
const arr_sort = arNumbers.sort((now,next) => {now - next});
// 내림차순 정렬
const arr_reverse = arNumbers.reverse();
// 상위 3개 추출
const arr_response = arr_reverse.slice(0,3);

console.log(arr_response);

// print
// [ 20, 9, 8 ]

//089_배열 합치기
const part1 = ['gilsang', 'suzy'];
const part2 = ['iu', 'kim'];
const part3 = ['zeny', 'bts'];

console.log(`part1은 ${part1}`);
console.log(`part1+2은 ${part1.concat(part2)}`);
console.log(`part1+2+3은 ${part1.concat(part2,part3)}`);

//090_배열(shift, unshift)
const destination = ['런던', '파리', '로마'];
console.log(destination);

// shift()
// 빼는 것
console.log(`shift()는 ${destination}`);

// unshift()
// 넣는것
destination.unshift('뉴옥');
console.log(`unshift(뉴옥)는 ${destination}`);

// print
// part1은 gilsang,suzy
// part1+2은 gilsang,suzy,iu,kim
// part1+2+3은 gilsang,suzy,iu,kim,zeny,bts
// [ '런던', '파리', '로마' ]
// shift()는 런던,파리,로마
// unshift(뉴옥)는 뉴옥,런던,파리,로마