function range(start, end, step = 1) {
  let range = [];
  if (step < 0) {
    for (let i = start; i >= end; i += step) {
      range.push(i);
    }
    return range;
  }
  for (let i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}

function sum(numbers) {
  return numbers.reduce((summation, currentNum) => {
    return summation + currentNum;
  });
}

console.assert(JSON.stringify(range(1, 2)) === JSON.stringify([1, 2]), 'r1,2');

console.assert(
  JSON.stringify(range(1, 10)) ===
    JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  'r1,10'
);
console.assert(sum(range(1, 10)) === 55, 'sum-r-1,10');

console.assert(
  JSON.stringify(range(1, 10, 2)) === JSON.stringify([1, 3, 5, 7, 9])
);

console.assert(
  JSON.stringify(range(5, 2, -1)) === JSON.stringify([5, 4, 3, 2]),
  'negative step'
);
