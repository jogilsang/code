
// 136_http_response
// response 객체 -> fs모듈 활용
const fs = require('fs');
require('http').createServer( (request,response) => {

    fs.readFile('./136.example.html', (err, data) => {
        // 응답 헤더 작성
        response.writeHead(200, {'Content-Type' : 'text/html'});
        // 응답 본문 작성
        response.end(data);
    });

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

// print
// localhost:50000
// Node.js
// Node.js
// Node.js 정의
// Node.js는 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리성능을 가지고있다.
