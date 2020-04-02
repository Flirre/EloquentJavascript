class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    const newX = this.x + vector.x;
    const newY = this.y + vector.y;
    let newVec = new Vec(newX, newY);
    return newVec;
  }

  minus(vector) {
    const newX = this.x - vector.x;
    const newY = this.y - vector.y;
    let newVec = new Vec(newX, newY);
    return newVec;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

let vector = new Vec(1, 2);
let vector2 = new Vec(21, -2);

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
