const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let sum = 0;

	for (const number of numArray) {
    sum += number;
  }

  return sum;
};

const multiply = function(numArray) {
  let sum = 1;

	for (const number of numArray) {
    sum *= number;
  }

  return sum;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	if (number === 0) {
    return 1;
  }

  let factorialArray = [];
  for (let i = 1; i <= number; i++) {
    factorialArray.push(i);
  }

  return multiply(factorialArray);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
