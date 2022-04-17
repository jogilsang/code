
// 168_cookie-parser
// 웹 요청이 왔을 떄 로깅하는 미들웨어
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/set', (req,res) => {
    console.log('Set cookie 호출');
    res.cookie('user', {
        id :'0070',
        name :'brian',
        authorized :true,
    });
    res.redirect('/get');
})

app.get('/get', (req,res)=> {
    console.log('Get Cookie 호출');
    res.send(req.cookies);
})

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});

