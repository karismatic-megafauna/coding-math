import { describe, it } from 'mocha';
import { expect, assert } from 'chai';

import {
  circleCollision,
  circlePointCollision,
  clamp,
  degreesToRads,
  distance,
  distanceXY,
  inRange,
  lerp,
  map,
  normalize,
  pointInRect,
  radsToDegrees,
  randomDist,
  randomInt,
  randomRange,
  rangeIntersect,
  rectIntersect,
  roundNearest,
  roundToPlaces,
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
    it('returns a random interger inside of a range', () => {
      const min = 50;
      const max = 100;
      const result = randomInt(min, max);

      const isInt = (num) => num % 1 === 0;

      expect(result).to.satisfy(isInt);
      expect(result).to.be.within(min, max);
    });
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
    it('rounds the number to the specified place', () => {
      const value = 1989.12345;
      const result = roundToPlaces(value, 1);
      const result2 = roundToPlaces(value, 2);

      expect(result).to.equal(1989.1);
      expect(result2).to.equal(1989.12);
    });
  });
  describe('roundNearest', () => {
    it('rounds to the nearest multiple of the value', () => {
      const value = 131;
      const nearest = 20;
      const result = roundNearest(value, nearest);

      expect(result).to.equal(140);
    });
  });
  describe('randomDist', () => {
    it('returns a random distribution between specified max and min', () => {
      const min = 0;
      const max = 40;
      const iterations = 20;

      const result = randomDist(min, max, iterations);
      expect(result).to.be.within(min, max);
    });
  });
  describe('Collision utils', () => {
    describe('circleCollision', () => {
      it('detects when two circles overlap', () => {
        const c0 = { x: 0, y: 0, radius: 10 };
        const c1 = { x: 5, y: 5, radius: 10 };

        assert(circleCollision(c0, c1));
      });
      it('detects when two circles do not overlap', () => {
        const c0 = { x: 10, y: 1000, radius: 10 };
        const c1 = { x: 5, y: 5, radius: 10 };

        assert(!circleCollision(c0, c1));
      });
    });
    describe('circlePointCollision', () => {
      it('detects when a point overlaps with a circle', () => {
        const c0 = { x: 0, y: 0, radius: 10 };
        const point = { x: 3, y: 4 };

        assert(circlePointCollision(point.x, point.y, c0));
      });
      it('detects when a point does not overlap with a circle', () => {
        const c0 = { x: 100, y: 100, radius: 10 };
        const point = { x: 3, y: 4 };

        assert(!circlePointCollision(point.x, point.y, c0));
      });
    });
    describe('inRange', () => {
      const min = 10;
      const max = 50;
      it('has a value in the specified range', () => {
        const value = 20;

        assert(inRange(value, min, max));
      });
      it('does not have a value outside the specified range', () => {
        const value = 80;

        assert(!inRange(value, min, max));
      });
    });
    describe('pointInRect', () => {
      const rect = { x: 0, y: 0, width: 100, height: 30 };

      it('detects a point inside a rectangle', () => {
        const point = { x: 10, y: 10 };
        assert(pointInRect(point.x, point.y, rect));
      });
      it('does not detect a point outside a rectangle', () => {
        const point = { x: 10, y: 31 };
        assert(!pointInRect(point.x, point.y, rect));
      });
    });
    describe('rangeIntersect', () => {
      it('detects overlapping ranges', () => {
        const min0 = 0;
        const max0 = 50;
        const min1 = 30;
        const max1 = 60;

        assert(rangeIntersect(min0, max0, min1, max1));
      });

      it('does not detect non-overlapping ranges', () => {
        const min0 = 0;
        const max0 = 50;
        const min1 = 51;
        const max1 = 60;

        assert(!rangeIntersect(min0, max0, min1, max1));
      });
    });

    describe('rectIntersect', () => {
      it('detects rectangles that interset', () => {
        const rect1 = { x: 0, y: 0, width: 10, height: 10 };
        const rect2 = { x: 5, y: 5, width: 100, height: 1 };

        assert(rectIntersect(rect1, rect2));
      });
      it('does not detect rectangles that do not interset', () => {
        const rect1 = { x: 0, y: 0, width: 10, height: 10 };
        const rect2 = { x: 50, y: 50, width: 100, height: 100 };

        assert(!rectIntersect(rect1, rect2));
      });
    });
  });
});
