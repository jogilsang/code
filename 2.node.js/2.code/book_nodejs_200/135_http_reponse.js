
// 135_http_response
// response 객체를 이용해 사용자에게 전달하지않으면, 사용자는 아무런 결과값도 받을 수 없음
require('http').createServer( (request,response) => {
    // 응답 헤더 작성
    response.writeHead(200, {'Content-Type' : 'text/html'});
    // 응답 본문 작성
    response.end('Hello World');
}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

