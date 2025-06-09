const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
        display.textContent = currentInput;
        resetNext = true;
      } catch {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    if (resetNext && !isNaN(value)) {
      currentInput = value;
      resetNext = false;
    } else {
      currentInput += value;
    }

    display.textContent = currentInput;
  });
});
