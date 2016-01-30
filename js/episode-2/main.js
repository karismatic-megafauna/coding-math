const render = () => {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const height = canvas.height = window.innerHeight;

  context.translate(0, height / 2);
  context.scale(1, -1);

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    const x = angle * 200;
    let y = Math.sin(angle) * 200;

    context.fillStyle = 'black';
    context.fillRect(x, y, 5, 5);

    y = Math.cos(angle) * 200;
    context.fillStyle = 'red';
    context.fillRect(x, y, 5, 5);
  }
};

export default render;
