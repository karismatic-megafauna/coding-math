// Utility funcitons weeeee!

export function inRange(min, max, valueMin, valueMax) {
  return valueMax > min && valueMin < max;
}

export function inBox(w, h, node) {
  const x = node.position.getX();
  const y = node.position.getY();
  const radius = node.radius;

  if (inRange(0, w, x - radius, x + radius) &&
      inRange(0, h, y - radius, y + radius)) {
    return true;
  }
  return false;
}

export function removeDeadParticles(particles, w, h) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];

    if (!inBox(w, h, p)) {
      particles.splice(i, 1);
    }
  }
  return particles;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function normalize(value, min, max) {
  return (value - min) / (max - min);
}

export function lerp(norm, min, max) {
  return (max - min) * norm + min;
}

export function map(value, sourceMin, sourceMax, destMin, destMax) {
  return lerp(normalize(value, sourceMin, sourceMax), destMin, destMax);
}
