// ==============================
// MENU LATERAL
// ==============================

const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

// Criar fundo escuro
const overlay = document.createElement("div");
overlay.classList.add("menu-overlay");
document.body.appendChild(overlay);

// Abrir menu
menuBtn.addEventListener("click", () => {

    menu.classList.add("active");
    overlay.classList.add("active");

});

// Fechar menu
function fecharMenu() {

    menu.classList.remove("active");
    overlay.classList.remove("active");

}

// Clique no fundo
overlay.addEventListener("click", fecharMenu);

// Fechar ao clicar em um link
document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", fecharMenu);

});

// Tecla ESC
document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        fecharMenu();

    }

});