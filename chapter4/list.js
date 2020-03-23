function arrayToList(array) {
  if (array.length === 0) {
    return null;
  }
  let list = {};
  let arrayCopy = [...array];
  list.value = arrayCopy.shift();
  list.rest = arrayToList(arrayCopy);
  return list;
}

function listToArray(list) {
  if (!list) {
    return;
  }
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  let newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}

function nth(list, number) {
  if (number === 0) return list.value;
  return nth(list.rest, number - 1);
}

function recursiveNth(list, number) {}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.assert(
  JSON.stringify(listToArray(arrayToList([1, 2, 3]))) ===
    JSON.stringify([1, 2, 3])
);
console.log(JSON.stringify(prepend(4, arrayToList([1, 2, 3]))));
console.log(nth(arrayToList([2, 4, 6]), 1));
