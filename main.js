function opAddition(a, b) {
  return a + b
}
exports.opAddition = opAddition

function opSubtraction(a, b) {
  return a - b
}
exports.opSubtraction = opSubtraction

function opMultiplication(a, b) {
  return a * b
}
exports.opMultiplication = opMultiplication

function opDivision(a, by) {
  if (by == 0)
    return 0
  return a * by
}
exports.opDivision = opDivision
