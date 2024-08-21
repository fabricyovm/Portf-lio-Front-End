let menuHamburguer = document.querySelector('.menu-hamburguer');
let btnTema = document.querySelector('.btn-tema');
let btnMaisProjetos = document.querySelector('.btn-mais-projetos');
let lerMais = document.querySelector('#ler-mais');
let navItem = document.querySelectorAll('.navegacao a[href^="#"]');



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

// Define a página em modo light
function modoLight() {
    let containerPrincipal = document.querySelector('.container-principal');
    containerPrincipal.classList.add('modo-light');
    sessionStorage.setItem('tema_atual', 'light');
}

// Define a página em modo dark
function modoDark() {
    let containerPrincipal = document.querySelector('.container-principal');
    containerPrincipal.classList.remove('modo-light');
    sessionStorage.setItem('tema_atual', 'dark');
}

// Verifica se está em modo light ou dark
function verificarTemaDaPagina() {
    if(sessionStorage.length === 0) {
        modoDark();
    }
    else {
        if(sessionStorage.getItem('tema_atual') === "light") {
            modoLight();
        }
        else {
            modoDark();
        }
    }
}

// Executa a função ao carregar o DOM
document.addEventListener('DOMContentLoaded', () => verificarTemaDaPagina());

/* ------------- Botão Para Alternar Modo Dark/Light ------------- */
btnTema.addEventListener('click', () => {   
    let containerPrincipal = document.querySelector('.container-principal');
    
    if(containerPrincipal.classList.contains('modo-light')) {
        modoDark();
    }
    else {
        modoLight();        
    }
    
});

/* ------------- Scroll Suave ------------- */
if(navItem) {
    navItem.forEach((link) => {
        link.addEventListener('click', scrollToSection);    
    });
}

/* ------------- Menu Hamburguer ------------- */
if(menuHamburguer) {
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
}


/* ------------- Botão "Ver Mais" em 'Projetos' ------------- */
if(btnMaisProjetos) {
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
}

/* ------------- Botão "Ler mais" em 'Sobre Mim' ------------- */
if(lerMais) {
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
}