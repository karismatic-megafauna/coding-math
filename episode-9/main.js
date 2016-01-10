window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var p = particle.create(100, 100, 3, Math.PI/6);

  update();

  function update() {
    context.clearRect(0,0,width,height);

    p.update();
    context.beginPath();
    context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
    context.fill();

    requestAnimationFrame(update);
  }
};
