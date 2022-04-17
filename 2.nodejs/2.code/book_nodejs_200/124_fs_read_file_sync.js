
// 124_fs_read_filesync
// 함수가 실행되면 해당 파일을 읽으면서 다른 작업을 동시에 할 수 없게 됩니다.
// 동시성을 해치기때문에 프로그램 실행은 느려진다.
// 사용자 로그 파일을 보고 출입을 허가해야 하는 등 실행 순서를 반드시 보장해야 할 때
const fs = require('fs');

const data = fs.readFileSync('./message.txt');
const string = data.toString();
console.log('sync work01');
console.log(string);

// 비동기로 파일열기
fs.readFile('./message.txt',(err,data) => {
    if(err) throw err;
    console.log('async work01');
    console.log(data.toString());
});



