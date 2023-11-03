'use strict';

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calculateAmplitude = function (temperatures) {
  let max = temperatures[0];
  let min = temperatures[0];
  for (let i = 1; i < temperatures.length; i++) {
    if (typeof temperatures[i] !== 'number') continue;
    if (temperatures[i] > max) max = temperatures[i];
    if (temperatures[i] < min) min = temperatures[i];
    console.log(min, max);
  }

  return max - min;
};

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('degree celsius')),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
 */

const printForecast = function (forecastArray) {
  let forecastString = '';
  let tempString = '';
  for (let i = 0; i < forecastArray.length; i++) {
    tempString = `...${forecastArray[i]}°C in ${i + 1} days `;
    forecastString = forecastString + tempString;
  }
  return forecastString;
};

const forecastArray1 = [17, 21, 23];
const forecastArray2 = [12, 5, -5, 0, 4];

console.log(printForecast(forecastArray1));
console.log(printForecast(forecastArray2));
