
// 183_socket_io
// connection() : 웹 소켓 클라이언트가 연결 될 때 발생
// disconnection() : 웹 클라이어느가 연결을 해제할 때 발생

// socket.io
// on() : 소켓 이벤트 연결
// emit() : 소켓 이벤트 발생

const app = require('express')();
const server = require('http').createServer(app);

app.get('/', (req,res)=> {
    res.sendFile(`${__dirname}/socket.html`);
});

const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('Client connection');
    client.on('disconnet', () => {
        console.log('Client disconnection');
    });
});

server.listion(3000, () => {
    console.log('Server is running port 3000');
})
