class PGroup {
  constructor(members) {
    this.members = members;
  }

  add(element) {
    if (this.has(element)) return this;
    return new PGroup(this.members.concat([element]));
  }

  delete(element) {
    if (!this.has(element)) {
      return this;
    }
    return new PGroup(this.members.filter(el => el !== element));
  }

  has(element) {
    return this.members.includes(element);
  }
}
PGroup.empty = new PGroup([]);

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
