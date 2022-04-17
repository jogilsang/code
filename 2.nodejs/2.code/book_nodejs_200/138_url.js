
// 138_http_url_parsing
// request 객체 
// url : 요청한 URL정보
// method : 요청방식
// headers : 요청 메세지 헤더 정보

const fs = require('fs');
const http = require('http');
const url = require('url');

http.createServer( (request,response) => {

    var pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;

    console.log(`pathname : ${pathname}`);
    // 응답 헤더 작성
    response.writeHead(200, {'Content-Type' : 'text/html'});
    // 응답 본문 작성
    response.end('Hello World!');

}).listen(50001, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});

// print
// pathname : /