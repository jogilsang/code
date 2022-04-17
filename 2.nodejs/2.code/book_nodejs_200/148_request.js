
// 148_request

const request = require('request');

request({
    url : 'https://www.google.com',
    method : 'GET',
}, // 에러, 응답메세지, 내용 
(error,response,body) => {
    console.log(body)
});