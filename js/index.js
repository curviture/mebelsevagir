
$('#call-from-navbar').modaal({
    content_source: '#js-call-navbar'
});

$('.gallery__item-thumbs a').modaal({
    type: 'image'
});

//moving items in case of small screen
(function() {
    let width = screen.availWidth;
    let headerMenuLink = document.querySelectorAll('.menu--header .menu__link');
    console.log('moveto', width)
    if(width <= 760) {
        headerMenuLink.forEach(function(item) {
            item.classList.remove('animated-underline')
        })
    }
    if(width > 760) {
        headerMenuLink.forEach(function(item) {
            item.classList.add('animated-underline')
        })
    }
}());

//closing and opening menu on small screen(max-width < 770px)
(function() {
    let trigger = document.getElementById('js-header-trigger');
    let closer = document.getElementById('js-menu-link-closer');
    let menu = document.getElementById('js-header-menu');
    trigger.addEventListener('click', function() {
        menu.classList.toggle('open')
    })
    closer.addEventListener('click', function(event) {
        event.preventDefault()
        menu.classList.remove('open');
    })
}());

(function() {
    let items = document.querySelectorAll('.js-move');
    console.log('hello kitt')
    console.log(items)
    items.forEach(function(item) {
        console.log(item.dataset,+item.dataset.screen)
        if(screen.availWidth <= +item.dataset.screen) {
            let moveto = document.getElementById(item.dataset.moveto);
            let clone = item.cloneNode(true);
            moveto.appendChild(clone)
            item.classList.add('hidden')
        }

    })
}())

