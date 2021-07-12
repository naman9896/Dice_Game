"use strict";
let dice1Value = Math.trunc(Math.random() * 6) + 1;
let dice2Value = Math.trunc(Math.random() * 6) + 1;

document
  .getElementById("img1")
  .setAttribute("src", "images/dice" + dice1Value + ".png");

document
  .getElementById("img2")
  .setAttribute("src", "images/dice" + dice2Value + ".png");

if (dice1Value > dice2Value) {
  document.querySelector("h1").textContent = "🚩 Player 1 Won";
} else if (dice2Value > dice1Value) {
  document.querySelector("h1").textContent = "🚩 Player 2 Won";
} else {
  document.querySelector("h1").textContent = "Draw";
}
