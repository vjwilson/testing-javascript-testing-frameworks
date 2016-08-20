var math = require('../Math/Math');

describe("Math", function() {
  var firstOperand;
  var secondOperand;

  beforeEach(function() {
    firstOperand = 2;
    secondOperand = 3;
  });

  it("should add two numbers", function() {
    var result = math.add(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand + secondOperand);
  });

  it("should subtract two numbers", function() {
    var result = math.subtract(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand - secondOperand);
  });

  it("should multiply two numbers", function() {
    var result = math.multiply(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand * secondOperand);
  });

  it("should divide two numbers", function() {
    var result = math.divide(firstOperand, secondOperand);
    expect(result).toEqual(firstOperand / secondOperand);
  });

  it("should divide return undefined when the divisor is 0", function() {
    var result = math.divide(firstOperand, 0);
    expect(result).not.toBeDefined();
  });
});
