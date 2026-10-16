const botaoBarraLateral = document.querySelector('.botao-barra-lateral');
const barraLateral = document.querySelector('.barra-lateral');
const botaoFechar = document.querySelector('.botao-fechar');

botaoBarraLateral.addEventListener('click', () => {
  barraLateral.classList.toggle('mostrar-barra-lateral');
});

botaoFechar.addEventListener('click', () => {
  barraLateral.classList.remove('mostrar-barra-lateral');
});