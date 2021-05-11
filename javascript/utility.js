//  utility functions
const getRandCoordinate = (radious) => {
  return {
    x: Math.floor(
      Math.random() * (canvasElement.width - radious - radious + 1) + radious
    ),
    y: Math.floor(
      Math.random() * (canvasElement.height - radious - radious + 1) + radious
    ),
  };
};

const getRandRange = ({ min, max }) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function generateRandomColor() {
  return "hsl(" + 360 * Math.random() + ", 50%, 50%)";
}

function calculateDistance(x1, y1, x2, y2) {
  const xDistance = x2 - x1;
  const yDistance = y2 - y1;

  //   pythagarous theorem
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function hasCollided(x, y, particleX, particleY, radious) {
  return calculateDistance(x, y, particleX, particleY) - radious * 2 < 0;
}

function detectWall(position, radius, wall) {
  return position - radius <= 0 || position + radius >= wall;
}
