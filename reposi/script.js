const botoes = document.querySelectorAll(".btn");
const conteudos = document.querySelectorAll(".conteudo");

function fecharConteudos() {
    conteudos.forEach((conteudo) => {
        conteudo.style.display = "none";
        conteudo.style.maxHeight = "0px";
        conteudo.style.opacity = 0;
    });
}

function mostrarOuOcultarConteudo(botao) {
    const conteudoId = botao.getAttribute("data-conteudo");
    const conteudo = document.getElementById(conteudoId);

    if (conteudo.style.maxHeight === "0px" || conteudo.style.maxHeight === "") {
        fecharConteudos();
        conteudo.style.display = "block";
        conteudo.style.maxHeight = conteudo.scrollHeight + "px";
        conteudo.style.opacity = 1;
    } else {
        conteudo.style.display = "none";
        conteudo.style.maxHeight = "0px";
        conteudo.style.opacity = 0;
    }
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => mostrarOuOcultarConteudo(botao));
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleLanguage");
    const contentPortuguese = document.querySelector(".conteudo-portugues");
    const contentEnglish = document.querySelector(".conteudo-ingles");

    toggleButton.addEventListener("click", () => {
        if (contentPortuguese.classList.contains("hidden")) {
            // Mostrar a versão em PT e ocultar a versão em ENG
            contentPortuguese.classList.remove("hidden");
            contentEnglish.classList.add("hidden");
        } else {
            // Mostrar a versão em ENG e ocultar a versão em PT
            contentPortuguese.classList.add("hidden");
            contentEnglish.classList.remove("hidden");
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {

    // Função para alternar o idioma
    function alternarIdioma() {
        if (contentPortuguese.classList.contains("hidden")) {
            // Mostrar a versão em PT e ocultar a versão em ENG
            contentPortuguese.classList.remove("hidden");
            contentEnglish.classList.add("hidden");
        } else {
            // Mostrar a versão em ENG e ocultar a versão em PT
            contentPortuguese.classList.add("hidden");
            contentEnglish.classList.remove("hidden");
        }
    }

    const toggleButton = document.getElementById("toggleLanguage");
    toggleButton.addEventListener("click", alternarIdioma);
});






/* carregamento */

