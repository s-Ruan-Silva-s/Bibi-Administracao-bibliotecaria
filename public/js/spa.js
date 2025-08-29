// <MOSTRAR AS SEÇÕES DE LIVROS, USUARIOS E EMPRESTIMOS>
const cards = document.querySelectorAll(".home-area-main-sec-card");
const panels = document.querySelectorAll(".home-area-main-panel");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const alvo = card.dataset.panel;
        const painel = document.getElementById(alvo);
        
        panels.forEach(p => p.classList.remove("ativo"));
        painel.classList.add("ativo");
    });
});
//--- MOSTRAR AS SEÇÕES DE LIVROS, USUARIOS E EMPRESTIMOS ---

// <MOSTRAR AS SEÇÕES DE CADASTRO ESPECÍFICAS>

const form = document.querySelector('#areaCadLivros form');

const areaCadLivros = document.getElementById('areaCadLivros');

function exibirCadastroLivros(){
    areaCadLivros.classList.add('displayOn');
}
function fecharCadastroLivros(){
    areaCadLivros.classList.remove('displayOn');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Enviando dados...");

});
//--- MOSTRAR AS SEÇÕES DE CADASTRO ESPECÍFICAS ---