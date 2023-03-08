document.addEventListener('DOMContentLoaded', () => {
    let burger = document.querySelector('.header__top-line-burger');
    let burgerMenu = document.querySelector('.header__burger-menu');
    let body = document.querySelector('body');

    burger.addEventListener('click', function(){
        body.classList.toggle('active');
        burger.classList.toggle('active')
        burgerMenu.classList.toggle('active');
    })

    let teamButton = document.querySelector('.team__img-circle');
    let teamVideo = document.querySelector('.team__img-video');

    teamButton.addEventListener('click', function(){
        teamVideo.classList.toggle('active');
    })
    })