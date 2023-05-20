const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao body


const body = document.querySelector("body")

const ImagemBotaoTrocaDeTema = document.querySelector(".imagem-botao-sol")

// passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
botaoAlterarTema.addEventListener("click", () => {
    // passo 6 - verificar se o body já tem a classe modo-escuro
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");



    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {

        // passo 8 - trocar a imagem do botão de alterar tema pra sol

        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/img/sol.png");
    } else {
        // passo 5 - trocar a imagem do botão de alterar tema pra lua
        ImagemBotaoTrocaDeTema.setAttribute("src", "./src/img/lua-e-estrelas.png");
    }
});