const express = require("express");
const app = express();
const firstDivision = require("./firstDivision.js");
const secondDivision = require("./secondDivision.js");

app.use(firstDivision);
app.use(secondDivision);

function resultFizzbuzz(fizzbuzzNumber, firstDivider, secondDivider) {
  const resultTextFizzbuzz =
    firstDivision(fizzbuzzNumber, firstDivider) +
    secondDivision(fizzbuzzNumber, secondDivider);
  if (!resultTextFizzbuzz) {
    return fizzbuzzNumber;
  }
  return resultTextFizzbuzz;
}

module.exports = resultFizzbuzz;
