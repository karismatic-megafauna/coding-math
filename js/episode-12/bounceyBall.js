import { particle } from '../particle';

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
    const p = particle.create(
      width / 2,
      height / 2,
      5,
      Math.random() * Math.PI * 2,
      0.1
    );
    p.radius = 50;
    p.bounce = -0.9;

    function update() {
      context.clearRect(0, 0, width, height);

      p.update();

      context.beginPath();
      context.arc(
        p.position.getX(),
        p.position.getY(),
        p.radius,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      if (p.position.getX() + p.radius > width) {
        p.position.setX(width - p.radius);
        p.velocity.setX(p.velocity.getX() * p.bounce);
      }
      if (p.position.getX() - p.radius < 0) {
        p.position.setX(p.radius);
        p.velocity.setX(p.velocity.getX() * p.bounce);
      }
      if (p.position.getY() + p.radius > height) {
        p.position.setY(height - p.radius);
        p.velocity.setY(p.velocity.getY() * p.bounce);
      }
      if (p.position.getY() - p.radius < 0) {
        p.position.setY(p.radius);
        p.velocity.setY(p.velocity.getY() * p.bounce);
      }

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
