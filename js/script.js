"use strict";

// else if practice

let day = 55;

if (day >= 1 && day <= 10) {
  console.log(1);
} else if (day >= 11 && day <= 20) {
  console.log(2);
} else if (day >= 20 && day <= 31) {
  console.log(3);
} else {
  console.log("Day should be between 1 and 31");
}
