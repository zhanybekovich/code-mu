"use strict";

// С помощью цикла сформируйте строку, заполненную 5-тью дефисами.
let str = "";

for (let i = 1; i <= 5; i++) {
  str += "-";
}

console.log(str);

// С помощью цикла сформируйте строку '123456789'.
let str2 = "";

for (let i = 1; i <= 9; i++) {
  str2 += i;
}

console.log(str2);

// С помощью цикла сформируйте строку '987654321'.
let str3 = "";

for (let i = 9; i >= 1; i--) {
  str3 += i;
}

console.log(str3);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str4 = "";

for (let i = 1; i <= 9; i++) {
  if (i === 1) {
    str4 += `-${i}-`;
  } else {
    str4 += `${i}-`;
  }
}

console.log(str4);
