let menuHamburguer = document.querySelector('.menu-hamburguer');
let btnMaisProjetos = document.querySelector('.btn-mais-projetos');
let lerMais = document.querySelector('#ler-mais');
let navItem = document.querySelectorAll('.navegacao a[href^="#"]');
let btnTema = document.querySelector('.btn-tema');


/* ------------- Funções ------------- */
function getDistanceFromTheTop(elemento) {
    const id = elemento.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollSuave(distanciaDoTopo) {    
    window.scroll({
        top: distanciaDoTopo,
        behavior: "smooth",
    });  
    ocultarSideMenu();  
}

function scrollToSection(event) {
    event.preventDefault();   
    const distanciaDoTopo = getDistanceFromTheTop(event.target) - 100;
    console.log(distanciaDoTopo);
    scrollSuave(distanciaDoTopo);
}

function ocultarSideMenu() {
    let nav = document.querySelector('.navegacao');

    if(menuHamburguer.classList.contains('ativado')) {
        menuHamburguer.classList.remove('ativado');
        nav.classList.remove('side-menu');
    }
}


/* ------------- Scroll Suave ------------- */
navItem.forEach((link) => {
    link.addEventListener('click', scrollToSection);    
});


/* ------------- Botão Para Alternar Modo Dark/Light ------------- */
btnTema.addEventListener('click', () => {   
    let containerPrincipal = document.querySelector('.container-principal');

    containerPrincipal.classList.toggle('modo-light');
});


/* ------------- Menu Hamburguer ------------- */
menuHamburguer.addEventListener('click', () => {
    let nav = document.querySelector('.navegacao');

    menuHamburguer.classList.toggle('ativado');

    if(menuHamburguer.classList.contains('ativado')) {
        nav.classList.add('side-menu');
    }
    else {
        nav.classList.remove('side-menu');
    }
});


/* ------------- Botão "Ver Mais" em 'Projetos' ------------- */
btnMaisProjetos.addEventListener('click', () => {
    const avisoMaisProjetos = document.querySelector('.aviso-mais-projetos');

    avisoMaisProjetos.classList.toggle('exibir');
    btnMaisProjetos.classList.toggle('clicado');

    if(avisoMaisProjetos.classList.contains('exibir')) {        
        btnMaisProjetos.textContent = "Ver Menos"        
    }
    else {
        btnMaisProjetos.textContent = "Ver Mais";
    }
});

/* ------------- Botão "Ler mais" em 'Sobre Mim' ------------- */
lerMais.addEventListener('click', () => {
    let textoEscondido = document.querySelector('.texto-escondido');
    let pontinhos = document.querySelector('#pontinhos');

    textoEscondido.classList.toggle('exibir-texto');

    if(textoEscondido.classList.contains('exibir-texto')) {
        lerMais.textContent = "Ler menos";
        pontinhos.textContent = ".";
    }
    else {
        lerMais.textContent = "Ler mais";
        pontinhos.textContent = "...";
    }    
});