

// ==============================
// HEADER AO ROLAR A PÁGINA
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#000";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.45)";

    } else {

        header.style.background = "#000";
        header.style.boxShadow = "none";

    }

});

// ==============================
// BOTÃO VOLTAR AO TOPO
// ==============================

const voltarTopo = document.createElement("button");

voltarTopo.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

voltarTopo.className = "voltar-topo";

document.body.appendChild(voltarTopo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        voltarTopo.classList.add("mostrar");

    } else {

        voltarTopo.classList.remove("mostrar");

    }

});

voltarTopo.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ==============================
// EFEITO SUAVE NOS BOTÕES
// ==============================

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-5px) scale(1.03)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "translateY(0) scale(1)";

    });

});

// ==============================
// ANIMAÇÃO DOS CARDS
// ==============================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("aparecer");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));