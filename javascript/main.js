/**
 * SEE contants.js for particle values
 * SEE canvas.js for canvas properties
 * SEE Particle.js for Particle Class
 * SEE Utility.js for utility functions
 * SEE collision.js for collision detection and direction change
 */

// particle container
let particles = [];
let score = 0;

// create particles with given values
function createParticles() {
  [...Array(numberOfParticles)].map(function () {
    const radious = getRandRange(radiousRange);
    const width = getRandRange(widthAnt);
    const height = getRandRange(heightAnt);
    const { x, y } = getRandCoordinate(radious);
    const color = generateRandomColor();

    // check if particle overlaps another
    checkDuplicate(x, y, radious);
    particles.push(
      new Particle(x, y, radious, mass, velocity, color, width, height)
    );
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
    if (isParticle) particle.drawParticles();
    if (isAnt) particle.drawAnt();
    particle.move();
    particle.bounceWalls();
    particle.bounceEachOther(particles);
  });
}

createParticles();
animateParticles();

canvasElement.addEventListener("click", ({ clientX, clientY }) => {
  particles = particles.filter((particle) => {
    if (calculateDistance(clientX, clientY, particle.x, particle.y) > 30) {
      return true;
    }
    score++;
    scoreElement.innerText = score;
  });
});
