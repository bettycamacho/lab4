// Define la función para obtener un número aleatorio del 1 al 20
const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 20) + 1;
};

// Define el número aleatorio a adivinar
const numeroAleatorio = generarNumeroAleatorio();
console.log(`Número aleatorio generado: ${numeroAleatorio}`); // Para pruebas

// Define la función para obtener el valor del input
const obtenerValorInput = () => {
    return document.getElementById('txtAdivinarNum').value.trim();
};

// Define la función para validar el valor del input
const esValorValido = (valor) => {
    const numero = parseInt(valor, 10);
    return !isNaN(numero) && numero >= 1 && numero <= 20;
};

// Define la función para comparar el valor del input con el número aleatorio
const compararNumero = () => {
    const valorInput = obtenerValorInput();

    if (valorInput === '') {
        mostrarMensaje('El campo no puede estar vacío.');
        return;
    }

    if (!esValorValido(valorInput)) {
        mostrarMensaje('El valor ingresado no es válido. Debe ser un número entre 1 y 20.');
        return;
    }

    const numeroInput = parseInt(valorInput, 10);

    if (numeroInput === numeroAleatorio) {
        mostrarMensaje(`¡Correcto! Adivinaste el número ${numeroAleatorio}.`);
    } else if (numeroInput < numeroAleatorio) {
        mostrarMensaje(`Incorrecto. El número es mayor que ${numeroInput}.`);
    } else {
        mostrarMensaje(`Incorrecto. El número es menor que ${numeroInput}.`);
    }
};

// Define la función para mostrar un mensaje en el párrafo con id "mensaje"
const mostrarMensaje = (mensaje) => {
    document.getElementById('mensaje').textContent = mensaje;
};

// Añade el controlador de eventos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adivinarBoton').addEventListener('click', compararNumero);
});
