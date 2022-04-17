
// 110 맵(map)
// what :맵리듀스 프로그래밍은 대용량 데이터를 분산 처리하기 위해 임의의 순서로 정렬된 데이터를 분산 처리(map)하고, 이를 합치(reduce)는 과정
// why : 처리과정을 여러프로세스로 나눈다면 처리지연(latency)을 줄이고, 처리량(throughput)을 늘릴 수 있다.
// define
const list = [1,2,3];

// process
const multipledList = list.map(item => item * 10);
multipledList.forEach(item => console.log(item));

// print
// 10
// 20
// 30

const employees = [
    { name: 'gilsang', age: 31, salary: 4000 },
    { name: 'gilsang2', age: 32, salary: 5000 },
    { name: 'gilsang3', age: 33, salary: 6000 },
];

const applyUpperSalaryToEmployees = employees.map(employee => (parseInt(employee.salary * 1.1)));
applyUpperSalaryToEmployees.forEach(employee => console.log(employee))
