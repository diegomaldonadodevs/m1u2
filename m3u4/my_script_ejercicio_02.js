


// const textarea = document.getElementById('contChar');
// const contador = document.getElementById('contador');

// textarea.addEventListener('input', () => {
//     const texto = textarea.value;
//     const numeroCaracteres = texto.length;
//     contador.textContent = `${numeroCaracteres}`;
// });

// Resolución de la profe

const texto = document.getElementById('texto');
const contar = document.getElementById('contar');

texto.addEventListener('keyup', function() {
    contar.innerText = texto.value.length;

});

