
const today = new Date();
const date1 = new Date(2017,9,-1,2);
const date2 = new Date(2017,8,3);
const date3 = new Date(2017,8,3,18);
const date4 = new Date(2017,8,3,18,20);
const date5 = new Date(2017,8,3,18,20,30);

console.log(today.toLocaleString());
console.log(date1.toLocaleString());
console.log(date2.toLocaleString());
console.log(date3.toLocaleString());
console.log(date4.toLocaleString());
console.log(date5.toLocaleString());

// Response
// 2021-02-22 03:16:33
// 2017-09-29 02:00:00
// 2017-09-03 00:00:00
// 2017-09-03 18:00:00
// 2017-09-03 18:20:00
// 2017-09-03 18:20:30

// 날짜시간 출력하기

const date = new Date(2017,8,3,18,20,30);

console.log('date : %s', date.toLocaleString()); // 2017-9-3 18:20:30
console.log('LocaleDateString : %s', date.toLocaleDateString); // 2017-9-3 
console.log('LocaleTimeString : %s', date.toLocaleTimeString); // 18:20:30

console.log('year : %s', date.getFullYear()); // 2017
console.log('month : %s', date.getMonth() + 1) // 9
console.log('date : %s', date.getDate()); // 3

console.log('hours : %s', date.getHours()); 18
console.log('minutes : %s', date.getMinutes()); 20
console.log('seconds : %s', date.getSeconds()); 30

// yyyy-MM-dd 형식으로 날짜 출력하기
const getYymmdd = (date) => {
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() +1}` : (date.getMonth() + 1);
    const dd = date.getDate() < 10 ? `0${date.getDate}` : date.getDate();
    return `${yyyy}-${mm}-${dd}`;
};

const yymmdd = getYymmdd(new Date());
const yymmdd170909 = getYymmdd(new Date(2017,10-1, 10));
console.log(yymmdd); // 2021-02-23
console.log(yymmdd170909); // 2017-10-10