document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.header__top-line-burger');
    let burgerMenu = document.querySelector('.header__burger-menu');

    burger.addEventListener('click', function(){
        burger.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    })
    })