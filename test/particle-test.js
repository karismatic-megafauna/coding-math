import { describe, it } from 'mocha';
import { expect } from 'chai';

import { particle } from '../js/particle';

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
  describe('Arithmetic works', () => {
    // Methods to test:
    // accelerate(accel) {
    // update() {
    // angleTo(p2) {
    // distanceTo(p2) {
    // gravitateTo(p2) {
    it('increases the velocity by a specified amount');
    it('updates the velocity and position');
    it('gets the angle between two particles');
    it('gets the distance between two particles');
    it('calculates the gravity between two objects');
    it('applies the calcualted gravity to an obj');
  });
});
