function deepEqual(object0, object1) {
  for (key of Object.keys(object0)) {
    if (object0[key] && typeof object0[key] === 'object') {
      deepEqual(object0[key], object1[key]);
    }
    if (object0[key] !== object1[key]) return false;
  }
  return true;
}

console.log(deepEqual({}, {}));
console.log(deepEqual({ value: 1 }, { value: 1 }));
console.log(deepEqual({ value: 1 }, { value: 2 }));
console.log(deepEqual({ values: { value: 1 } }, { values: { value: 1 } }));
console.log(deepEqual({ value: 1 }, {}));
