import { particle } from '../particle';
import { vector } from '../vector';

const switcher = { on: false };
let frameId;

export const springOne = {
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
    const springPoint = vector.create(width / 2, height / 2);
    const weight = particle.create(
      Math.random() * width,
      Math.random() * height,
      50,
      Math.random() * Math.PI * 2
    );

    const k = 0.01 + Math.random() * 0.5;
    weight.radius = 20;
    weight.friction = 0.5 + Math.random() * 0.5;

    document.body.addEventListener('mousemove', function(event) {
      springPoint.setX(event.clientX);
      springPoint.setY(event.clientY);
    });
    function update() {
      context.clearRect(0, 0, width, height);

      const distance = springPoint.subtract(weight.position);
      const springForce = distance.multiply(k);

      weight.velocity.addTo(springForce);
      weight.update();

      context.beginPath();
      context.arc(
        weight.position.getX(),
        weight.position.getY(),
        weight.radius,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      // context.beginPath();
      // context.moveTo(weight.position.getX(), weight.position.getY());
      // context.lineTo(springPoint.getX(), springPoint.getY());
      // context.stroke();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
