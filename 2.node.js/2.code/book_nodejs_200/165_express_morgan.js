
// 167_express_morgan
// 웹 요청이 왔을 떄 로깅하는 미들웨어
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method + :date'));
app.use(morgan(':status + :url'));
app.use((req,res) => {
    res.send('hello morgan!');
});

// ::1 - - [16/Mar/2021:18:16:56 +0000] "GET / HTTP/1.1" 200 13 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36"
// ::1 - - [16/Mar/2021:18:16:56 +0000] "GET / HTTP/1.1" 200 13
// GET + Tue, 16 Mar 2021 18:16:56 GMT
// 200 + /


app.listen(3000, () => {
    console.log('Server is running port 3000!');
});

