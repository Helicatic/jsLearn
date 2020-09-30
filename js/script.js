"use strict";

// const num = new Number(5);
// console.log(num);

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function() {
    console.log(`Hello ${this.name}!`);
  }
}

User.prototype.exit = function() {
  console.log(`Пользователь ${this.name} покинул чат)`);
}

const ivan = new User('Ivan', 30);
const arauz = new User('Arauz', 18);

ivan.exit();

ivan.hello();
arauz.hello();

console.log(ivan);
console.log(arauz);