import { vector } from './vector';

export const particle = {
  position: null,
  velocity: null,
  mass: null,
  gravity: null,
  radius: null,
  bounce: -1,
  friction: 1,
  color: null,

  create(x, y, speed, direction, grav, rad) {
    const obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);
    obj.gravity = vector.create(0, grav || 0);
    obj.radius = rad || 10;
    return obj;
  },

  accelerate(accel) {
    this.velocity.addTo(accel);
  },

  update() {
    this.velocity.multiplyBy(this.friction);
    this.velocity.addTo(this.gravity);
    this.position.addTo(this.velocity);
  },

  angleTo(p2) {
    return Math.atan2(
      p2.position.getY() - this.position.getY(),
      p2.position.getX() - this.position.getX()
    );
  },

  distanceTo(p2) {
    const dx = p2.position.getX() - this.position.getX();
    const dy = p2.position.getY() - this.position.getY();

    return Math.sqrt(dx * dx + dy * dy);
  },

  gravitateTo(p2) {
    if (!p2.mass) {
      throw new Error(`mass of input obj undefined in gravitateTo(p2)`);
    }

    const grav = vector.create(0, 0);
    const dist = this.distanceTo(p2);

    grav.setLength(p2.mass / (dist * dist));
    grav.setAngle(this.angleTo(p2));

    this.velocity.addTo(grav);
  },
};
