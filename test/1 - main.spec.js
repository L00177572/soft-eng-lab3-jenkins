const assert = require("assert")
const mainJs = require("../main")

describe("Unit testing main.js", function () {

  const zero = 0
  const a = 7
  const b = 3

  describe("opAddition", function () {

    it("should return the sum of two numbers", function () {
      const result = mainJs.opAddition(a, b)
      assert.equal(result, a + b)
    })

  })

  describe("opSubtraction", function () {

    it("should return the subtraction of two numbers", function () {
      const result = mainJs.opSubtraction(a, b)
      assert.equal(result, a - b)
    })

  })

  describe("opMultiplication", function () {

    it("should return the subtraction of two numbers", function () {
      const result = mainJs.opMultiplication(a, b)
      assert.equal(result, a * b)
    })

  })

  describe("opDivision", function () {

    it("should return zero when divided by zero", function () {
      const result = mainJs.opDivision(a, zero)
      assert.equal(result, zero)
    })

    it("should return the division of two numbers", function () {
      const result = mainJs.opDivision(a, b)
      assert.equal(result, a / b)
    })

  })

})
