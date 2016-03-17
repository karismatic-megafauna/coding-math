const switcher = { on: false };
let frameId;

export const pendulumWave = {
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
    const green = 0;

    const waveStep = Math.PI / 36;
    let start = 0;
    let end = Math.PI * 2;
    function update() {
      context.clearRect(0, 0, canvas.width, canvas.height);

      context.save();

      context.translate(0, height / 2);
      context.scale(1, -1);


      const freq = end - start;
      const points = 100;
      const stepNum = freq / points;
      const stepLength = (width / points);
      const amp = 400;
      let y = 0;
      let x = 0;
      let yScaler = 0;
      for (start; start < end; start += stepNum) {
        x = x + stepLength;
        y = Math.sin(start) * amp;
        yScaler = Math.abs(y) / 600;
        const red = Math.floor(255 - (yScaler * 255));
        const blue = Math.floor(255 * yScaler);
        context.beginPath();
        context.arc(x, y, 5, 0, Math.PI * 2, false);
        context.fillStyle = `rgb( ${red} , ${green} , ${blue})`;
        context.fill();
      }
      start = waveStep;
      end = end + waveStep;

      context.restore();
      if (switcher.on) {
        frameId = requestAnimationFrame(update);
      }
    }
    update();
  }
  render() {
debugger;
    this.setUp();
  }
}
