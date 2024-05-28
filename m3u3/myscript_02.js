function numeroMayor(array) {
   
    let mayor = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    return mayor;
}

function obtenerNumeros() {
    const numeros = [];
    let continuar = true;

    while (continuar) {
        const input = prompt("Ingresa un número (o presiona CANCELAR para finalizar):");

        if (input === null) {
            continuar = false;
        } else {
            const numero = parseFloat(input);

            if (!isNaN(numero)) {
                numeros.push(numero);
            } else {
                alert("Por favor, ingresa un número válido.");
            }
        }
    }

    return numeros;
}

const numeros = obtenerNumeros();

if (numeros.length > 0) {
    const mayorNumero = numeroMayor(numeros);
    console.log(`El mayor número es: ${mayorNumero}`);
    document.write(`El mayor número es: ${mayorNumero}`);
} else {
    console.log("No ingresaste ningún número.");
}





