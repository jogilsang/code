
// 112 리듀스(reduce)
// what :맵리듀스 프로그래밍은 대용량 데이터를 분산 처리하기 위해 임의의 순서로 정렬된 데이터를 분산 처리(map)하고, 이를 합치(reduce)는 과정
// why : 처리과정을 여러프로세스로 나눈다면 처리지연(latency)을 줄이고, 처리량(throughput)을 늘릴 수 있다.
// define
// 주어진 목록의 첫번째 인덱스부터, 마지막 인덱스까지 특정연산을 통해 하나의 결과를 도출하는 함수
const scores = [10,20,30,40,50];

// process
// (a,b) => ((a+b),c) => ((a+b+c),d)
const sum = scores.reduce((a,b) => (a+b));

// reduce 함수에 콜백 함수 외에 초기값을 같이 넘길 수 있음. 초기값은 함수 첫 호출에 첫번째 인수로 사용됨
// (10,10) => (20,20) => (40,30) => (70, 40) => (110, 50) => 160
const sumWithInitValue = scores.reduce((a,b) => (a+b), 10);

console.log('sum : ', sum);  
console.log('sumWithInitValue : ', sumWithInitValue);
