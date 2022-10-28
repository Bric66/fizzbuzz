function secondDivision(fizzbuzzNumber, secondDivider) {
  if (fizzbuzzNumber % secondDivider == 0) {
    return "Buzz";
  } else {
    return "";
  }
}

module.exports = secondDivision;
