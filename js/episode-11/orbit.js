import { vector } from '../vector';
import { particle } from '../particle';

const switcher = { on: false };
let frameId;
export const orbit = {
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
    const sun = particle.create(width / 2, height / 2, 0, 0);
    const planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);

    sun.mass = 20000;

    function update() {
      context.clearRect(0, 0, width, height);

      try {
        planet.gravitateTo(sun);
      } catch (e) {
        console.error(e);
        return;
      }
      planet.update();

      context.beginPath();
      context.fillStyle = '#ffff00';
      context.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
      context.fill();

      context.beginPath();
      context.fillStyle = '#0000ff';
      context.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI * 2, false);
      context.fill();

      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();
  },
};
