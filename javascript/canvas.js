// get canvas
const canvasElement = document.querySelector("canvas");
const canvas = canvasElement.getContext("2d");

//  set canvas width and height to screen
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

// canvas size re adjust on screen change
addEventListener("resize", () => {
  canvasElement.width = innerWidth;
  canvasElement.height = innerHeight;

  createParticles();
});

// get input element
const toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("change", () => {
  (isAnt = !isAnt), (isParticle = !isParticle);
});

// get score
const scoreElement = document.getElementById("score");
