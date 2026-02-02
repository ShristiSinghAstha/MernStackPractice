let num = 5;

try {
  if (num < 0) {
    throw "Number cannot be negative";
  }
  console.log("Number is positive");
} catch (error) {
  console.log(error);
}
