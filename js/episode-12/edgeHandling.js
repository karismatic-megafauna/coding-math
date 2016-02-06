// TODO: Implement
import { vector } from '../vector';
import { particle } from '../particle';
import { removeDeadParticles } from '../utils';

const switcher = { on: false };
let frameId;
export const bounceyBall = {
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

    function update() {
      context.clearRect(0, 0, width, height);

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};

export const fountain = {
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

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; i < 100; i++) {
      const p = particle.create(
        width / 2,
        height,
        Math.random() * 8 + 5,
        -Math.PI / 2 + (Math.random() * 0.2 - 0.1),
        0.1
      );
      p.radius = Math.random() * 10 + 2;
      p.color = {
        b: getRandomInt(100, 255),
        r: 0,
        g: 70,
      };
      particles.push(p);
    }


    function update() {
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        context.fillStyle = `rgb( ${p.color.r} , ${p.color.g} , ${p.color.b})`;
        context.fill();
        if( p.position.getY() - p.radius > height) {
          p.position.setX(width / 2);
          p.position.setY(height);
          p.velocity.setLength(Math.random() * 8 + 5);
          p.velocity.setAngle(-Math.PI / 2 + (Math.random() * 0.2 - 0.1));
        }
      }

      if (switcher.on && particles.length) {
        frameId = requestAnimationFrame(update);
      }
    }
    update();
  },
};
