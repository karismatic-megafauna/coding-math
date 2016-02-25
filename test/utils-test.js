import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  normalize,
  lerp,
  degreesToRads,
  radsToDegrees,
  randomRange,
  map,
  clamp,
  distance,
  distanceXY,
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
    it('converts a normalization from one range to another', () => {
      const sourceMin = 0;
      const sourceMax = 100;
      const destMin = 200;
      const destMax = 400;
      const value = 50;

      const result = map(value, sourceMin, sourceMax, destMin, destMax);
      const expected = 300;

      expect(result).to.equal(expected);
    });
  });
  describe('clamp', () => {
    const min = 50;
    const max = 100;
    it('returns an outside number at a boundary of a range', () => {
      const valueUnder = 25;
      const resultUnder = clamp(valueUnder, min, max);
      expect(resultUnder).to.equal(min);

      const valueOver = 125;
      const resultOver = clamp(valueOver, min, max);
      expect(resultOver).to.equal(max);
    });
    it('returns a number in the boundary', () => {
      const value = 75;
      const result = clamp(value, min, max);

      expect(result).to.equal(value);
    });
  });
  describe('distance', () => {
    it('finds the distance between two points in an object', () => {
      // 3 4 5 triangle
      const a = { x: 1, y: 1 };
      const b = { x: 5, y: 4 };

      // 5 12 13 triangle
      const c = { x: 0, y: 0 };
      const d = { x: 12, y: 5 };

      const result = distance(a, b);
      const result2 = distance(c, d);

      expect(result).to.equal(5);
      expect(result2).to.equal(13);
    });
  });
  describe('distanceXY', () => {
    it('finds the distance between two pairs of xy coords', () => {
      // 3 4 5 triangle
      const ax = 0;
      const ay = 0;
      const bx = 4;
      const by = 3;
      const result = distanceXY(ax, ay, bx, by);

      expect(result).to.equal(5);
    });
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
