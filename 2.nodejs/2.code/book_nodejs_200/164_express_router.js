
// 164_express_router
// 페이지 라우팅 기능이 기본내장
// app.get() -> GET Method에 대한 이벤트 리스너
// app.post() -> POST Method에 대한 이벤트 리스너
// app.all() -> POST Method에 대한 이벤트 리스너
// app.put() -> put Method에 대한 이벤트 리스너
// app.delete() -> DELETE Method에 대한 이벤트 리스너

const express = require('express');
const app = express();

app.get('/one', (req,res) => {
    res.send('<a href="/two">Stree 200</a>');
})

app.get('/two', (req,res) => {
    res.send('<a href="/one">Street 100</a>');
})

// http://localhost:3000/three/300
app.get('/three/:number', (req,res) => {
    const streetNumber = req.params.number;
    res.send(`${streetNumber}Street`);
})

// http://localhost:3000/three/400
app.get('/four/:number', (req,res) => {
    const aveNumber = req.params.number;
    res.send(`${aveNumber}Ave`);
})


app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
