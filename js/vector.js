export const vector = {
  _x: 1,
  _y: 0,

  create(x, y) {
    const obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
  },

  setX(value) {
    this._x = value;
  },

  getX() {
    return this._x;
  },

  setY(value) {
    this._y = value;
  },

  getY() {
    return this._y;
  },

  setAngle(angle) {
    const length = this.getLength();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
    // console.log(`length: ${length}`);
    // console.log(`X: ${this._x} Y: ${this._y}`);
  },

  getAngle() {
    return Math.atan2(this._y, this._x);
  },

  setLength(length) {
    const angle = this.getAngle();
    this._x = Math.cos(angle) * length;
    this._y = Math.sin(angle) * length;
  },

  getLength() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  },

  add(vect) {
    return vector.create(this._x + vect.getX(), this._y + vect.getY());
  },

  subtract(vect) {
    return vector.create(this._x - vect.getX(), this._y - vect.getY());
  },

  multiply(val) {
    return vector.create(this._x * val, this._y * val);
  },

  divide(val) {
    return vector.create(this._x / val, this._y / val);
  },

  addTo(vect) {
    this._x += vect.getX();
    this._y += vect.getY();
  },

  subtractFrom(vect) {
    this._x -= vect.getX();
    this._y -= vect.getY();
  },

  multiplyBy(val) {
    this._x *= val;
    this._y *= val;
  },

  divideBy(val) {
    this._x /= val;
    this._y /= val;
  },
};
