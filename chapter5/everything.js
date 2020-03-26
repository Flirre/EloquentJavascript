function every(array, predicate) {
  for (element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function everysome(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everysome([1, 3, 5], n => n < 10));
// → true
console.log(everysome([2, 4, 16], n => n < 10));
// → false
console.log(everysome([], n => n < 10));
// → true
