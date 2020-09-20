'use strict';

// console.log(document.documentElement);
console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode); Получение родителя
// console.log(document.querySelector('#current').parentElement); Получение родительского элемента
// console.log(document.querySelector('#current').parentNode.parentNode); Получение родителя родителя

// console.log(document.querySelector('[data-current="3"]').nextSibling); Такой же как запись снизу но может получить просто перенос строки
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); Получение следющего элемента data
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); Получение предыдущего элемента data

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }

    console.log(node);
}