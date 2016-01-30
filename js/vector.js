export let vector = {
  _x: 1,
  _y: 0,

  create(x, y) {
    let obj = Object.create(this);
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

  add(val) {
    return vector.create(this._x + val.getX(), this._y + val.getY());
  },
  subtract(val) {
    return vector.create(this._x - val.getX(), this._y - val.getY());
  },

  multiply(val) {
    return vector.create(this._x * val, this._y * val);
  },

  divide(val) {
    return vector.create(this._x / val, this._y / val);
  },

  addTo(val) {
    this._x += val.getX();
    this._y += val.getY();
  },

  subtractFrom(val) {
    this._x -= val.getX();
    this._y -= val.getY();
  },

  multiplyBy(val) {
    this._x *= val.getX();
    this._y *= val.getY();
  },

  divideBy(val) {
    this._x /= val.getX();
    this._y /= val.getY();
  },
};
