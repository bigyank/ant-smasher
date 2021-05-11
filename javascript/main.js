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

// particle properties
let particles = [];
const numberOfParticles = 100;
const radiousRange = { min: 10, max: 15 };
const mass = 1;
const velocity = 2;

// create particles with random value
function createParticles() {
  [...Array(numberOfParticles)].map(function () {
    const radious = getRandRange(radiousRange);
    const { x, y } = getRandCoordinate(radious);
    const color = generateRandomColor();

    // check if particle overlaps another
    checkDuplicate(x, y, radious);
    particles.push(new Particle(x, y, radious, mass, velocity, color));
  });
}

function checkDuplicate(x, y, radious) {
  particles = particles.filter((particle) => {
    //   return particles that are not dublicate
    if (!hasCollided(x, y, particle.x, particle.y, radious)) {
      return true;
    }
  });
}

// render and animate particel
function animateParticles() {
  requestAnimationFrame(animateParticles);
  canvas.clearRect(0, 0, canvasElement.width, canvasElement.height);

  particles.forEach((particle) => {
    particle.draw();
    particle.move();
    particle.bounceWalls();
    particle.bounceEachOther(particles);
  });
}

createParticles();
animateParticles();
