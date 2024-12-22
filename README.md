# JavaScript Function with Division by Zero Bug

This repository demonstrates a common bug in JavaScript: improper handling of division by zero. The `foo` function in `bug.js` attempts to divide two numbers but doesn't include comprehensive error handling for cases where the denominator is zero or both numbers are zero. This can lead to unexpected results, such as `Infinity` or silent failure.

The `bugSolution.js` file provides a corrected version that addresses this issue using a `try...catch` block to handle the error explicitly and return a meaningful error message.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` to see the buggy implementation.
3. Run `bug.js` using Node.js (or a browser's developer console). Observe that division by zero results in `Infinity`, and if both inputs are 0 it will return 0, which might not be what is expected.
4. Open `bugSolution.js` to see the corrected implementation.
5. Run `bugSolution.js`.  Observe how the improved error handling prevents unexpected results.