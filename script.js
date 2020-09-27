"use strict";

const btn = document.querySelector(".btn");
let timerId,
  i = 0;

function myAnim() {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = `${pos}px`;
      elem.style.left = `${pos}px`;
    }
  }
}
btn.addEventListener("click", myAnim);

// btn.addEventListener("click", () => {
//   // const timerId = setTimeout(logger, 2000);
//   timerId = setInterval(logger, 2000);
// });

// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId); // Сброс таймера

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }

// let id = setTimeout(function log() {
//   console.log("hello ");
//   id = setTimeout(log, 500);
// }, 500);
