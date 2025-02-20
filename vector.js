/**
 * A 3-D vector representation
 */
export class Vector3 {
  // data
  x;
  y;
  z;

  /**
   * Constructor
   *
   * If no data passed use default values of zero, else copy data.
   *
   * @param { number } x
   * @param { number } y
   * @param { number } z
   */
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Copy the contents of another vector here
   * @param {Vector3} other
   */
  copy(other) {
    this.x = other.x;
    this.y = other.y;
    this.z = other.z;
  }

  /**
   * Set components of vector
   *
   * Modifies vector in-place
   * @param {number} x
   * @param {number} y
   * @param {number} z
   */
  set(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Do vector addition
   *
   * Modifies vector in-place
   * @param {Vector3} right
   */
  _add(right) {
    this.x = this.x + right.x;
    this.y = this.y + right.y;
    this.z = this.z + right.z;
  }

  /**
   * Do vector addition
   *
   * @param {Vector3} right
   * @returns {Vector3} new vector with results
   */
  add(right) {
    let v = new Vector3(this.x, this.y, this.z);
    v._add(right);
    return v;
  }

  /**
   * Do vector addition
   *
   * Modifies vector in-place
   * @param {number} dx
   * @param {number} dy
   * @param {number} dz
   */
  _addComponents(dx, dy, dz) {
    this.x = this.x + dx;
    this.y = this.y + dy;
    this.z = this.z + dz;
  }

  /**
   * Do vector addition
   *
   * @param {number} dx
   * @param {number} dy
   * @param {number} dz
   * @returns {Vector3} new vector with results
   */
  addComponents(dx, dy, dz) {
    let v = new Vector3(this.x, this.y, this.z);
    v._addComponents(dx, dy, dz);
    return v;
  }

  /**
   * Do vector subtraction
   *
   * Modifies vector in-place
   * @param {Vector3} right
   */
  _sub(right) {
    this.x = this.x - right.x;
    this.y = this.y - right.y;
    this.z = this.z - right.z;
  }

  /**
   * Do vector subtraction
   *
   * @param {Vector3} right
   * @returns {Vector3} new vector with results
   */
  sub(right) {
    let v = new Vector3(this.x, this.y, this.z);
    v._sub(right);
    return v;
  }

  /**
   * Scale the vector by some scalar
   *
   * Modifies vector in-place
   * @param {number} s scale each component by this
   */
  _scale(s) {
    this.x *= s;
    this.y *= s;
    this.z *= s;
  }
  /**
   * Scale the vector by some scalar
   *
   * Modifies vector in-place
   * @param {number} s scale each component by this
   * @returns {Vector3} new vector with results
   */
  scale(s) {
    let v = new Vector3(this.x, this.y, this.z);
    v._scale(s);
    return v;
  }

  /**
   * Do vector normalization
   *
   * Modifies vector in-place
   */
  _normalize() {
    const lengthInverse = 1 / this.magnitude;
    this.x *= lengthInverse;
    this.y *= lengthInverse;
    this.z *= lengthInverse;
  }

  /**
   * Do vector normalization
   *
   * @returns {Vector3} new vector with results
   */
  normalize() {
    let v = new Vector3(this.x, this.y, this.z);
    v._normalize();
    return v;
  }

  /**
   * Do vector cross multiplication
   *
   * Modifies vector in-place
   *
   * @param {Vector3} right
   */
  _cross(right) {
    const x = this.x;
    const y = this.y;
    const z = this.z;
    this.x = y * right.z - z * right.y;
    this.y = z * right.x - x * right.z;
    this.z = x * right.y - y * right.x;
  }

  /**
   * Do vector cross multiplication
   *
   * @param {Vector3} right
   * @returns {Vector3} new vector with results
   */
  cross(right) {
    let v = new Vector3(this.x, this.y, this.z);
    v._cross(right);
    return v;
  }

  /**
   * Get the length/magnitude of the vector
   */
  get magnitude() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
}
