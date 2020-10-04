"use strict";

const person = {
  name: 'Alex',
  tel: '339181018',
  parents: {
    mom: 'Olga',
    dad: 'Mika'
  }
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);

// console.log(JSON.parse(JSON.stringify(person)));