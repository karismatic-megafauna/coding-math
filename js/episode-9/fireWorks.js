import { removeDeadParticles, randomInt } from '../utils';
import { particle } from '../particle';

const switcher = { on: false };
let frameId;

export const fireWorks = {
  tearDown() {
    switcher.on = false;
    cancelAnimationFrame(frameId);
  },
  setUp() {
    switcher.on = true;
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const particles = [];

    for (let i = 0; i < 100; i++) {
      const p = particle.create(
        width / 2,
        height / 3,
        Math.random() * 5 + 2,
        Math.random() * Math.PI * 2,
        0.1
      );
      p.radius = randomInt(2, 15);
      particles.push(p);
    }

    function update() {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fill();
      }

      removeDeadParticles(particles, width, height);
      context.font = '24px serif';
      context.fillText(`particles on page: ${particles.length}`, 200, 50);
      if (switcher.on && particles.length) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
