function Particle(x, y, radius, mass, velocity, color, width, height) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.mass = mass;
  this.width = width;
  this.height = height;
  this.velocity = {
    x: Math.random() - 0.5 * velocity,
    y: Math.random() - 0.5 * velocity,
  };

  this.drawAnt = function () {
    var img = new Image();
    img.src = "./images/ant.png";
    canvas.drawImage(img, this.x, this.y, this.width, this.height);
  };

  this.drawParticles = function () {
    canvas.beginPath();
    canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    canvas.fillStyle = this.color;
    canvas.fill();
    canvas.closePath();
  };

  this.bounceWalls = () => {
    // bounce from x-axis
    if (detectWall(this.x, this.radius, window.innerWidth)) {
      this.velocity.x = -this.velocity.x;
    }

    // bounce from y-axis
    if (detectWall(this.y, this.radius, window.innerHeight)) {
      this.velocity.y = -this.velocity.y;
    }
  };

  this.bounceEachOther = (particles) => {
    particles.map((particle) => {
      if (this === particle) return;
      if (hasCollided(this.x, this.y, particle.x, particle.y, this.radius)) {
        resolveCollision(this, particle);
      }
    });
  };

  this.move = () => {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  };
}
