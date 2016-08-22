const test = require('ava');
const math = require('../Math/Math');

const firstOperand = 2;
const secondOperand = 3;

test("Math add function", t => {
  const result = math.add(firstOperand, secondOperand);

  t.is(result, firstOperand + secondOperand);
});

test("Math subtract function", t => {
  const result = math.subtract(firstOperand, secondOperand);

  t.is(result, firstOperand - secondOperand);
});

test("Math multiply function", t => {
  const result = math.multiply(firstOperand, secondOperand);

  t.is(result, firstOperand * secondOperand);
});

test("Math divide function", t => {
  let result;

  result = math.divide(firstOperand, secondOperand);
  t.is(result, firstOperand / secondOperand, 'divides using a non-zero divisor');

  result = math.divide(firstOperand, 0);
  t.is(result, undefined, 'returns undefined when trying to divide by 0');
});
