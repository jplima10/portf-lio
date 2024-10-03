let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFechar = document.querySelector('.btn-fechar');
let menuLinks = document.querySelectorAll('#menu-mobile nav ul li a');

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('active');
});

btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('active');
});


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('active');
    });
});


// Scroll Reveal 
window.revelar = ScrollReval({
    reset:true
})

revelar.reveal('.txt-topo-site', {
    duration: 2000,
    distance:  '90px'
})