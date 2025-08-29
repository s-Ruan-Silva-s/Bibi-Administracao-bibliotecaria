
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

