"use strict";

const arr = [1, 32, 24, 7, 19];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}

// arr.pop();  Удаляет последний элемент массива

// arr.push(10); Добавляет элемент в конец массива

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// } Перебор элементов массива

// for (let value of arr) {
//   console.log(value);
// }  Короткий способ перебора массива назывется for of
// console.log(arr);

// arr[99] = 0;
// console.log(arr.length); метод length берет индекс последнего элемента +1, т.к. логика массива в том что элементы лежат по порядку и без пустоты между ними.

// arr.forEach(function (item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });  Метод перебора

// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products);

// const guests = ["Эшмат", "Тошмат", "Гайбулло", "Жуманазар"];
// console.log(guests.join("; "));
