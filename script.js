//Place where values will be shown
const output = document.getElementById('output');
//Selection of all of the Calculator's buttons
const numberButtons = document.getElementsByClassName('number-button');

//Default Settings for the output display
let currentValue = '';
let operator = '';
const MAX_DISPLAY_DIGITS = 12; // Maximum number of digits to display


// Adding event listener to each number button to display number whenever a button is clicked
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', handleNumberButtonClick);
  }
  
  // Event listener function to handle button clicks
  function handleNumberButtonClick(event) {
    const number = event.target.textContent;

     // Check if the number is a decimal point
  if (number === '.') {

    // If the output already contains a decimal point, return early
    if (output.textContent.includes('.')) {
      return;
    }
  }
   

     // Remove existing commas from the output
  const currentValueWithoutCommas = output.textContent.replace(/,/g, '');

   // Check if the length exceeds the maximum display digits
   if (currentValueWithoutCommas.length >= MAX_DISPLAY_DIGITS) {
    return;
  }

  // Format the number with commas
  const formattedNumber = formatNumberWithCommas(currentValueWithoutCommas + number);

  output.textContent = formattedNumber;
}

function formatNumberWithCommas(number) {
  const parts = number.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
    
  }


//Operator Button Selection
const divisionButton = document.getElementById('btn-division')

const multiplicationButton = document.getElementById('btn-multiply');

const subtractionButton = document.getElementById('btn-subtract');

const additionButton = document.getElementById('btn-addition');

const equalsButton = document.getElementById('btn-equal');

const allClearButton = document.getElementById('btn-clear');

function performOperation(num1, num2, operation) {
    switch (operation) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '÷':
        return num1 / num2;
      default:
        return NaN; // Invalid operation
    }
  }

  function handleOperation(clickedOperator) {
    const newValue = parseFloat(output.textContent);
  
    if (currentValue !== '' && operator !== '') {
      currentValue = performOperation(currentValue, newValue, operator);
    } else {
      currentValue = newValue;
    }
  
    operator = clickedOperator;
    output.textContent = '';
  }


  //Equals functionality
  function handleEquals() {
    const newValue = parseFloat(output.textContent);
  
    if (currentValue !== '' && operator !== '') {
      currentValue = performOperation(currentValue, newValue, operator);
      output.textContent = currentValue;
    } else {
        output.textContent = newValue;
    }
    
    currentValue = ''; // Reset the currentValue
  }
  
  
//All Clear Functionality
function clearEverything() {
    output.textContent = '';
}

  
  divisionButton.addEventListener('click', () => handleOperation('÷'));
  multiplicationButton.addEventListener('click', () => handleOperation('x'));
  subtractionButton.addEventListener('click', () => handleOperation('-'));
  additionButton.addEventListener('click', () => handleOperation('+'));
  equalsButton.addEventListener('click', handleEquals);
allClearButton.addEventListener('click', clearEverything);