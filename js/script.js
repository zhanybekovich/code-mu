"use strict";

// if...else...
let test = 23;

if (test > 0) {
  console.log("+");
} else {
  console.log("-");
}

if (test < 0) {
  console.log("-");
} else {
  console.log("+");
}

if (test >= 10) {
  console.log("YES");
} else {
  console.log("NO");
}

if (test <= 10) {
  console.log("YES");
} else {
  console.log("NO");
}

// equality
test = 0;
if (test == 0) {
  console.log("ZERO");
} else {
  console.log("NOT ZERO");
}

test = "0";
if (test == 0) {
  console.log("ZERO");
} else {
  console.log("NOT ZERO");
}

test == 0;
if (test == 0) {
  console.log("ZERO");
} else {
  console.log("NOT ZERO");
}

test = "0";
if (test === 0) {
  console.log("ZERO");
} else {
  console.log("NOT ZERO");
}

test = 1;
if (test != 1) {
  console.log("Yes");
} else {
  console.log("No");
}

if (test !== 1) {
  console.log("Yes");
} else {
  console.log("No");
}
