
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");

const date = date2-date1;
console.log(date);
const days = Math.floor(date/(1000*60*60*24));

const hour = Math.floor((date/(1000*60*60))%24);

const minute = Math.floor((date/(1000*60))%60);
const second = Math.floor((date/(1000))%60);

console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);