const switcher = { on: true };
let frameId;

export const pointAtMouse = {
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
    const arrowX = width / 2;
    const arrowY = height / 2;
    let dx = 0;
    let dy = 0;
    let angle = 0;

    function update() {
      context.clearRect(0, 0, width, height);

      context.save();
      context.translate(arrowX, arrowY);
      context.rotate(angle);

      // DRAW THE ARROW
      context.beginPath();
      context.moveTo(20, 0);
      context.lineTo(-20, 0);
      context.moveTo(20, 0);
      context.lineTo(10, -10);
      context.moveTo(20, 0);
      context.lineTo(10, 10);
      context.stroke();

      context.restore();
      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }

    update();

    document.body.addEventListener('mousemove', (event) => {
      dx = event.clientX - arrowX;
      dy = event.clientY - arrowY;
      angle = Math.atan2(dy, dx);
    });
  },
};
