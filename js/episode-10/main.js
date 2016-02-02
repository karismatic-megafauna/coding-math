import { vector } from '../vector';
import { particle } from '../particle';

const switcher = { on: false };
let frameId;

export const ship = {
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
    const spaceShip = particle.create(width / 2, height / 2, 0, 0);
    const thrust = vector.create(0, 0);
    let angle = 0;
    let turningLeft = false;
    let turningRight = false;
    let thrusting = false;

    document.body.addEventListener('keydown', event => {
      // console.log(event.keyCode);
      switch (event.keyCode) {
        case 38: // up
          thrusting = true;
          break;

        case 37: // left
          turningLeft = true;
          break;

        case 39: // right
          turningRight = true;
          break;

        default:
          break;
      }
    });
    document.body.addEventListener('keyup', event => {
      // console.log(event.keyCode);
      switch (event.keyCode) {
        case 38: // up
          thrusting = false;
          break;

        case 37: // left
          turningLeft = false;
          break;

        case 39: // right
          turningRight = false;
          break;

        default:
          break;
      }
    });
    function update() {
      context.clearRect(0, 0, width, height);

      if (turningLeft) {
        angle -= 0.25;
      }
      if (turningRight) {
        angle += 0.25;
      }

      thrust.setAngle(angle);

      if (thrusting) {
        thrust.setLength(0.1);
      } else {
        thrust.setLength(0);
      }


      spaceShip.accelerate(thrust);
      spaceShip.update();

      context.save();
      context.translate(
        spaceShip.position.getX(),
        spaceShip.position.getY()
      );
      context.rotate(angle);
      context.beginPath();
      context.moveTo(10, 0);
      context.lineTo(-10, -7);
      context.lineTo(-10, 7);
      context.lineTo(10, 0);
      if (thrusting) {
        context.moveTo(-10, 0);
        context.lineTo(-18, 0);
      }
      context.stroke();

      context.restore();
      if (spaceShip.position.getX() > width) {
        spaceShip.position.setX(0);
      }
      if (spaceShip.position.getX() < 0) {
        spaceShip.position.setX(width);
      }
      if (spaceShip.position.getY() > height) {
        spaceShip.position.setY(0);
      }
      if (spaceShip.position.getY() < 0) {
        spaceShip.position.setY(height);
      }

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
