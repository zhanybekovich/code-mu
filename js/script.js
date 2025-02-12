"use strict";

// for in loop

// Выведите в консоль все ключи следующего объекта:

let obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
  console.log(key);
}

// Выведите в консоль все элементы следующего объекта:

let obj2 = { x: 1, y: 2, z: 3 };

for (let key in obj2) {
  console.log(obj[key]);
}
