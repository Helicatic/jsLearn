"use strict";

const box = document.getElementById("box");

console.log(box);

const btns = document.getElementsByTagName("button");
// создается псевдомассив всегда даже если 1 элемент

console.log(btns[1]);

const circles = document.getElementsByClassName("circle");
// создается псевдомассив всегда даже если 1 элемент

console.log(circles);

// Новые методы

const hearts = document.querySelectorAll(".heart");

console.log(hearts);

hearts.forEach((item) => {
  console.log(item);
});

const oneHeart = document.querySelector(".heart");

console.log(oneHeart);
