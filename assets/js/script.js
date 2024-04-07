// BURGER MENU
let menu_burger = document.querySelector('#burger-menu')
let menu_close = document.querySelector('#close')
let header = document.querySelector('header')

menu_burger.addEventListener('click', () => {

    header.style.transform = 'translateX(0)'
    menu_close.style.display = 'block'
    menu_burger.style.display = 'none'
})

menu_close.addEventListener('click', () => {

    header.style.transform = 'translateX(-100%)'
    menu_close.style.display = 'none'
    menu_burger.style.display = 'block'
})

// DARK MODE
let sun = document.querySelector('#sun')
let moon = document.querySelector('#moon')

sun.addEventListener('click', () => {

    document.body.classList.add('darkmode');
    sun.style.display = 'none'
    moon.style.display = 'block'
})

moon.addEventListener('click', () => {

    document.body.classList.remove('darkmode');
    sun.style.display = 'block'
    moon.style.display = 'none'
})

// SLIDER
let img_slider = document.querySelectorAll('.slider .img-slider img');
let main_img = document.querySelector('.slider .main-img img');

img_slider.forEach((picture) => {
    picture.addEventListener('mouseover', () => {
        let newSrc = picture.getAttribute('src');
        main_img.setAttribute('src', newSrc);
    });
});

// SLIDER RESPOSIVE
let btn_right = document.getElementById('btn-right');
let btn_left = document.getElementById('btn-left');
let j = 1;

btn_right.addEventListener('click', () => {
    if (j >= 4) {
        j = 1;
        main_img.setAttribute('src', "./assets/img/slider-" + j + ".png");
    } 
    else {
        j += 1;
        main_img.setAttribute('src', "./assets/img/slider-" + j + ".png");
    }
});

btn_left.addEventListener('click', () => {
    if (j <= 1) {
        j = 4;
        main_img.setAttribute('src', "./assets/img/slider-" + j + ".png");
    } 
    else {
        j -= 1;
        main_img.setAttribute('src', "./assets/img/slider-" + j + ".png");
    }
});