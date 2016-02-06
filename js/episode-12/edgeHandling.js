// TODO: Implement
import { vector } from '../vector';
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

    function update() {
      context.clearRect(0, 0, width, height);

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
