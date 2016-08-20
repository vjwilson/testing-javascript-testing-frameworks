"use strict";

var math = require('./Math/Math');

var firstNumber = 2;
var secondNumber = 3;
var zero = 0;

console.log('Adding ' + secondNumber + ' to ' + firstNumber + ' = ' + math.add(firstNumber, secondNumber));
console.log('Subtracting ' + secondNumber + ' from ' + firstNumber + ' = ' + math.subtract(firstNumber, secondNumber));
console.log('Multiplying ' + firstNumber + ' by ' + secondNumber + ' = ' + math.multiply(firstNumber, secondNumber));
console.log('Dividing ' + firstNumber + ' by ' + secondNumber + ' = ' + math.divide(firstNumber, secondNumber));
console.log('Dividing ' + firstNumber + ' by ' + zero + ' = ' + math.divide(firstNumber, zero));
