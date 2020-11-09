let triggerButton = document.getElementById('menu-open');
let menu = document.getElementById('nav__menu');
let closeButton = document.getElementById('close__button');

console.log(closeButton)

triggerButton.addEventListener('click', () => {
    menu.classList.toggle('open')
    console.log(menu,menu.classList)
})


closeButton.addEventListener('click', () => {
    console.log('i hit it')
    // menu.classList.toggle('open')
})
