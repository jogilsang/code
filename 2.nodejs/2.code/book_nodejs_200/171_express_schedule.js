// 171_express_schedule 모듈 , 참조 : node_cron

// setInterval은 특정주기마다 실행되는 method
// schedule은 특정 시간에 실행되어야할떄 사용
// 스크립트 실행되지 않을 때도 지속되어야한다면, node-cron 모듈사용

// npm install node-schedule --save

// 동작을 왜 안하지

const schedule = require('node-schedule');

// 특정 시간에 한번
const date = new Date(2021,3,18,4,52,0);

// 2017-12-16T10:27:00.000Z (GMT 0 기준)

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
})

// 매 시간마다 한 번
const rule = new schedule.RecurrenceRule();
rule.minute = 32;

const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired');
})

// 작업취소
// j.cancel();
// k.cancel();

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});




