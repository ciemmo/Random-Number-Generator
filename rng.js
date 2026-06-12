// Random Number Generator project with different ranges for different purposes

const generateBtn = document.getElementById('generateBtn');
const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const Range = document.getElementById('range');
const resultDiv = document.getElementById('result');
const radioWhole = document.querySelector('input[value="Whole Numbers"]');
const radioDecimal = document.querySelector('input[value="Decimal Numbers"]');

let randNum = 0;

generateBtn.onclick = function() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max) || min > max) {
        alert("Please enter valid numbers.");
        return;
    }

    if (radioWhole.checked) {
        randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    } else if (radioDecimal.checked) {
        randNum = Math.random() * (max - min) + min;
    }
    Range.value = "Range: " + min + " - " + max;
    console.log(`Generated random number: ${randNum}`);
    resultDiv.textContent = randNum;
    resultDiv.value = randNum;
} 
