var test = require('ava');
var math = require('../Math/Math');

var firstOperand = 2;
var secondOperand = 3;

test("Math add function", t => {
  var result = math.add(firstOperand, secondOperand);

  t.is(result, firstOperand + secondOperand);
});

test("Math subtract function", t => {
  var result = math.subtract(firstOperand, secondOperand);

  t.is(result, firstOperand - secondOperand);
});

test("Math multiply function", t => {
  var result = math.multiply(firstOperand, secondOperand);

  t.is(result, firstOperand * secondOperand);
});

test("Math divide function", t => {
  var result;

  result = math.divide(firstOperand, secondOperand);
  t.is(result, firstOperand / secondOperand, 'divides using a non-zero dividend');

  result = math.divide(firstOperand, 0);
  t.is(result, undefined, 'returns undefined when trying to divide by 0');
});

test("Math divide by 0", t => {
});
