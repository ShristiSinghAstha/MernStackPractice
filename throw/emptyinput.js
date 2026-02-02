let username = " ";

try {
  if (username === "") {
    throw "Username cannot be empty";
  }
  console.log("Username entered!");
} catch (error) {
  console.log(error);
}
