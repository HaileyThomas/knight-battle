// VARIABLES
// ELEMENTS
var introContainer = document.getElementById("intro-container");
var startBtn = document.getElementById("start-btn");
// SOUNDS
var menuMusic = document.getElementById("menu-audio");
var startSound = document.getElementById("start-sound");

// GAME

function loadMenu() {
  console.log("loadMenu function working!");
}

// EVENT LISTENERS
startBtn.addEventListener("click", function () {
  startSound.play();
  introContainer.remove();
  loadMenu();
  menuMusic.volume = 0.2;
  menuMusic.play();
});
