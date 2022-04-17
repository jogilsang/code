
// 134_http_event
// 웹서버 이벤트
// request : 클라이언트가 요청할 때 발생하는 이벤트
// connection : 클라이언트가 접속 할 때 발생하는 이벤트
// close : 서버가 종료될 때 발생하는 이벤트
// clientError : 클라이언트에서 오류가 날 때 발생하는 이벤트
// checkContinue : 클라이언트가 지속적인 연결을 하고 있을때 발생하는 이벤트

const http = require('http');

const server = http.createServer();

// 이벤트 연결
// request : 클라이언트가 요청할 때 발생하는 이벤트
server.on('request', () => {
    console.log('Request');
})

// connection : 클라이언트가 접속 할 때 발생하는 이벤트
server.on('connection', () => {
    console.log('Connection');
});

// close : 서버가 종료될 때 발생하는 이벤트
server.on('close', () => {
    console.log('Close');
})

// clientError : 클라이언트에서 오류가 날 때 발생하는 이벤트
server.on('clientError', () => {
    console.log('clientError');
})

// checkContinue : 클라이언트가 지속적인 연결을 하고 있을때 발생하는 이벤트
server.on('checkContinue', () => {
    console.log('checkContinue');
})

server.listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});

// 웹서버 종료
const testClose = () => {
    server.close();
    console.log('서버가 종료되었습니다, http://127.0.0.1:50000');
}

// 강제 서버 종료
setTimeout(testClose,5000);

// 서버가 동작 중입니다, http://127.0.0.1:50000
// Connection
// Connection
// Request
// 서버가 종료되었습니다, http://127.0.0.1:50000