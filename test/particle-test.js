import { describe, it } from 'mocha';
import { expect } from 'chai';
import { particle } from '../js/particle';
import { vector } from '../js/vector';

describe('Particle Library', () => {
  describe('Can create create vectors', () => {
    const p1 = particle.create(1, 2, 30, Math.PI / 6, 20);

    it('sets the X value', () => {
      expect(p1.position.getX()).to.equal(1);
    });

    it('sets the Y value', () => {
      expect(p1.position.getY()).to.equal(2);
    });

    it('sets the angle', () => {
      const low30 = 29.5 * (Math.PI / 180);
      const high30 = 30.5 * (Math.PI / 180);
      expect(p1.velocity.getAngle()).to.be.within(low30, high30);
    });

    it('sets the length (speed)', () => {
      expect(p1.velocity.getLength()).to.equal(30);
    });

    it('sets the gravity', () => {
      expect(p1.gravity.getY()).to.equal(20);
    });
  });
  describe('Particle mutations', () => {
    it('increases the velocity by a specified amount', () => {
      const p1 = particle.create(4, 4, 30, Math.PI / 6, 20);
      const v2 = vector.create(10, 5);
      const initialX = p1.velocity.getX();
      const initialY = p1.velocity.getY();
      // mutate p1
      p1.accelerate(v2);

      expect(initialX + 10).to.eql(p1.velocity.getX());
      expect(initialY + 5).to.eql(p1.velocity.getY());
    });
    it('gets the angle between two particles', () => {
      const p1 = particle.create(4, 4, 30, Math.PI / 6, 20);
      const p2 = particle.create(2, 2, 15, Math.PI / 3, 10);

      const result = p1.angleTo(p2);

      const y = p2.position.getY() - p1.position.getY();
      const x = p2.position.getX() - p1.position.getX();

      const expected = Math.atan2(y, x);

      expect(result).to.equal(expected);
    });
    it('gets the distance between two particles', () => {
      const p1 = particle.create(4, 4, 30, Math.PI / 6, 20);
      const p2 = particle.create(2, 2, 15, Math.PI / 3, 10);

      const result = p1.distanceTo(p2);

      const y = p2.position.getY() - p1.position.getY();
      const x = p2.position.getX() - p1.position.getX();

      const expected = Math.sqrt((x * x) + (y * y));

      expect(result).to.equal(expected);
    });
    it('updates the velocity and position with gravity', () => {
      const p1 = particle.create(4, 4, 30, Math.PI / 6, 20);
      const initialXVel = p1.velocity.getX();
      const initialYVel = p1.velocity.getY();
      const initialXPos = p1.position.getX();
      const initialYPos = p1.position.getY();
      const gravX = p1.gravity.getX();
      const gravY = p1.gravity.getY();
      // mutate p1
      p1.update();
      const resultXVel = p1.velocity.getX();
      const resultYVel = p1.velocity.getY();
      const resultXPos = p1.position.getX();
      const resultYPos = p1.position.getY();

      expect(initialXVel + gravX).to.equal(resultXVel);
      expect(initialYVel + gravY).to.equal(resultYVel);

      expect(initialXPos + initialXVel + gravX).to.equal(resultXPos);
      expect(initialYPos + initialYVel + gravY).to.equal(resultYPos);
    });
    it('creates and applies gravity to this particle', () => {
      const earth = particle.create(4, 4, 10, Math.PI / 6);
      const sun = particle.create(10, 10, 515, Math.PI / 3);
      const earthinitialXVel = earth.velocity.getX();
      sun.mass = 2000;

      earth.gravitateTo(sun);
      const earthresultXVel = earth.velocity.getX();

      // note, the above and below only works because the initial value
      // is starting out the earth with no X and all Y.
      // In a quarter of a circle, this test would fail as X would decrease
      // and Y would increase...that is to say, this test depends HEAVILY
      // on the initial start points
      expect(earthresultXVel).to.be.above(earthinitialXVel);
    });
  });
});
