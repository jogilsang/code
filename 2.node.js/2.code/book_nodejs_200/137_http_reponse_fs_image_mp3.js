
// 137_http_response
// response 객체 -> fs모듈 활용
// MIME Type : text, image, audio, video

const fs = require('fs');
const http = require('http');

http.createServer( (request,response) => {

    fs.readFile('./image_nb.png', (err, data) => {
        // 응답 헤더 작성
        response.writeHead(200, {'Content-Type' : 'image/jpeg'});
        // 응답 본문 작성
        response.end(data);
    });

}).listen(50001, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});

http.createServer( (request,response) => {

    fs.readFile('./mugic_sample.mp3', (err, data) => {
        // 응답 헤더 작성
        response.writeHead(200, {'Content-Type' : 'audio/mp3'});
        // 응답 본문 작성
        response.end(data);
    });

}).listen(50002, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50002');
});

// print
// localhost:50000
// Node.js
// Node.js
// Node.js 정의
// Node.js는 Non-blocking I/O와 단일 스레드 이벤트 루프를 통한 높은 처리성능을 가지고있다.
