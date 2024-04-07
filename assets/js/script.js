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