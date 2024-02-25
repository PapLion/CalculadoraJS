// En el archivo script.js

// Variables para almacenar los valores
let inputDisplay = document.getElementById('input-display');
let resultDisplay = document.getElementById('result-display');
let currentInput = '';

// Función para manejar los clics en los botones numéricos y de operación
function handleButtonClick(value) {
    currentInput += value;
    inputDisplay.textContent = currentInput;
}

// Función para manejar el clic en el botón de igual (=)
function handleEqualsButtonClick() {
    // Aquí podrías agregar la lógica para evaluar la expresión y mostrar el resultado
    // Ejemplo:
    try {
        let result = eval(currentInput);
        resultDisplay.textContent = result;
    } catch (error) {
        resultDisplay.textContent = 'Error';
    }

    // Reiniciar la variable currentInput después de evaluar la expresión
    currentInput = '';
    inputDisplay.textContent = '';
}

// Agregar event listeners a los botones numéricos y de operación
document.querySelectorAll('.num-div, .op-div').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button.textContent));
});

// Agregar event listener al botón de igual (=)
document.querySelector('.equal-div').addEventListener('click', handleEqualsButtonClick);

// Función para eliminar datos
function eliminarDatos() {
    // Reiniciar la variable currentInput
    currentInput = '';

    // Puedes realizar aquí las acciones necesarias para eliminar los datos
    // En este ejemplo, simplemente limpiamos los displays
    document.getElementById('input-display').textContent = '';
    document.getElementById('result-display').textContent = '';

    // Limpiar en el modelo de objeto del documento (DOM)
    // Esto asegura que el contenido se elimine completamente y no esté presente en el DOM
  document.getElementById('input-display').innerHTML = '';
  document.getElementById('result-display').innerHTML = '';
  }