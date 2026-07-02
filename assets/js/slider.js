// ================================
// SLIDER DO BANNER
// ================================

const banner = document.querySelector(".banner-imagem");

const imagens = [

    "assets/images/banner/banner1.jpg",
    "assets/images/banner/banner2.jpg",
    "assets/images/banner/banner3.jpg"

];

let imagemAtual = 0;

function trocarBanner() {

    banner.style.opacity = "0";

    setTimeout(() => {

        banner.style.backgroundImage = `url(${imagens[imagemAtual]})`;

        banner.style.opacity = "1";

        imagemAtual++;

        if(imagemAtual >= imagens.length){

            imagemAtual = 0;

        }

    },400);

}

trocarBanner();

setInterval(trocarBanner,5000);

// ================================
// EFEITO DE FADE
// ================================

banner.style.transition = "opacity .4s ease";
