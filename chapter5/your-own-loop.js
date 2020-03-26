function loop(value, condition, update, body) {
  if (!condition(value)) return;
  body(value);
  let newValue = update(value);
  loop(newValue, condition, update, body);
}
loop(
  0,
  i => i < 5,
  j => j + 1,
  k => console.log(k)
);

loop(
  3,
  n => n > 0,
  n => n - 1,
  console.log
);
