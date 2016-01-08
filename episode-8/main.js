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
  var position = vector.create(700,400);
  var velocity = vector.create(3,3);

  velocity.setLength(1);
  velocity.setAngle( (3 * Math.PI)/2 );

  update();

  function update() {
    context.clearRect(0,0,width,height);

    position.addTo(velocity);
    context.beginPath();
    context.arc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false);
    context.fill();

    requestAnimationFrame(update);
  }
};
