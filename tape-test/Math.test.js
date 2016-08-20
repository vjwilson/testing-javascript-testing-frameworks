var test = require('tape');
var math = require('../Math/Math');

var firstOperand = 2;
var secondOperand = 3;

test("Math add function", function(t) {
  var result = math.add(firstOperand, secondOperand);

  t.equal(result, firstOperand + secondOperand);

  t.end();
});

test("Math subtract function", function(t) {
  var result = math.subtract(firstOperand, secondOperand);

  t.equal(result, firstOperand - secondOperand);

  t.end();
});

test("Math multiply function", function(t) {
  var result = math.multiply(firstOperand, secondOperand);

  t.equal(result, firstOperand * secondOperand);

  t.end();
});

test("Math divide function", function(t) {
  var result;

  result = math.divide(firstOperand, secondOperand);
  t.equal(result, firstOperand / secondOperand, 'succesfully divides two numbers');

  result = math.divide(firstOperand, 0);
  t.equal(result, undefined, 'returns undefined when divisor is 0');

  t.end();
});
