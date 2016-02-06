// Utility funcitons weeeee!

export function removeDeadParticles(particles, w, h) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];

    if (p.offCanvas(w, h)) {
      particles.splice(i, 1);
    }
  }
  return particles;
}

export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
