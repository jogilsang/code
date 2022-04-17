
// 150_request_encoding
// 한글이 깨지는경우, euc-kr로 인코딩해주면 해결되는 경우가 많음
// 한글이 깨지는 문제가 있는경우, encoding : null을 해줘야한다. 그렇지않으면, icon-lite를 사용해도 깨질 수 있음
const request = require('request');
const iconv = require('iconv-lite');

request({
    url : 'https://www.google.com/search',
    method : 'GET',
    qs : { q : '신사역 맛집'},
    encoding : null,
}, // 에러, 응답메세지, 내용 
(error,response,body) => {
    const decodedResult = iconv.decode(body,'euc-kr');
    console.log(decodedResult);
});