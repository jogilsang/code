
// 163_express_body_parser

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// body parser ?
// POST 요청을 처리할때, body속성을 부여해서 사용자 데이터를 추출
// req 속성에 body 속성 부여
// application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({extended : false}));

// application/json 파싱
app.use(bodyParser.json());

app.use((req,res) => {

    const userid = req.body.userid || req.query.userid;
    const userpw = req.body.userpw || req.query.userpw;

    res.writeHead(200, {'Content-Type' : 'text/html;charset=utf8' });
    res.write(`<div><p>userid=${userid}</p></div>`);
    res.write(`<div><p>userpw=${userpw}</p></div>`);

    // res.end(JSON.stringify(res,null,2));

    res.end();
})

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});

