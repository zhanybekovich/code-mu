"use strict";

// Дан массив: Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
// let arr = ["a", "b", "c", "d", "e"];

// let flag = false;

// for (let el of arr) {
//   if (el === "c") {
//     flag = true;
//     break;
//   }
// }

// flag ? console.log("+++") : console.log("---");

// Напишите код, который будет проверять число на то, простое оно или нет. Простое число делится только на единицу и на само себя, и не делится на другие числа.

let number = 45;
let isSimple = true;

if (number <= 1) {
  isSimple = false; // Числа 1 и меньше не являются простыми
} else {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isSimple = false;
      break;
    }
  }
}

isSimple ? console.log("+++") : console.log("---");
