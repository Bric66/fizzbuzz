function fizzbuzz(fizzNumber) {
  if (fizzNumber < 1 || fizzNumber > 20) {
    console.log("log with a number between 1 and 20");
  } else if (fizzNumber % 5 == 0 && fizzNumber % 3 == 0) {
    console.log("FizzBuzz");
  } else if (fizzNumber % 3 == 0) {
    console.log("Fizz");
  } else if (fizzNumber % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(fizzNumber);
  }
}

fizzbuzz(+process.env.FIZZ_NUMBER);
