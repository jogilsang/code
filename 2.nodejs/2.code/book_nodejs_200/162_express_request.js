
// 162_express_request

// req.headers : 요청 헤더의 추출
// req.query : GET 방식으로 요청한 매개변수 추출
// req.body : POST 방식으로 요청한 매개변수 추출
// req.params : 라우팅 매개변수 추출
// req.baseUrl
// req.hostname
// req.protocol

const express = require('express');
const app = express();

app.use((req,res) => {
    const agent = req.header('User-Agent');
    const paramName = req.query.name;
    const browserChrome = "Hello Chrome";
    const browserOther = "Hello Other";

    if(agent.toLowerCase().match(/chrome/)){
        res.write(`<div><p>${browserChrome}</p></div>`);
    } else {
        res.write(`<div><p>${browserOther}</p></div>`);
    }

    res.write(`<div><p>${agent}</p></div>`);
    res.write(`<div><p>${paramName}</p></div>`);

    console.log(`req.query : ${req.query.name}`);
    console.log(`req.paramName : ${paramName}`);

    // req.query : 30
    // req.paramName : 30

    res.end();
})

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});

// print
// http://localhost:3000/?name=30

// Hello Chrome

// Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36

// 30