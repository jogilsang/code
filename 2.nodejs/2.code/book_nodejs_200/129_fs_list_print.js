
// 129_파일리스트 출력
const testFolder = './';
const fs = require('fs');

const filenameList = fs.readdirSync(testFolder);

filenameList.forEach((filename) => {
    console.log(filename);
})


