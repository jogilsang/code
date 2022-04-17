
// 149_request_param
const request = require('request');

request({
    url : 'https://www.google.com/search',
    method : 'GET',
    qs : { q : '신사역 맛집'},
}, // 에러, 응답메세지, 내용 
(error,response,body) => {
    console.log(body)
});