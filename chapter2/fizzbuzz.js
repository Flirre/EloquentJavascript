for (let i = 1; i < 100; i++) {
  let fz = "";
  if (i % 3 === 0) fz += "Fizz";
  if (i % 5 === 0) fz += "Buzz";
  console.log(fz ? fz : i);
}
