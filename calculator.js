// script.js
document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('output');
    let currentInput = '';
    let operator = '';
    let firstOperand = null;
    let secondOperand = null;
    let shouldResetScreen = false;

    const updateDisplay = () => {
        output.textContent = currentInput || '0';
    };

    const clearDisplay = () => {
        currentInput = '';
        operator = '';
        firstOperand = null;
        secondOperand = null;
        shouldResetScreen = false;
        updateDisplay();
    };

    const appendNumber = (number) => {
        if (shouldResetScreen) {
            currentInput = number;
            shouldResetScreen = false;
        } else {
            currentInput = currentInput === '0' ? number : currentInput + number;
        }
        updateDisplay();
    };

    const chooseOperator = (op) => {
        if (currentInput === '' && op === '-') {
            currentInput = '-';
            updateDisplay();
            return;
        }

        if (operator && shouldResetScreen) {
            operator = op;
            return;
        }

        if (firstOperand === null) {
            firstOperand = parseFloat(currentInput);
        } else if (operator) {
            secondOperand = parseFloat(currentInput);
            firstOperand = operate(firstOperand, secondOperand, operator);
            currentInput = firstOperand.toString();
            updateDisplay();
        }

        operator = op;
        shouldResetScreen = true;
    };

    const operate = (a, b, op) => {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return b;
        }
    };

    const handleEquals = () => {
        if (operator && !shouldResetScreen) {
            secondOperand = parseFloat(currentInput);
            currentInput = operate(firstOperand, secondOperand, operator).toString();
            updateDisplay();
            operator = '';
            firstOperand = null;
            secondOperand = null;
        }
    };

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            if (button.id === 'clear') {
                clearDisplay();
            } else if (button.id === 'equals') {
                handleEquals();
            } else if (button.classList.contains('operator')) {
                chooseOperator(value);
            } else {
                appendNumber(value);
            }
        });
    });

    clearDisplay();
});
