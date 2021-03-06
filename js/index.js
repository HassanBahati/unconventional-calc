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

//function for getting user input
function getUserNumberInput() {
  return parseInt(userInput.value);
}

//function that adds numbers
function add() {
  const enteredNumber = getUserNumberInput();
  //displaying the numbers on which the operation is occuring
  const calcDescription = `${currentResult} + ${enteredNumber}`
  currentResult = currentResult + enteredNumber;
  //invoking function outputResult
  outputResult(currentResult, calcDescription); 
}

//event listener to watch and execute the call back function
addBtn.addEventListener('click', add);

//function to subtract numbers 
function subtract() {

}

//function to multiply numbers
function multiply() {
  
}


/***
 * back slash (\) tells js that the character after should be escaped  ie displayed
 * parseInt converts a string to a whole number , 
 * praseFloat converts to a decimal number
 */


