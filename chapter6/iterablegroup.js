class Group {
  constructor() {
    this.group = [];
  }

  has(element) {
    for (const groupElement of this.group) {
      if (groupElement === element) return true;
    }
    return false;
  }

  add(element) {
    if (!this.has(element)) this.group.push(element);
  }

  delete(element) {
    if (this.has(element))
      this.group.splice(
        this.group.findIndex(el => el === element),
        1
      );
  }

  static from(array) {
    let newGroup = new Group();
    for (const element of array) {
      newGroup.add(element);
    }
    return newGroup;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.group.length) {
      return { done: true };
    } else {
      let result = { value: this.group.group[this.position], done: false };
      this.position += 1;
      return result;
    }
  }
}
let testGroup = new Group();
let group = Group.from([10, 20]);
console.assert(group.has(10) === true);
// → true
console.assert(group.has(30) === false);
// → false
group.add(10);
group.delete(10);
console.assert(group.has(10) === false);
// → false

for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
