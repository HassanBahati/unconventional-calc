//declaring variables
const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

//output function responsible for whats displayed by the calculator
function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
//variable for the result/answer assignd to initial value of 0
const defaultResult = 0;
//displaying the result ont the part where 0 is on the ui
let currentResult = defaultResult;

//function that adds numbers
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
currentResult = add(1, 2);

//text dispalyed fo calculation description
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

//invoking function outputResult
outputResult(currentResult, calculationDescription);


