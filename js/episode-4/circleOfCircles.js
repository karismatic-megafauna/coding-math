export const circleOfCircles = {
  tearDown() {
    // nothing to do yet
  },
  setUp() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const randNum = (Math.floor(Math.random() * 200) + 100);
    const circleArrangementRadius = window.counterState;
    const individualCircleRadii = window.counterState;
    const randNum2 = (Math.floor(Math.random() * 30) + 10);
		const cState = Counter.getState();
    const centerY = height / 2;
    const centerX = width / 2;
    const numObjects = 20;
    const slice = Math.PI * 2 / numObjects;
    let angle = 0;
    let x = 0;
    let y = 0;

    for (let i = 0; i < numObjects; i += 1) {
      angle = i * slice;
      x = centerX + Math.cos(angle) * circleArrangementRadius;
      y = centerY + Math.sin(angle) * circleArrangementRadius;
      context.beginPath();
      context.arc(x, y, individualCircleRadii, 0, Math.PI * 2, false);
      context.fill();
    }
  },
};
