"use strict";

// let str = "akldsg";

// let strObj = new String(str);

// console.log(typeof str);
// console.log(typeof strObj);

const soldier = {
  health: 400,
  armor: 200,
  sayHello: function () {
    console.log("Hello");
  },
};
const john = Object.create(soldier); // запись делает при создании объекта наследование прототипа от soldier

// const john = {
//   health: 150,
// };

// john.__proto__ = soldier; // Устаревший формат
// Object.setPrototypeOf(john, soldier); // Новый формат идентичен записи на 22 строке

// console.log(john.armor);
john.sayHello();
