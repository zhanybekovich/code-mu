"use strict";

// Дан объект: Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// let obj = { x: 1, y: 2, z: 3 };

// for (let key in obj) {
//   obj[key] = obj[key] ** 2;
// }

// console.log(obj);

// Дан объект: Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.

let obj = { x: 1, y: 2, z: 3 };

for (let key in obj) {
  obj[key] = obj[key] + 1;
}

console.log(obj);
