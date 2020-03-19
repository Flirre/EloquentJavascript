function min(value0, value1) {
  return value0 < value1 ? value0 : value1;
}
console.assert(min(0, 10) === 0);
console.assert(min(0, -10) === -10);
