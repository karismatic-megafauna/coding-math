// var v1 = vector.create(10, 5);
// // get'ers work
// console.log("Get'ers work:")
// console.log(v1.getX(), v1.getY());
// console.log(v1.getAngle());
// console.log(v1.getLength());
//
// // Adding works
// var v2 = vector.create(1, 1);
// var v3 = v1.add(v2);
// console.log('Adding works:')
// console.log(v3.getX(), v3.getY());
//
// // Subtracting works
// var v4 = v3.subtract(v2);
// console.log('Subtracting works:')
// console.log(v4.getX(), v4.getY());
//
// // Multiplication works
// var v5 = v1.multiply(2);
// console.log('Multiplication works:');
// console.log(v5.getX(), v5.getY());

window.onload = function() {
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var particles = [];
  numParticles = 100;

  for( var i = 0; i < numParticles; i++){
    particles.push(particle.create(width/2,height/2,Math.random()* 4 +1, Math.random() * Math.PI * 2));
  }

  update();

  function update() {
    context.clearRect(0,0,width,height);

    for(var i = 0; i < numParticles; i++) {
      var p = particles[i];
      p.update();
      context.beginPath();
      context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      context.fill();
    }

    requestAnimationFrame(update);
  }
};
