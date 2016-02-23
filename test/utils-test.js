import { describe, it } from 'mocha';
import { expect } from 'chai';

import {
  normalize,
  lerp,
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
});
