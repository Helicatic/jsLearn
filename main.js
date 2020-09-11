"use strict";

const options = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "gold",
    bg: "red",
  },
  logAuthor: function () {
    console.log('Rustam');
  },
};

options.logAuthor();

const {
  border,
  bg
} = options.colors;
console.log(bg);
// console.log(Object.keys(options).length);  Получить длину объекта 

// delete options.width;   Удалить свойство у объекта

// console.log(options);

// Далее идет перебор объекта и счетчик для него выше длина объекта получается более рациональным путем
// let counter = 0;
// for (let key in options) {
//   if (typeof (options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//       counter++;
//     }
//   } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//   }
// }

// console.log(counter);