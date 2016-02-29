import { rectIntersect } from '../utils';

let body = document.body;
export const collisionDetection = {
  tearDown() {
    body.removeEventListener('mousemove', this.rectCollision, false);
  },
  setUp() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    context.clearRect(0, 0, width, height);

    body.addEventListener('mousemove', this.rectCollision, false);
  },
  rectCollision(event) {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const rect0 = {
      x: 600,
      y: 400,
      width: -200,
      height: -100,
    };
    const rect1 = {
      x: 0,
      y: 400,
      width: 100,
      height: 200,
    };
    rect1.x = event.clientX - 50;
    rect1.y = event.clientY - 100;

    context.clearRect(0, 0, width, height);
    if (rectIntersect(rect0, rect1)) {
      context.fillStyle = '#ff6666';
    } else {
      context.fillStyle = '#999999';
    }
    context.fillRect(rect0.x, rect0.y, rect0.width, rect0.height);
    context.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);
  },
};
