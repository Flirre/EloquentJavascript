function isEven(candidate) {
  let testCandidate = Math.abs(candidate);
  if (testCandidate === 0) return true;
  if (testCandidate === 1) return false;
  return isEven(testCandidate - 2);
}

console.assert(isEven(50) === true, '50');
console.assert(isEven(75) === false, '75');
console.assert(isEven(-1) === false, '-1');
