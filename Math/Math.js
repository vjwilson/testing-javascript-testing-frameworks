'use strict';

var Math = {
  add(a, b) {
    return a + b;
  },

  subtract(a, b) {
    return a - b;
  },

  multiply(a, b) {
    return a * b;
  },

  divide(a, b) {
    if (b) {
      return a / b;
    } else {
      return undefined;
    }
  }
}

module.exports = Math;
