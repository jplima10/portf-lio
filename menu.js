let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');
let btnFechar = document.querySelector('.btn-fechar');

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
