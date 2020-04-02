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
