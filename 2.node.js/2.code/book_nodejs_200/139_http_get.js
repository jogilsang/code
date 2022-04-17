
// 139_http_get

const http = require('http');
const url = require('url');

http.createServer( (request,response) => {

    const get = url.parse(request.url,true).query;

    if( request.method === 'GET') {
        console.log('GET Method :');
        console.log(`${JSON.stringify(get)}`);
        
        // 응답 헤더 작성
        response.writeHead(200, {'Content-Type' : 'text/html'});
        // 응답 본문 작성
        response.end(JSON.stringify(get));
    }
    else if( request.method === 'POST') {
        console.log('POST Method :');
    }

}).listen(50001, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});