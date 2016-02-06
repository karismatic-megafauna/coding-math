export function removeDeadParticles(particles, w, h) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    if (p.position.getX() - p.radius > w ||
        p.position.getX() + p.radius < 0 ||
        p.position.getY() - p.radius > h ||
        p.position.getY() + p.radius < 0) {
      particles.splice(i, 1);
    }
  }
  return particles;
}
