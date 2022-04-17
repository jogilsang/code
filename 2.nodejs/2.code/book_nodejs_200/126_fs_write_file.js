
// 126_파일내용 수정하기
const fs = require('fs');

fs.readFile('./message.txt', (err, data) => {
    if(err) throw err;

    var contents = data.toString();
    contents = 'replaced';

    // 파일 신규생성
    fs.writeFile('./message.txt', contents, () => {
        console.log('fs.writeFile 실행');
    })
})



