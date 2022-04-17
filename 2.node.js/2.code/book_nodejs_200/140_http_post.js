
// 140_http_post

const http = require('http');
const url = require('url');

http.createServer((request, response) => {

    if (request.method === 'POST') {
        console.log('POST Method :');

        request.on('data' , data => {
            response.writeHead(200,"Content-Type : text/html");
            response.end(data);
        })
    }

}).listen(50001, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50001');
});
