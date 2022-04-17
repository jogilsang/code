
// 142_cookie_extract
// 쿠키란 인터넷 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일을 의미
// 쿠키는 클라이언트, 서버 둘다 저장 및 사용가능
// 로그인 상태를 일정 시간 유지해야하는 웹사이트 사용
// 수시로 읽히고 변경됨
const http = require('http');

http.createServer((request, response) => {
    // GET cookie
    if(request.headers.cookie) {
        const cookie = request.headers.cookie.split(';').map((element) => {
            element = element.split('=');
            return {
                name : element[0],
                value : element[1]
            };
        });
        response.end(`<h1>${JSON.stringify(cookie)}</h1>`);
    }
    else {
    // SET cookie
        response.writeHead(200,{
            'Content-Type' : 'text/html',
            'Set-Cookie' : ['soju = grilledPork', 'beer = chicken'] 
        });
    }
    // cookie output
    response.end(`<h1>${request.headers.cookie}</h1>`);

}).listen(50000, () => {
    console.log('서버가 동작 중입니다, http://127.0.0.1:50000');
});
