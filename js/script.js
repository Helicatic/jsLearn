"use strict";

function showThis(a, b) {
  console.log(this);
  function sum() {
    console.log(this);
    return a + b;
  }
  console.log(sum());
}

// showThis(4, 5);

const obj = {
  a: 20,
  b:15,
  sum: function() {
    function shout() {
      console.log(this);
    }
    shout();
  }
}

// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }
// let arauz = new User('Arauz', 18);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + ' ' + surname);
// }
// const user = {
//   name: 'John'
// }

// sayName.call(user, 'Johnes');
// sayName.apply(user, ['Jonathan']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(15));


// 1) Обычная функция this будет равна window, но если будет стоять use strict то будет undefined
// 2) Контекст у методов объекта будет сам объект
// 3) this в конструкторах и классах это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
  // console.log(this);
  this.style.backgroundColor = 'red';
})

const objects = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};

objects.sayNumber();

const doubled = a => a * 2;

console.log(doubled(5));