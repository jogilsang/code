
// 170_express_session_미들웨어
// 세션(session)은 서버에 사용자가 로그인했는지 여부 등의 정보를 저장하는 데 사용됩니다.
// 클라이언트에 세션 식별자 쿠키를 부여하고 그 쿠키와 대응되는 저장소에 데이터를 저장합니다.
// 세션은 기본적으로 웹 브라우저가 켜져 있는 동안만 유지된다.
// 웹 브라우저 종료 시, connect.sid 소멸

const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(session({
    secret : 'keyboard dog',
    resave : false,
    saveUninitialized : true,
}));

app.use((req, res, next) => {
    if(!req.session.views) {
        req.session.views = {};
    }

    console.log(req.session);

// Session {
//     cookie:
//      { path: '/',
//        _expires: null,
//        originalMaxAge: null,
//        httpOnly: true },
//     views: { '/': 3, '/puddle': 4, '/biggle': 1 } }

    // get the URL
    const pathname = parseurl(req).pathname;

    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();

});

app.get('/puddle', (req,res)=> {
    res.send(`Hello puddle! you viewd this page ${req.session.views['/puddle']}  times`)
})

app.get('/biggle', (req,res)=> {
    res.send(`Hello biggle! you viewd this page ${re.session.views['/biggle']}  times`)
})


app.listen(3000, () => {
    console.log('Server is running port 3000!');
});




