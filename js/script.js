"use strict";

// FILTER 

const names = ['Rustam', 'Alex', 'Vorzamat', 'Jumanazar', 'Mo'];

const shortNames = names.filter(name => {
  return name.length < 5;
});

console.log(shortNames);


// MAP


const answers = ['RUStaM', 'MayMUn', 'Hello'];
const result = answers.map(item => item.toLowerCase());
console.log(result);

let answers = ['RUStaM', 'MayMUn', 'Hello'];
answers = answers.map(item => item.toLowerCase());
console.log(answers);


// EVERY/SOME


const some = [4, 'qwr', 'whgsha'];

console.log(some.some(item => typeof(item) === 'number'));


const some = [4, 4, 2];

console.log(some.every(item => typeof(item) === 'number'));


// REDUCE


const arr = [4, 1, 5, 3, 9, 7];
                          // 0     4
                          // 4     1
                          // 5     5
                          // 10    3
                          // 13    9
                          // 22    7
                          // 29
const res = arr.reduce((sum, current) => sum + current);

console.log(res);


const arr = ['apple', 'strawberry', 'melon'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);


const obj = {
  rustam: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);