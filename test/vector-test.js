import { describe, it } from 'mocha';
import { expect } from 'chai';

import { vector } from '../js/vector';

describe('Vector Library', () => {
  const v1 = vector.create(1, 2);
  it('sets the X value', () => {
    expect(v1.getX()).to.equal(1);
  });

  it('sets the Y value', () => {
    expect(v1.getY()).to.equal(2);
  });

  it('sets the angle', () => {
    // this isn't working :(
    v1.setAngle(10);
    expect(v1.getAngle()).to.equal(10);
  });
});
