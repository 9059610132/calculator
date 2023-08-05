const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.textContent);
    });
});

document.addEventListener('keydown', event => {
    const key = event.key;
    if (/^[0-9+\-*/.C%=]$/.test(key)) {
        handleButtonClick(key);
    } else if (key === 'Enter') {
        handleButtonClick('=');
    }
});

function handleButtonClick(key) {
    if (key === 'C') {
        display.value = '';
    } else if (key === '=') {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    } else if (key === '√') {
        display.value = Math.sqrt(parseFloat(display.value));
    } else if (key === 'x^2') {
        display.value = Math.pow(parseFloat(display.value), 2);
    } else if (key === 'x^3') {
        display.value = Math.pow(parseFloat(display.value), 3);
    } else {
        display.value += key;
    }
}
