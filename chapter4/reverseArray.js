function reverseArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[array.length - i - 1];
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let copyArray = [...array];
  for (let i = 0; i < array.length; i++) {
    array[i] = copyArray[copyArray.length - 1 - i];
  }
  return array;
}
let array = [1, 2, 3, 4];
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace(array));
console.log(array);
