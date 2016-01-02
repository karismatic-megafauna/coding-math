window.onload = function() {
  var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

  var centerY = height / 2,
      centerX = width / 2,
      xRadius = 200,
      yRadius = 400,
      speed = 0.01,
      angle = 0,
      x, y;

  render();

  function render() {
    context.clearRect(0, 0, width, height);
    x = centerX + Math.cos(angle) * xRadius;
    y = centerY + Math.sin(angle) * yRadius;
    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, false);
    context.arc(centerX, centerY, 40, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;
    requestAnimationFrame(render);
  }
};
