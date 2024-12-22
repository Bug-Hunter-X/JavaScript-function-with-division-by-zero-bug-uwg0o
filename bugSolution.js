function foo(a, b) {
  if (a === 0 && b === 0) {
    throw new Error("Both inputs cannot be zero.");
  } else if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

try {
  console.log(foo(0, 0));
} catch (error) {
  console.error(error.message); // Outputs: "Both inputs cannot be zero."
}

try {
  console.log(foo(1, 0));
} catch (error) {
  console.error(error.message); // Outputs: "Cannot divide by zero."
}

console.log(foo(10,2)); // Outputs 5