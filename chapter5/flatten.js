function flatten(arrayOfArrays) {
  const array = [...arrayOfArrays];
  return array.reduce((a, b) => {
    return a.concat(b);
  });
}

console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
);

console.log(flatten([[1, 2, 3], [4, 5], [6]]));
