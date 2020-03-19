function countChar(targetString, targetChar) {
  let charCount = 0;
  for (char of targetString) {
    if (char === targetChar) charCount += 1;
  }
  return charCount;
}
function countBs(targetString) {
  return countChar(targetString, 'B');
}
console.assert(countBs('BBC') === 2, 'bbc');
console.assert(countChar('kakkerlak', 'k') === 4, 'kakkerlak');
