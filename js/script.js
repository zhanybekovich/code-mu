"use strict";

// objects: getting values by keys

let user = {
  name: "John",
  age: 25,
};

console.log(user.name);
console.log(user.age);

// create object date with year, month, day keys
let date = {
  year: 2025,
  month: 2,
  day: 5,
};

console.log(`${date.year}-${date.month}-${date.day}`);

// change value by key
date.year = 2026;
console.log(date);

// adding key and value
date.time = "20:00";
console.log(date);
