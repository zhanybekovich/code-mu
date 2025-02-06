"use strict";

// practice

const arr = [1, 5, 20];

if (arr.length === 3) {
  console.log(arr[0] + arr[1] + arr[2]);
} else {
  console.log("Less or more than 3 elements");
}

const str = "abc";

if (str.startsWith("a")) {
  console.log("yes");
} else {
  console.log("no");
}

const str2 = "zyx";

if (str2.endsWith("x")) {
  console.log("x");
} else {
  console.log("not x");
}

const str3 = "abc";

if (str3.startsWith("a") || str3.startsWith("b")) {
  console.log("a or b");
} else {
  console.log("not a and b");
}
