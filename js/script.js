"use strict";

const btns = document.querySelectorAll('button'),
  wrapper = document.querySelector('.button-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(0));
// console.log(btns[1].classList.add('red', 'durak'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//   console.log('red');
// }

btns[0].addEventListener('click', () => {
  // if (!btns[1].classList.contains('red')) {
  //   btns[1].classList.add('red');
  // } else {
  //   btns[1].classList.remove('red');
  // }

  btns[1].classList.toggle('red');
});

// console.log(btns[0].className);

// wrapper.addEventListener('click', (e) => {
//   if (e.target && e.target.classList.contains('blue')) {
//     console.log('Hello');
//   }
// })
// wrapper.addEventListener('click', (e) => {
//   if (e.target && e.target.tagName == 'BUTTON') {
//     console.log('Hello');
//   }
// })

wrapper.addEventListener('click', (e) => {
  if (e.target && e.target.matches("button.red")) {
    console.log('Hello');
  }
})

// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log('hello');
//   })
//   ''
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);