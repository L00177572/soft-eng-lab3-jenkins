const { Builder, Browser, By, until } = require("selenium-webdriver")
const assert = require("assert")

describe("App integration testing", function () {
  this.timeout(1000000)

  /** @type {Builder} */
  let driver = null

  const zero = 0
  const a = 7
  const b = 3

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
    await driver.get("http://localhost:8080")
    await driver.wait(until.titleIs("Lab 2 - Test Frameworks"), 10000)
  })

  beforeEach(async () => {
    await driver.navigate().refresh()
    await driver.sleep(1000)
  })

  after(async () => {
    await driver.quit()
  })

  async function testNumbersAndOperator(number1, number2, operatorId, expectedResult) {
    await driver.findElement(By.id("number1")).sendKeys(number1)
    await driver.findElement(By.id("number2")).sendKeys(number2)
    await driver.findElement(By.id(operatorId)).click()
    await driver.findElement(By.id("btnCalculate")).click()
    await driver.sleep(500)
    let result = await driver.findElement(By.id("result")).getAttribute("innerText")
    assert.equal(result, "Result: " + expectedResult, "Result not matching")
    await driver.findElement(By.id("btnClear")).click()
    await driver.sleep(500)
    result = await driver.findElement(By.id("result")).getAttribute("innerText")
    assert.equal(result, "", "Result was not cleared")
  }

  it("check Addition operator", async function () {
    await testNumbersAndOperator(a, b, "chkAddition", a + b)
  })

  it("check Subtraction operator", async function () {
    await testNumbersAndOperator(a, b, "chkSubtraction", a - b)
  })

  it("check Multiplication operator", async function () {
    await testNumbersAndOperator(a, b, "chkMultiplication", a * b)
  })

  it("check Division operator - divide by zero", async function () {
    await testNumbersAndOperator(a, zero, "chkDivision", zero)
  })

  it("check Division operator", async function () {
    await testNumbersAndOperator(a, b, "chkDivision", a / b)
  })

})

