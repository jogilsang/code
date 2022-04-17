

// 074_정규표현식(regexp)
// \ 이스케이프

// /<정규표현식>/
// 태그를 없애는 예제
// /로 시작해서 /g로 끝나는게 정규식의 기본
// replace(/{TODO : 입력}/g,'');

const string = '<h1>:::특별가 - 99,000원:::</h1>';
const result1 = string.replace(/<h1>/g,'');
console.log('result1 : ', result1);

const result2 = string.replace(/<h1>/g, '').replace(/<\/h1>/g,'');
console.log('result2 : ', result2);

// print
// result1 :  :::특별가 - 99,000원:::</h1>
// result2 :  :::특별가 - 99,000원:::

// 075_정규표현식(regexp) .
// . 연산자는 한개의글자
const string2 = '<h1>특별가 - </h1><h2>99,000원</h2>';
const result2_1 = string2.replace(/<..>/g,'');
const result2_2 = string2.replace(/<.../g,'');

console.log(result2_1);
console.log(result2_2);

// print
// 특별가 - </h1>99,000원</h2>
// 특별가 - >99,000원>

const string3 = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';

const replaceH1 = string3.replace(/<.{0,1}h.{0,1}>/g,'');
const replaceH1_2 = string3.replace(/<.{0,1}h.>/g,'');
const replaceTags = stringDiv.replace(/<.{0,4}>/g,'');

console.log(replaceH1);
console.log(replaceH1_2);
console.log(replaceTags);

// print
// 특별가 - 99,000원
// 특별가 - 99,000원
// 특별가 - 99,000원

// 077_regeexp []
// [] 안쪽에 있는 문자들을 모두찾아서 바꾸기
const string4 = '(<h1>:::특별가 - 99,000원:::</h1>)';

const replacedBracket = string.replace(/[()]/g,'');
const replacedBracketOrSlashHyphenComma = string.replace(/[()\/\-]/g,'');

console.log('바꾸기 전 ---->', string4);
console.log('() 없애기 --->', replacedBracket);
console.log('/- 없애기 --->', replacedBracketOrSlashHyphenComma);

// 078_정규표현식_match
// 알파벳 a~l까지 1개~3개의글자를 모두찾아내기
// abcdefghijkl
// [ 'hel', 'l', 'a', 'e', 'i', 'gil', 'a', 'g' ]
const string5 = 'hello my name is gilsang';

const matched = string5.match(/[a-l]{1,3}/g);

console.log(`matched target : ${string5}`);
console.log(matched);


