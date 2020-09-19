'use strict';

const btn = document.querySelector('#btn'),
    overlay = document.querySelector('.overlay'),
    btns = document.querySelectorAll('button');

// btn.onclick = function() {
//     alert('Woow');
// }; // Не надо использовать 

// btn.addEventListener('click', () => {
//     alert('first click');
// });
// btn.addEventListener('click', () => {
//     alert('second click');
// });


// btn.addEventListener('mouseenter', (event) => { // В callback функции события 1 аргумент всегда event
//     // console.log('Hover');
//     console.log(event.target);
//     event.target.remove();
// });

let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);
    console.log(event.type);
    // event.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});   
}) 