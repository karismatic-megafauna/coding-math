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
    // Methods to test:
    // accelerate(accel) {
    it('increases the velocity by a specified amount', () => {
      const p1 = particle.create(4, 4, 30, Math.PI / 6, 20);
      const v2 = vector.create(10, 5);
      const originalX = p1.velocity.getX();
      const originalY = p1.velocity.getY();
      // mutate p1
      p1.accelerate(v2);

      expect(originalX + 10).to.eql(p1.velocity.getX());
      expect(originalY + 5).to.eql(p1.velocity.getY());
    });
    // update() {
    // angleTo(p2) {
    // distanceTo(p2) {
    // gravitateTo(p2) {
    it('updates the velocity and position');
    it('gets the angle between two particles');
    it('gets the distance between two particles');
    it('calculates the gravity between two objects');
    it('applies the calcualted gravity to an obj');
  });
});
