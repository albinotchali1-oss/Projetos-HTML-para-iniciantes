const botao = document.querySelector('.navegacao-botao');
const links = document.querySelector(".navegacao-links");

botao.addEventListener('click', () => {
    links.classList.toggle('mostrar-links');
});