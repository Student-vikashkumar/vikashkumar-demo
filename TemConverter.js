// script.js
document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    const resultDisplay = document.getElementById('result');

    // Validate the input
    if (isNaN(temperatureInput)) {
        resultDisplay.textContent = 'Please enter a valid number!';
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let convertedTemperature;
    let targetUnit;

    switch (unitSelect) {
        case 'celsius':
            convertedTemperature = `Fahrenheit: ${(temperature * 9/5) + 32} °F, Kelvin: ${temperature + 273.15} K`;
            targetUnit = 'Celsius';
            break;
        case 'fahrenheit':
            convertedTemperature = `Celsius: ${(temperature - 32) * 5/9} °C, Kelvin: ${((temperature - 32) * 5/9) + 273.15} K`;
            targetUnit = 'Fahrenheit';
            break;
        case 'kelvin':
            convertedTemperature = `Celsius: ${temperature - 273.15} °C, Fahrenheit: ${(temperature - 273.15) * 9/5 + 32} °F`;
            targetUnit = 'Kelvin';
            break;
    }

    resultDisplay.textContent = `Input: ${temperature} ${targetUnit}\nConverted: ${convertedTemperature}`;
});
