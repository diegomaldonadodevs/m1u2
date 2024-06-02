


const textarea = document.getElementById('contChar');
const contador = document.getElementById('contador');

textarea.addEventListener('input', () => {
    const texto = textarea.value;
    const numeroCaracteres = texto.length;
    contador.textContent = `${numeroCaracteres}`;
});
