
// 103 커링(curring)
// WHAT : 커링은?
// 일부 파라미터로 함수를 만드는 기법
// WHY : 커링을 왜 쓰는대
// 비동기 실행이 많기때문에, return이 없는 대신 콜백을 인자로 넘기는 경우가 많음. 커링은 함수를 재활용하기 좋음
// HOW : 커링을 어떻게
// 중복을 최소화해서

// 화살표가 여러개면
// 화살표 개수만큼 넣어줘야한다.
// 커링은 화살표 개수보다 적은 인자값이 들어오면 함수를 반환함
const add = x => y => x+y;
const add10 = add(10);

console.log(add10(20));
console.log(add(10)(20));

// print
// 30
// 30

const coffeeMachine = liquid => espresso => `${espresso}+${liquid}`

const americanoMachine = coffeeMachine('water');
const latteMachine = coffeeMachine('milk');

const americano = americanoMachine('coffee bean');
const latte = latteMachine('coffee bean');

console.log(americano);
console.log(latte);

// print
// coffee bean+water
// coffee bean+milk
