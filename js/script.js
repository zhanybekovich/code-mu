"use strict";

// conditions in loops

// Дан следующий массив: Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
// let arr = [2, 5, 9, 15, 1, 4];
// for (let num of arr) {
//   if (num > 3 && num < 10) {
//     console.log(num);
//   }
// }

// Дан следующий объект: Выведите в консоль те элементы объекта, значения которых - нечетные числа.
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
for (let key in obj) {
  if (obj[key] % 2 === 0) {
    console.log(obj[key]);
  }
}
