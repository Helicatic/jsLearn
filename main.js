"use strict";

function plus(a, b) {
  let sum = a + b;
  if (sum % 2 == 0) {
    console.log("Сумма чисел четное число");
  } else {
    console.log("Сумма чисел не четное число");
  }
}

plus(10, 6);

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 5));
