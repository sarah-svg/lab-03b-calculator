// import functions and grab DOM elements
import { handleSumClick, handleMultiplyClick, handleDivideClick, handleSubtractClick } from './handlers.js';

const sumButton = document.getElementById('sum-button');
const multiplyButton = document.getElementById('multiply-button');

sumButton.addEventListener('click', handleSumClick);
multiplyButton.addEventListener('click', handleMultiplyClick);

const divideButton = document.getElementById('divide-button');
const subtractButton = document.getElementById('subtract-button');

divideButton.addEventListener('click', handleDivideClick);
subtractButton.addEventListener('click', handleSubtractClick);