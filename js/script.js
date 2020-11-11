'use strict';

const app = '21';

const num = 1;

(function(){
  let num = 2;
  console.log(num);
  console.log(num + 3);
}());

console.log(num);

const user = (function(){
  const privat = function() {
    console.log("Private func");
  };

  return {
    sayHello: privat
  };
}());

user.sayHello();