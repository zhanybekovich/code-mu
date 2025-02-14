"use strict";

// Используя цикл и метод push заполните массив числами от 1 до 10.
const numbers = [];
for (let i = 1; i <= 100; i++) {
  numbers.push(i);
}

console.log(numbers);

// Используя цикл и метод push заполните массив 10-ю буквами 'x'.
const x = [];
for (let i = 1; i <= 10; i++) {
  x.push("x");
}

console.log(x);

// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
const mixedNumbers = [10, 9, -2, 20, 65, -96];
const positiveNumbers = [];

for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] > 0) {
    positiveNumbers.push(mixedNumbers[i]);
  }
}

console.log(positiveNumbers);
