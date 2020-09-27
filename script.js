"use strict";

// const now = new Date(2020, 10, 9, 20);
// const now = new Date(0);
// const now = new Date(-999999999151);
const now = new Date(1601237447300);
// console.log(now);

console.log(now.setHours(18));
console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

// console.log(now.getTime());

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);
