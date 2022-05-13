// VARIABLES
// ELEMENTS
const musicBtn = document.getElementById("music-btn");
const startBtn = document.getElementById("start-btn");
// SOUNDS
var introMusic = document.getElementById("intro-audio");
var startSound = document.getElementById("start-sound");

// GAME

// EVENT LISTENERS
musicBtn.addEventListener("click", function () {
  introMusic.volume = 0.2;
  introMusic.play();
});

startBtn.addEventListener("click", function () {
  introMusic.pause();
  startSound.play();
});
