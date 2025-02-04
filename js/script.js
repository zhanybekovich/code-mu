"use strict";

// converting to number
let a = "2";
let b = "3";
let sum = Number(a) + Number(b);
console.log(sum);

// task: Given a variable "a" with the value '10' and a variable "b" with the value '20', add these variables as numbers.
a = "10";
b = "20";
console.log(Number(a) + Number(b));

// shorthand conversion with + sign
a = +"2";
b = +"3";
console.log(a + b);

// getting NaN in conversion
console.log(Number("5a"));
console.log(+"4b");

// converting to integer
let num = parseInt("12px");
console.log(num);

num = parseInt("20abc");
console.log(num);

num = parseInt("20ab40");
console.log(num);

num = parseInt("15.35");
console.log(num);

// converting to float
num = parseFloat("5.45");
console.log(num);

num = parseFloat("20px");
console.log(num);

// task: Given a variable with the value '5px' and a variable with the value '6px'. Find the sum of pixels from the values ​​of these variables and display it on the screen.
a = parseInt("5px");
b = parseInt("6px");
let totalPixels = a + b;
console.log(totalPixels);

// task: Given a variable with the value '5.5px' and a variable with the value '6.25px', find the sum of pixels from the values ​​of these variables and display it on the screen.
a = parseFloat("5.5px");
b = parseFloat("6.25px");
totalPixels = a + b;
console.log(`${totalPixels}px`);
