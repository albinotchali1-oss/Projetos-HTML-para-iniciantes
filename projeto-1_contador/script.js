let contador = 0;
const valor = document.getElementById('valor');
const botoes = document.querySelectorAll('.botao');

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        if (botao.classList.contains('aumentar')) {
            contador++;
        } else if (botao.classList.contains('diminuir')) {
            contador--;
        } else if (botao.classList.contains('reiniciar')) {
            contador = 0;
        }

        if (contador > 0) {
            valor.style.color = 'green';
        } else if (contador < 0) {
            valor.style.color = 'red';
        } else {
            valor.style.color = 'black';
        }

        valor.textContent = contador;
    });
});