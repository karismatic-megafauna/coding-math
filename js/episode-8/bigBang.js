import { removeDeadParticles } from '../utils';
import { particle } from '../particle';

const switcher = { on: true };
let frameId;

export const bigBang = {
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
    let particles = [];

    for (let i = 0; i < 100; i++) {
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

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();
      }

      particles = removeDeadParticles(particles, width, height);
      context.font = '24px serif';
      context.fillText(`particles on page: ${particles.length}`, 200, 50);
      if (switcher.on && particles.length) {
        frameId = requestAnimationFrame(update);
      }
    }
    update();
  },
};
