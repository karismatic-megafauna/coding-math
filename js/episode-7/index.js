import { vector } from '../vector';

export const vectorLib = {
  tearDown() {
    // nothing to do yet
  },
  setUp() {
    const v1 = vector.create(10, 5);
    // Adding
    const v2 = vector.create(1, 2);
    const v3 = v1.add(v2);
    // Subtracting
    const v4 = v3.subtract(v2);
    // Multiplication
    const v5 = v1.multiply(2);

    function draw() {
      const canvas = document.getElementById('canvas');
      const context = canvas.getContext('2d');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      const vert = [];
      let count = 0;
      for (let i = 0; i < 18; i++) {
        vert[i] = count;
        count = count + 25;
      }
      // Draw some info out ... :( this shit sucks
      context.clearRect(0, 0, width, height);
      context.font = '24px serif';
      context.fillText('Getters:', 200, vert[1]);
      context.fillText(`getX() = ${v1.getX()}`, 200, vert[2]);
      context.fillText(`getY() = ${v1.getY()}`, 200, vert[3]);
      context.fillText(`getAngle() = ${v1.getAngle()}`, 200, vert[4]);
      context.fillText(`getLength() = ${v1.getLength()}`, 200, vert[5]);

      context.fillText('Addition: ( 10 , 5 ) + ( 1 , 2 )', 200, vert[7]);
      context.fillText(`x = ${v3.getX()}`, 200, vert[8]);
      context.fillText(`y = ${v3.getY()}`, 200, vert[9]);

      context.fillText('Subtraction: ( 11 , 7 ) - ( 1 , 2 )', 200, vert[11]);
      context.fillText(`x = ${v4.getX()}`, 200, vert[12]);
      context.fillText(`y = ${v4.getY()}`, 200, vert[13]);

      context.fillText('Multiplication: ( 10 , 5 ) x 2', 200, vert[15]);
      context.fillText(`x = ${v5.getX()}`, 200, vert[16]);
      context.fillText(`y = ${v5.getY()}`, 200, vert[17]);
    }

    draw();
  },
};
