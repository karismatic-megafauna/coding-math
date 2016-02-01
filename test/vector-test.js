import { describe, it } from 'mocha';
import { expect } from 'chai';

import { vector } from '../js/vector';

describe('Vector Library', () => {
  describe('Getters and Setters:', () => {
    const v1 = vector.create(1, 2);
    it('sets the X value', () => {
      expect(v1.getX()).to.equal(1);
    });

    it('sets the Y value', () => {
      expect(v1.getY()).to.equal(2);
    });

    it('sets the angle', () => {
      const low30 = 29.5 * (Math.PI / 180);
      const high30 = 30.5 * (Math.PI / 180);
      v1.setAngle(Math.PI / 6);
      expect(v1.getAngle()).to.be.within(low30, high30);
    });

    it('sets the length', () => {
      v1.setLength(100);
      expect(v1.getLength()).to.equal(100);
    });
  });

  describe('Elementary immutable vector arithmetic works', () => {
    const v1 = vector.create(5, 10);
    const v2 = vector.create(10, 5);
    it('Add', () => {
      const result = v1.add(v2);

      expect(result.getX()).to.equal(15);
      expect(result.getY()).to.equal(15);
    });
    it('Subtract', () => {
      const result = v1.subtract(v2);

      expect(result.getX()).to.equal(-5);
      expect(result.getY()).to.equal(5);
    });
    it('Multipliy', () => {
      const result = v1.multiply(2);

      expect(result.getX()).to.equal(10);
      expect(result.getY()).to.equal(20);
    });
    it('Divide', () => {
      const result = v1.divide(5);

      expect(result.getX()).to.equal(1);
      expect(result.getY()).to.equal(2);
    });
  });

  describe('Elementary muteable vector arithmetic works', () => {
    it('Add', () => {
      const v1 = vector.create(5, 10);
      const v2 = vector.create(10, 5);
      v1.addTo(v2);

      expect(v1.getX()).to.equal(15);
      expect(v1.getY()).to.equal(15);
    });
    it('Subtract', () => {
      const v1 = vector.create(5, 10);
      const v2 = vector.create(10, 5);
      v1.subtractFrom(v2);

      expect(v1.getX()).to.equal(-5);
      expect(v1.getY()).to.equal(5);
    });
    it('Multipliy', () => {
      const v1 = vector.create(5, 10);
      v1.multiplyBy(2);

      expect(v1.getX()).to.equal(10);
      expect(v1.getY()).to.equal(20);
    });
    it('Divide', () => {
      const v1 = vector.create(5, 10);
      v1.divideBy(5);

      expect(v1.getX()).to.equal(1);
      expect(v1.getY()).to.equal(2);
    });
  });
});
