'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше имя:');

const reg = /n/ig;

// флаг i найти вне зависимости от регистра 
// флаг g найти несколько вхождений
// флаг m многостройчный режим

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Пароль');

// console.log(pass.replace(/./g, "*")); меняет все на *
// console.log(pass.replace(/\./g, "*")); меняет точки на *

// console.log('12-34-56'.replace(/-/g, ':'));

// const ans1 = prompt('Ваше имя');

// const reg1 = /n/ig; 

// console.log(reg.test(ans1));

// \d цифры
// \w буквы
// \s пробелы

// const ans2 = prompt('Ваше число');

// const reg2 = /\d/g; 

// console.log(ans2.match(reg2));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));

// \D НЕ ЦИФРА
// \W НЕ БУКВА