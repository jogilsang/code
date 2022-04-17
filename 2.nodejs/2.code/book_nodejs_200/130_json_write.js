
// 130_list->json

const fs = require('fs');

const userList = [
    { name : 'kyeongrok', age:31},
    { name : 'jihyun' ,age : 31}
];
console.log(userList);
console.log(JSON.stringify(userList));
// [ { name: 'kyeongrok', age: 31 }, { name: 'jihyun', age: 31 } ]
// [{"name":"kyeongrok","age":31},{"name":"jihyun","age":31}]

// JSON Object를 JSON 문자열로 변환
fs.writeFile('./list.json', JSON.stringify(userList));

