import { particle } from '../particle';

export function reName(switcher) {
  return () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const particles = [];
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        particle.create(
          width / 2,
          height / 2,
          Math.random() * 4 + 1,
          Math.random() * Math.PI * 2
        )
      );
    }

    function update() {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();
      }

      if (switcher.on) {
        requestAnimationFrame(update);
      }
    }
    update();
  };
}
