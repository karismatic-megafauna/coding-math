import { vector } from '../vector';
import { particle } from '../particle';

const switcher = { on: false };
let frameId;

export const particleMove = {
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
    const p = particle.create(100, height, 10, -Math.PI / 2);
    const accel = vector.create(0.1, 0.1);

    function update() {
      context.clearRect(0, 0, width, height);

      p.accelerate(accel);

      p.update();

      context.beginPath();
      context.arc(
        p.position.getX(),
        p.position.getY(),
        10,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};

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
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
      particles.push(
        particle.create(
          width / 2,
          height / 3,
          Math.random() * 5 + 2,
          Math.random() * Math.PI * 2,
          0.1)
      );
    }

    function update() {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];
        p.update();
        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 4, 0, Math.PI * 2, false);
        context.fill();
      }

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
