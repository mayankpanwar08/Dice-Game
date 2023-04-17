
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

// var randonDiceImage = "dice" + randomNumber1 + ".png";

// var randomImageSource = "images/" + randonDiceImage;

// var image1 = document.querySelectorAll("img")[0];

// image1.setAttribute("scr", randomImageSource);
document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

// document.querySelectorAll("img")[1].setAttribute("scr", randomImageSource2);
document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");



if (randomNumber1 > randomNumber2) {
   document.querySelector("h1").innerHTML = "Player1 WINS!";
}
else if (randomNumber2 > randomNumber1) {
   document.querySelector("h1").innerHTML = "Player2 WINS!";
}
else {
   document.querySelector("h1").innerHTML = "DRAW!";

}