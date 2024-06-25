const aleatorio = () => {
    let lista = ['piedra', 'papel', 'tijera'];
    return lista[Math.floor(Math.random() * lista.length)];
};

const obtenerValorInput = () => {
    return document.getElementById('txtJuego').value.trim().toLowerCase();
};

// Define la función flecha para validar el valor del input
const esValorValido = (valor) => {
    const valoresPermitidos = ['piedra', 'papel', 'tijera'];
    return valoresPermitidos.includes(valor);
};

const eleccion = () => {
    console.log("entra Eleccion");
    const valorInput = obtenerValorInput();

   if (valorInput === '') {
        alert('El campo no puede estar vacío.');
        return;
    }
    
    if (!esValorValido(valorInput)) {
        alert('El valor ingresado no es válido. Debe ser "piedra", "papel" o "tijera".');
        return;
    }
    
    const valorAleatorio = aleatorio();
    console.log(`Valor ingresado: ${valorInput}`);
    console.log(`Valor aleatorio: ${valorAleatorio}`);
        if(valorInput === valorAleatorio){
            alert("Resultado es igual: "+valorAleatorio);
        }else{
            alert("Resultado es diferente: "+valorAleatorio);
        }
};

// Añade el controlador de eventos cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log("entra a esta");
    document.getElementById('miJuego').addEventListener('click', eleccion);
});