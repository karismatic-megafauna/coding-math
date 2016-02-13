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
    // const randNum = (Math.floor(Math.random() * 300) + 100);

    context.translate(0, height / 2);
    // context.scale(1, -1);

    // what does a wave need?
    // Amplitude
    // cycles, default Math.PI * 2
    // width, ( hard code to width of screen) 
    function printWave() {
    }

    //     function render() {
    //       context.clearRect(0, 0, width, height);
    // go through the unit circle and render the whole thing
    // then move the starting point and do it again
    // y oscillates between 0 and 1
    //
    // PROBLEM: x is the position on the screen AND the position on the circle
    // SOLUTION: abstract out the width of the drawing
    // Calculate the step based off of width and unit circle
    let points = 200;
    let end = Math.PI * 2;
    let stepNum = end / points;
    let stepLength = (width / points);
    let start = 0;
    const amp = 400;
    let y = 0;
    let x = 0;
    for (start; start < end; start += stepNum) {
      x = x + stepLength;
      y = Math.sin(start) * amp;
      context.fillStyle = 'black';
      // context.fillText(Math.sin(start).toFixed(2), x+10, y + 10); 
      // context.fillText(x.toFixed(2), x+10, y + 30); 
      context.fillRect(x, y, 5, 5);
    }
    // if (switcher.on) {
    //   frameId = requestAnimationFrame(render);
    // }
    // }
    // render();
  },
};
