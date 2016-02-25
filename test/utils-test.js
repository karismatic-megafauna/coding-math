import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  normalize,
  lerp,
  degreesToRads,
  radsToDegrees,
  randomRange,
} from '../js/utils';

describe('Utility Functions', () => {
  describe('normalize', () => {
    it('adjusts values measured on different scales to a common scale', () => {
      const value = 200;
      const min = 100;
      const max = 300;

      const expected = 0.5;
      const result = normalize(value, min, max);

      expect(result).to.equal(expected);
    });
  });
  describe('linear interpolation', () => {
    it('finds a value given a range and normalization', () => {
      const norm = 0.5;
      const min = 100;
      const max = 300;

      const expected = 200;
      const result = lerp(norm, min, max);

      expect(result).to.equal(expected);
    });
  });
  describe('map', () => {
    it('needs to be implemented');
  });
  describe('clamp', () => {
    it('needs to be implemented');
  });
  describe('distance', () => {
    it('needs to be implemented');
  });
  describe('distanceXY', () => {
    it('needs to be implemented');
  });
  describe('randomRange', () => {
    it('returns a number inside of a random range', () => {
      const min = 50;
      const max = 100;
      const result = randomRange(min, max);

      expect(result).to.be.within(min, max);
    });
  });
  describe('randomInt', () => {
    it('needs to be implemented');
  });
  describe('degreesToRads', () => {
    it('converts degrees to radians', () => {
      const radians = Math.PI / 4;
      const degrees = 45;
      const result = degreesToRads(degrees);

      const expected = radians;
      expect(result).to.equal(expected);
    });
  });
  describe('radsToDegrees', () => {
    it('converts radians to degrees', () => {
      const radians = Math.PI / 4;
      const degrees = 45;
      const result = radsToDegrees(radians);

      const expected = degrees;
      expect(result).to.equal(expected);
    });
  });
  describe('roundToPlaces', () => {
    it('needs to be implemented');
  });
  describe('roundNearest', () => {
    it('needs to be implemented');
  });
  describe('randomDist', () => {
    it('needs to be implemented');
  });
});
