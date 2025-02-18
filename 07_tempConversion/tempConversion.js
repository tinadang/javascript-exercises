const convertToCelsius = function(fahrenheitTemp) {
  const celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
  const roundedCelsius = Math.round(celsiusTemp * 10) / 10;

  return roundedCelsius;
};

const convertToFahrenheit = function(celsiusTemp) {
  const fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
  const roundedFahrenheit = Math.round(fahrenheitTemp * 10) / 10;

  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
