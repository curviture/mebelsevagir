let triggerButton = document.getElementById('menu-open');
let menu = document.getElementById('nav__menu')

triggerButton.addEventListener('click', () => {
    menu.classList.toggle('open')
    console.log(menu,menu.classList)
})