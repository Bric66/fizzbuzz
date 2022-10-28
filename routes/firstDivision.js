function firstDivision(fizzbuzzNumber, firstDivider) {
  if (fizzbuzzNumber % firstDivider == 0) {
    return "Fizz";
  } else {
    return "";
  }
}

module.exports = firstDivision;
