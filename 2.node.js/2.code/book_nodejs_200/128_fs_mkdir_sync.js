
// 128_디렉토리만들기
const fs = require('fs');

// 실행환경의 디렉토리 경로
const dirName = `${__dirname}/img`;

if(!fs.existsSync(dirName)){
    fs.mkdirSync(dirName);
}
