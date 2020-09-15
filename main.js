"use strict";

// To String

// 1

const num = 555;

console.log(typeof String(num));

// 2

console.log(typeof (100 + ""));

// To number

// 1

const size = "14";

console.log(typeof Number(size));

// 2

console.log(typeof +size);

// 3

console.log(typeof parseInt("15px", 10));

// to Boolean

// 0, '', null, undefined, NaN; Всегда будет false

// 1

let switcher = null;

if (switcher) {
  console.log("Working...");
} else {
  console.log("Not working.");
}

// 2

console.log(typeof Boolean("4"));

// 3

console.log(typeof !!"239hbnsd");
