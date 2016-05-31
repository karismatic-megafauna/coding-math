import { particle } from '../particle';

export const volcano = {
  setUp() {

    function loop() {

      if (particles.length < 100) {
        const p = particle.create(
          width / 2,
          height,
          Math.random() * 8 + 5,
          -Math.PI / 2 + (Math.random() * 0.2 - 0.1),
          0.1
        );
        p.radius = Math.random() * 10 + 2;
        p.color = {
          b: 0,
          r: 255,
          g: 0,
        };
        particles.push(p);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.update();

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
        const upwardVelocity = getUpwardVelocity(p) / 5;
        const red = Math.floor(255 * upwardVelocity);
        context.fillStyle = `rgb( ${red} , ${p.color.g} , ${p.color.b})`;
        context.fill();

        if (p.position.getY() - p.radius > height) {
          p.position.setX(width / 2);
          p.position.setY(height);
          p.velocity.setLength(Math.random() * 8 + 5);
          p.velocity.setAngle(-Math.PI / 2 + (Math.random() * 0.2 - 0.1));
        }
      }

      context.font = '24px serif';
      context.fillText(`particles on page: ${particles.length}`, 200, 50);
      if (particles.length) {
        frameId = requestAnimationFrame(loop);
      }
    }
    loop();
  },
};
