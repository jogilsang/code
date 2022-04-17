


// 040_timestamp

const date = new Date();
const dateToTimestamp = date.getTime();
const timestampToDate = new Date(dateToTimestamp);
const timestampToInit = new Date(1)

console.log('Date to timestamp : ', dateToTimestamp);
console.log('Initial timestamp : ', timestampToInit);
console.log('Timestamp to date : ', timestampToDate);

// Date to timestamp :  1614026806008
// Initial timestamp :  Thu Jan 01 1970 09:00:00 GMT+0900 (대한민국 표준시)
// Timestamp to date :  Tue Feb 23 2021 05:46:46 GMT+0900 (대한민국 표준시)