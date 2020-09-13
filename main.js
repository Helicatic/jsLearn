"use strict";

const obj = {
  a: 5,
  b: 1,
};

// const copy = obj; // Передаёт ссылку на объект

// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainObj) {
  let objCopy = {};

  let key;
  for (key in mainObj) {
    objCopy[key] = mainObj[key];
  }
  return objCopy;
} // Функция для поверхностного копирования объекта

// const numbers = {
//   a: 5,
//   b: 9,
//   c: {
//     x: 30,
//     y: 15,
//   },
// };

// const newNumbers = copy(numbers);

// newNumbers.b = 20;
// // newNumbers.c.y = 90; Пример того что мы сделали поверхностную копия объекта

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//   d: 35,
//   e: 50,
// };

// console.log(Object.assign(numbers, add)); // слияние 2 объектов

// const clone = Object.assign({}, add);

// clone.d = 90;

// console.log(add);
// console.log(clone);

// const oldArr = ["a", "b", "c"];
// const newArr = oldArr.slice();

// newArr[1] = "sladkfh";
// console.log(oldArr);
// console.log(newArr);

// const video = ["youtube", "vimeo", "mover"],
//   socials = ["instagram", "telegram", "vk"],
//   internet = [...video, ...socials, "turon", "github"]; // ... это spread оператор который разворачивает массив и так можно объединять массивы

// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 5, 9];

// log(...num);

// const array = ["a", "b"];

// const newArray = [...array];

// console.log(newArray);

const q = {
  one: 1,
  two: 2,
};

const newQ = { ...q }; //  Spread оператор можно использовать также для объектов

console.log(newQ);
