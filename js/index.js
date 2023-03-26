// var a = prompt("what is your name?");
// var firstLname = a.slice(0, 1);
// var name = a.slice(1, a.length);
// alert(
//   "Hi, " +
//     firstLname.toUpperCase() +
//     name.toLowerCase() +
//     ". refresh to play agin!"
// );

var randomNumber1 = Math.random() * 6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomNumber2 = Math.random() * 6 + 1;
randomNumber2 = Math.floor(randomNumber2);
// colnsol.log("dice" + randomNumber1 + ".png");
document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");
if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "Draw!!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "player 1 win  🐱‍👤";
} else {
  document.querySelector("h1").innerText = "player 2 win 🐲";
}
