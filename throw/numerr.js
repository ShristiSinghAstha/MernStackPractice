let age = 11;

try {
  if (age < 0) {
    throw 101; // custom error code
  }
  console.log("Valid age");
} catch (error) {
  console.log("Error code:", error);
}
