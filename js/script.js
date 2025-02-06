"use strict";

// logical operators
let num = 3;

// AND
if (num > 0 && num < 10) {
  console.log("Yes");
} else {
  console.log("No");
}

// OR
let num1 = 10;
let num2 = -5;

if (num1 > 0 || num2 > 0) {
  console.log("+++");
} else {
  console.log("---");
}

// && has higher priority than ||
num = 3;

if ((num > 0 && num < 5) || (num > 10 && num < 20)) {
  console.log("+++");
} else {
  console.log("---");
}

// ! -> NOT
let isAdult = true;
console.log(!isAdult);
