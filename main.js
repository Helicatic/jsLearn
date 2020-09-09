"use strict";

const person = "Azimov Rustam Asqar o'gli";
const college = "Tashkent Pro IT College";
const age = 18.8;
const length = "182.6cm";
const mass = "62.3kg";

const personName = person.slice(7, 13);
const personSurname = person.slice(0, 6);
const personFatherName = person.substring(14);

console.log(personName);
console.log(personSurname);
console.log(personFatherName);
console.log(college.substr(0, 8));
console.log(Math.round(age));
console.log(parseInt(length));
console.log(parseFloat(mass));
