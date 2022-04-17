



// 070_특정 문자열 바꾸기, replace
const greeting = 'hello';
const dateString = '2017-0824T11:00:00'
const smallBracket = '()';

// replace
const replacedGreeting = greeting.replace('el', '');
const replacedDateString = dateString.replace('T', ' ');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

console.log(replacedGreeting);
console.log(replacedDateString);
console.log(middleBracket);

// print
// hlo
// 2017-0824 11:00:00