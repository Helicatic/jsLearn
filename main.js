"use strict";

if (4 == 9) {
  console.log("OK!");
} else {
  console.log("Nein!");
}

// if (num < 49) {
//   console.log("Error!");
// } else if (num > 100) {
//   console.log("Lot");
// } else {
//   console.log("OK!");
// }

// num === 50 ? console.log("Okey") : console.log("Error");

const num = 50;

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 55:
    console.log("Маладес");
    break;
  default:
    console.log("Ну ты дурак блин");
    break;
}
