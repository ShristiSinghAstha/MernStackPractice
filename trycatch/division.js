try {
  let x = 10;
  let y = 0;

  if (y === 0) {
    throw "Cannot divide by zero";
  }

  console.log(x / y);
} catch (error) {
  console.log(error);
}
