const botaoModal = document.querySelector(".botao-modal");
const modal = document.querySelector(".modal-fundo");
const botaoFechar = document.querySelector(".botao-fechar");

botaoModal.addEventListener("click", function () {
    modal.classList.add("modal-aberto");
});
botaoFechar.addEventListener("click", function () {
    modal.classList.remove("modal-aberto");
});
