function fibonacci(n) {
  if (n < 2) {
    return n
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));

  console.log("Expecting: 3");
  console.log("=>", fibonacci(4));

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));

  console.log("Expecting: 8");
  console.log("=>", fibonacci(6));

  console.log("Expecting: 13");
  console.log("=>", fibonacci(7));

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));

  console.log("Expecting: 34");
  console.log("=>", fibonacci(9));

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
