const botoes = document.querySelectorAll(".btn");
const conteudos = document.querySelectorAll(".conteudo");
const scrollInstruction = document.querySelector(".scroll-instruction");

let currentIndex = 0;

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

function scrollAndUpdateButton(index) {
    const button = botoes[index];
    fecharConteudos();
    mostrarOuOcultarConteudo(button);
    currentIndex = index;
    botoes.forEach((btn, i) => {
        if (i !== index) {
            btn.classList.remove("btn-active");
        }
    });
    button.classList.add("btn-active");
}

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => scrollAndUpdateButton(index));
});

function copyToClipboard(text, notificationId, event) {
    navigator.clipboard.writeText(text)
        .then(() => {
            const copyNotification = document.getElementById(notificationId);
            copyNotification.style.display = 'block';

            
            const buttonRect = event.target.getBoundingClientRect();
            copyNotification.style.top = buttonRect.top - copyNotification.clientHeight - 10 + 'px';
            copyNotification.style.left = buttonRect.left + 'px';

            setTimeout(() => {
                copyNotification.style.display = 'none';
            }, 2000); 
        })
        .catch(err => {
            console.error('Não foi possível copiar: ', err);
        });
}


document.addEventListener("DOMContentLoaded", () => {
    const firstButton = botoes[0];
    scrollAndUpdateButton(0);
    firstButton.classList.add("btn-active");
});