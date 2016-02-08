import { particle } from '../particle';
import { vector } from '../vector';

const switcher = { on: false };
let frameId;
export const friction = {
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
      Math.random() * Math.PI * 2
    );
    const friction = vector.create(0.02, 0);
    p.radius = 10;

    function update() {
      context.clearRect(0, 0, width, height);

      friction.setAngle(p.velocity.getAngle());
      if (p.velocity.getLength() > friction.getLength()) {
        p.velocity.subtractFrom(friction);
      } else {
        p.velocity.setLength(0);
      }
      p.velocity.subtractFrom(friction);

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

      if (switcher.on && p.velocity.getLength() !== 0) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
