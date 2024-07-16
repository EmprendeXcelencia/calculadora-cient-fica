function appendValue(value) {
    const display = document.getElementById('display');
    display.value += value;
    adjustFontSize();
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    adjustFontSize();
}

function appendFunction(func) {
    const display = document.getElementById('display');
    if (func === 'sqrt') {
        display.value += 'sqrt(';
    } else if (func === 'pi') {
        display.value += Math.PI;
    } else {
        display.value += func + '(';
    }
    adjustFontSize();
}

function calculate() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value.replace(/sqrt/g, 'Math.sqrt')
                                        .replace(/sin/g, 'Math.sin')
                                        .replace(/cos/g, 'Math.cos')
                                        .replace(/tan/g, 'Math.tan')
                                        .replace(/log/g, 'Math.log')
                                        .replace(/pi/g, 'Math.PI'));
        display.value = result;
        adjustFontSize();
    } catch (error) {
        alert("Error en la expresión.");
        clearDisplay();
    }
}

function adjustFontSize() {
    const display = document.getElementById('display');
    const maxLength = 15; // Máxima longitud de caracteres permitida sin ajustar el tamaño de fuente
    if (display.value.length > maxLength) {
        display.style.fontSize = '20px';
    } else if (display.value.length > 10) {
        display.style.fontSize = '24px';
    } else {
        display.style.fontSize = '28px';
    }
}