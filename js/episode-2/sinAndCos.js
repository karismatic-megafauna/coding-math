// TODO: animate in an interesting way or remove
const switcher = { on: false };
let frameId;

export const sinAndCos = {
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
    const randNum = (Math.floor(Math.random() * 500) + 200);

    let waveStep = .09;
    let start = 0; 
    let end = Math.PI * 2;
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.save();

      context.translate(0, height / 2);
      context.scale(1, -1);


      let freq = end - start;
      let points = 100;
      let stepNum = freq / points;
      let stepLength = (width / points);
      const amp = 400;
      let y = 0;
      let x = 0;
      for (start; start < end; start += stepNum) {
        x = x + stepLength;
        y = Math.sin(start) * amp;
        context.fillStyle = 'black';
        context.fillRect(x, y, 5, 5);
      }
      start = waveStep;
      end = end + waveStep;

      context.restore();
      if (switcher.on) {
        frameId = requestAnimationFrame(render);
      }
    }
    render();
  },
};
