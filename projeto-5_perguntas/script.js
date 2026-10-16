const perguntas = document.querySelectorAll('.pergunta');

perguntas.forEach(function (pergunta) {
    const botao = pergunta.querySelector('.pergunta-botao');

    botao.addEventListener('click', function () {
        perguntas.forEach(function(item){
            if (item !== pergunta) {
                item.classList.remove("mostrar-texto");
            }
        });
        pergunta.classList.toggle("mostrar-texto");
    });
});