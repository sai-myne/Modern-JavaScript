// timestamp

const before = new Date('Feburary 1 2019 7:30:59');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was witten ${days} ago`);

// converting timestamps into date objects
const timestamp = 44692226301;
console.log(new Date(timestamp));