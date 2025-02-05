"use strict";

// access to array elements
let arr = ["a", "b", "c"];

// by index
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[20]);

// calculate sum of array elements
let numbers = [1, 2, 3];
console.log(numbers[0] + numbers[1] + numbers[2]);

// concat array elements
let letters = ["a", "b", "c", "d"];
console.log(`${letters[0]}+${letters[1]}+${letters[2]}+${letters[3]}`);

// array length
console.log(letters.length);

// last element
console.log(letters[letters.length - 1]);

// changing element
letters[0] = "z";
console.log(letters);
