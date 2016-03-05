import { particle } from '../particle';
import { vector } from '../vector';
import { randomRange } from '../utils';

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

      context.beginPath();
      context.moveTo(weight.position.getX(), weight.position.getY());
      context.lineTo(springPoint.getX(), springPoint.getY());
      context.stroke();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};

export const springTwo = {
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
      width / 2,
      height / 2,
      0,
      0,
      0.5
    );
    const springLength = 100;
    const k = 0.1;

    weight.radius = 20;
    weight.friction = 0.95;

    document.body.addEventListener('mousemove', function(event) {
      springPoint.setX(event.clientX);
      springPoint.setY(event.clientY);
    });
    function update() {
      context.clearRect(0, 0, width, height);

      const distance = springPoint.subtract(weight.position);
      distance.setLength(distance.getLength() - springLength);
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

      context.beginPath();
      context.moveTo(weight.position.getX(), weight.position.getY());
      context.lineTo(springPoint.getX(), springPoint.getY());
      context.stroke();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};

export const springCollision = {
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
    const particleA = particle.create(
      randomRange(0, width),
      randomRange(0, height),
      randomRange(0, 50),
      randomRange(0, Math.PI * 2)
    );
    const particleB = particle.create(
      randomRange(0, width),
      randomRange(0, height),
      randomRange(0, 50),
      randomRange(0, Math.PI * 2)
    );
    const particleC = particle.create(
      randomRange(0, width),
      randomRange(0, height),
      randomRange(0, 50),
      randomRange(0, Math.PI * 2)
    );
    const k = 0.01;
    const separation = 100;

    particleA.friction = 0.9;
    particleA.radius = 20;

    particleB.friction = 0.9;
    particleB.radius = 20;

    particleC.friction = 0.9;
    particleC.radius = 20;

    function spring(p0, p1, sep) {
      const distance = p0.position.subtract(p1.position);
      distance.setLength(distance.getLength() - sep);

      const springForce = distance.multiply(k);

      p1.velocity.addTo(springForce);
      p0.velocity.subtractFrom(springForce);
    }

    function update() {
      context.clearRect(0, 0, width, height);

      spring(particleA, particleB, separation);

      particleA.update();
      particleB.update();
      particleC.update();

      context.beginPath();
      context.arc(
        particleA.position.getX(),
        particleA.position.getY(),
        particleA.radius,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      context.beginPath();
      context.arc(
        particleB.position.getX(),
        particleB.position.getY(),
        particleB.radius,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      context.beginPath();
      context.arc(
        particleC.position.getX(),
        particleC.position.getY(),
        particleC.radius,
        0,
        Math.PI * 2,
        false
      );
      context.fill();

      context.beginPath();
      context.moveTo(
        particleA.position.getX(),
        particleA.position.getY()
      );
      context.lineTo(
        particleB.position.getX(),
        particleB.position.getY()
      );
      context.lineTo(
        particleC.position.getX(),
        particleC.position.getY()
      );
      context.lineTo(
        particleA.position.getX(),
        particleA.position.getY()
      );
      context.stroke();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }


    update();
  },
};
