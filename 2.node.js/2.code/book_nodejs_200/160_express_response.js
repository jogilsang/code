
// 160_express_response
// res.render () : 템플릿 랜더링
// res.end() : 응답 프로세스 종료
// res.send() : 응답전송
// res.json() : JSON 응답전송
// res.redirect() : 요청경로 재지정

const express = require('express');
const app = express();

app.get('/', (request, response) => {
    const result = [];
    const multipleNumber = 9;

    result.push(5);
    response.send(result);
});

app.get('/error', (request,response) => {
    response.status(404).send('404 error');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});