"use strict";

const box = document.getElementById("box"),
  btns = document.getElementsByTagName("button"),
  circles = document.getElementsByClassName("circle"),
  wrapper = document.querySelector(".wrapper"),
  hearts = wrapper.querySelectorAll(".heart"),
  oneHeart = wrapper.querySelector(".heart");

// box.style.backgroundColor = "blue";
// box.style.width = "500px";

box.style.cssText = "background-color: blue; width: 500px; border-radius: 20px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "green";
// }

hearts.forEach((item) => {
  item.style.backgroundColor = "green";
});

const div = document.createElement("div");
// const text = document.createTextNode("Тут был я");

div.classList.add("black");

// document.querySelector(".wrapper").append(div);

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

// Устаревшие конструкции BEGIN

// wrapper.appendChild(div); идентичен строке 34

// wrapper.insertBefore(div, hearts[2]);

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]);

// Устаревшие конструкции END

div.innerHTML = "<h1>Hello</h1>";
// div.textContent = "Hello";

// div.insertAdjacentHTML("afterend", "<h2>Hello</h2>");
