


let score = 0;      // keeps track of player's score
let gameTime = 30;  // how long the game lasts (seconds)
let timer;               

// create sound
let popSound = new Audio("buble.mp3");


// ----- Create a circle -----
function createCircle() {

// create a new div (circle)
let circle = document.createElement("div");
circle.className = "circle";

// set random position on screen
let x = Math.random() * (window.innerWidth - 50);
let y = Math.random() * (window.innerHeight - 50);

  
circle.style.left = x + "px";
circle.style.top = y + "px";


// ----- when circle is clicked-----
  circle.addEventListener("click", function() {

// play sound
popSound.currentTime = 0;
popSound.play();

// increase score
score = score + 1;

// update score on screen
let scoreText = document.getElementById("scoreboard");
scoreText.innerText = "Score: " + score;

// remove this circle
circle.remove();

// create 2 new circles
createCircle();
createCircle();
});


// add circle to the page
document.body.appendChild(circle);
}


// ----- update timer-----
function updateTimer(timeLeft) {
let timerText = document.getElementById("timer");
timerText.innerText = "Time: " + timeLeft + "s";
}


// ----- START GAME -----
function startGame() {

// reset score
score = 0;
document.getElementById("scoreboard").innerText = "Score: 0";

// remove all old circles
let oldCircles = document.querySelectorAll(".circle");
oldCircles.forEach(function(circle) {
circle.remove();
});

// create starting circles
createCircle();
createCircle();
createCircle();

// set starting time
let timeLeft = gameTime;
updateTimer(timeLeft);

// stop old timer if it exists
clearInterval(timer);

// run every 1 second
timer = setInterval(function() {

timeLeft = timeLeft - 1;
updateTimer(timeLeft);

// when time runs out
if (timeLeft <= 0) {
clearInterval(timer);

alert("Time's up! Your score is " + score);

// remove all circles
let circles = document.querySelectorAll(".circle");
circles.forEach(function(circle) {
circle.remove();
});

// restart game
startGame();
}

}, 1000);
}


window.onload = function() {
startGame();
};

