"use strict";

// while loop

// Выведите в консоль числа от 1 до 100.
// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// Выведите в консоль числа от 11 до 33.
// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i++;
// }

//Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let num = 2;
let i = 0;
while (num < 1000) {
  num *= 3;
  i++;
}

console.log(num, i);
