var imgArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

img1.setAttribute("src", imgArray[randomNumber1]);
img2.setAttribute("src", imgArray[randomNumber2]);

var header = document.querySelector("h1");

if(randomNumber1>randomNumber2) {
  header.innerHTML = "Player 1 wins!";
}
else if(randomNumber1==randomNumber2) {
  header.innerHTML = "Draw!";
}
else {
  header.innerHTML = "Player 2 wins!";
}
